/**
 * Gateway singleton --- contains Observers and Reporter
 * @author Josh Goodwin
 * @name Gateway
 * @namespace
 * @preserve Copyright 2011 Ensighten LLC.
 */
/**
 * internal reference to the singleton creation method
 * @private
 */
Bootstrapper.Gateway = new function __Gateway() {
  /** @private */
  var instance = this,
    /** @private */
    instanceId = (((1 + Math.random()) * 0x10000000) | 0).toString(36),
    /** @private */
    noop = function () {},
    /** @private */
    fnTrue = function () {
      return true;
    },
    /** @private */
    o = __Gateway.options = {
      enableFiltering: true,
      enableObserving: true,
      // TODO: implement
      enableDoNotTrack: true // TODO: implement
    },
    o_dnt = o.dnt = {
      ajaxLocation: '//scarf.ensighten.com/dnt'
    },
    /**
     * internal store of all event hooks exposed
     * @private
     */
    o_evt = o.events = {
      onBeforeRequest: Bootstrapper.onBeforeRequest || fnTrue,
      onAfterRequest: noop,
      onBlockRequest: noop,
      onInitiatedRequest: noop,
      onCompleteRequest: noop,
      onBeforeDataReported: fnTrue,
      onDataReported: noop,
      onSuccessfulHook: noop,
      onFailedHook: noop,
      onBeforeHook: fnTrue
    },
    /** @private */
    o_rep,
    /**
     * Array of location definitions that the observer should ignore when running filtering rules
     * @private
     */
    o_obs = o.observers = {
      whitelist: []
    },
    /** @private */
    observers,
    /** @private */
    n = 1,
    /** @private */
    constants = __Gateway.constants = {
      REQUEST_TYPES: {
        /* 1 */
        DYNAMIC: n,
        //   use old school flag system to mash a bunch of traits into a single
        /* 2 */
        STATIC: n *= 2,
        //   variable on the Request object, easy check of individual and groups of flags
        /* 4 */
        SCRIPT: n *= 2,
        //  Request.flags & REQUEST_TYPE.DYNAMIC -> is this request dynamic?
        /* 8 */
        IMAGE: n *= 2,
        //  Request.flash & (REQUEST_TYPE.DYNAMIC | REQUEST_TYPE.IMAGE) -> is this request type dynamic or an image?
        /* 16 */
        IFRAME: n *= 2,
        //  don't forget to reset n if we're going to assign flags vals like this again, and
        /* 32 */
        AC: n *= 2,
        //   the 32-1 bit limit on JS numbers, thus 31 flag limit :( [appendChild]
        /* 64 */
        IB: n *= 2,
        //  insertBefore
        /* 128 */
        RC: n *= 2,
        //  replaceChild
        /* 256 */
        DW: n *= 2,
        //  document.write
        /* 512 */
        DL: n *= 2,
        //  document.writeln    [10]
        /* 1024 */
        IA: n *= 2,
        //  insertAfter
        /* 2048 */
        IS: n *= 2,
        //  image.src
        /* 4096 */
        EI: n *= 2,
        //  element.innerHTML
        /* 8192 */
        BLOCKED: n *= 2,
        /* 16384 */
        COMPLETE: n *= 2,
        // 15
        /* 32768 */
        ERROR: n *= 2,
        /* 65536 */
        ABORT: n *= 2,
        /* whatever  */
        HISTORY_TIMEOUT: n += 2
      }
    },
    /** @private */
    compat = {},
    /**
     * Internal store of all requests, made public as {this}.history
     *
     * @name Gateway.history
     * @private
     */
    h = __Gateway.history = {
      before: {},
      processing: {},
      complete: {}
    },
    /*    <3 Crockford via http://www.coderholic.com/javascript-the-good-parts/
      url:    http://www.ora.com:80/goodparts?q#fragment
      scheme: http
      slash:  //
      host:   www.ora.com
      port:   80
      path:   goodparts
      query:  q
      hash:   fragment
      */
    parseUrl = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

  // probably being too careful
  n = 1;

  /**
   * Called any time a request is blocked by an Observer. Responsible
   * for removing the request from all queues and into the complete list
   * with data on the block appended.
   * TODO: think about override mechanisms, and which direction they should flow --- default white or black list?
   *
   * @private
   * @param {Request} req The request object that has been blocked
   * @param {HTMLElement} node A reference to the actual HTML node being added to the DOM
   * @returns {boolean} invokes the onBlockRequest hook, and returns its result
   */
  function _onBlock(req, node) {
    req.type |= constants.REQUEST_TYPES.BLOCKED;
    req.end = +new Date();
    delete h.before[req.id];
    h.complete[req.id] = {
      request: req,
      nodeRef: node
    };
    return o_evt.onBlockRequest(req, node);
  }

  /**
   * Helper method used to handle pre-request activities. Adds requests to the
   * before queue, and invokes the onBeforeRequest hook to check if a request
   * needs to be blocked.
   *
   * @private
   * @param {Request} req The request object that is being examined
   * @param {HTMLElement} node A reference to the actual HTML node being added to the DOM
   * @returns {boolean} returns whether or not the request is to be blocked
   */
  function _onBefore(req, node) {
    // TODO: run through ignore list before checking the filtering function
    if (!node.__imageRef) h.before[req.id] = {
      request: req,
      nodeRef: node
    };
    return o_evt.onBeforeRequest(req, node) ? true : !o.enableFiltering;
  }

  /**
   * Helper method that routes all observer hooking methods
   *
   * @private
   * @param {Observer} observer The observer reporting a success/fail hook event
   * @param {Boolean} success Whether or not the hook attempt was successful
   */
  function _onHook(observer, success) {
    observer.enabled = success;
    o_evt['on' + (success ? 'Successful' : 'Failed') + 'Hook'](observer);
  }

  /**
   * Returns the Gateway singleton
   *
   * @public
   * @member Gateway
   * @returns {Gateway}
   */
  __Gateway.getInstance = function () {
    return instance;
  };

  /**
   * Reporter singleton
   *
   * @private
   * @name Gateway.reporter
   */
  var _reporter = (function () {
    /** @private */
    var _options = {
      maxUrlSize: 2000,
      maxBeaconsPerPage: 4,
      reportQueryParams: true,
      reportPerformanceData: true,
      reportStack: false,
      reportInterval: 2500,
      reportDuplicateRequests: true
    },
      /** @private */
      _unreportedResources = [],
      /** @private */
      _reportedResources = [],
      /** @private */
      _resourceFilterFunctions = [],
      /** @private */
      _beaconCounter = 0,
      /** @private */
      _enabled = false;

    /**
     * Encodes/serializes a list of Requests into a URL safe string
     *
     * @private
     * @param {Array.<Request>} resources The resources to encode
     * @returns {string} the serialized Request list
     */
    function _generateReportString(resources) {
      var str = ['', '', '', '', ''],
        match = [],
        i, t, helper = function (_match, _type, _data) {
          var _t;
          if (!_data) return;
          _match[_type] = _match[_type] || {};
          if ((_t = _match[_type][_data]) !== undefined) {
            return ">>$" + _t;
          } else {
            _match[_type][_data] = i;
            return ">>" + _data;
          }
        };
      for (i = 0; i < resources.length; i++) {
        str[0] += helper(match, 0, resources[i].destination || 'unknown');
        str[1] += helper(match, 1, resources[i].type || -1);
        str[2] += helper(match, 3, resources[i].start || -1);
        str[3] += helper(match, 4, resources[i].end || -1);
        if (_options.reportStack) str[4] += helper(match, 5, resources[i].stack || 'unknown');
      }
      for (i = 0; i < 5; i++)
      str[i] = str[i].slice(2, str[i].length);
      if (!_options.reportStack) str.pop();
      return encodeURIComponent(str.join('<<'));
    }
    /**
     * Determine if a given Request can be added to the list to be reported
     *
     * @private
     * @param {Resource} resource The resource to check
     * @returns {boolean} if the resource is allowed to be added
     */
    function _canAddResource(resource) {
      for (var i = 0; i < _resourceFilterFunctions.length; i++)
      if (_resourceFilterFunctions[i](resource)) return false;
      // TODO: check for dupes
      return true;
    }
    /**
     * Report all unreported Requests
     *
     * @private
     */
    function _doReport() {
      var buff = [],
        reportString;

      if (_beaconCounter >= _options.maxBeaconsPerPage || _enabled === false || _unreportedResources.length === 0) return false;
      while (_unreportedResources.length > 0) {
        buff.push(_unreportedResources.pop());
        reportString = _generateReportString(buff);
        if (reportString.length + 50 >= _options.maxUrlSize) { // TODO: +50 is my guess at the avg. size of the url that has the ensighten stuff: http://nexus.ens....
          break;
        }
      }
      _reportedResources.concat(buff);
      _beacon(reportString);
    }
    /**
     * Send an untracked image request with data to the Sentinel data processors
     *
     * @private
     * @param {string} data the data to send in the beacon request
     */
    function _beacon(data) {
      if (_beaconCounter >= _options.maxBeaconsPerPage) return;

      // TODO: make the report url configurable
      (new Bootstrapper.ImageRef()).src = "//b.ensighten.com/?n=" + _beaconCounter + "&c=" + ensightenOptions.clientId + "&i=" + instanceId + "&d=" + data;
      _beaconCounter++;
    }

    /**
     * Method passed to setInterval to initiate reports, and perpetuate the loop
     *
     * @private
     */
    function _startTimer() {
      _doReport();
      if (_beaconCounter >= _options.maxBeaconsPerPage || !_enabled) {
        _enabled = false;
        return;
      }
      setTimeout(_startTimer, _options.reportInterval || 5000);
    }

    return {
      /**
       * Attempts to add a given Request to the reporter queue
       *
       * @function
       * @param {Request} resource The resource to add to the reporter queue
       * @name Gateway.reporter.addResource
       */
      addResource: function (resource) {
        var i;
        /*if ( !_canAddResource(resource) ) TODO: re-implement?
            return false;
          for (i=0; i<_resourceFilterFunctions.length; i++) {
            resource = _resourceFilterFunctions[i](resource);
          }*/
        _unreportedResources.push(resource);
      },
      /**
       * Allow user to set options by passing in an object with option key/value
       * params they wish to set.
       *
       * @function
       * @param {Object} options the options to overwrite
       * @name Gateway.reporter.setOptions
       */
      setOptions: function (options) {
        for (var p in options) {
          if (options.hasOwnProperty(p)) _options[p] = options[p];
        }
      },
      /**
       * Add a function to check if a given resource should be reported upon
       *
       * @function
       * @param {function(Request):boolean} filterFn
       * @name Gateway.reporter.addFilter
       */
      addFilter: function (filterFn) {
        if (typeof filterFn !== 'function') return false;
        _resourceFilterFunctions.push(filterFn);
      },
      /**
       * Clear all filters
       *
       * @function
       * @name Gateway.reporter.clearFilter
       */
      clearFilters: function () {
        _resourceFilterFunctions = [];
      },
      /**
       * Get all filter functions
       *
       * @function
       * @name Gateway.reporter.getFilter
       * @returns {Array.<function(Request):boolean>}
       */
      getFilters: function () {
        return _resourceFilterFunctions;
      },
      /**
       * Enable the reporter to send beacons
       *
       * @function
       * @name Gateway.reporter.enable
       */
      enable: function () {
        _enabled = true;
        _startTimer();
      },
      /**
       * Disable the reporter to send beacons
       *
       * @function
       * @name Gateway.reporter.disable
       */
      disable: function () {
        _enabled = false;
      }
    };
  })();

  /**
   * Observer class
   *
   * @constructor
   * @param {string} name  The name of this Observer
   * @param {function():boolean} hook The function the Observer will use to hook into the DOM
   * @returns {Observer}
   */
  function Observer(name, hook) {
    this.name = name;
    this.hook = hook;
    this.enabled = false;
  }

  /**
   * Request class
   *
   * @constructor
   * @param {string} destination The URL of the resource being requested
   * @param {number=} type  Bitmask holding the type of request this is
   * @param {Array.<string>=} call stack that lead to the request
   * @param {number=} observed the timestamp for when the request was observed
   * @param {number=} start the timestamp for when the request started
   * @returns {Request}
   */
  function Request(destination, type, stack, observed, start) {
    this.destination = destination || "";
    this.type = type || 0;
    this.observed = observed || +new Date();
    this.start = start || +new Date();
    this.stack = stack;
    this.end = -1;
  }

  /**
   * Returns the code for a given function
   *
   * @private
   * @param {function} fn
   * @returns {string} code for the given function
   */
  function getFunctionString(fn) {
    if (!fn || (typeof fn !== 'function' && typeof fn !== 'object')) return false;
    if (fn.toString !== undefined) return fn.toString();
    return fn + "";
  }
  /**
   * Determines whether a given function is the native implementation
   *
   * @private
   * @param {function} fn
   * @returns {Boolean} Whether the given function is native or not
   */
  function isNative(fn) {
    var re = new RegExp("function\\s+.+?\\(\\s*\\)\\s*{\\s*\\[native code\\]\\s*}"),
      re2 = new RegExp("function\\s+.+?\\(\\s*\\)\\s*{\\s*\\/\\*\\s*source code not available\\s*\\*\\/\\s*}"),
      fnStr = getFunctionString(fn);
    return re.test(fnStr) || re2.test(fnStr);
  }
  /**
   * Determines if the Image constructor is the native implementation
   *
   * @private
   * @returns {Boolean}
   */
  function isImageNative() {
    if (!window.Image) return false;

    return (
    window.HTMLImageElement && window.Image.prototype && window.Image.prototype instanceof window.HTMLImageElement) || (
    typeof window.Image.toString === 'function' && window.Image.toString() === '[object Image]') || (
    window.Image == '[object HTMLImageElement]') || (
    isNative(window.Image));
  }

  /**
   * find all resources in a given element and pass them through _onBefore
   * strip all elements that fail onBeforeRequest,
   * add timer handlers to all Requests (except document.write?),
   * return cleaned/instrumented element(s)
   *
   * @private
   * @param {HTMLElement} node node to check
   * @param {string} source request type
   * @returns {HTMLElement} the cleaned node
   */
  function _process_element(node, source) {
    var i, n, ts = +new Date(),
      req = new Request(),
      helper;

    if (node.__gateway || !node.tagName || (node.tagName && node.tagName === 'SCRIPT' && node.src === '')) return node;

    helper = function (ts, status) {
      return function () {
        Bootstrapper.gateway.resourceComplete(this, ts, status);
      };
    };

    req.type |= constants.REQUEST_TYPES.DYNAMIC;

    switch (source) {
    case 'dw':
      req.type |= constants.REQUEST_TYPES.DW;
      break;
    case 'dwl':
      req.type |= constants.REQUEST_TYPES.DL;
      break;
    case 'ac':
      req.type |= constants.REQUEST_TYPES.AC;
      break;
    case 'ib':
      req.type |= constants.REQUEST_TYPES.IB;
      break;
    case 'rc':
      req.type |= constants.REQUEST_TYPES.RC;
      break;
    case 'ie':
      req.type |= constants.REQUEST_TYPES.IA;
      break;
    }
    req.id = ts;
    node.__gateway = ts;

    // check for script and image tags
    switch (node.tagName.toLowerCase()) {
    case 'iframe':
      req.type |= constants.REQUEST_TYPES.IFRAME;
    case 'script':
      req.destination = node.src;
      if (!req.type & constants.REQUEST_TYPES.IFRAME) req.type |= constants.REQUEST_TYPES.SCRIPT;
      if (!_onBefore(req, node)) {
        _onBlock(req, node);
        node.src = "";
        break;
      }

      // if this is doc.write, we need to add these event listeners to the element once they are actually added to the DOM
      // let's add them to a queue, and have a worker searching for the element and attaching our helper functions.
      if (source === 'dw') {
        //TODO: do something fancy here to help id this element once it's on the page given that we can't just change a property
        // we will basically only know the src of the script --- maybe here we doc.write something to mark where to start the search for our element?
      }
      // TODO: DRY this up, addEvent?
      if (node.addEventListener) {
        node.addEventListener("load", helper(ts, "load"), false);
        node.addEventListener("abort", helper(ts, "abort"), false);
        node.addEventListener("error", helper(ts, "error"), false);
      } else {
        // TODO: check if I can get away with how we did this in IE for images
        function hijackHelper(node, method, timestamp) {
          var a = 'on' + method,
            b = '_' + a;
          if (node[a] && typeof node[a] == 'function') node[b] = node[a];
          node[a] = function (ts) {
            return function () {
              Bootstrapper.gateway.resourceComplete(this, ts, method);
              if (this[b]) this[b].call(this);
            };
          }(timestamp);
        }

        //hijack onerror, and onabort
        hijackHelper(node, 'error', ts);
        hijackHelper(node, 'abort', ts);

        // hijack onreadystatechange and onload
        if (node.onreadystagechange && typeof node.onreadystatechange == 'function') node._onreadystatechange = node.onreadystatechange;
        if (node.onload && typeof node.onload == 'function') node._onload = node.onload;
        node.onload = node.onreadystatechange = function (timestamp) {
          return function () {
            if (this.readyState && /loaded|complete/.test(this.readyState)) {
              Bootstrapper.gateway.resourceComplete(this, timestamp, "load");
            }
            if (this._onload) this._onload.call(this);
            if (this._onreadystatechange) this._onreadystatechange.call(this);
          };
        }(ts);
      }
      break;
    case 'img':
      req.destination = node.src;
      req.type |= constants.REQUEST_TYPES.IMAGE;

      if (!_onBefore(req, node)) {
        _onBlock(req, node);
        // TODO: check if parentNode exists? what if this is the only node we're trying to append?
        node.src = "";
        break;
      }

      if (node.addEventListener) {
        node.addEventListener("load", helper(ts, "load"), false);
        node.addEventListener("abort", helper(ts, "abort"), false);
        node.addEventListener("error", helper(ts, "error"), false);
      } else if (node.attachEvent) {
        // TODO: Unit test!!!
        // TODO: Compare this to "onreadystatechange" used above
        node.attachEvent("onload", helper(ts, "load"));
        node.attachEvent("onabort", helper(ts, "abort"));
        node.attachEvent("onerror", helper(ts, "error"));
      }
      break;
    }
    // Loop through all of the children of this node, and call _process_element on each one. Basically a depth-first recursive crawl.
    for (i = 0; i < node.childNodes.length; i++) {
      n = node.childNodes[i];
      if (n.nodeType === 1) arguments.callee(n, source);
    }

    // TODO: unit tests for element type checks
    // if not, run process elem on each child node if there are any
    // return cleaned element or, if no elements, something falsy
    return node;
  }

  /**
   * The method that does it all for appendChild, replaceChild, and insertBefore
   * Creates copy of original method, overrides the original method
   *
   * @private
   * @param obj The object that holds the methods to override
   * @param fnName The name of the method to override
   * @param source The request type
   * @param idx
   */
  function _override_helper(obj, fnName, source, idx) {
    obj['_' + fnName] = obj[fnName];
    // TODO: this might be overkill ... fnName is probably new for each function call since functions have their own scope. Check specs/test.
    obj[fnName] = function (fn, src) {
      return function () {
        var args = Array.prototype.slice.call(arguments),
          arg = args[idx ? idx : 0];
        // TODO: validate args[0] is an HTMLElement of some sort, x-browser tests
        arg = _process_element(arg, src);
        for (var i = 0, ii = args.length; i < ii; i++) {
          var e = args[i] ? args[i].__imageRef : false;
          if (e) {
            // need to actually search for arg in args, and replace with __imageRef
            args[i] = e;
          }
        }
        if (arg) {
          try {
            return this['_' + fn].apply(this, args);
          } catch (e) {}
        }
      };
    }(fnName, source);
  }
  /**
   * Helper hook method to override each HTML element type individually for FF compatibility
   * of hooking appendChild, insertBefore, replaceChild
   *
   * @private
   */
  function _obs_Element_helper() {
    var elementTypes = ['Anchor', 'Area', 'Body', 'Button', 'Canvas', 'Div', 'Form', 'Frame', 'Head', 'Html', 'IFrame', 'Input', 'Label', 'LI', 'Link', 'Map', 'OList', 'Option', 'Paragraph', 'Span', 'Table', 'TableCell', 'TableCol', 'TableRow', 'TableSection', 'UList', 'Unknown'];
    for (var i = 0, l = elementTypes.length; i < l; i++) {
      _override_helper(window['HTML' + elementTypes[i] + "Element"].prototype, 'appendChild', 'ac');
      _override_helper(window['HTML' + elementTypes[i] + "Element"].prototype, 'insertBefore', 'ib');
      _override_helper(window['HTML' + elementTypes[i] + "Element"].prototype, 'replaceChild', 'rc');
    }
  }
  /**
   * Hook method for overriding appendChild, insertBefore, and replaceChild
   *
   * @private
   * @returns {Boolean} whether the hook succeeded
   */
  function _obs_Element() {
    if (window.Element && window.Element.prototype && window.Element.prototype.appendChild) {
      //do the first one, check if it worked
      _override_helper(window.Element.prototype, 'appendChild', 'ac');
      if (isNative(document.createElement('div').appendChild)) {
        // failed to overwrite, try using HTML node types
        _obs_Element_helper();
      } else {
        // everything went better than expected. proceed.
        _override_helper(window.Element.prototype, 'insertBefore', 'ib');
        _override_helper(window.Element.prototype, 'replaceChild', 'rc');
      }
    }
    return !(isNative(document.createElement('div').appendChild));
  }
  /**
   * Hook method to override document.write
   *
   * @private
   * @returns {Boolean} whether the hook succeeded
   */
  function _obs_write() {
    document._write = document.write;
    document.write = function (html) {
      var fragment = document.createElement('div');
      fragment.innerHTML = html;
      _process_element(fragment, 'dw');
      return document._write(fragment.innerHTML);
    };
    return !isNative(document.write);
  }
  /**
   * Hook method to override document.writeln
   *
   * @private
   * @returns {Boolean} whether the hook succeeded
   */
  function _obs_writeln() {
    document._writeln = document.writeln;
    document.writeln = function (html) {
      var fragment = document.createElement('div');
      fragment.innerHTML = html;
      _process_element(fragment, 'dwl');
      return document._writeln(fragment.innerHTML);
    };
    return !isNative(document.writeln);
  }
  /**
   * Hook method to override insertAdjacentElement (IE only)
   *
   * @private
   * @returns {Boolean} whether the hook succeeded
   */
  function _obs_insertAdjacentElement() {
    if (document.insertAdjacentElement) {
      _override_helper(window.Element.prototype, 'insertAdjacentElement', 'ie', 1);
      return !isNative(document.insertAdjacentElement);
    }
    return false;
  }
  /**
   * Hook method to override Image constructor. Stores reference for original
   * Image constructor on Bootstrapper.ImageRef for later use/reference
   *
   * @private
   * @returns {Boolean} whether the hook succeeded
   */
  function _obs_imageSrc() {
    /**
     * Handle document.createElement('img')
     */
    document._createElement = document.createElement;
    document.createElement = function (tagName) {
      try {
        if (tagName.match(/img|image/i)) {
          return new Image();
        } else {
          return document._createElement(tagName);
        }
      } catch (e) {
        return document._createElement(tagName);
      }
    };

    /**
     * Store the original image ref
     */
    var ImageRef = window.Image;
    Bootstrapper.ImageRef = window.Image;

    /**
     * Override the default Image function
     *
     * @constructor
     * @name window.Image
     */
    window.Image = function (a, b) {
      /** @private */
      var THIS = this,
        /** @private */
        _noop = function () {},
        /** @private */
        eventHandlers = ['abort', 'error', 'KeyDown', 'KeyPress', 'KeyUp', 'load'],
        /** @private */
        excludeProperties = {
          '__id': ''
        },
        /** @private */
        _imageReference = (a && b) ? new ImageRef(a, b) : (a ? new ImageRef(a) : new ImageRef()),
        /** @private */
        req = new Request(),
        /** @private */
        ts = +new Date(),
        /** @private */
        helper = function (ts, status) {
          return function () {
            Bootstrapper.gateway.resourceComplete(this, ts, status);
          };
        };


      req.type = (constants.REQUEST_TYPES.DYNAMIC | constants.REQUEST_TYPES.IMAGE | constants.REQUEST_TYPES.IS);
      req.id = ts;
      h.before[ts] = {
        request: req,
        nodeRef: _imageReference
      };
      THIS.__id = ts;
      THIS.__imageRef = _imageReference;

      for (var p in _imageReference) {
        try {
          if (typeof _imageReference[p] === 'function') {
            THIS[p] = function (_p) {
              return function () {
                return _imageReference[_p].apply(_imageReference, arguments);
              };
            }(p);
          } else {
            THIS[p] = _imageReference[p];
          }
        } catch (e) {}
      }
      for (var i = 0; i < eventHandlers.length; i++) {
        THIS['on' + eventHandlers[i]] = function () {};
      }
      THIS.setAttribute = function (prop, val) {
        THIS[prop] = val;
      };
      setInterval(function () {
        for (var p in THIS) {
          if (typeof _imageReference[p] == 'function') continue;
          if ((THIS[p] !== _imageReference[p]) && (THIS[p] !== undefined) && !(p in excludeProperties)) {
            try {
              if (p === 'src') {
                var req = h.before[THIS.__id].request;
                if (!req) {
                  req = new Request();
                  req.id = ts;
                  req.type = (constants.REQUEST_TYPES.DYNAMIC | constants.REQUEST_TYPES.IMAGE | constants.REQUEST_TYPES.IS);
                }
                req.destination = THIS[p];
                if (_onBefore(req, _imageReference)) {
                  req.start = ts;

                  //TODO: setup completion event handlers
                  if (_imageReference.addEventListener) {
                    _imageReference.addEventListener("load", helper(ts, "load"), false);
                    _imageReference.addEventListener("abort", helper(ts, "abort"), false);
                    _imageReference.addEventListener("error", helper(ts, "error"), false);
                  } else if (_imageReference.attachEvent) {
                    // TODO: Unit test!!!
                    _imageReference.attachEvent("onload", helper(ts, "load"));
                    _imageReference.attachEvent("onabort", helper(ts, "abort"));
                    _imageReference.attachEvent("onerror", helper(ts, "error"));
                  }
                  _imageReference[p] = THIS[p];

                  THIS[p] = _imageReference[p];
                  if (_imageReference[p] !== THIS[p]) excludeProperties[p] = '';
                } else {
                  _onBlock(req, _imageReference);
                  delete THIS[p];
                }
              } else {
                _imageReference[p] = THIS[p];
                THIS[p] = _imageReference[p];
                if (_imageReference[p] !== THIS[p]) excludeProperties[p] = '';
              }
            } catch (e) {
              excludeProperties[p] = '';
            }
          }
        }
      }, 100);
    };
    return !isImageNative();
  }

  function _obs_elementInner() {
    return false;
  }

  /**
   * All of the Observer objects
   *
   *   0:  basic method overwrite
   *   1:  overwrite Element.method
   *  2:  overwrite HTMLXXXElement.method
   *  *:  custom override, all browsers sans IE6/7
   *
   *  @name Bootstrapper.Gateway.observers
   *  @type {Array.<Observer>}
   */
  observers = __Gateway.observers = [
  new Observer("aC", _obs_Element), // [1,2] appendChild,insertBefore,replaceChild
  new Observer("dW", _obs_write), // [0] document.write
  new Observer("dL", _obs_writeln), // [0] document.writeln
  new Observer("iA", _obs_insertAdjacentElement), // [1,2] insertAdjacentElement (IE only)
  new Observer("Is", _obs_imageSrc), // [*]Image.src
  new Observer("Ei", _obs_elementInner) // [*]Element.innerHTML
  ];

  this._doNotTrack = null;
  // returns true/false/-1 with -1 being inconclusive/unknown.
  // TODO: actually think about if these return values make sense
  this.doNotTrack = function () {
    if (instance._doNotTrack !== null) return instance._doNotTrack;

    var check = navigator.doNotTrack || navigator.msDoNotTrack || -1;
    if (check < 0) {
      Bootstrapper.loadScriptCallback(o_dnt.ajaxLocation, this.doNotTrack);
      return -1;
    } else {
      this._doNotTrack = (check == 'yes' || check == '1');
      return this._doNotTrack;
    }
  };

  /**
   * initialize the singleton, setup observers, etc
   */
  this.initialize = function () {
    var i, o;

    for (i = 0; i < observers.length; i++) {
      o = observers[i];
      if (!o_evt.onBeforeHook(o)) continue;
      _onHook(o, o.hook());
    }

    function historyGarbageCollector() {
      for (var entry in h.before) {
        if (!h.before.hasOwnProperty(entry)) continue;
        var ts = +(new Date());
        //TODO: turn this into a constant
        if (ts - h.before[entry].request.start > 5000) {
          Bootstrapper.gateway.resourceComplete(h.before.nodeRef, entry, 'historyTimeout');
        }
      }
    }
    setInterval(historyGarbageCollector, 250);
  };
  /**
   * Executed anytime a resource completes downloading. Public only
   * for the benefit of code running much later attached to nodes downloading
   * code that must have a means of reporting they have completed.
   *
   * @function
   * @param node
   * @param id
   * @param status
   */
  this.resourceComplete = function (node, id, status) {
    var before = h.before[id || node.__gateway],
      flag;
    // TODO: Need to work on some fallbacks here
    if (!before) return;

    before.request.end = +new Date();
    switch (status) {
    case 'abort':
      flag = constants.REQUEST_TYPES.ABORT;
      break;
    case 'error':
      flag = constants.REQUEST_TYPES.ERROR;
      break;
    case 'historyTimeout':
      flag = constants.REQUEST_TYPES.ERROR;
      flag |= constants.REQUEST_TYPES.HISTORY_TIMEOUT;
      break;
    default:
      flag = constants.REQUEST_TYPES.COMPLETE;
    }
    before.request.type |= flag;
    h.complete[id || node.__gateway] = {
      request: before.request,
      nodeRef: before.nodeRef
    };
    _reporter.addResource(before.request);
    delete h.before[id || node.__gateway];
  };

  /** @ignore */
  this.options = o;
  this.history = h;
  this.constants = constants;
  this.observers = observers;

  /**
   * enable the reporter
   */
  this.enableReporter = function () {
    _reporter.enable();
  };
  /**
   * expose the reporter
   */
  this.reporter = function () {
    return _reporter;
  };

  /**
   * quick logging method
   */
  this.log = function (out) {
    if (console && o.enableLogging) console.log(out);
  };
  return __Gateway;
};

/**
 * pre-init configuration --- setup captures? initial setting for reporter? etc
 */
Bootstrapper.Gateway.getInstance().initialize();
Bootstrapper.gateway = Bootstrapper.Gateway.getInstance();
Bootstrapper.bindDOMParsed(function () {
  Bootstrapper.gateway.reporter().enable();
});