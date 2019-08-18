(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.ggvega = {}));
}(this, function (exports) { 'use strict';

    var $ref = "#/definitions/TopLevelSpec";
    var $schema = "http://json-schema.org/draft-07/schema#";
    var definitions = {
    	AesParams: {
    		additionalProperties: false,
    		properties: {
    			alpha: {
    				type: "number"
    			},
    			colour: {
    				type: "string"
    			},
    			fill: {
    				type: "string"
    			},
    			shape: {
    				type: "number"
    			},
    			size: {
    				type: "number"
    			},
    			stroke: {
    				type: "number"
    			}
    		},
    		type: "object"
    	},
    	Coord: {
    		$ref: "#/definitions/CoordCartesian"
    	},
    	CoordCartesian: {
    		additionalProperties: false,
    		properties: {
    			"class": {
    				"enum": [
    					"CoordCartesian"
    				],
    				type: "string"
    			}
    		},
    		required: [
    			"class"
    		],
    		type: "object"
    	},
    	Dataset: {
    		additionalProperties: false,
    		properties: {
    			metadata: {
    				$ref: "#/definitions/Metadata"
    			},
    			observations: {
    				$ref: "#/definitions/InlineDataset"
    			}
    		},
    		required: [
    			"metadata",
    			"observations"
    		],
    		type: "object"
    	},
    	Datasets: {
    		additionalProperties: {
    			$ref: "#/definitions/Dataset"
    		},
    		description: "The datasets should have at least one dataset",
    		minProperties: 1,
    		type: "object"
    	},
    	Encoding: {
    		additionalProperties: false,
    		properties: {
    			field: {
    				type: "string"
    			}
    		},
    		required: [
    			"field"
    		],
    		type: "object"
    	},
    	Facet: {
    		$ref: "#/definitions/FacetNull"
    	},
    	FacetNull: {
    		additionalProperties: false,
    		properties: {
    			"class": {
    				"enum": [
    					"FacetNull"
    				],
    				type: "string"
    			}
    		},
    		required: [
    			"class"
    		],
    		type: "object"
    	},
    	InlineDataset: {
    		anyOf: [
    			{
    				items: {
    					$ref: "#/definitions/InlineDatasetElement"
    				},
    				type: "array"
    			},
    			{
    				type: "object"
    			},
    			{
    				type: "string"
    			}
    		]
    	},
    	InlineDatasetElement: {
    		anyOf: [
    			{
    				type: "boolean"
    			},
    			{
    				type: "number"
    			},
    			{
    				type: "object"
    			},
    			{
    				type: "string"
    			}
    		]
    	},
    	Labels: {
    		additionalProperties: false,
    		properties: {
    			alpha: {
    				type: "string"
    			},
    			colour: {
    				type: "string"
    			},
    			fill: {
    				type: "string"
    			},
    			shape: {
    				type: "string"
    			},
    			size: {
    				type: "string"
    			},
    			stroke: {
    				type: "string"
    			},
    			title: {
    				type: "string"
    			},
    			x: {
    				type: "string"
    			},
    			y: {
    				type: "string"
    			}
    		},
    		type: "object"
    	},
    	Layer: {
    		anyOf: [
    			{
    				additionalProperties: false,
    				properties: {
    					aes_params: {
    						$ref: "#/definitions/AesParams"
    					},
    					data: {
    						type: "string"
    					},
    					geom: {
    						additionalProperties: false,
    						properties: {
    							"class": {
    								"enum": [
    									"GeomPoint"
    								],
    								type: "string"
    							}
    						},
    						required: [
    							"class"
    						],
    						type: "object"
    					},
    					geom_params: {
    						additionalProperties: false,
    						properties: {
    							"na.rm": {
    								type: "boolean"
    							}
    						},
    						required: [
    							"na.rm"
    						],
    						type: "object"
    					},
    					mapping: {
    						$ref: "#/definitions/Mapping"
    					},
    					stat: {
    						additionalProperties: false,
    						properties: {
    							"class": {
    								"enum": [
    									"StatIdentity"
    								],
    								type: "string"
    							}
    						},
    						required: [
    							"class"
    						],
    						type: "object"
    					},
    					stat_params: {
    						additionalProperties: false,
    						properties: {
    							"na.rm": {
    								type: "boolean"
    							}
    						},
    						required: [
    							"na.rm"
    						],
    						type: "object"
    					}
    				},
    				required: [
    					"aes_params",
    					"data",
    					"geom",
    					"geom_params",
    					"mapping",
    					"stat",
    					"stat_params"
    				],
    				type: "object"
    			},
    			{
    				additionalProperties: false,
    				properties: {
    					aes_params: {
    						$ref: "#/definitions/AesParams"
    					},
    					data: {
    						type: "string"
    					},
    					geom: {
    						additionalProperties: false,
    						properties: {
    							"class": {
    								"enum": [
    									"GeomBar"
    								],
    								type: "string"
    							}
    						},
    						required: [
    							"class"
    						],
    						type: "object"
    					},
    					geom_params: {
    						additionalProperties: false,
    						properties: {
    							"na.rm": {
    								type: "boolean"
    							}
    						},
    						required: [
    							"na.rm"
    						],
    						type: "object"
    					},
    					mapping: {
    						$ref: "#/definitions/Mapping"
    					},
    					stat: {
    						additionalProperties: false,
    						properties: {
    							"class": {
    								"enum": [
    									"StatIdentity"
    								],
    								type: "string"
    							}
    						},
    						required: [
    							"class"
    						],
    						type: "object"
    					},
    					stat_params: {
    						additionalProperties: false,
    						properties: {
    							"na.rm": {
    								type: "boolean"
    							}
    						},
    						required: [
    							"na.rm"
    						],
    						type: "object"
    					}
    				},
    				required: [
    					"aes_params",
    					"data",
    					"geom",
    					"geom_params",
    					"mapping",
    					"stat",
    					"stat_params"
    				],
    				type: "object"
    			}
    		]
    	},
    	Layers: {
    		description: "The `Layers` should have at least one layer",
    		items: {
    			$ref: "#/definitions/Layer"
    		},
    		minItems: 1,
    		type: "array"
    	},
    	Mapping: {
    		additionalProperties: false,
    		properties: {
    			alpha: {
    				$ref: "#/definitions/Encoding"
    			},
    			colour: {
    				$ref: "#/definitions/Encoding"
    			},
    			fill: {
    				$ref: "#/definitions/Encoding"
    			},
    			shape: {
    				$ref: "#/definitions/Encoding"
    			},
    			size: {
    				$ref: "#/definitions/Encoding"
    			},
    			stroke: {
    				$ref: "#/definitions/Encoding"
    			},
    			x: {
    				$ref: "#/definitions/Encoding"
    			},
    			y: {
    				$ref: "#/definitions/Encoding"
    			}
    		},
    		type: "object"
    	},
    	Metadata: {
    		additionalProperties: {
    			$ref: "#/definitions/Metadatum"
    		},
    		type: "object"
    	},
    	Metadatum: {
    		additionalProperties: false,
    		properties: {
    			levels: {
    				items: {
    					type: "string"
    				},
    				type: "array"
    			},
    			type: {
    				$ref: "#/definitions/StandardType"
    			}
    		},
    		required: [
    			"type"
    		],
    		type: "object"
    	},
    	Scale: {
    		additionalProperties: false,
    		properties: {
    			aesthetics: {
    				items: {
    					type: "string"
    				},
    				type: "array"
    			},
    			name: {
    				type: "string"
    			},
    			transform: {
    				$ref: "#/definitions/Transform"
    			}
    		},
    		required: [
    			"aesthetics",
    			"transform"
    		],
    		type: "object"
    	},
    	ScaleType: {
    		"enum": [
    			"log"
    		],
    		type: "string"
    	},
    	Scales: {
    		items: {
    			$ref: "#/definitions/Scale"
    		},
    		type: "array"
    	},
    	StandardType: {
    		"enum": [
    			"nominal",
    			"ordinal",
    			"quantitative",
    			"temporal"
    		],
    		type: "string"
    	},
    	StatIdentity: {
    		additionalProperties: false,
    		properties: {
    			stat: {
    				additionalProperties: false,
    				properties: {
    					"class": {
    						"enum": [
    							"StatIdentity"
    						],
    						type: "string"
    					}
    				},
    				required: [
    					"class"
    				],
    				type: "object"
    			},
    			stat_params: {
    				additionalProperties: false,
    				properties: {
    					"na.rm": {
    						type: "boolean"
    					}
    				},
    				required: [
    					"na.rm"
    				],
    				type: "object"
    			}
    		},
    		required: [
    			"stat",
    			"stat_params"
    		],
    		type: "object"
    	},
    	TopLevelSpec: {
    		additionalProperties: false,
    		properties: {
    			coordinates: {
    				$ref: "#/definitions/Coord"
    			},
    			data: {
    				$ref: "#/definitions/Datasets"
    			},
    			facet: {
    				$ref: "#/definitions/Facet"
    			},
    			labels: {
    				$ref: "#/definitions/Labels"
    			},
    			layers: {
    				$ref: "#/definitions/Layers"
    			},
    			scales: {
    				$ref: "#/definitions/Scales"
    			}
    		},
    		required: [
    			"data",
    			"layers",
    			"scales",
    			"labels",
    			"coordinates",
    			"facet"
    		],
    		type: "object"
    	},
    	Transform: {
    		additionalProperties: false,
    		properties: {
    			base: {
    				type: "number"
    			},
    			type: {
    				$ref: "#/definitions/ScaleType"
    			}
    		},
    		required: [
    			"type",
    			"base"
    		],
    		type: "object"
    	}
    };
    var ggschema = {
    	$ref: $ref,
    	$schema: $schema,
    	definitions: definitions
    };

    var ggSpecJsonSchema = /*#__PURE__*/Object.freeze({
        $ref: $ref,
        $schema: $schema,
        definitions: definitions,
        'default': ggschema
    });

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    function getCjsExportFromNamespace (n) {
    	return n && n['default'] || n;
    }

    var uri_all = createCommonjsModule(function (module, exports) {
    /** @license URI.js v4.2.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */
    (function (global, factory) {
    	 factory(exports) ;
    }(commonjsGlobal, (function (exports) {
    function merge() {
        for (var _len = arguments.length, sets = Array(_len), _key = 0; _key < _len; _key++) {
            sets[_key] = arguments[_key];
        }

        if (sets.length > 1) {
            sets[0] = sets[0].slice(0, -1);
            var xl = sets.length - 1;
            for (var x = 1; x < xl; ++x) {
                sets[x] = sets[x].slice(1, -1);
            }
            sets[xl] = sets[xl].slice(1);
            return sets.join('');
        } else {
            return sets[0];
        }
    }
    function subexp(str) {
        return "(?:" + str + ")";
    }
    function typeOf(o) {
        return o === undefined ? "undefined" : o === null ? "null" : Object.prototype.toString.call(o).split(" ").pop().split("]").shift().toLowerCase();
    }
    function toUpperCase(str) {
        return str.toUpperCase();
    }
    function toArray(obj) {
        return obj !== undefined && obj !== null ? obj instanceof Array ? obj : typeof obj.length !== "number" || obj.split || obj.setInterval || obj.call ? [obj] : Array.prototype.slice.call(obj) : [];
    }
    function assign(target, source) {
        var obj = target;
        if (source) {
            for (var key in source) {
                obj[key] = source[key];
            }
        }
        return obj;
    }

    function buildExps(isIRI) {
        var ALPHA$$ = "[A-Za-z]",
            DIGIT$$ = "[0-9]",
            HEXDIG$$ = merge(DIGIT$$, "[A-Fa-f]"),
            PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$)),
            //expanded
        GEN_DELIMS$$ = "[\\:\\/\\?\\#\\[\\]\\@]",
            SUB_DELIMS$$ = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",
            RESERVED$$ = merge(GEN_DELIMS$$, SUB_DELIMS$$),
            UCSCHAR$$ = isIRI ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]",
            //subset, excludes bidi control characters
        IPRIVATE$$ = isIRI ? "[\\uE000-\\uF8FF]" : "[]",
            //subset
        UNRESERVED$$ = merge(ALPHA$$, DIGIT$$, "[\\-\\.\\_\\~]", UCSCHAR$$),
            SCHEME$ = subexp(ALPHA$$ + merge(ALPHA$$, DIGIT$$, "[\\+\\-\\.]") + "*"),
            USERINFO$ = subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:]")) + "*"),
            DEC_OCTET_RELAXED$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("0?[1-9]" + DIGIT$$) + "|0?0?" + DIGIT$$),
            //relaxed parsing rules
        IPV4ADDRESS$ = subexp(DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$),
            H16$ = subexp(HEXDIG$$ + "{1,4}"),
            LS32$ = subexp(subexp(H16$ + "\\:" + H16$) + "|" + IPV4ADDRESS$),
            IPV6ADDRESS1$ = subexp(subexp(H16$ + "\\:") + "{6}" + LS32$),
            //                           6( h16 ":" ) ls32
        IPV6ADDRESS2$ = subexp("\\:\\:" + subexp(H16$ + "\\:") + "{5}" + LS32$),
            //                      "::" 5( h16 ":" ) ls32
        IPV6ADDRESS3$ = subexp(subexp(H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{4}" + LS32$),
            //[               h16 ] "::" 4( h16 ":" ) ls32
        IPV6ADDRESS4$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,1}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{3}" + LS32$),
            //[ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
        IPV6ADDRESS5$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,2}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{2}" + LS32$),
            //[ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
        IPV6ADDRESS6$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,3}" + H16$) + "?\\:\\:" + H16$ + "\\:" + LS32$),
            //[ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
        IPV6ADDRESS7$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,4}" + H16$) + "?\\:\\:" + LS32$),
            //[ *4( h16 ":" ) h16 ] "::"              ls32
        IPV6ADDRESS8$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,5}" + H16$) + "?\\:\\:" + H16$),
            //[ *5( h16 ":" ) h16 ] "::"              h16
        IPV6ADDRESS9$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,6}" + H16$) + "?\\:\\:"),
            //[ *6( h16 ":" ) h16 ] "::"
        IPV6ADDRESS$ = subexp([IPV6ADDRESS1$, IPV6ADDRESS2$, IPV6ADDRESS3$, IPV6ADDRESS4$, IPV6ADDRESS5$, IPV6ADDRESS6$, IPV6ADDRESS7$, IPV6ADDRESS8$, IPV6ADDRESS9$].join("|")),
            ZONEID$ = subexp(subexp(UNRESERVED$$ + "|" + PCT_ENCODED$) + "+"),
            //RFC 6874, with relaxed parsing rules
        IPVFUTURE$ = subexp("[vV]" + HEXDIG$$ + "+\\." + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:]") + "+"),
            //RFC 6874
        REG_NAME$ = subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$)) + "*"),
            PCHAR$ = subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@]")),
            SEGMENT_NZ_NC$ = subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\@]")) + "+"),
            QUERY$ = subexp(subexp(PCHAR$ + "|" + merge("[\\/\\?]", IPRIVATE$$)) + "*");
        return {
            NOT_SCHEME: new RegExp(merge("[^]", ALPHA$$, DIGIT$$, "[\\+\\-\\.]"), "g"),
            NOT_USERINFO: new RegExp(merge("[^\\%\\:]", UNRESERVED$$, SUB_DELIMS$$), "g"),
            NOT_HOST: new RegExp(merge("[^\\%\\[\\]\\:]", UNRESERVED$$, SUB_DELIMS$$), "g"),
            NOT_PATH: new RegExp(merge("[^\\%\\/\\:\\@]", UNRESERVED$$, SUB_DELIMS$$), "g"),
            NOT_PATH_NOSCHEME: new RegExp(merge("[^\\%\\/\\@]", UNRESERVED$$, SUB_DELIMS$$), "g"),
            NOT_QUERY: new RegExp(merge("[^\\%]", UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@\\/\\?]", IPRIVATE$$), "g"),
            NOT_FRAGMENT: new RegExp(merge("[^\\%]", UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@\\/\\?]"), "g"),
            ESCAPE: new RegExp(merge("[^]", UNRESERVED$$, SUB_DELIMS$$), "g"),
            UNRESERVED: new RegExp(UNRESERVED$$, "g"),
            OTHER_CHARS: new RegExp(merge("[^\\%]", UNRESERVED$$, RESERVED$$), "g"),
            PCT_ENCODED: new RegExp(PCT_ENCODED$, "g"),
            IPV4ADDRESS: new RegExp("^(" + IPV4ADDRESS$ + ")$"),
            IPV6ADDRESS: new RegExp("^\\[?(" + IPV6ADDRESS$ + ")" + subexp(subexp("\\%25|\\%(?!" + HEXDIG$$ + "{2})") + "(" + ZONEID$ + ")") + "?\\]?$") //RFC 6874, with relaxed parsing rules
        };
    }
    var URI_PROTOCOL = buildExps(false);

    var IRI_PROTOCOL = buildExps(true);

    var slicedToArray = function () {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;

        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);

            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"]) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }

        return _arr;
      }

      return function (arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();













    var toConsumableArray = function (arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

        return arr2;
      } else {
        return Array.from(arr);
      }
    };

    /** Highest positive signed 32-bit float value */

    var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

    /** Bootstring parameters */
    var base = 36;
    var tMin = 1;
    var tMax = 26;
    var skew = 38;
    var damp = 700;
    var initialBias = 72;
    var initialN = 128; // 0x80
    var delimiter = '-'; // '\x2D'

    /** Regular expressions */
    var regexPunycode = /^xn--/;
    var regexNonASCII = /[^\0-\x7E]/; // non-ASCII chars
    var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

    /** Error messages */
    var errors = {
    	'overflow': 'Overflow: input needs wider integers to process',
    	'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
    	'invalid-input': 'Invalid input'
    };

    /** Convenience shortcuts */
    var baseMinusTMin = base - tMin;
    var floor = Math.floor;
    var stringFromCharCode = String.fromCharCode;

    /*--------------------------------------------------------------------------*/

    /**
     * A generic error utility function.
     * @private
     * @param {String} type The error type.
     * @returns {Error} Throws a `RangeError` with the applicable error message.
     */
    function error$1(type) {
    	throw new RangeError(errors[type]);
    }

    /**
     * A generic `Array#map` utility function.
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} callback The function that gets called for every array
     * item.
     * @returns {Array} A new array of values returned by the callback function.
     */
    function map(array, fn) {
    	var result = [];
    	var length = array.length;
    	while (length--) {
    		result[length] = fn(array[length]);
    	}
    	return result;
    }

    /**
     * A simple `Array#map`-like wrapper to work with domain name strings or email
     * addresses.
     * @private
     * @param {String} domain The domain name or email address.
     * @param {Function} callback The function that gets called for every
     * character.
     * @returns {Array} A new string of characters returned by the callback
     * function.
     */
    function mapDomain(string, fn) {
    	var parts = string.split('@');
    	var result = '';
    	if (parts.length > 1) {
    		// In email addresses, only the domain name should be punycoded. Leave
    		// the local part (i.e. everything up to `@`) intact.
    		result = parts[0] + '@';
    		string = parts[1];
    	}
    	// Avoid `split(regex)` for IE8 compatibility. See #17.
    	string = string.replace(regexSeparators, '\x2E');
    	var labels = string.split('.');
    	var encoded = map(labels, fn).join('.');
    	return result + encoded;
    }

    /**
     * Creates an array containing the numeric code points of each Unicode
     * character in the string. While JavaScript uses UCS-2 internally,
     * this function will convert a pair of surrogate halves (each of which
     * UCS-2 exposes as separate characters) into a single code point,
     * matching UTF-16.
     * @see `punycode.ucs2.encode`
     * @see <https://mathiasbynens.be/notes/javascript-encoding>
     * @memberOf punycode.ucs2
     * @name decode
     * @param {String} string The Unicode input string (UCS-2).
     * @returns {Array} The new array of code points.
     */
    function ucs2decode(string) {
    	var output = [];
    	var counter = 0;
    	var length = string.length;
    	while (counter < length) {
    		var value = string.charCodeAt(counter++);
    		if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
    			// It's a high surrogate, and there is a next character.
    			var extra = string.charCodeAt(counter++);
    			if ((extra & 0xFC00) == 0xDC00) {
    				// Low surrogate.
    				output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
    			} else {
    				// It's an unmatched surrogate; only append this code unit, in case the
    				// next code unit is the high surrogate of a surrogate pair.
    				output.push(value);
    				counter--;
    			}
    		} else {
    			output.push(value);
    		}
    	}
    	return output;
    }

    /**
     * Creates a string based on an array of numeric code points.
     * @see `punycode.ucs2.decode`
     * @memberOf punycode.ucs2
     * @name encode
     * @param {Array} codePoints The array of numeric code points.
     * @returns {String} The new Unicode string (UCS-2).
     */
    var ucs2encode = function ucs2encode(array) {
    	return String.fromCodePoint.apply(String, toConsumableArray(array));
    };

    /**
     * Converts a basic code point into a digit/integer.
     * @see `digitToBasic()`
     * @private
     * @param {Number} codePoint The basic numeric code point value.
     * @returns {Number} The numeric value of a basic code point (for use in
     * representing integers) in the range `0` to `base - 1`, or `base` if
     * the code point does not represent a value.
     */
    var basicToDigit = function basicToDigit(codePoint) {
    	if (codePoint - 0x30 < 0x0A) {
    		return codePoint - 0x16;
    	}
    	if (codePoint - 0x41 < 0x1A) {
    		return codePoint - 0x41;
    	}
    	if (codePoint - 0x61 < 0x1A) {
    		return codePoint - 0x61;
    	}
    	return base;
    };

    /**
     * Converts a digit/integer into a basic code point.
     * @see `basicToDigit()`
     * @private
     * @param {Number} digit The numeric value of a basic code point.
     * @returns {Number} The basic code point whose value (when used for
     * representing integers) is `digit`, which needs to be in the range
     * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
     * used; else, the lowercase form is used. The behavior is undefined
     * if `flag` is non-zero and `digit` has no uppercase form.
     */
    var digitToBasic = function digitToBasic(digit, flag) {
    	//  0..25 map to ASCII a..z or A..Z
    	// 26..35 map to ASCII 0..9
    	return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
    };

    /**
     * Bias adaptation function as per section 3.4 of RFC 3492.
     * https://tools.ietf.org/html/rfc3492#section-3.4
     * @private
     */
    var adapt = function adapt(delta, numPoints, firstTime) {
    	var k = 0;
    	delta = firstTime ? floor(delta / damp) : delta >> 1;
    	delta += floor(delta / numPoints);
    	for (; /* no initialization */delta > baseMinusTMin * tMax >> 1; k += base) {
    		delta = floor(delta / baseMinusTMin);
    	}
    	return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
    };

    /**
     * Converts a Punycode string of ASCII-only symbols to a string of Unicode
     * symbols.
     * @memberOf punycode
     * @param {String} input The Punycode string of ASCII-only symbols.
     * @returns {String} The resulting string of Unicode symbols.
     */
    var decode = function decode(input) {
    	// Don't use UCS-2.
    	var output = [];
    	var inputLength = input.length;
    	var i = 0;
    	var n = initialN;
    	var bias = initialBias;

    	// Handle the basic code points: let `basic` be the number of input code
    	// points before the last delimiter, or `0` if there is none, then copy
    	// the first basic code points to the output.

    	var basic = input.lastIndexOf(delimiter);
    	if (basic < 0) {
    		basic = 0;
    	}

    	for (var j = 0; j < basic; ++j) {
    		// if it's not a basic code point
    		if (input.charCodeAt(j) >= 0x80) {
    			error$1('not-basic');
    		}
    		output.push(input.charCodeAt(j));
    	}

    	// Main decoding loop: start just after the last delimiter if any basic code
    	// points were copied; start at the beginning otherwise.

    	for (var index = basic > 0 ? basic + 1 : 0; index < inputLength;) /* no final expression */{

    		// `index` is the index of the next character to be consumed.
    		// Decode a generalized variable-length integer into `delta`,
    		// which gets added to `i`. The overflow checking is easier
    		// if we increase `i` as we go, then subtract off its starting
    		// value at the end to obtain `delta`.
    		var oldi = i;
    		for (var w = 1, k = base;; /* no condition */k += base) {

    			if (index >= inputLength) {
    				error$1('invalid-input');
    			}

    			var digit = basicToDigit(input.charCodeAt(index++));

    			if (digit >= base || digit > floor((maxInt - i) / w)) {
    				error$1('overflow');
    			}

    			i += digit * w;
    			var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

    			if (digit < t) {
    				break;
    			}

    			var baseMinusT = base - t;
    			if (w > floor(maxInt / baseMinusT)) {
    				error$1('overflow');
    			}

    			w *= baseMinusT;
    		}

    		var out = output.length + 1;
    		bias = adapt(i - oldi, out, oldi == 0);

    		// `i` was supposed to wrap around from `out` to `0`,
    		// incrementing `n` each time, so we'll fix that now:
    		if (floor(i / out) > maxInt - n) {
    			error$1('overflow');
    		}

    		n += floor(i / out);
    		i %= out;

    		// Insert `n` at position `i` of the output.
    		output.splice(i++, 0, n);
    	}

    	return String.fromCodePoint.apply(String, output);
    };

    /**
     * Converts a string of Unicode symbols (e.g. a domain name label) to a
     * Punycode string of ASCII-only symbols.
     * @memberOf punycode
     * @param {String} input The string of Unicode symbols.
     * @returns {String} The resulting Punycode string of ASCII-only symbols.
     */
    var encode = function encode(input) {
    	var output = [];

    	// Convert the input in UCS-2 to an array of Unicode code points.
    	input = ucs2decode(input);

    	// Cache the length.
    	var inputLength = input.length;

    	// Initialize the state.
    	var n = initialN;
    	var delta = 0;
    	var bias = initialBias;

    	// Handle the basic code points.
    	var _iteratorNormalCompletion = true;
    	var _didIteratorError = false;
    	var _iteratorError = undefined;

    	try {
    		for (var _iterator = input[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    			var _currentValue2 = _step.value;

    			if (_currentValue2 < 0x80) {
    				output.push(stringFromCharCode(_currentValue2));
    			}
    		}
    	} catch (err) {
    		_didIteratorError = true;
    		_iteratorError = err;
    	} finally {
    		try {
    			if (!_iteratorNormalCompletion && _iterator.return) {
    				_iterator.return();
    			}
    		} finally {
    			if (_didIteratorError) {
    				throw _iteratorError;
    			}
    		}
    	}

    	var basicLength = output.length;
    	var handledCPCount = basicLength;

    	// `handledCPCount` is the number of code points that have been handled;
    	// `basicLength` is the number of basic code points.

    	// Finish the basic string with a delimiter unless it's empty.
    	if (basicLength) {
    		output.push(delimiter);
    	}

    	// Main encoding loop:
    	while (handledCPCount < inputLength) {

    		// All non-basic code points < n have been handled already. Find the next
    		// larger one:
    		var m = maxInt;
    		var _iteratorNormalCompletion2 = true;
    		var _didIteratorError2 = false;
    		var _iteratorError2 = undefined;

    		try {
    			for (var _iterator2 = input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    				var currentValue = _step2.value;

    				if (currentValue >= n && currentValue < m) {
    					m = currentValue;
    				}
    			}

    			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
    			// but guard against overflow.
    		} catch (err) {
    			_didIteratorError2 = true;
    			_iteratorError2 = err;
    		} finally {
    			try {
    				if (!_iteratorNormalCompletion2 && _iterator2.return) {
    					_iterator2.return();
    				}
    			} finally {
    				if (_didIteratorError2) {
    					throw _iteratorError2;
    				}
    			}
    		}

    		var handledCPCountPlusOne = handledCPCount + 1;
    		if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
    			error$1('overflow');
    		}

    		delta += (m - n) * handledCPCountPlusOne;
    		n = m;

    		var _iteratorNormalCompletion3 = true;
    		var _didIteratorError3 = false;
    		var _iteratorError3 = undefined;

    		try {
    			for (var _iterator3 = input[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    				var _currentValue = _step3.value;

    				if (_currentValue < n && ++delta > maxInt) {
    					error$1('overflow');
    				}
    				if (_currentValue == n) {
    					// Represent delta as a generalized variable-length integer.
    					var q = delta;
    					for (var k = base;; /* no condition */k += base) {
    						var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
    						if (q < t) {
    							break;
    						}
    						var qMinusT = q - t;
    						var baseMinusT = base - t;
    						output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
    						q = floor(qMinusT / baseMinusT);
    					}

    					output.push(stringFromCharCode(digitToBasic(q, 0)));
    					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
    					delta = 0;
    					++handledCPCount;
    				}
    			}
    		} catch (err) {
    			_didIteratorError3 = true;
    			_iteratorError3 = err;
    		} finally {
    			try {
    				if (!_iteratorNormalCompletion3 && _iterator3.return) {
    					_iterator3.return();
    				}
    			} finally {
    				if (_didIteratorError3) {
    					throw _iteratorError3;
    				}
    			}
    		}

    		++delta;
    		++n;
    	}
    	return output.join('');
    };

    /**
     * Converts a Punycode string representing a domain name or an email address
     * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
     * it doesn't matter if you call it on a string that has already been
     * converted to Unicode.
     * @memberOf punycode
     * @param {String} input The Punycoded domain name or email address to
     * convert to Unicode.
     * @returns {String} The Unicode representation of the given Punycode
     * string.
     */
    var toUnicode = function toUnicode(input) {
    	return mapDomain(input, function (string) {
    		return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
    	});
    };

    /**
     * Converts a Unicode string representing a domain name or an email address to
     * Punycode. Only the non-ASCII parts of the domain name will be converted,
     * i.e. it doesn't matter if you call it with a domain that's already in
     * ASCII.
     * @memberOf punycode
     * @param {String} input The domain name or email address to convert, as a
     * Unicode string.
     * @returns {String} The Punycode representation of the given domain name or
     * email address.
     */
    var toASCII = function toASCII(input) {
    	return mapDomain(input, function (string) {
    		return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
    	});
    };

    /*--------------------------------------------------------------------------*/

    /** Define the public API */
    var punycode = {
    	/**
      * A string representing the current Punycode.js version number.
      * @memberOf punycode
      * @type String
      */
    	'version': '2.1.0',
    	/**
      * An object of methods to convert from JavaScript's internal character
      * representation (UCS-2) to Unicode code points, and back.
      * @see <https://mathiasbynens.be/notes/javascript-encoding>
      * @memberOf punycode
      * @type Object
      */
    	'ucs2': {
    		'decode': ucs2decode,
    		'encode': ucs2encode
    	},
    	'decode': decode,
    	'encode': encode,
    	'toASCII': toASCII,
    	'toUnicode': toUnicode
    };

    /**
     * URI.js
     *
     * @fileoverview An RFC 3986 compliant, scheme extendable URI parsing/validating/resolving library for JavaScript.
     * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
     * @see http://github.com/garycourt/uri-js
     */
    /**
     * Copyright 2011 Gary Court. All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without modification, are
     * permitted provided that the following conditions are met:
     *
     *    1. Redistributions of source code must retain the above copyright notice, this list of
     *       conditions and the following disclaimer.
     *
     *    2. Redistributions in binary form must reproduce the above copyright notice, this list
     *       of conditions and the following disclaimer in the documentation and/or other materials
     *       provided with the distribution.
     *
     * THIS SOFTWARE IS PROVIDED BY GARY COURT ``AS IS'' AND ANY EXPRESS OR IMPLIED
     * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
     * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL GARY COURT OR
     * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
     * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
     * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
     * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
     * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
     * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
     *
     * The views and conclusions contained in the software and documentation are those of the
     * authors and should not be interpreted as representing official policies, either expressed
     * or implied, of Gary Court.
     */
    var SCHEMES = {};
    function pctEncChar(chr) {
        var c = chr.charCodeAt(0);
        var e = void 0;
        if (c < 16) e = "%0" + c.toString(16).toUpperCase();else if (c < 128) e = "%" + c.toString(16).toUpperCase();else if (c < 2048) e = "%" + (c >> 6 | 192).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();else e = "%" + (c >> 12 | 224).toString(16).toUpperCase() + "%" + (c >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
        return e;
    }
    function pctDecChars(str) {
        var newStr = "";
        var i = 0;
        var il = str.length;
        while (i < il) {
            var c = parseInt(str.substr(i + 1, 2), 16);
            if (c < 128) {
                newStr += String.fromCharCode(c);
                i += 3;
            } else if (c >= 194 && c < 224) {
                if (il - i >= 6) {
                    var c2 = parseInt(str.substr(i + 4, 2), 16);
                    newStr += String.fromCharCode((c & 31) << 6 | c2 & 63);
                } else {
                    newStr += str.substr(i, 6);
                }
                i += 6;
            } else if (c >= 224) {
                if (il - i >= 9) {
                    var _c = parseInt(str.substr(i + 4, 2), 16);
                    var c3 = parseInt(str.substr(i + 7, 2), 16);
                    newStr += String.fromCharCode((c & 15) << 12 | (_c & 63) << 6 | c3 & 63);
                } else {
                    newStr += str.substr(i, 9);
                }
                i += 9;
            } else {
                newStr += str.substr(i, 3);
                i += 3;
            }
        }
        return newStr;
    }
    function _normalizeComponentEncoding(components, protocol) {
        function decodeUnreserved(str) {
            var decStr = pctDecChars(str);
            return !decStr.match(protocol.UNRESERVED) ? str : decStr;
        }
        if (components.scheme) components.scheme = String(components.scheme).replace(protocol.PCT_ENCODED, decodeUnreserved).toLowerCase().replace(protocol.NOT_SCHEME, "");
        if (components.userinfo !== undefined) components.userinfo = String(components.userinfo).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_USERINFO, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.host !== undefined) components.host = String(components.host).replace(protocol.PCT_ENCODED, decodeUnreserved).toLowerCase().replace(protocol.NOT_HOST, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.path !== undefined) components.path = String(components.path).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(components.scheme ? protocol.NOT_PATH : protocol.NOT_PATH_NOSCHEME, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.query !== undefined) components.query = String(components.query).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_QUERY, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.fragment !== undefined) components.fragment = String(components.fragment).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_FRAGMENT, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        return components;
    }

    function _stripLeadingZeros(str) {
        return str.replace(/^0*(.*)/, "$1") || "0";
    }
    function _normalizeIPv4(host, protocol) {
        var matches = host.match(protocol.IPV4ADDRESS) || [];

        var _matches = slicedToArray(matches, 2),
            address = _matches[1];

        if (address) {
            return address.split(".").map(_stripLeadingZeros).join(".");
        } else {
            return host;
        }
    }
    function _normalizeIPv6(host, protocol) {
        var matches = host.match(protocol.IPV6ADDRESS) || [];

        var _matches2 = slicedToArray(matches, 3),
            address = _matches2[1],
            zone = _matches2[2];

        if (address) {
            var _address$toLowerCase$ = address.toLowerCase().split('::').reverse(),
                _address$toLowerCase$2 = slicedToArray(_address$toLowerCase$, 2),
                last = _address$toLowerCase$2[0],
                first = _address$toLowerCase$2[1];

            var firstFields = first ? first.split(":").map(_stripLeadingZeros) : [];
            var lastFields = last.split(":").map(_stripLeadingZeros);
            var isLastFieldIPv4Address = protocol.IPV4ADDRESS.test(lastFields[lastFields.length - 1]);
            var fieldCount = isLastFieldIPv4Address ? 7 : 8;
            var lastFieldsStart = lastFields.length - fieldCount;
            var fields = Array(fieldCount);
            for (var x = 0; x < fieldCount; ++x) {
                fields[x] = firstFields[x] || lastFields[lastFieldsStart + x] || '';
            }
            if (isLastFieldIPv4Address) {
                fields[fieldCount - 1] = _normalizeIPv4(fields[fieldCount - 1], protocol);
            }
            var allZeroFields = fields.reduce(function (acc, field, index) {
                if (!field || field === "0") {
                    var lastLongest = acc[acc.length - 1];
                    if (lastLongest && lastLongest.index + lastLongest.length === index) {
                        lastLongest.length++;
                    } else {
                        acc.push({ index: index, length: 1 });
                    }
                }
                return acc;
            }, []);
            var longestZeroFields = allZeroFields.sort(function (a, b) {
                return b.length - a.length;
            })[0];
            var newHost = void 0;
            if (longestZeroFields && longestZeroFields.length > 1) {
                var newFirst = fields.slice(0, longestZeroFields.index);
                var newLast = fields.slice(longestZeroFields.index + longestZeroFields.length);
                newHost = newFirst.join(":") + "::" + newLast.join(":");
            } else {
                newHost = fields.join(":");
            }
            if (zone) {
                newHost += "%" + zone;
            }
            return newHost;
        } else {
            return host;
        }
    }
    var URI_PARSE = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i;
    var NO_MATCH_IS_UNDEFINED = "".match(/(){0}/)[1] === undefined;
    function parse(uriString) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var components = {};
        var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
        if (options.reference === "suffix") uriString = (options.scheme ? options.scheme + ":" : "") + "//" + uriString;
        var matches = uriString.match(URI_PARSE);
        if (matches) {
            if (NO_MATCH_IS_UNDEFINED) {
                //store each component
                components.scheme = matches[1];
                components.userinfo = matches[3];
                components.host = matches[4];
                components.port = parseInt(matches[5], 10);
                components.path = matches[6] || "";
                components.query = matches[7];
                components.fragment = matches[8];
                //fix port number
                if (isNaN(components.port)) {
                    components.port = matches[5];
                }
            } else {
                //IE FIX for improper RegExp matching
                //store each component
                components.scheme = matches[1] || undefined;
                components.userinfo = uriString.indexOf("@") !== -1 ? matches[3] : undefined;
                components.host = uriString.indexOf("//") !== -1 ? matches[4] : undefined;
                components.port = parseInt(matches[5], 10);
                components.path = matches[6] || "";
                components.query = uriString.indexOf("?") !== -1 ? matches[7] : undefined;
                components.fragment = uriString.indexOf("#") !== -1 ? matches[8] : undefined;
                //fix port number
                if (isNaN(components.port)) {
                    components.port = uriString.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? matches[4] : undefined;
                }
            }
            if (components.host) {
                //normalize IP hosts
                components.host = _normalizeIPv6(_normalizeIPv4(components.host, protocol), protocol);
            }
            //determine reference type
            if (components.scheme === undefined && components.userinfo === undefined && components.host === undefined && components.port === undefined && !components.path && components.query === undefined) {
                components.reference = "same-document";
            } else if (components.scheme === undefined) {
                components.reference = "relative";
            } else if (components.fragment === undefined) {
                components.reference = "absolute";
            } else {
                components.reference = "uri";
            }
            //check for reference errors
            if (options.reference && options.reference !== "suffix" && options.reference !== components.reference) {
                components.error = components.error || "URI is not a " + options.reference + " reference.";
            }
            //find scheme handler
            var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
            //check if scheme can't handle IRIs
            if (!options.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport)) {
                //if host component is a domain name
                if (components.host && (options.domainHost || schemeHandler && schemeHandler.domainHost)) {
                    //convert Unicode IDN -> ASCII IDN
                    try {
                        components.host = punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase());
                    } catch (e) {
                        components.error = components.error || "Host's domain name can not be converted to ASCII via punycode: " + e;
                    }
                }
                //convert IRI -> URI
                _normalizeComponentEncoding(components, URI_PROTOCOL);
            } else {
                //normalize encodings
                _normalizeComponentEncoding(components, protocol);
            }
            //perform scheme specific parsing
            if (schemeHandler && schemeHandler.parse) {
                schemeHandler.parse(components, options);
            }
        } else {
            components.error = components.error || "URI can not be parsed.";
        }
        return components;
    }

    function _recomposeAuthority(components, options) {
        var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
        var uriTokens = [];
        if (components.userinfo !== undefined) {
            uriTokens.push(components.userinfo);
            uriTokens.push("@");
        }
        if (components.host !== undefined) {
            //normalize IP hosts, add brackets and escape zone separator for IPv6
            uriTokens.push(_normalizeIPv6(_normalizeIPv4(String(components.host), protocol), protocol).replace(protocol.IPV6ADDRESS, function (_, $1, $2) {
                return "[" + $1 + ($2 ? "%25" + $2 : "") + "]";
            }));
        }
        if (typeof components.port === "number") {
            uriTokens.push(":");
            uriTokens.push(components.port.toString(10));
        }
        return uriTokens.length ? uriTokens.join("") : undefined;
    }

    var RDS1 = /^\.\.?\//;
    var RDS2 = /^\/\.(\/|$)/;
    var RDS3 = /^\/\.\.(\/|$)/;
    var RDS5 = /^\/?(?:.|\n)*?(?=\/|$)/;
    function removeDotSegments(input) {
        var output = [];
        while (input.length) {
            if (input.match(RDS1)) {
                input = input.replace(RDS1, "");
            } else if (input.match(RDS2)) {
                input = input.replace(RDS2, "/");
            } else if (input.match(RDS3)) {
                input = input.replace(RDS3, "/");
                output.pop();
            } else if (input === "." || input === "..") {
                input = "";
            } else {
                var im = input.match(RDS5);
                if (im) {
                    var s = im[0];
                    input = input.slice(s.length);
                    output.push(s);
                } else {
                    throw new Error("Unexpected dot segment condition");
                }
            }
        }
        return output.join("");
    }

    function serialize(components) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var protocol = options.iri ? IRI_PROTOCOL : URI_PROTOCOL;
        var uriTokens = [];
        //find scheme handler
        var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
        //perform scheme specific serialization
        if (schemeHandler && schemeHandler.serialize) schemeHandler.serialize(components, options);
        if (components.host) {
            //if host component is an IPv6 address
            if (protocol.IPV6ADDRESS.test(components.host)) ;
            //TODO: normalize IPv6 address as per RFC 5952

            //if host component is a domain name
            else if (options.domainHost || schemeHandler && schemeHandler.domainHost) {
                    //convert IDN via punycode
                    try {
                        components.host = !options.iri ? punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase()) : punycode.toUnicode(components.host);
                    } catch (e) {
                        components.error = components.error || "Host's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
                    }
                }
        }
        //normalize encoding
        _normalizeComponentEncoding(components, protocol);
        if (options.reference !== "suffix" && components.scheme) {
            uriTokens.push(components.scheme);
            uriTokens.push(":");
        }
        var authority = _recomposeAuthority(components, options);
        if (authority !== undefined) {
            if (options.reference !== "suffix") {
                uriTokens.push("//");
            }
            uriTokens.push(authority);
            if (components.path && components.path.charAt(0) !== "/") {
                uriTokens.push("/");
            }
        }
        if (components.path !== undefined) {
            var s = components.path;
            if (!options.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) {
                s = removeDotSegments(s);
            }
            if (authority === undefined) {
                s = s.replace(/^\/\//, "/%2F"); //don't allow the path to start with "//"
            }
            uriTokens.push(s);
        }
        if (components.query !== undefined) {
            uriTokens.push("?");
            uriTokens.push(components.query);
        }
        if (components.fragment !== undefined) {
            uriTokens.push("#");
            uriTokens.push(components.fragment);
        }
        return uriTokens.join(""); //merge tokens into a string
    }

    function resolveComponents(base, relative) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var skipNormalization = arguments[3];

        var target = {};
        if (!skipNormalization) {
            base = parse(serialize(base, options), options); //normalize base components
            relative = parse(serialize(relative, options), options); //normalize relative components
        }
        options = options || {};
        if (!options.tolerant && relative.scheme) {
            target.scheme = relative.scheme;
            //target.authority = relative.authority;
            target.userinfo = relative.userinfo;
            target.host = relative.host;
            target.port = relative.port;
            target.path = removeDotSegments(relative.path || "");
            target.query = relative.query;
        } else {
            if (relative.userinfo !== undefined || relative.host !== undefined || relative.port !== undefined) {
                //target.authority = relative.authority;
                target.userinfo = relative.userinfo;
                target.host = relative.host;
                target.port = relative.port;
                target.path = removeDotSegments(relative.path || "");
                target.query = relative.query;
            } else {
                if (!relative.path) {
                    target.path = base.path;
                    if (relative.query !== undefined) {
                        target.query = relative.query;
                    } else {
                        target.query = base.query;
                    }
                } else {
                    if (relative.path.charAt(0) === "/") {
                        target.path = removeDotSegments(relative.path);
                    } else {
                        if ((base.userinfo !== undefined || base.host !== undefined || base.port !== undefined) && !base.path) {
                            target.path = "/" + relative.path;
                        } else if (!base.path) {
                            target.path = relative.path;
                        } else {
                            target.path = base.path.slice(0, base.path.lastIndexOf("/") + 1) + relative.path;
                        }
                        target.path = removeDotSegments(target.path);
                    }
                    target.query = relative.query;
                }
                //target.authority = base.authority;
                target.userinfo = base.userinfo;
                target.host = base.host;
                target.port = base.port;
            }
            target.scheme = base.scheme;
        }
        target.fragment = relative.fragment;
        return target;
    }

    function resolve(baseURI, relativeURI, options) {
        var schemelessOptions = assign({ scheme: 'null' }, options);
        return serialize(resolveComponents(parse(baseURI, schemelessOptions), parse(relativeURI, schemelessOptions), schemelessOptions, true), schemelessOptions);
    }

    function normalize(uri, options) {
        if (typeof uri === "string") {
            uri = serialize(parse(uri, options), options);
        } else if (typeOf(uri) === "object") {
            uri = parse(serialize(uri, options), options);
        }
        return uri;
    }

    function equal(uriA, uriB, options) {
        if (typeof uriA === "string") {
            uriA = serialize(parse(uriA, options), options);
        } else if (typeOf(uriA) === "object") {
            uriA = serialize(uriA, options);
        }
        if (typeof uriB === "string") {
            uriB = serialize(parse(uriB, options), options);
        } else if (typeOf(uriB) === "object") {
            uriB = serialize(uriB, options);
        }
        return uriA === uriB;
    }

    function escapeComponent(str, options) {
        return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.ESCAPE : IRI_PROTOCOL.ESCAPE, pctEncChar);
    }

    function unescapeComponent(str, options) {
        return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.PCT_ENCODED : IRI_PROTOCOL.PCT_ENCODED, pctDecChars);
    }

    var handler = {
        scheme: "http",
        domainHost: true,
        parse: function parse(components, options) {
            //report missing host
            if (!components.host) {
                components.error = components.error || "HTTP URIs must have a host.";
            }
            return components;
        },
        serialize: function serialize(components, options) {
            //normalize the default port
            if (components.port === (String(components.scheme).toLowerCase() !== "https" ? 80 : 443) || components.port === "") {
                components.port = undefined;
            }
            //normalize the empty path
            if (!components.path) {
                components.path = "/";
            }
            //NOTE: We do not parse query strings for HTTP URIs
            //as WWW Form Url Encoded query strings are part of the HTML4+ spec,
            //and not the HTTP spec.
            return components;
        }
    };

    var handler$1 = {
        scheme: "https",
        domainHost: handler.domainHost,
        parse: handler.parse,
        serialize: handler.serialize
    };

    var O = {};
    //RFC 3986
    var UNRESERVED$$ = "[A-Za-z0-9\\-\\.\\_\\~" + ( "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF" ) + "]";
    var HEXDIG$$ = "[0-9A-Fa-f]"; //case-insensitive
    var PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$)); //expanded
    //RFC 5322, except these symbols as per RFC 6068: @ : / ? # [ ] & ; =
    //const ATEXT$$ = "[A-Za-z0-9\\!\\#\\$\\%\\&\\'\\*\\+\\-\\/\\=\\?\\^\\_\\`\\{\\|\\}\\~]";
    //const WSP$$ = "[\\x20\\x09]";
    //const OBS_QTEXT$$ = "[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x7F]";  //(%d1-8 / %d11-12 / %d14-31 / %d127)
    //const QTEXT$$ = merge("[\\x21\\x23-\\x5B\\x5D-\\x7E]", OBS_QTEXT$$);  //%d33 / %d35-91 / %d93-126 / obs-qtext
    //const VCHAR$$ = "[\\x21-\\x7E]";
    //const WSP$$ = "[\\x20\\x09]";
    //const OBS_QP$ = subexp("\\\\" + merge("[\\x00\\x0D\\x0A]", OBS_QTEXT$$));  //%d0 / CR / LF / obs-qtext
    //const FWS$ = subexp(subexp(WSP$$ + "*" + "\\x0D\\x0A") + "?" + WSP$$ + "+");
    //const QUOTED_PAIR$ = subexp(subexp("\\\\" + subexp(VCHAR$$ + "|" + WSP$$)) + "|" + OBS_QP$);
    //const QUOTED_STRING$ = subexp('\\"' + subexp(FWS$ + "?" + QCONTENT$) + "*" + FWS$ + "?" + '\\"');
    var ATEXT$$ = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]";
    var QTEXT$$ = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]";
    var VCHAR$$ = merge(QTEXT$$, "[\\\"\\\\]");
    var SOME_DELIMS$$ = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]";
    var UNRESERVED = new RegExp(UNRESERVED$$, "g");
    var PCT_ENCODED = new RegExp(PCT_ENCODED$, "g");
    var NOT_LOCAL_PART = new RegExp(merge("[^]", ATEXT$$, "[\\.]", '[\\"]', VCHAR$$), "g");
    var NOT_HFNAME = new RegExp(merge("[^]", UNRESERVED$$, SOME_DELIMS$$), "g");
    var NOT_HFVALUE = NOT_HFNAME;
    function decodeUnreserved(str) {
        var decStr = pctDecChars(str);
        return !decStr.match(UNRESERVED) ? str : decStr;
    }
    var handler$2 = {
        scheme: "mailto",
        parse: function parse$$1(components, options) {
            var mailtoComponents = components;
            var to = mailtoComponents.to = mailtoComponents.path ? mailtoComponents.path.split(",") : [];
            mailtoComponents.path = undefined;
            if (mailtoComponents.query) {
                var unknownHeaders = false;
                var headers = {};
                var hfields = mailtoComponents.query.split("&");
                for (var x = 0, xl = hfields.length; x < xl; ++x) {
                    var hfield = hfields[x].split("=");
                    switch (hfield[0]) {
                        case "to":
                            var toAddrs = hfield[1].split(",");
                            for (var _x = 0, _xl = toAddrs.length; _x < _xl; ++_x) {
                                to.push(toAddrs[_x]);
                            }
                            break;
                        case "subject":
                            mailtoComponents.subject = unescapeComponent(hfield[1], options);
                            break;
                        case "body":
                            mailtoComponents.body = unescapeComponent(hfield[1], options);
                            break;
                        default:
                            unknownHeaders = true;
                            headers[unescapeComponent(hfield[0], options)] = unescapeComponent(hfield[1], options);
                            break;
                    }
                }
                if (unknownHeaders) mailtoComponents.headers = headers;
            }
            mailtoComponents.query = undefined;
            for (var _x2 = 0, _xl2 = to.length; _x2 < _xl2; ++_x2) {
                var addr = to[_x2].split("@");
                addr[0] = unescapeComponent(addr[0]);
                if (!options.unicodeSupport) {
                    //convert Unicode IDN -> ASCII IDN
                    try {
                        addr[1] = punycode.toASCII(unescapeComponent(addr[1], options).toLowerCase());
                    } catch (e) {
                        mailtoComponents.error = mailtoComponents.error || "Email address's domain name can not be converted to ASCII via punycode: " + e;
                    }
                } else {
                    addr[1] = unescapeComponent(addr[1], options).toLowerCase();
                }
                to[_x2] = addr.join("@");
            }
            return mailtoComponents;
        },
        serialize: function serialize$$1(mailtoComponents, options) {
            var components = mailtoComponents;
            var to = toArray(mailtoComponents.to);
            if (to) {
                for (var x = 0, xl = to.length; x < xl; ++x) {
                    var toAddr = String(to[x]);
                    var atIdx = toAddr.lastIndexOf("@");
                    var localPart = toAddr.slice(0, atIdx).replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_LOCAL_PART, pctEncChar);
                    var domain = toAddr.slice(atIdx + 1);
                    //convert IDN via punycode
                    try {
                        domain = !options.iri ? punycode.toASCII(unescapeComponent(domain, options).toLowerCase()) : punycode.toUnicode(domain);
                    } catch (e) {
                        components.error = components.error || "Email address's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
                    }
                    to[x] = localPart + "@" + domain;
                }
                components.path = to.join(",");
            }
            var headers = mailtoComponents.headers = mailtoComponents.headers || {};
            if (mailtoComponents.subject) headers["subject"] = mailtoComponents.subject;
            if (mailtoComponents.body) headers["body"] = mailtoComponents.body;
            var fields = [];
            for (var name in headers) {
                if (headers[name] !== O[name]) {
                    fields.push(name.replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFNAME, pctEncChar) + "=" + headers[name].replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFVALUE, pctEncChar));
                }
            }
            if (fields.length) {
                components.query = fields.join("&");
            }
            return components;
        }
    };

    var URN_PARSE = /^([^\:]+)\:(.*)/;
    //RFC 2141
    var handler$3 = {
        scheme: "urn",
        parse: function parse$$1(components, options) {
            var matches = components.path && components.path.match(URN_PARSE);
            var urnComponents = components;
            if (matches) {
                var scheme = options.scheme || urnComponents.scheme || "urn";
                var nid = matches[1].toLowerCase();
                var nss = matches[2];
                var urnScheme = scheme + ":" + (options.nid || nid);
                var schemeHandler = SCHEMES[urnScheme];
                urnComponents.nid = nid;
                urnComponents.nss = nss;
                urnComponents.path = undefined;
                if (schemeHandler) {
                    urnComponents = schemeHandler.parse(urnComponents, options);
                }
            } else {
                urnComponents.error = urnComponents.error || "URN can not be parsed.";
            }
            return urnComponents;
        },
        serialize: function serialize$$1(urnComponents, options) {
            var scheme = options.scheme || urnComponents.scheme || "urn";
            var nid = urnComponents.nid;
            var urnScheme = scheme + ":" + (options.nid || nid);
            var schemeHandler = SCHEMES[urnScheme];
            if (schemeHandler) {
                urnComponents = schemeHandler.serialize(urnComponents, options);
            }
            var uriComponents = urnComponents;
            var nss = urnComponents.nss;
            uriComponents.path = (nid || options.nid) + ":" + nss;
            return uriComponents;
        }
    };

    var UUID = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/;
    //RFC 4122
    var handler$4 = {
        scheme: "urn:uuid",
        parse: function parse(urnComponents, options) {
            var uuidComponents = urnComponents;
            uuidComponents.uuid = uuidComponents.nss;
            uuidComponents.nss = undefined;
            if (!options.tolerant && (!uuidComponents.uuid || !uuidComponents.uuid.match(UUID))) {
                uuidComponents.error = uuidComponents.error || "UUID is not valid.";
            }
            return uuidComponents;
        },
        serialize: function serialize(uuidComponents, options) {
            var urnComponents = uuidComponents;
            //normalize UUID
            urnComponents.nss = (uuidComponents.uuid || "").toLowerCase();
            return urnComponents;
        }
    };

    SCHEMES[handler.scheme] = handler;
    SCHEMES[handler$1.scheme] = handler$1;
    SCHEMES[handler$2.scheme] = handler$2;
    SCHEMES[handler$3.scheme] = handler$3;
    SCHEMES[handler$4.scheme] = handler$4;

    exports.SCHEMES = SCHEMES;
    exports.pctEncChar = pctEncChar;
    exports.pctDecChars = pctDecChars;
    exports.parse = parse;
    exports.removeDotSegments = removeDotSegments;
    exports.serialize = serialize;
    exports.resolveComponents = resolveComponents;
    exports.resolve = resolve;
    exports.normalize = normalize;
    exports.equal = equal;
    exports.escapeComponent = escapeComponent;
    exports.unescapeComponent = unescapeComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

    })));

    });

    unwrapExports(uri_all);

    var isArray = Array.isArray;
    var keyList = Object.keys;
    var hasProp = Object.prototype.hasOwnProperty;

    var fastDeepEqual = function equal(a, b) {
      if (a === b) return true;

      if (a && b && typeof a == 'object' && typeof b == 'object') {
        var arrA = isArray(a)
          , arrB = isArray(b)
          , i
          , length
          , key;

        if (arrA && arrB) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0;)
            if (!equal(a[i], b[i])) return false;
          return true;
        }

        if (arrA != arrB) return false;

        var dateA = a instanceof Date
          , dateB = b instanceof Date;
        if (dateA != dateB) return false;
        if (dateA && dateB) return a.getTime() == b.getTime();

        var regexpA = a instanceof RegExp
          , regexpB = b instanceof RegExp;
        if (regexpA != regexpB) return false;
        if (regexpA && regexpB) return a.toString() == b.toString();

        var keys = keyList(a);
        length = keys.length;

        if (length !== keyList(b).length)
          return false;

        for (i = length; i-- !== 0;)
          if (!hasProp.call(b, keys[i])) return false;

        for (i = length; i-- !== 0;) {
          key = keys[i];
          if (!equal(a[key], b[key])) return false;
        }

        return true;
      }

      return a!==a && b!==b;
    };

    // https://mathiasbynens.be/notes/javascript-encoding
    // https://github.com/bestiejs/punycode.js - punycode.ucs2.decode
    var ucs2length = function ucs2length(str) {
      var length = 0
        , len = str.length
        , pos = 0
        , value;
      while (pos < len) {
        length++;
        value = str.charCodeAt(pos++);
        if (value >= 0xD800 && value <= 0xDBFF && pos < len) {
          // high surrogate, and there is a next character
          value = str.charCodeAt(pos);
          if ((value & 0xFC00) == 0xDC00) pos++; // low surrogate
        }
      }
      return length;
    };

    var util = {
      copy: copy,
      checkDataType: checkDataType,
      checkDataTypes: checkDataTypes,
      coerceToTypes: coerceToTypes,
      toHash: toHash,
      getProperty: getProperty,
      escapeQuotes: escapeQuotes,
      equal: fastDeepEqual,
      ucs2length: ucs2length,
      varOccurences: varOccurences,
      varReplace: varReplace,
      cleanUpCode: cleanUpCode,
      finalCleanUpCode: finalCleanUpCode,
      schemaHasRules: schemaHasRules,
      schemaHasRulesExcept: schemaHasRulesExcept,
      schemaUnknownRules: schemaUnknownRules,
      toQuotedString: toQuotedString,
      getPathExpr: getPathExpr,
      getPath: getPath,
      getData: getData,
      unescapeFragment: unescapeFragment,
      unescapeJsonPointer: unescapeJsonPointer,
      escapeFragment: escapeFragment,
      escapeJsonPointer: escapeJsonPointer
    };


    function copy(o, to) {
      to = to || {};
      for (var key in o) to[key] = o[key];
      return to;
    }


    function checkDataType(dataType, data, negate) {
      var EQUAL = negate ? ' !== ' : ' === '
        , AND = negate ? ' || ' : ' && '
        , OK = negate ? '!' : ''
        , NOT = negate ? '' : '!';
      switch (dataType) {
        case 'null': return data + EQUAL + 'null';
        case 'array': return OK + 'Array.isArray(' + data + ')';
        case 'object': return '(' + OK + data + AND +
                              'typeof ' + data + EQUAL + '"object"' + AND +
                              NOT + 'Array.isArray(' + data + '))';
        case 'integer': return '(typeof ' + data + EQUAL + '"number"' + AND +
                               NOT + '(' + data + ' % 1)' +
                               AND + data + EQUAL + data + ')';
        default: return 'typeof ' + data + EQUAL + '"' + dataType + '"';
      }
    }


    function checkDataTypes(dataTypes, data) {
      switch (dataTypes.length) {
        case 1: return checkDataType(dataTypes[0], data, true);
        default:
          var code = '';
          var types = toHash(dataTypes);
          if (types.array && types.object) {
            code = types.null ? '(': '(!' + data + ' || ';
            code += 'typeof ' + data + ' !== "object")';
            delete types.null;
            delete types.array;
            delete types.object;
          }
          if (types.number) delete types.integer;
          for (var t in types)
            code += (code ? ' && ' : '' ) + checkDataType(t, data, true);

          return code;
      }
    }


    var COERCE_TO_TYPES = toHash([ 'string', 'number', 'integer', 'boolean', 'null' ]);
    function coerceToTypes(optionCoerceTypes, dataTypes) {
      if (Array.isArray(dataTypes)) {
        var types = [];
        for (var i=0; i<dataTypes.length; i++) {
          var t = dataTypes[i];
          if (COERCE_TO_TYPES[t]) types[types.length] = t;
          else if (optionCoerceTypes === 'array' && t === 'array') types[types.length] = t;
        }
        if (types.length) return types;
      } else if (COERCE_TO_TYPES[dataTypes]) {
        return [dataTypes];
      } else if (optionCoerceTypes === 'array' && dataTypes === 'array') {
        return ['array'];
      }
    }


    function toHash(arr) {
      var hash = {};
      for (var i=0; i<arr.length; i++) hash[arr[i]] = true;
      return hash;
    }


    var IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    var SINGLE_QUOTE = /'|\\/g;
    function getProperty(key) {
      return typeof key == 'number'
              ? '[' + key + ']'
              : IDENTIFIER.test(key)
                ? '.' + key
                : "['" + escapeQuotes(key) + "']";
    }


    function escapeQuotes(str) {
      return str.replace(SINGLE_QUOTE, '\\$&')
                .replace(/\n/g, '\\n')
                .replace(/\r/g, '\\r')
                .replace(/\f/g, '\\f')
                .replace(/\t/g, '\\t');
    }


    function varOccurences(str, dataVar) {
      dataVar += '[^0-9]';
      var matches = str.match(new RegExp(dataVar, 'g'));
      return matches ? matches.length : 0;
    }


    function varReplace(str, dataVar, expr) {
      dataVar += '([^0-9])';
      expr = expr.replace(/\$/g, '$$$$');
      return str.replace(new RegExp(dataVar, 'g'), expr + '$1');
    }


    var EMPTY_ELSE = /else\s*{\s*}/g
      , EMPTY_IF_NO_ELSE = /if\s*\([^)]+\)\s*\{\s*\}(?!\s*else)/g
      , EMPTY_IF_WITH_ELSE = /if\s*\(([^)]+)\)\s*\{\s*\}\s*else(?!\s*if)/g;
    function cleanUpCode(out) {
      return out.replace(EMPTY_ELSE, '')
                .replace(EMPTY_IF_NO_ELSE, '')
                .replace(EMPTY_IF_WITH_ELSE, 'if (!($1))');
    }


    var ERRORS_REGEXP = /[^v.]errors/g
      , REMOVE_ERRORS = /var errors = 0;|var vErrors = null;|validate.errors = vErrors;/g
      , REMOVE_ERRORS_ASYNC = /var errors = 0;|var vErrors = null;/g
      , RETURN_VALID = 'return errors === 0;'
      , RETURN_TRUE = 'validate.errors = null; return true;'
      , RETURN_ASYNC = /if \(errors === 0\) return data;\s*else throw new ValidationError\(vErrors\);/
      , RETURN_DATA_ASYNC = 'return data;'
      , ROOTDATA_REGEXP = /[^A-Za-z_$]rootData[^A-Za-z0-9_$]/g
      , REMOVE_ROOTDATA = /if \(rootData === undefined\) rootData = data;/;

    function finalCleanUpCode(out, async) {
      var matches = out.match(ERRORS_REGEXP);
      if (matches && matches.length == 2) {
        out = async
              ? out.replace(REMOVE_ERRORS_ASYNC, '')
                   .replace(RETURN_ASYNC, RETURN_DATA_ASYNC)
              : out.replace(REMOVE_ERRORS, '')
                   .replace(RETURN_VALID, RETURN_TRUE);
      }

      matches = out.match(ROOTDATA_REGEXP);
      if (!matches || matches.length !== 3) return out;
      return out.replace(REMOVE_ROOTDATA, '');
    }


    function schemaHasRules(schema, rules) {
      if (typeof schema == 'boolean') return !schema;
      for (var key in schema) if (rules[key]) return true;
    }


    function schemaHasRulesExcept(schema, rules, exceptKeyword) {
      if (typeof schema == 'boolean') return !schema && exceptKeyword != 'not';
      for (var key in schema) if (key != exceptKeyword && rules[key]) return true;
    }


    function schemaUnknownRules(schema, rules) {
      if (typeof schema == 'boolean') return;
      for (var key in schema) if (!rules[key]) return key;
    }


    function toQuotedString(str) {
      return '\'' + escapeQuotes(str) + '\'';
    }


    function getPathExpr(currentPath, expr, jsonPointers, isNumber) {
      var path = jsonPointers // false by default
                  ? '\'/\' + ' + expr + (isNumber ? '' : '.replace(/~/g, \'~0\').replace(/\\//g, \'~1\')')
                  : (isNumber ? '\'[\' + ' + expr + ' + \']\'' : '\'[\\\'\' + ' + expr + ' + \'\\\']\'');
      return joinPaths(currentPath, path);
    }


    function getPath(currentPath, prop, jsonPointers) {
      var path = jsonPointers // false by default
                  ? toQuotedString('/' + escapeJsonPointer(prop))
                  : toQuotedString(getProperty(prop));
      return joinPaths(currentPath, path);
    }


    var JSON_POINTER = /^\/(?:[^~]|~0|~1)*$/;
    var RELATIVE_JSON_POINTER = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
    function getData($data, lvl, paths) {
      var up, jsonPointer, data, matches;
      if ($data === '') return 'rootData';
      if ($data[0] == '/') {
        if (!JSON_POINTER.test($data)) throw new Error('Invalid JSON-pointer: ' + $data);
        jsonPointer = $data;
        data = 'rootData';
      } else {
        matches = $data.match(RELATIVE_JSON_POINTER);
        if (!matches) throw new Error('Invalid JSON-pointer: ' + $data);
        up = +matches[1];
        jsonPointer = matches[2];
        if (jsonPointer == '#') {
          if (up >= lvl) throw new Error('Cannot access property/index ' + up + ' levels up, current level is ' + lvl);
          return paths[lvl - up];
        }

        if (up > lvl) throw new Error('Cannot access data ' + up + ' levels up, current level is ' + lvl);
        data = 'data' + ((lvl - up) || '');
        if (!jsonPointer) return data;
      }

      var expr = data;
      var segments = jsonPointer.split('/');
      for (var i=0; i<segments.length; i++) {
        var segment = segments[i];
        if (segment) {
          data += getProperty(unescapeJsonPointer(segment));
          expr += ' && ' + data;
        }
      }
      return expr;
    }


    function joinPaths (a, b) {
      if (a == '""') return b;
      return (a + ' + ' + b).replace(/' \+ '/g, '');
    }


    function unescapeFragment(str) {
      return unescapeJsonPointer(decodeURIComponent(str));
    }


    function escapeFragment(str) {
      return encodeURIComponent(escapeJsonPointer(str));
    }


    function escapeJsonPointer(str) {
      return str.replace(/~/g, '~0').replace(/\//g, '~1');
    }


    function unescapeJsonPointer(str) {
      return str.replace(/~1/g, '/').replace(/~0/g, '~');
    }

    var schema_obj = SchemaObject;

    function SchemaObject(obj) {
      util.copy(obj, this);
    }

    var jsonSchemaTraverse = createCommonjsModule(function (module) {

    var traverse = module.exports = function (schema, opts, cb) {
      // Legacy support for v0.3.1 and earlier.
      if (typeof opts == 'function') {
        cb = opts;
        opts = {};
      }

      cb = opts.cb || cb;
      var pre = (typeof cb == 'function') ? cb : cb.pre || function() {};
      var post = cb.post || function() {};

      _traverse(opts, pre, post, schema, '', schema);
    };


    traverse.keywords = {
      additionalItems: true,
      items: true,
      contains: true,
      additionalProperties: true,
      propertyNames: true,
      not: true
    };

    traverse.arrayKeywords = {
      items: true,
      allOf: true,
      anyOf: true,
      oneOf: true
    };

    traverse.propsKeywords = {
      definitions: true,
      properties: true,
      patternProperties: true,
      dependencies: true
    };

    traverse.skipKeywords = {
      default: true,
      enum: true,
      const: true,
      required: true,
      maximum: true,
      minimum: true,
      exclusiveMaximum: true,
      exclusiveMinimum: true,
      multipleOf: true,
      maxLength: true,
      minLength: true,
      pattern: true,
      format: true,
      maxItems: true,
      minItems: true,
      uniqueItems: true,
      maxProperties: true,
      minProperties: true
    };


    function _traverse(opts, pre, post, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
      if (schema && typeof schema == 'object' && !Array.isArray(schema)) {
        pre(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
        for (var key in schema) {
          var sch = schema[key];
          if (Array.isArray(sch)) {
            if (key in traverse.arrayKeywords) {
              for (var i=0; i<sch.length; i++)
                _traverse(opts, pre, post, sch[i], jsonPtr + '/' + key + '/' + i, rootSchema, jsonPtr, key, schema, i);
            }
          } else if (key in traverse.propsKeywords) {
            if (sch && typeof sch == 'object') {
              for (var prop in sch)
                _traverse(opts, pre, post, sch[prop], jsonPtr + '/' + key + '/' + escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);
            }
          } else if (key in traverse.keywords || (opts.allKeys && !(key in traverse.skipKeywords))) {
            _traverse(opts, pre, post, sch, jsonPtr + '/' + key, rootSchema, jsonPtr, key, schema);
          }
        }
        post(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
      }
    }


    function escapeJsonPtr(str) {
      return str.replace(/~/g, '~0').replace(/\//g, '~1');
    }
    });

    var resolve_1 = resolve;

    resolve.normalizeId = normalizeId;
    resolve.fullPath = getFullPath;
    resolve.url = resolveUrl;
    resolve.ids = resolveIds;
    resolve.inlineRef = inlineRef;
    resolve.schema = resolveSchema;

    /**
     * [resolve and compile the references ($ref)]
     * @this   Ajv
     * @param  {Function} compile reference to schema compilation funciton (localCompile)
     * @param  {Object} root object with information about the root schema for the current schema
     * @param  {String} ref reference to resolve
     * @return {Object|Function} schema object (if the schema can be inlined) or validation function
     */
    function resolve(compile, root, ref) {
      /* jshint validthis: true */
      var refVal = this._refs[ref];
      if (typeof refVal == 'string') {
        if (this._refs[refVal]) refVal = this._refs[refVal];
        else return resolve.call(this, compile, root, refVal);
      }

      refVal = refVal || this._schemas[ref];
      if (refVal instanceof schema_obj) {
        return inlineRef(refVal.schema, this._opts.inlineRefs)
                ? refVal.schema
                : refVal.validate || this._compile(refVal);
      }

      var res = resolveSchema.call(this, root, ref);
      var schema, v, baseId;
      if (res) {
        schema = res.schema;
        root = res.root;
        baseId = res.baseId;
      }

      if (schema instanceof schema_obj) {
        v = schema.validate || compile.call(this, schema.schema, root, undefined, baseId);
      } else if (schema !== undefined) {
        v = inlineRef(schema, this._opts.inlineRefs)
            ? schema
            : compile.call(this, schema, root, undefined, baseId);
      }

      return v;
    }


    /**
     * Resolve schema, its root and baseId
     * @this Ajv
     * @param  {Object} root root object with properties schema, refVal, refs
     * @param  {String} ref  reference to resolve
     * @return {Object} object with properties schema, root, baseId
     */
    function resolveSchema(root, ref) {
      /* jshint validthis: true */
      var p = uri_all.parse(ref)
        , refPath = _getFullPath(p)
        , baseId = getFullPath(this._getId(root.schema));
      if (Object.keys(root.schema).length === 0 || refPath !== baseId) {
        var id = normalizeId(refPath);
        var refVal = this._refs[id];
        if (typeof refVal == 'string') {
          return resolveRecursive.call(this, root, refVal, p);
        } else if (refVal instanceof schema_obj) {
          if (!refVal.validate) this._compile(refVal);
          root = refVal;
        } else {
          refVal = this._schemas[id];
          if (refVal instanceof schema_obj) {
            if (!refVal.validate) this._compile(refVal);
            if (id == normalizeId(ref))
              return { schema: refVal, root: root, baseId: baseId };
            root = refVal;
          } else {
            return;
          }
        }
        if (!root.schema) return;
        baseId = getFullPath(this._getId(root.schema));
      }
      return getJsonPointer.call(this, p, baseId, root.schema, root);
    }


    /* @this Ajv */
    function resolveRecursive(root, ref, parsedRef) {
      /* jshint validthis: true */
      var res = resolveSchema.call(this, root, ref);
      if (res) {
        var schema = res.schema;
        var baseId = res.baseId;
        root = res.root;
        var id = this._getId(schema);
        if (id) baseId = resolveUrl(baseId, id);
        return getJsonPointer.call(this, parsedRef, baseId, schema, root);
      }
    }


    var PREVENT_SCOPE_CHANGE = util.toHash(['properties', 'patternProperties', 'enum', 'dependencies', 'definitions']);
    /* @this Ajv */
    function getJsonPointer(parsedRef, baseId, schema, root) {
      /* jshint validthis: true */
      parsedRef.fragment = parsedRef.fragment || '';
      if (parsedRef.fragment.slice(0,1) != '/') return;
      var parts = parsedRef.fragment.split('/');

      for (var i = 1; i < parts.length; i++) {
        var part = parts[i];
        if (part) {
          part = util.unescapeFragment(part);
          schema = schema[part];
          if (schema === undefined) break;
          var id;
          if (!PREVENT_SCOPE_CHANGE[part]) {
            id = this._getId(schema);
            if (id) baseId = resolveUrl(baseId, id);
            if (schema.$ref) {
              var $ref = resolveUrl(baseId, schema.$ref);
              var res = resolveSchema.call(this, root, $ref);
              if (res) {
                schema = res.schema;
                root = res.root;
                baseId = res.baseId;
              }
            }
          }
        }
      }
      if (schema !== undefined && schema !== root.schema)
        return { schema: schema, root: root, baseId: baseId };
    }


    var SIMPLE_INLINED = util.toHash([
      'type', 'format', 'pattern',
      'maxLength', 'minLength',
      'maxProperties', 'minProperties',
      'maxItems', 'minItems',
      'maximum', 'minimum',
      'uniqueItems', 'multipleOf',
      'required', 'enum'
    ]);
    function inlineRef(schema, limit) {
      if (limit === false) return false;
      if (limit === undefined || limit === true) return checkNoRef(schema);
      else if (limit) return countKeys(schema) <= limit;
    }


    function checkNoRef(schema) {
      var item;
      if (Array.isArray(schema)) {
        for (var i=0; i<schema.length; i++) {
          item = schema[i];
          if (typeof item == 'object' && !checkNoRef(item)) return false;
        }
      } else {
        for (var key in schema) {
          if (key == '$ref') return false;
          item = schema[key];
          if (typeof item == 'object' && !checkNoRef(item)) return false;
        }
      }
      return true;
    }


    function countKeys(schema) {
      var count = 0, item;
      if (Array.isArray(schema)) {
        for (var i=0; i<schema.length; i++) {
          item = schema[i];
          if (typeof item == 'object') count += countKeys(item);
          if (count == Infinity) return Infinity;
        }
      } else {
        for (var key in schema) {
          if (key == '$ref') return Infinity;
          if (SIMPLE_INLINED[key]) {
            count++;
          } else {
            item = schema[key];
            if (typeof item == 'object') count += countKeys(item) + 1;
            if (count == Infinity) return Infinity;
          }
        }
      }
      return count;
    }


    function getFullPath(id, normalize) {
      if (normalize !== false) id = normalizeId(id);
      var p = uri_all.parse(id);
      return _getFullPath(p);
    }


    function _getFullPath(p) {
      return uri_all.serialize(p).split('#')[0] + '#';
    }


    var TRAILING_SLASH_HASH = /#\/?$/;
    function normalizeId(id) {
      return id ? id.replace(TRAILING_SLASH_HASH, '') : '';
    }


    function resolveUrl(baseId, id) {
      id = normalizeId(id);
      return uri_all.resolve(baseId, id);
    }


    /* @this Ajv */
    function resolveIds(schema) {
      var schemaId = normalizeId(this._getId(schema));
      var baseIds = {'': schemaId};
      var fullPaths = {'': getFullPath(schemaId, false)};
      var localRefs = {};
      var self = this;

      jsonSchemaTraverse(schema, {allKeys: true}, function(sch, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
        if (jsonPtr === '') return;
        var id = self._getId(sch);
        var baseId = baseIds[parentJsonPtr];
        var fullPath = fullPaths[parentJsonPtr] + '/' + parentKeyword;
        if (keyIndex !== undefined)
          fullPath += '/' + (typeof keyIndex == 'number' ? keyIndex : util.escapeFragment(keyIndex));

        if (typeof id == 'string') {
          id = baseId = normalizeId(baseId ? uri_all.resolve(baseId, id) : id);

          var refVal = self._refs[id];
          if (typeof refVal == 'string') refVal = self._refs[refVal];
          if (refVal && refVal.schema) {
            if (!fastDeepEqual(sch, refVal.schema))
              throw new Error('id "' + id + '" resolves to more than one schema');
          } else if (id != normalizeId(fullPath)) {
            if (id[0] == '#') {
              if (localRefs[id] && !fastDeepEqual(sch, localRefs[id]))
                throw new Error('id "' + id + '" resolves to more than one schema');
              localRefs[id] = sch;
            } else {
              self._refs[id] = fullPath;
            }
          }
        }
        baseIds[jsonPtr] = baseId;
        fullPaths[jsonPtr] = fullPath;
      });

      return localRefs;
    }

    var error_classes = {
      Validation: errorSubclass(ValidationError),
      MissingRef: errorSubclass(MissingRefError)
    };


    function ValidationError(errors) {
      this.message = 'validation failed';
      this.errors = errors;
      this.ajv = this.validation = true;
    }


    MissingRefError.message = function (baseId, ref) {
      return 'can\'t resolve reference ' + ref + ' from id ' + baseId;
    };


    function MissingRefError(baseId, ref, message) {
      this.message = message || MissingRefError.message(baseId, ref);
      this.missingRef = resolve_1.url(baseId, ref);
      this.missingSchema = resolve_1.normalizeId(resolve_1.fullPath(this.missingRef));
    }


    function errorSubclass(Subclass) {
      Subclass.prototype = Object.create(Error.prototype);
      Subclass.prototype.constructor = Subclass;
      return Subclass;
    }

    var fastJsonStableStringify = function (data, opts) {
        if (!opts) opts = {};
        if (typeof opts === 'function') opts = { cmp: opts };
        var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;

        var cmp = opts.cmp && (function (f) {
            return function (node) {
                return function (a, b) {
                    var aobj = { key: a, value: node[a] };
                    var bobj = { key: b, value: node[b] };
                    return f(aobj, bobj);
                };
            };
        })(opts.cmp);

        var seen = [];
        return (function stringify (node) {
            if (node && node.toJSON && typeof node.toJSON === 'function') {
                node = node.toJSON();
            }

            if (node === undefined) return;
            if (typeof node == 'number') return isFinite(node) ? '' + node : 'null';
            if (typeof node !== 'object') return JSON.stringify(node);

            var i, out;
            if (Array.isArray(node)) {
                out = '[';
                for (i = 0; i < node.length; i++) {
                    if (i) out += ',';
                    out += stringify(node[i]) || 'null';
                }
                return out + ']';
            }

            if (node === null) return 'null';

            if (seen.indexOf(node) !== -1) {
                if (cycles) return JSON.stringify('__cycle__');
                throw new TypeError('Converting circular structure to JSON');
            }

            var seenIndex = seen.push(node) - 1;
            var keys = Object.keys(node).sort(cmp && cmp(node));
            out = '';
            for (i = 0; i < keys.length; i++) {
                var key = keys[i];
                var value = stringify(node[key]);

                if (!value) continue;
                if (out) out += ',';
                out += JSON.stringify(key) + ':' + value;
            }
            seen.splice(seenIndex, 1);
            return '{' + out + '}';
        })(data);
    };

    var validate = function generate_validate(it, $keyword, $ruleType) {
      var out = '';
      var $async = it.schema.$async === true,
        $refKeywords = it.util.schemaHasRulesExcept(it.schema, it.RULES.all, '$ref'),
        $id = it.self._getId(it.schema);
      if (it.opts.strictKeywords) {
        var $unknownKwd = it.util.schemaUnknownRules(it.schema, it.RULES.keywords);
        if ($unknownKwd) {
          var $keywordsMsg = 'unknown keyword: ' + $unknownKwd;
          if (it.opts.strictKeywords === 'log') it.logger.warn($keywordsMsg);
          else throw new Error($keywordsMsg);
        }
      }
      if (it.isTop) {
        out += ' var validate = ';
        if ($async) {
          it.async = true;
          out += 'async ';
        }
        out += 'function(data, dataPath, parentData, parentDataProperty, rootData) { \'use strict\'; ';
        if ($id && (it.opts.sourceCode || it.opts.processCode)) {
          out += ' ' + ('/\*# sourceURL=' + $id + ' */') + ' ';
        }
      }
      if (typeof it.schema == 'boolean' || !($refKeywords || it.schema.$ref)) {
        var $keyword = 'false schema';
        var $lvl = it.level;
        var $dataLvl = it.dataLevel;
        var $schema = it.schema[$keyword];
        var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
        var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
        var $breakOnError = !it.opts.allErrors;
        var $errorKeyword;
        var $data = 'data' + ($dataLvl || '');
        var $valid = 'valid' + $lvl;
        if (it.schema === false) {
          if (it.isTop) {
            $breakOnError = true;
          } else {
            out += ' var ' + ($valid) + ' = false; ';
          }
          var $$outStack = $$outStack || [];
          $$outStack.push(out);
          out = ''; /* istanbul ignore else */
          if (it.createErrors !== false) {
            out += ' { keyword: \'' + ($errorKeyword || 'false schema') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
            if (it.opts.messages !== false) {
              out += ' , message: \'boolean schema is false\' ';
            }
            if (it.opts.verbose) {
              out += ' , schema: false , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
            }
            out += ' } ';
          } else {
            out += ' {} ';
          }
          var __err = out;
          out = $$outStack.pop();
          if (!it.compositeRule && $breakOnError) {
            /* istanbul ignore if */
            if (it.async) {
              out += ' throw new ValidationError([' + (__err) + ']); ';
            } else {
              out += ' validate.errors = [' + (__err) + ']; return false; ';
            }
          } else {
            out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          }
        } else {
          if (it.isTop) {
            if ($async) {
              out += ' return data; ';
            } else {
              out += ' validate.errors = null; return true; ';
            }
          } else {
            out += ' var ' + ($valid) + ' = true; ';
          }
        }
        if (it.isTop) {
          out += ' }; return validate; ';
        }
        return out;
      }
      if (it.isTop) {
        var $top = it.isTop,
          $lvl = it.level = 0,
          $dataLvl = it.dataLevel = 0,
          $data = 'data';
        it.rootId = it.resolve.fullPath(it.self._getId(it.root.schema));
        it.baseId = it.baseId || it.rootId;
        delete it.isTop;
        it.dataPathArr = [undefined];
        if (it.schema.default !== undefined && it.opts.useDefaults && it.opts.strictDefaults) {
          var $defaultMsg = 'default is ignored in the schema root';
          if (it.opts.strictDefaults === 'log') it.logger.warn($defaultMsg);
          else throw new Error($defaultMsg);
        }
        out += ' var vErrors = null; ';
        out += ' var errors = 0;     ';
        out += ' if (rootData === undefined) rootData = data; ';
      } else {
        var $lvl = it.level,
          $dataLvl = it.dataLevel,
          $data = 'data' + ($dataLvl || '');
        if ($id) it.baseId = it.resolve.url(it.baseId, $id);
        if ($async && !it.async) throw new Error('async schema in sync schema');
        out += ' var errs_' + ($lvl) + ' = errors;';
      }
      var $valid = 'valid' + $lvl,
        $breakOnError = !it.opts.allErrors,
        $closingBraces1 = '',
        $closingBraces2 = '';
      var $errorKeyword;
      var $typeSchema = it.schema.type,
        $typeIsArray = Array.isArray($typeSchema);
      if ($typeSchema && it.opts.nullable && it.schema.nullable === true) {
        if ($typeIsArray) {
          if ($typeSchema.indexOf('null') == -1) $typeSchema = $typeSchema.concat('null');
        } else if ($typeSchema != 'null') {
          $typeSchema = [$typeSchema, 'null'];
          $typeIsArray = true;
        }
      }
      if ($typeIsArray && $typeSchema.length == 1) {
        $typeSchema = $typeSchema[0];
        $typeIsArray = false;
      }
      if (it.schema.$ref && $refKeywords) {
        if (it.opts.extendRefs == 'fail') {
          throw new Error('$ref: validation keywords used in schema at path "' + it.errSchemaPath + '" (see option extendRefs)');
        } else if (it.opts.extendRefs !== true) {
          $refKeywords = false;
          it.logger.warn('$ref: keywords ignored in schema at path "' + it.errSchemaPath + '"');
        }
      }
      if (it.schema.$comment && it.opts.$comment) {
        out += ' ' + (it.RULES.all.$comment.code(it, '$comment'));
      }
      if ($typeSchema) {
        if (it.opts.coerceTypes) {
          var $coerceToTypes = it.util.coerceToTypes(it.opts.coerceTypes, $typeSchema);
        }
        var $rulesGroup = it.RULES.types[$typeSchema];
        if ($coerceToTypes || $typeIsArray || $rulesGroup === true || ($rulesGroup && !$shouldUseGroup($rulesGroup))) {
          var $schemaPath = it.schemaPath + '.type',
            $errSchemaPath = it.errSchemaPath + '/type';
          var $schemaPath = it.schemaPath + '.type',
            $errSchemaPath = it.errSchemaPath + '/type',
            $method = $typeIsArray ? 'checkDataTypes' : 'checkDataType';
          out += ' if (' + (it.util[$method]($typeSchema, $data, true)) + ') { ';
          if ($coerceToTypes) {
            var $dataType = 'dataType' + $lvl,
              $coerced = 'coerced' + $lvl;
            out += ' var ' + ($dataType) + ' = typeof ' + ($data) + '; ';
            if (it.opts.coerceTypes == 'array') {
              out += ' if (' + ($dataType) + ' == \'object\' && Array.isArray(' + ($data) + ')) ' + ($dataType) + ' = \'array\'; ';
            }
            out += ' var ' + ($coerced) + ' = undefined; ';
            var $bracesCoercion = '';
            var arr1 = $coerceToTypes;
            if (arr1) {
              var $type, $i = -1,
                l1 = arr1.length - 1;
              while ($i < l1) {
                $type = arr1[$i += 1];
                if ($i) {
                  out += ' if (' + ($coerced) + ' === undefined) { ';
                  $bracesCoercion += '}';
                }
                if (it.opts.coerceTypes == 'array' && $type != 'array') {
                  out += ' if (' + ($dataType) + ' == \'array\' && ' + ($data) + '.length == 1) { ' + ($coerced) + ' = ' + ($data) + ' = ' + ($data) + '[0]; ' + ($dataType) + ' = typeof ' + ($data) + ';  } ';
                }
                if ($type == 'string') {
                  out += ' if (' + ($dataType) + ' == \'number\' || ' + ($dataType) + ' == \'boolean\') ' + ($coerced) + ' = \'\' + ' + ($data) + '; else if (' + ($data) + ' === null) ' + ($coerced) + ' = \'\'; ';
                } else if ($type == 'number' || $type == 'integer') {
                  out += ' if (' + ($dataType) + ' == \'boolean\' || ' + ($data) + ' === null || (' + ($dataType) + ' == \'string\' && ' + ($data) + ' && ' + ($data) + ' == +' + ($data) + ' ';
                  if ($type == 'integer') {
                    out += ' && !(' + ($data) + ' % 1)';
                  }
                  out += ')) ' + ($coerced) + ' = +' + ($data) + '; ';
                } else if ($type == 'boolean') {
                  out += ' if (' + ($data) + ' === \'false\' || ' + ($data) + ' === 0 || ' + ($data) + ' === null) ' + ($coerced) + ' = false; else if (' + ($data) + ' === \'true\' || ' + ($data) + ' === 1) ' + ($coerced) + ' = true; ';
                } else if ($type == 'null') {
                  out += ' if (' + ($data) + ' === \'\' || ' + ($data) + ' === 0 || ' + ($data) + ' === false) ' + ($coerced) + ' = null; ';
                } else if (it.opts.coerceTypes == 'array' && $type == 'array') {
                  out += ' if (' + ($dataType) + ' == \'string\' || ' + ($dataType) + ' == \'number\' || ' + ($dataType) + ' == \'boolean\' || ' + ($data) + ' == null) ' + ($coerced) + ' = [' + ($data) + ']; ';
                }
              }
            }
            out += ' ' + ($bracesCoercion) + ' if (' + ($coerced) + ' === undefined) {   ';
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = ''; /* istanbul ignore else */
            if (it.createErrors !== false) {
              out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { type: \'';
              if ($typeIsArray) {
                out += '' + ($typeSchema.join(","));
              } else {
                out += '' + ($typeSchema);
              }
              out += '\' } ';
              if (it.opts.messages !== false) {
                out += ' , message: \'should be ';
                if ($typeIsArray) {
                  out += '' + ($typeSchema.join(","));
                } else {
                  out += '' + ($typeSchema);
                }
                out += '\' ';
              }
              if (it.opts.verbose) {
                out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
              }
              out += ' } ';
            } else {
              out += ' {} ';
            }
            var __err = out;
            out = $$outStack.pop();
            if (!it.compositeRule && $breakOnError) {
              /* istanbul ignore if */
              if (it.async) {
                out += ' throw new ValidationError([' + (__err) + ']); ';
              } else {
                out += ' validate.errors = [' + (__err) + ']; return false; ';
              }
            } else {
              out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
            }
            out += ' } else {  ';
            var $parentData = $dataLvl ? 'data' + (($dataLvl - 1) || '') : 'parentData',
              $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
            out += ' ' + ($data) + ' = ' + ($coerced) + '; ';
            if (!$dataLvl) {
              out += 'if (' + ($parentData) + ' !== undefined)';
            }
            out += ' ' + ($parentData) + '[' + ($parentDataProperty) + '] = ' + ($coerced) + '; } ';
          } else {
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = ''; /* istanbul ignore else */
            if (it.createErrors !== false) {
              out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { type: \'';
              if ($typeIsArray) {
                out += '' + ($typeSchema.join(","));
              } else {
                out += '' + ($typeSchema);
              }
              out += '\' } ';
              if (it.opts.messages !== false) {
                out += ' , message: \'should be ';
                if ($typeIsArray) {
                  out += '' + ($typeSchema.join(","));
                } else {
                  out += '' + ($typeSchema);
                }
                out += '\' ';
              }
              if (it.opts.verbose) {
                out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
              }
              out += ' } ';
            } else {
              out += ' {} ';
            }
            var __err = out;
            out = $$outStack.pop();
            if (!it.compositeRule && $breakOnError) {
              /* istanbul ignore if */
              if (it.async) {
                out += ' throw new ValidationError([' + (__err) + ']); ';
              } else {
                out += ' validate.errors = [' + (__err) + ']; return false; ';
              }
            } else {
              out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
            }
          }
          out += ' } ';
        }
      }
      if (it.schema.$ref && !$refKeywords) {
        out += ' ' + (it.RULES.all.$ref.code(it, '$ref')) + ' ';
        if ($breakOnError) {
          out += ' } if (errors === ';
          if ($top) {
            out += '0';
          } else {
            out += 'errs_' + ($lvl);
          }
          out += ') { ';
          $closingBraces2 += '}';
        }
      } else {
        var arr2 = it.RULES;
        if (arr2) {
          var $rulesGroup, i2 = -1,
            l2 = arr2.length - 1;
          while (i2 < l2) {
            $rulesGroup = arr2[i2 += 1];
            if ($shouldUseGroup($rulesGroup)) {
              if ($rulesGroup.type) {
                out += ' if (' + (it.util.checkDataType($rulesGroup.type, $data)) + ') { ';
              }
              if (it.opts.useDefaults) {
                if ($rulesGroup.type == 'object' && it.schema.properties) {
                  var $schema = it.schema.properties,
                    $schemaKeys = Object.keys($schema);
                  var arr3 = $schemaKeys;
                  if (arr3) {
                    var $propertyKey, i3 = -1,
                      l3 = arr3.length - 1;
                    while (i3 < l3) {
                      $propertyKey = arr3[i3 += 1];
                      var $sch = $schema[$propertyKey];
                      if ($sch.default !== undefined) {
                        var $passData = $data + it.util.getProperty($propertyKey);
                        if (it.compositeRule) {
                          if (it.opts.strictDefaults) {
                            var $defaultMsg = 'default is ignored for: ' + $passData;
                            if (it.opts.strictDefaults === 'log') it.logger.warn($defaultMsg);
                            else throw new Error($defaultMsg);
                          }
                        } else {
                          out += ' if (' + ($passData) + ' === undefined ';
                          if (it.opts.useDefaults == 'empty') {
                            out += ' || ' + ($passData) + ' === null || ' + ($passData) + ' === \'\' ';
                          }
                          out += ' ) ' + ($passData) + ' = ';
                          if (it.opts.useDefaults == 'shared') {
                            out += ' ' + (it.useDefault($sch.default)) + ' ';
                          } else {
                            out += ' ' + (JSON.stringify($sch.default)) + ' ';
                          }
                          out += '; ';
                        }
                      }
                    }
                  }
                } else if ($rulesGroup.type == 'array' && Array.isArray(it.schema.items)) {
                  var arr4 = it.schema.items;
                  if (arr4) {
                    var $sch, $i = -1,
                      l4 = arr4.length - 1;
                    while ($i < l4) {
                      $sch = arr4[$i += 1];
                      if ($sch.default !== undefined) {
                        var $passData = $data + '[' + $i + ']';
                        if (it.compositeRule) {
                          if (it.opts.strictDefaults) {
                            var $defaultMsg = 'default is ignored for: ' + $passData;
                            if (it.opts.strictDefaults === 'log') it.logger.warn($defaultMsg);
                            else throw new Error($defaultMsg);
                          }
                        } else {
                          out += ' if (' + ($passData) + ' === undefined ';
                          if (it.opts.useDefaults == 'empty') {
                            out += ' || ' + ($passData) + ' === null || ' + ($passData) + ' === \'\' ';
                          }
                          out += ' ) ' + ($passData) + ' = ';
                          if (it.opts.useDefaults == 'shared') {
                            out += ' ' + (it.useDefault($sch.default)) + ' ';
                          } else {
                            out += ' ' + (JSON.stringify($sch.default)) + ' ';
                          }
                          out += '; ';
                        }
                      }
                    }
                  }
                }
              }
              var arr5 = $rulesGroup.rules;
              if (arr5) {
                var $rule, i5 = -1,
                  l5 = arr5.length - 1;
                while (i5 < l5) {
                  $rule = arr5[i5 += 1];
                  if ($shouldUseRule($rule)) {
                    var $code = $rule.code(it, $rule.keyword, $rulesGroup.type);
                    if ($code) {
                      out += ' ' + ($code) + ' ';
                      if ($breakOnError) {
                        $closingBraces1 += '}';
                      }
                    }
                  }
                }
              }
              if ($breakOnError) {
                out += ' ' + ($closingBraces1) + ' ';
                $closingBraces1 = '';
              }
              if ($rulesGroup.type) {
                out += ' } ';
                if ($typeSchema && $typeSchema === $rulesGroup.type && !$coerceToTypes) {
                  out += ' else { ';
                  var $schemaPath = it.schemaPath + '.type',
                    $errSchemaPath = it.errSchemaPath + '/type';
                  var $$outStack = $$outStack || [];
                  $$outStack.push(out);
                  out = ''; /* istanbul ignore else */
                  if (it.createErrors !== false) {
                    out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { type: \'';
                    if ($typeIsArray) {
                      out += '' + ($typeSchema.join(","));
                    } else {
                      out += '' + ($typeSchema);
                    }
                    out += '\' } ';
                    if (it.opts.messages !== false) {
                      out += ' , message: \'should be ';
                      if ($typeIsArray) {
                        out += '' + ($typeSchema.join(","));
                      } else {
                        out += '' + ($typeSchema);
                      }
                      out += '\' ';
                    }
                    if (it.opts.verbose) {
                      out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
                    }
                    out += ' } ';
                  } else {
                    out += ' {} ';
                  }
                  var __err = out;
                  out = $$outStack.pop();
                  if (!it.compositeRule && $breakOnError) {
                    /* istanbul ignore if */
                    if (it.async) {
                      out += ' throw new ValidationError([' + (__err) + ']); ';
                    } else {
                      out += ' validate.errors = [' + (__err) + ']; return false; ';
                    }
                  } else {
                    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
                  }
                  out += ' } ';
                }
              }
              if ($breakOnError) {
                out += ' if (errors === ';
                if ($top) {
                  out += '0';
                } else {
                  out += 'errs_' + ($lvl);
                }
                out += ') { ';
                $closingBraces2 += '}';
              }
            }
          }
        }
      }
      if ($breakOnError) {
        out += ' ' + ($closingBraces2) + ' ';
      }
      if ($top) {
        if ($async) {
          out += ' if (errors === 0) return data;           ';
          out += ' else throw new ValidationError(vErrors); ';
        } else {
          out += ' validate.errors = vErrors; ';
          out += ' return errors === 0;       ';
        }
        out += ' }; return validate;';
      } else {
        out += ' var ' + ($valid) + ' = errors === errs_' + ($lvl) + ';';
      }
      out = it.util.cleanUpCode(out);
      if ($top) {
        out = it.util.finalCleanUpCode(out, $async);
      }

      function $shouldUseGroup($rulesGroup) {
        var rules = $rulesGroup.rules;
        for (var i = 0; i < rules.length; i++)
          if ($shouldUseRule(rules[i])) return true;
      }

      function $shouldUseRule($rule) {
        return it.schema[$rule.keyword] !== undefined || ($rule.implements && $ruleImplementsSomeKeyword($rule));
      }

      function $ruleImplementsSomeKeyword($rule) {
        var impl = $rule.implements;
        for (var i = 0; i < impl.length; i++)
          if (it.schema[impl[i]] !== undefined) return true;
      }
      return out;
    };

    /**
     * Functions below are used inside compiled validations function
     */

    var ucs2length$1 = util.ucs2length;


    // this error is thrown by async schemas to return validation errors via exception
    var ValidationError$1 = error_classes.Validation;

    var compile_1 = compile;


    /**
     * Compiles schema to validation function
     * @this   Ajv
     * @param  {Object} schema schema object
     * @param  {Object} root object with information about the root schema for this schema
     * @param  {Object} localRefs the hash of local references inside the schema (created by resolve.id), used for inline resolution
     * @param  {String} baseId base ID for IDs in the schema
     * @return {Function} validation function
     */
    function compile(schema, root, localRefs, baseId) {
      /* jshint validthis: true, evil: true */
      /* eslint no-shadow: 0 */
      var self = this
        , opts = this._opts
        , refVal = [ undefined ]
        , refs = {}
        , patterns = []
        , patternsHash = {}
        , defaults = []
        , defaultsHash = {}
        , customRules = [];

      root = root || { schema: schema, refVal: refVal, refs: refs };

      var c = checkCompiling.call(this, schema, root, baseId);
      var compilation = this._compilations[c.index];
      if (c.compiling) return (compilation.callValidate = callValidate);

      var formats = this._formats;
      var RULES = this.RULES;

      try {
        var v = localCompile(schema, root, localRefs, baseId);
        compilation.validate = v;
        var cv = compilation.callValidate;
        if (cv) {
          cv.schema = v.schema;
          cv.errors = null;
          cv.refs = v.refs;
          cv.refVal = v.refVal;
          cv.root = v.root;
          cv.$async = v.$async;
          if (opts.sourceCode) cv.source = v.source;
        }
        return v;
      } finally {
        endCompiling.call(this, schema, root, baseId);
      }

      /* @this   {*} - custom context, see passContext option */
      function callValidate() {
        /* jshint validthis: true */
        var validate = compilation.validate;
        var result = validate.apply(this, arguments);
        callValidate.errors = validate.errors;
        return result;
      }

      function localCompile(_schema, _root, localRefs, baseId) {
        var isRoot = !_root || (_root && _root.schema == _schema);
        if (_root.schema != root.schema)
          return compile.call(self, _schema, _root, localRefs, baseId);

        var $async = _schema.$async === true;

        var sourceCode = validate({
          isTop: true,
          schema: _schema,
          isRoot: isRoot,
          baseId: baseId,
          root: _root,
          schemaPath: '',
          errSchemaPath: '#',
          errorPath: '""',
          MissingRefError: error_classes.MissingRef,
          RULES: RULES,
          validate: validate,
          util: util,
          resolve: resolve_1,
          resolveRef: resolveRef,
          usePattern: usePattern,
          useDefault: useDefault,
          useCustomRule: useCustomRule,
          opts: opts,
          formats: formats,
          logger: self.logger,
          self: self
        });

        sourceCode = vars(refVal, refValCode) + vars(patterns, patternCode)
                       + vars(defaults, defaultCode) + vars(customRules, customRuleCode)
                       + sourceCode;

        if (opts.processCode) sourceCode = opts.processCode(sourceCode);
        // console.log('\n\n\n *** \n', JSON.stringify(sourceCode));
        var validate$1;
        try {
          var makeValidate = new Function(
            'self',
            'RULES',
            'formats',
            'root',
            'refVal',
            'defaults',
            'customRules',
            'equal',
            'ucs2length',
            'ValidationError',
            sourceCode
          );

          validate$1 = makeValidate(
            self,
            RULES,
            formats,
            root,
            refVal,
            defaults,
            customRules,
            fastDeepEqual,
            ucs2length$1,
            ValidationError$1
          );

          refVal[0] = validate$1;
        } catch(e) {
          self.logger.error('Error compiling schema, function code:', sourceCode);
          throw e;
        }

        validate$1.schema = _schema;
        validate$1.errors = null;
        validate$1.refs = refs;
        validate$1.refVal = refVal;
        validate$1.root = isRoot ? validate$1 : _root;
        if ($async) validate$1.$async = true;
        if (opts.sourceCode === true) {
          validate$1.source = {
            code: sourceCode,
            patterns: patterns,
            defaults: defaults
          };
        }

        return validate$1;
      }

      function resolveRef(baseId, ref, isRoot) {
        ref = resolve_1.url(baseId, ref);
        var refIndex = refs[ref];
        var _refVal, refCode;
        if (refIndex !== undefined) {
          _refVal = refVal[refIndex];
          refCode = 'refVal[' + refIndex + ']';
          return resolvedRef(_refVal, refCode);
        }
        if (!isRoot && root.refs) {
          var rootRefId = root.refs[ref];
          if (rootRefId !== undefined) {
            _refVal = root.refVal[rootRefId];
            refCode = addLocalRef(ref, _refVal);
            return resolvedRef(_refVal, refCode);
          }
        }

        refCode = addLocalRef(ref);
        var v = resolve_1.call(self, localCompile, root, ref);
        if (v === undefined) {
          var localSchema = localRefs && localRefs[ref];
          if (localSchema) {
            v = resolve_1.inlineRef(localSchema, opts.inlineRefs)
                ? localSchema
                : compile.call(self, localSchema, root, localRefs, baseId);
          }
        }

        if (v === undefined) {
          removeLocalRef(ref);
        } else {
          replaceLocalRef(ref, v);
          return resolvedRef(v, refCode);
        }
      }

      function addLocalRef(ref, v) {
        var refId = refVal.length;
        refVal[refId] = v;
        refs[ref] = refId;
        return 'refVal' + refId;
      }

      function removeLocalRef(ref) {
        delete refs[ref];
      }

      function replaceLocalRef(ref, v) {
        var refId = refs[ref];
        refVal[refId] = v;
      }

      function resolvedRef(refVal, code) {
        return typeof refVal == 'object' || typeof refVal == 'boolean'
                ? { code: code, schema: refVal, inline: true }
                : { code: code, $async: refVal && !!refVal.$async };
      }

      function usePattern(regexStr) {
        var index = patternsHash[regexStr];
        if (index === undefined) {
          index = patternsHash[regexStr] = patterns.length;
          patterns[index] = regexStr;
        }
        return 'pattern' + index;
      }

      function useDefault(value) {
        switch (typeof value) {
          case 'boolean':
          case 'number':
            return '' + value;
          case 'string':
            return util.toQuotedString(value);
          case 'object':
            if (value === null) return 'null';
            var valueStr = fastJsonStableStringify(value);
            var index = defaultsHash[valueStr];
            if (index === undefined) {
              index = defaultsHash[valueStr] = defaults.length;
              defaults[index] = value;
            }
            return 'default' + index;
        }
      }

      function useCustomRule(rule, schema, parentSchema, it) {
        if (self._opts.validateSchema !== false) {
          var deps = rule.definition.dependencies;
          if (deps && !deps.every(function(keyword) {
            return Object.prototype.hasOwnProperty.call(parentSchema, keyword);
          }))
            throw new Error('parent schema must have all required keywords: ' + deps.join(','));

          var validateSchema = rule.definition.validateSchema;
          if (validateSchema) {
            var valid = validateSchema(schema);
            if (!valid) {
              var message = 'keyword schema is invalid: ' + self.errorsText(validateSchema.errors);
              if (self._opts.validateSchema == 'log') self.logger.error(message);
              else throw new Error(message);
            }
          }
        }

        var compile = rule.definition.compile
          , inline = rule.definition.inline
          , macro = rule.definition.macro;

        var validate;
        if (compile) {
          validate = compile.call(self, schema, parentSchema, it);
        } else if (macro) {
          validate = macro.call(self, schema, parentSchema, it);
          if (opts.validateSchema !== false) self.validateSchema(validate, true);
        } else if (inline) {
          validate = inline.call(self, it, rule.keyword, schema, parentSchema);
        } else {
          validate = rule.definition.validate;
          if (!validate) return;
        }

        if (validate === undefined)
          throw new Error('custom keyword "' + rule.keyword + '"failed to compile');

        var index = customRules.length;
        customRules[index] = validate;

        return {
          code: 'customRule' + index,
          validate: validate
        };
      }
    }


    /**
     * Checks if the schema is currently compiled
     * @this   Ajv
     * @param  {Object} schema schema to compile
     * @param  {Object} root root object
     * @param  {String} baseId base schema ID
     * @return {Object} object with properties "index" (compilation index) and "compiling" (boolean)
     */
    function checkCompiling(schema, root, baseId) {
      /* jshint validthis: true */
      var index = compIndex.call(this, schema, root, baseId);
      if (index >= 0) return { index: index, compiling: true };
      index = this._compilations.length;
      this._compilations[index] = {
        schema: schema,
        root: root,
        baseId: baseId
      };
      return { index: index, compiling: false };
    }


    /**
     * Removes the schema from the currently compiled list
     * @this   Ajv
     * @param  {Object} schema schema to compile
     * @param  {Object} root root object
     * @param  {String} baseId base schema ID
     */
    function endCompiling(schema, root, baseId) {
      /* jshint validthis: true */
      var i = compIndex.call(this, schema, root, baseId);
      if (i >= 0) this._compilations.splice(i, 1);
    }


    /**
     * Index of schema compilation in the currently compiled list
     * @this   Ajv
     * @param  {Object} schema schema to compile
     * @param  {Object} root root object
     * @param  {String} baseId base schema ID
     * @return {Integer} compilation index
     */
    function compIndex(schema, root, baseId) {
      /* jshint validthis: true */
      for (var i=0; i<this._compilations.length; i++) {
        var c = this._compilations[i];
        if (c.schema == schema && c.root == root && c.baseId == baseId) return i;
      }
      return -1;
    }


    function patternCode(i, patterns) {
      return 'var pattern' + i + ' = new RegExp(' + util.toQuotedString(patterns[i]) + ');';
    }


    function defaultCode(i) {
      return 'var default' + i + ' = defaults[' + i + '];';
    }


    function refValCode(i, refVal) {
      return refVal[i] === undefined ? '' : 'var refVal' + i + ' = refVal[' + i + '];';
    }


    function customRuleCode(i) {
      return 'var customRule' + i + ' = customRules[' + i + '];';
    }


    function vars(arr, statement) {
      if (!arr.length) return '';
      var code = '';
      for (var i=0; i<arr.length; i++)
        code += statement(i, arr);
      return code;
    }

    var cache = createCommonjsModule(function (module) {


    var Cache = module.exports = function Cache() {
      this._cache = {};
    };


    Cache.prototype.put = function Cache_put(key, value) {
      this._cache[key] = value;
    };


    Cache.prototype.get = function Cache_get(key) {
      return this._cache[key];
    };


    Cache.prototype.del = function Cache_del(key) {
      delete this._cache[key];
    };


    Cache.prototype.clear = function Cache_clear() {
      this._cache = {};
    };
    });

    var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
    var DAYS = [0,31,28,31,30,31,30,31,31,30,31,30,31];
    var TIME = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d:\d\d)?$/i;
    var HOSTNAME = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*$/i;
    var URI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    var URIREF = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    // uri-template: https://tools.ietf.org/html/rfc6570
    var URITEMPLATE = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i;
    // For the source: https://gist.github.com/dperini/729294
    // For test cases: https://mathiasbynens.be/demo/url-regex
    // @todo Delete current URL in favour of the commented out URL rule when this issue is fixed https://github.com/eslint/eslint/issues/7983.
    // var URL = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u{00a1}-\u{ffff}0-9]+-?)*[a-z\u{00a1}-\u{ffff}0-9]+)(?:\.(?:[a-z\u{00a1}-\u{ffff}0-9]+-?)*[a-z\u{00a1}-\u{ffff}0-9]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu;
    var URL = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i;
    var UUID = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
    var JSON_POINTER$1 = /^(?:\/(?:[^~/]|~0|~1)*)*$/;
    var JSON_POINTER_URI_FRAGMENT = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i;
    var RELATIVE_JSON_POINTER$1 = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;


    var formats_1 = formats;

    function formats(mode) {
      mode = mode == 'full' ? 'full' : 'fast';
      return util.copy(formats[mode]);
    }


    formats.fast = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i,
      'date-time': /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d:\d\d)$/i,
      // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
      uri: /^(?:[a-z][a-z0-9+-.]*:)(?:\/?\/)?[^\s]*$/i,
      'uri-reference': /^(?:(?:[a-z][a-z0-9+-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
      'uri-template': URITEMPLATE,
      url: URL,
      // email (sources from jsen validator):
      // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
      // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'willful violation')
      email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
      hostname: HOSTNAME,
      // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
      ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
      // optimized http://stackoverflow.com/questions/53497/regular-expression-that-matches-valid-ipv6-addresses
      ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
      regex: regex,
      // uuid: http://tools.ietf.org/html/rfc4122
      uuid: UUID,
      // JSON-pointer: https://tools.ietf.org/html/rfc6901
      // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
      'json-pointer': JSON_POINTER$1,
      'json-pointer-uri-fragment': JSON_POINTER_URI_FRAGMENT,
      // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
      'relative-json-pointer': RELATIVE_JSON_POINTER$1
    };


    formats.full = {
      date: date,
      time: time,
      'date-time': date_time,
      uri: uri,
      'uri-reference': URIREF,
      'uri-template': URITEMPLATE,
      url: URL,
      email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
      hostname: hostname,
      ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
      ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
      regex: regex,
      uuid: UUID,
      'json-pointer': JSON_POINTER$1,
      'json-pointer-uri-fragment': JSON_POINTER_URI_FRAGMENT,
      'relative-json-pointer': RELATIVE_JSON_POINTER$1
    };


    function isLeapYear(year) {
      // https://tools.ietf.org/html/rfc3339#appendix-C
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }


    function date(str) {
      // full-date from http://tools.ietf.org/html/rfc3339#section-5.6
      var matches = str.match(DATE);
      if (!matches) return false;

      var year = +matches[1];
      var month = +matches[2];
      var day = +matches[3];

      return month >= 1 && month <= 12 && day >= 1 &&
              day <= (month == 2 && isLeapYear(year) ? 29 : DAYS[month]);
    }


    function time(str, full) {
      var matches = str.match(TIME);
      if (!matches) return false;

      var hour = matches[1];
      var minute = matches[2];
      var second = matches[3];
      var timeZone = matches[5];
      return ((hour <= 23 && minute <= 59 && second <= 59) ||
              (hour == 23 && minute == 59 && second == 60)) &&
             (!full || timeZone);
    }


    var DATE_TIME_SEPARATOR = /t|\s/i;
    function date_time(str) {
      // http://tools.ietf.org/html/rfc3339#section-5.6
      var dateTime = str.split(DATE_TIME_SEPARATOR);
      return dateTime.length == 2 && date(dateTime[0]) && time(dateTime[1], true);
    }


    function hostname(str) {
      // https://tools.ietf.org/html/rfc1034#section-3.5
      // https://tools.ietf.org/html/rfc1123#section-2
      return str.length <= 255 && HOSTNAME.test(str);
    }


    var NOT_URI_FRAGMENT = /\/|:/;
    function uri(str) {
      // http://jmrware.com/articles/2009/uri_regexp/URI_regex.html + optional protocol + required "."
      return NOT_URI_FRAGMENT.test(str) && URI.test(str);
    }


    var Z_ANCHOR = /[^\\]\\Z/;
    function regex(str) {
      if (Z_ANCHOR.test(str)) return false;
      try {
        new RegExp(str);
        return true;
      } catch(e) {
        return false;
      }
    }

    var ref = function generate_ref(it, $keyword, $ruleType) {
      var out = ' ';
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = 'data' + ($dataLvl || '');
      var $valid = 'valid' + $lvl;
      var $async, $refCode;
      if ($schema == '#' || $schema == '#/') {
        if (it.isRoot) {
          $async = it.async;
          $refCode = 'validate';
        } else {
          $async = it.root.schema.$async === true;
          $refCode = 'root.refVal[0]';
        }
      } else {
        var $refVal = it.resolveRef(it.baseId, $schema, it.isRoot);
        if ($refVal === undefined) {
          var $message = it.MissingRefError.message(it.baseId, $schema);
          if (it.opts.missingRefs == 'fail') {
            it.logger.error($message);
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = ''; /* istanbul ignore else */
            if (it.createErrors !== false) {
              out += ' { keyword: \'' + ('$ref') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { ref: \'' + (it.util.escapeQuotes($schema)) + '\' } ';
              if (it.opts.messages !== false) {
                out += ' , message: \'can\\\'t resolve reference ' + (it.util.escapeQuotes($schema)) + '\' ';
              }
              if (it.opts.verbose) {
                out += ' , schema: ' + (it.util.toQuotedString($schema)) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
              }
              out += ' } ';
            } else {
              out += ' {} ';
            }
            var __err = out;
            out = $$outStack.pop();
            if (!it.compositeRule && $breakOnError) {
              /* istanbul ignore if */
              if (it.async) {
                out += ' throw new ValidationError([' + (__err) + ']); ';
              } else {
                out += ' validate.errors = [' + (__err) + ']; return false; ';
              }
            } else {
              out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
            }
            if ($breakOnError) {
              out += ' if (false) { ';
            }
          } else if (it.opts.missingRefs == 'ignore') {
            it.logger.warn($message);
            if ($breakOnError) {
              out += ' if (true) { ';
            }
          } else {
            throw new it.MissingRefError(it.baseId, $schema, $message);
          }
        } else if ($refVal.inline) {
          var $it = it.util.copy(it);
          $it.level++;
          var $nextValid = 'valid' + $it.level;
          $it.schema = $refVal.schema;
          $it.schemaPath = '';
          $it.errSchemaPath = $schema;
          var $code = it.validate($it).replace(/validate\.schema/g, $refVal.code);
          out += ' ' + ($code) + ' ';
          if ($breakOnError) {
            out += ' if (' + ($nextValid) + ') { ';
          }
        } else {
          $async = $refVal.$async === true || (it.async && $refVal.$async !== false);
          $refCode = $refVal.code;
        }
      }
      if ($refCode) {
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = '';
        if (it.opts.passContext) {
          out += ' ' + ($refCode) + '.call(this, ';
        } else {
          out += ' ' + ($refCode) + '( ';
        }
        out += ' ' + ($data) + ', (dataPath || \'\')';
        if (it.errorPath != '""') {
          out += ' + ' + (it.errorPath);
        }
        var $parentData = $dataLvl ? 'data' + (($dataLvl - 1) || '') : 'parentData',
          $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
        out += ' , ' + ($parentData) + ' , ' + ($parentDataProperty) + ', rootData)  ';
        var __callValidate = out;
        out = $$outStack.pop();
        if ($async) {
          if (!it.async) throw new Error('async schema referenced by sync schema');
          if ($breakOnError) {
            out += ' var ' + ($valid) + '; ';
          }
          out += ' try { await ' + (__callValidate) + '; ';
          if ($breakOnError) {
            out += ' ' + ($valid) + ' = true; ';
          }
          out += ' } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ';
          if ($breakOnError) {
            out += ' ' + ($valid) + ' = false; ';
          }
          out += ' } ';
          if ($breakOnError) {
            out += ' if (' + ($valid) + ') { ';
          }
        } else {
          out += ' if (!' + (__callValidate) + ') { if (vErrors === null) vErrors = ' + ($refCode) + '.errors; else vErrors = vErrors.concat(' + ($refCode) + '.errors); errors = vErrors.length; } ';
          if ($breakOnError) {
            out += ' else { ';
          }
        }
      }
      return out;
    };

    var allOf = function generate_allOf(it, $keyword, $ruleType) {
      var out = ' ';
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $it = it.util.copy(it);
      var $closingBraces = '';
      $it.level++;
      var $nextValid = 'valid' + $it.level;
      var $currentBaseId = $it.baseId,
        $allSchemasEmpty = true;
      var arr1 = $schema;
      if (arr1) {
        var $sch, $i = -1,
          l1 = arr1.length - 1;
        while ($i < l1) {
          $sch = arr1[$i += 1];
          if ((it.opts.strictKeywords ? typeof $sch == 'object' && Object.keys($sch).length > 0 : it.util.schemaHasRules($sch, it.RULES.all))) {
            $allSchemasEmpty = false;
            $it.schema = $sch;
            $it.schemaPath = $schemaPath + '[' + $i + ']';
            $it.errSchemaPath = $errSchemaPath + '/' + $i;
            out += '  ' + (it.validate($it)) + ' ';
            $it.baseId = $currentBaseId;
            if ($breakOnError) {
              out += ' if (' + ($nextValid) + ') { ';
              $closingBraces += '}';
            }
          }
        }
      }
      if ($breakOnError) {
        if ($allSchemasEmpty) {
          out += ' if (true) { ';
        } else {
          out += ' ' + ($closingBraces.slice(0, -1)) + ' ';
        }
      }
      out = it.util.cleanUpCode(out);
      return out;
    };

    var anyOf = function generate_anyOf(it, $keyword, $ruleType) {
      var out = ' ';
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = 'data' + ($dataLvl || '');
      var $valid = 'valid' + $lvl;
      var $errs = 'errs__' + $lvl;
      var $it = it.util.copy(it);
      var $closingBraces = '';
      $it.level++;
      var $nextValid = 'valid' + $it.level;
      var $noEmptySchema = $schema.every(function($sch) {
        return (it.opts.strictKeywords ? typeof $sch == 'object' && Object.keys($sch).length > 0 : it.util.schemaHasRules($sch, it.RULES.all));
      });
      if ($noEmptySchema) {
        var $currentBaseId = $it.baseId;
        out += ' var ' + ($errs) + ' = errors; var ' + ($valid) + ' = false;  ';
        var $wasComposite = it.compositeRule;
        it.compositeRule = $it.compositeRule = true;
        var arr1 = $schema;
        if (arr1) {
          var $sch, $i = -1,
            l1 = arr1.length - 1;
          while ($i < l1) {
            $sch = arr1[$i += 1];
            $it.schema = $sch;
            $it.schemaPath = $schemaPath + '[' + $i + ']';
            $it.errSchemaPath = $errSchemaPath + '/' + $i;
            out += '  ' + (it.validate($it)) + ' ';
            $it.baseId = $currentBaseId;
            out += ' ' + ($valid) + ' = ' + ($valid) + ' || ' + ($nextValid) + '; if (!' + ($valid) + ') { ';
            $closingBraces += '}';
          }
        }
        it.compositeRule = $it.compositeRule = $wasComposite;
        out += ' ' + ($closingBraces) + ' if (!' + ($valid) + ') {   var err =   '; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ('anyOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
          if (it.opts.messages !== false) {
            out += ' , message: \'should match some schema in anyOf\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        if (!it.compositeRule && $breakOnError) {
          /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError(vErrors); ';
          } else {
            out += ' validate.errors = vErrors; return false; ';
          }
        }
        out += ' } else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } ';
        if (it.opts.allErrors) {
          out += ' } ';
        }
        out = it.util.cleanUpCode(out);
      } else {
        if ($breakOnError) {
          out += ' if (true) { ';
        }
      }
      return out;
    };

    var comment = function generate_comment(it, $keyword, $ruleType) {
      var out = ' ';
      var $schema = it.schema[$keyword];
      var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $comment = it.util.toQuotedString($schema);
      if (it.opts.$comment === true) {
        out += ' console.log(' + ($comment) + ');';
      } else if (typeof it.opts.$comment == 'function') {
        out += ' self._opts.$comment(' + ($comment) + ', ' + (it.util.toQuotedString($errSchemaPath)) + ', validate.root.schema);';
      }
      return out;
    };

    var _const = function generate_const(it, $keyword, $ruleType) {
      var out = ' ';
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = 'data' + ($dataLvl || '');
      var $valid = 'valid' + $lvl;
      var $isData = it.opts.$data && $schema && $schema.$data;
      if ($isData) {
        out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
      }
      if (!$isData) {
        out += ' var schema' + ($lvl) + ' = validate.schema' + ($schemaPath) + ';';
      }
      out += 'var ' + ($valid) + ' = equal(' + ($data) + ', schema' + ($lvl) + '); if (!' + ($valid) + ') {   ';
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = ''; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('const') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { allowedValue: schema' + ($lvl) + ' } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should be equal to constant\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + (__err) + ']); ';
        } else {
          out += ' validate.errors = [' + (__err) + ']; return false; ';
        }
      } else {
        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }
      out += ' }';
      if ($breakOnError) {
        out += ' else { ';
      }
      return out;
    };

    var contains = function generate_contains(it, $keyword, $ruleType) {
      var out = ' ';
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = 'data' + ($dataLvl || '');
      var $valid = 'valid' + $lvl;
      var $errs = 'errs__' + $lvl;
      var $it = it.util.copy(it);
      var $closingBraces = '';
      $it.level++;
      var $nextValid = 'valid' + $it.level;
      var $idx = 'i' + $lvl,
        $dataNxt = $it.dataLevel = it.dataLevel + 1,
        $nextData = 'data' + $dataNxt,
        $currentBaseId = it.baseId,
        $nonEmptySchema = (it.opts.strictKeywords ? typeof $schema == 'object' && Object.keys($schema).length > 0 : it.util.schemaHasRules($schema, it.RULES.all));
      out += 'var ' + ($errs) + ' = errors;var ' + ($valid) + ';';
      if ($nonEmptySchema) {
        var $wasComposite = it.compositeRule;
        it.compositeRule = $it.compositeRule = true;
        $it.schema = $schema;
        $it.schemaPath = $schemaPath;
        $it.errSchemaPath = $errSchemaPath;
        out += ' var ' + ($nextValid) + ' = false; for (var ' + ($idx) + ' = 0; ' + ($idx) + ' < ' + ($data) + '.length; ' + ($idx) + '++) { ';
        $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
        var $passData = $data + '[' + $idx + ']';
        $it.dataPathArr[$dataNxt] = $idx;
        var $code = it.validate($it);
        $it.baseId = $currentBaseId;
        if (it.util.varOccurences($code, $nextData) < 2) {
          out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
        } else {
          out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
        }
        out += ' if (' + ($nextValid) + ') break; }  ';
        it.compositeRule = $it.compositeRule = $wasComposite;
        out += ' ' + ($closingBraces) + ' if (!' + ($nextValid) + ') {';
      } else {
        out += ' if (' + ($data) + '.length == 0) {';
      }
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = ''; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('contains') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should contain a valid item\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + (__err) + ']); ';
        } else {
          out += ' validate.errors = [' + (__err) + ']; return false; ';
        }
      } else {
        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }
      out += ' } else { ';
      if ($nonEmptySchema) {
        out += '  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } ';
      }
      if (it.opts.allErrors) {
        out += ' } ';
      }
      out = it.util.cleanUpCode(out);
      return out;
    };

    var dependencies = function generate_dependencies(it, $keyword, $ruleType) {
      var out = ' ';
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = 'data' + ($dataLvl || '');
      var $errs = 'errs__' + $lvl;
      var $it = it.util.copy(it);
      var $closingBraces = '';
      $it.level++;
      var $nextValid = 'valid' + $it.level;
      var $schemaDeps = {},
        $propertyDeps = {},
        $ownProperties = it.opts.ownProperties;
      for ($property in $schema) {
        var $sch = $schema[$property];
        var $deps = Array.isArray($sch) ? $propertyDeps : $schemaDeps;
        $deps[$property] = $sch;
      }
      out += 'var ' + ($errs) + ' = errors;';
      var $currentErrorPath = it.errorPath;
      out += 'var missing' + ($lvl) + ';';
      for (var $property in $propertyDeps) {
        $deps = $propertyDeps[$property];
        if ($deps.length) {
          out += ' if ( ' + ($data) + (it.util.getProperty($property)) + ' !== undefined ';
          if ($ownProperties) {
            out += ' && Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($property)) + '\') ';
          }
          if ($breakOnError) {
            out += ' && ( ';
            var arr1 = $deps;
            if (arr1) {
              var $propertyKey, $i = -1,
                l1 = arr1.length - 1;
              while ($i < l1) {
                $propertyKey = arr1[$i += 1];
                if ($i) {
                  out += ' || ';
                }
                var $prop = it.util.getProperty($propertyKey),
                  $useData = $data + $prop;
                out += ' ( ( ' + ($useData) + ' === undefined ';
                if ($ownProperties) {
                  out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
                }
                out += ') && (missing' + ($lvl) + ' = ' + (it.util.toQuotedString(it.opts.jsonPointers ? $propertyKey : $prop)) + ') ) ';
              }
            }
            out += ')) {  ';
            var $propertyPath = 'missing' + $lvl,
              $missingProperty = '\' + ' + $propertyPath + ' + \'';
            if (it.opts._errorDataPathProperty) {
              it.errorPath = it.opts.jsonPointers ? it.util.getPathExpr($currentErrorPath, $propertyPath, true) : $currentErrorPath + ' + ' + $propertyPath;
            }
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = ''; /* istanbul ignore else */
            if (it.createErrors !== false) {
              out += ' { keyword: \'' + ('dependencies') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { property: \'' + (it.util.escapeQuotes($property)) + '\', missingProperty: \'' + ($missingProperty) + '\', depsCount: ' + ($deps.length) + ', deps: \'' + (it.util.escapeQuotes($deps.length == 1 ? $deps[0] : $deps.join(", "))) + '\' } ';
              if (it.opts.messages !== false) {
                out += ' , message: \'should have ';
                if ($deps.length == 1) {
                  out += 'property ' + (it.util.escapeQuotes($deps[0]));
                } else {
                  out += 'properties ' + (it.util.escapeQuotes($deps.join(", ")));
                }
                out += ' when property ' + (it.util.escapeQuotes($property)) + ' is present\' ';
              }
              if (it.opts.verbose) {
                out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
              }
              out += ' } ';
            } else {
              out += ' {} ';
            }
            var __err = out;
            out = $$outStack.pop();
            if (!it.compositeRule && $breakOnError) {
              /* istanbul ignore if */
              if (it.async) {
                out += ' throw new ValidationError([' + (__err) + ']); ';
              } else {
                out += ' validate.errors = [' + (__err) + ']; return false; ';
              }
            } else {
              out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
            }
          } else {
            out += ' ) { ';
            var arr2 = $deps;
            if (arr2) {
              var $propertyKey, i2 = -1,
                l2 = arr2.length - 1;
              while (i2 < l2) {
                $propertyKey = arr2[i2 += 1];
                var $prop = it.util.getProperty($propertyKey),
                  $missingProperty = it.util.escapeQuotes($propertyKey),
                  $useData = $data + $prop;
                if (it.opts._errorDataPathProperty) {
                  it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
                }
                out += ' if ( ' + ($useData) + ' === undefined ';
                if ($ownProperties) {
                  out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
                }
                out += ') {  var err =   '; /* istanbul ignore else */
                if (it.createErrors !== false) {
                  out += ' { keyword: \'' + ('dependencies') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { property: \'' + (it.util.escapeQuotes($property)) + '\', missingProperty: \'' + ($missingProperty) + '\', depsCount: ' + ($deps.length) + ', deps: \'' + (it.util.escapeQuotes($deps.length == 1 ? $deps[0] : $deps.join(", "))) + '\' } ';
                  if (it.opts.messages !== false) {
                    out += ' , message: \'should have ';
                    if ($deps.length == 1) {
                      out += 'property ' + (it.util.escapeQuotes($deps[0]));
                    } else {
                      out += 'properties ' + (it.util.escapeQuotes($deps.join(", ")));
                    }
                    out += ' when property ' + (it.util.escapeQuotes($property)) + ' is present\' ';
                  }
                  if (it.opts.verbose) {
                    out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
                  }
                  out += ' } ';
                } else {
                  out += ' {} ';
                }
                out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ';
              }
            }
          }
          out += ' }   ';
          if ($breakOnError) {
            $closingBraces += '}';
            out += ' else { ';
          }
        }
      }
      it.errorPath = $currentErrorPath;
      var $currentBaseId = $it.baseId;
      for (var $property in $schemaDeps) {
        var $sch = $schemaDeps[$property];
        if ((it.opts.strictKeywords ? typeof $sch == 'object' && Object.keys($sch).length > 0 : it.util.schemaHasRules($sch, it.RULES.all))) {
          out += ' ' + ($nextValid) + ' = true; if ( ' + ($data) + (it.util.getProperty($property)) + ' !== undefined ';
          if ($ownProperties) {
            out += ' && Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($property)) + '\') ';
          }
          out += ') { ';
          $it.schema = $sch;
          $it.schemaPath = $schemaPath + it.util.getProperty($property);
          $it.errSchemaPath = $errSchemaPath + '/' + it.util.escapeFragment($property);
          out += '  ' + (it.validate($it)) + ' ';
          $it.baseId = $currentBaseId;
          out += ' }  ';
          if ($breakOnError) {
            out += ' if (' + ($nextValid) + ') { ';
            $closingBraces += '}';
          }
        }
      }
      if ($breakOnError) {
        out += '   ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
      }
      out = it.util.cleanUpCode(out);
      return out;
    };

    var _enum = function generate_enum(it, $keyword, $ruleType) {
      var out = ' ';
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = 'data' + ($dataLvl || '');
      var $valid = 'valid' + $lvl;
      var $isData = it.opts.$data && $schema && $schema.$data;
      if ($isData) {
        out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
      }
      var $i = 'i' + $lvl,
        $vSchema = 'schema' + $lvl;
      if (!$isData) {
        out += ' var ' + ($vSchema) + ' = validate.schema' + ($schemaPath) + ';';
      }
      out += 'var ' + ($valid) + ';';
      if ($isData) {
        out += ' if (schema' + ($lvl) + ' === undefined) ' + ($valid) + ' = true; else if (!Array.isArray(schema' + ($lvl) + ')) ' + ($valid) + ' = false; else {';
      }
      out += '' + ($valid) + ' = false;for (var ' + ($i) + '=0; ' + ($i) + '<' + ($vSchema) + '.length; ' + ($i) + '++) if (equal(' + ($data) + ', ' + ($vSchema) + '[' + ($i) + '])) { ' + ($valid) + ' = true; break; }';
      if ($isData) {
        out += '  }  ';
      }
      out += ' if (!' + ($valid) + ') {   ';
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = ''; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('enum') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { allowedValues: schema' + ($lvl) + ' } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should be equal to one of the allowed values\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + (__err) + ']); ';
        } else {
          out += ' validate.errors = [' + (__err) + ']; return false; ';
        }
      } else {
        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }
      out += ' }';
      if ($breakOnError) {
        out += ' else { ';
      }
      return out;
    };

    var format = function generate_format(it, $keyword, $ruleType) {
      var out = ' ';
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = 'data' + ($dataLvl || '');
      if (it.opts.format === false) {
        if ($breakOnError) {
          out += ' if (true) { ';
        }
        return out;
      }
      var $isData = it.opts.$data && $schema && $schema.$data,
        $schemaValue;
      if ($isData) {
        out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
        $schemaValue = 'schema' + $lvl;
      } else {
        $schemaValue = $schema;
      }
      var $unknownFormats = it.opts.unknownFormats,
        $allowUnknown = Array.isArray($unknownFormats);
      if ($isData) {
        var $format = 'format' + $lvl,
          $isObject = 'isObject' + $lvl,
          $formatType = 'formatType' + $lvl;
        out += ' var ' + ($format) + ' = formats[' + ($schemaValue) + ']; var ' + ($isObject) + ' = typeof ' + ($format) + ' == \'object\' && !(' + ($format) + ' instanceof RegExp) && ' + ($format) + '.validate; var ' + ($formatType) + ' = ' + ($isObject) + ' && ' + ($format) + '.type || \'string\'; if (' + ($isObject) + ') { ';
        if (it.async) {
          out += ' var async' + ($lvl) + ' = ' + ($format) + '.async; ';
        }
        out += ' ' + ($format) + ' = ' + ($format) + '.validate; } if (  ';
        if ($isData) {
          out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'string\') || ';
        }
        out += ' (';
        if ($unknownFormats != 'ignore') {
          out += ' (' + ($schemaValue) + ' && !' + ($format) + ' ';
          if ($allowUnknown) {
            out += ' && self._opts.unknownFormats.indexOf(' + ($schemaValue) + ') == -1 ';
          }
          out += ') || ';
        }
        out += ' (' + ($format) + ' && ' + ($formatType) + ' == \'' + ($ruleType) + '\' && !(typeof ' + ($format) + ' == \'function\' ? ';
        if (it.async) {
          out += ' (async' + ($lvl) + ' ? await ' + ($format) + '(' + ($data) + ') : ' + ($format) + '(' + ($data) + ')) ';
        } else {
          out += ' ' + ($format) + '(' + ($data) + ') ';
        }
        out += ' : ' + ($format) + '.test(' + ($data) + '))))) {';
      } else {
        var $format = it.formats[$schema];
        if (!$format) {
          if ($unknownFormats == 'ignore') {
            it.logger.warn('unknown format "' + $schema + '" ignored in schema at path "' + it.errSchemaPath + '"');
            if ($breakOnError) {
              out += ' if (true) { ';
            }
            return out;
          } else if ($allowUnknown && $unknownFormats.indexOf($schema) >= 0) {
            if ($breakOnError) {
              out += ' if (true) { ';
            }
            return out;
          } else {
            throw new Error('unknown format "' + $schema + '" is used in schema at path "' + it.errSchemaPath + '"');
          }
        }
        var $isObject = typeof $format == 'object' && !($format instanceof RegExp) && $format.validate;
        var $formatType = $isObject && $format.type || 'string';
        if ($isObject) {
          var $async = $format.async === true;
          $format = $format.validate;
        }
        if ($formatType != $ruleType) {
          if ($breakOnError) {
            out += ' if (true) { ';
          }
          return out;
        }
        if ($async) {
          if (!it.async) throw new Error('async format in sync schema');
          var $formatRef = 'formats' + it.util.getProperty($schema) + '.validate';
          out += ' if (!(await ' + ($formatRef) + '(' + ($data) + '))) { ';
        } else {
          out += ' if (! ';
          var $formatRef = 'formats' + it.util.getProperty($schema);
          if ($isObject) $formatRef += '.validate';
          if (typeof $format == 'function') {
            out += ' ' + ($formatRef) + '(' + ($data) + ') ';
          } else {
            out += ' ' + ($formatRef) + '.test(' + ($data) + ') ';
          }
          out += ') { ';
        }
      }
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = ''; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('format') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { format:  ';
        if ($isData) {
          out += '' + ($schemaValue);
        } else {
          out += '' + (it.util.toQuotedString($schema));
        }
        out += '  } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should match format "';
          if ($isData) {
            out += '\' + ' + ($schemaValue) + ' + \'';
          } else {
            out += '' + (it.util.escapeQuotes($schema));
          }
          out += '"\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema:  ';
          if ($isData) {
            out += 'validate.schema' + ($schemaPath);
          } else {
            out += '' + (it.util.toQuotedString($schema));
          }
          out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + (__err) + ']); ';
        } else {
          out += ' validate.errors = [' + (__err) + ']; return false; ';
        }
      } else {
        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }
      out += ' } ';
      if ($breakOnError) {
        out += ' else { ';
      }
      return out;
    };

    var _if = function generate_if(it, $keyword, $ruleType) {
      var out = ' ';
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = 'data' + ($dataLvl || '');
      var $valid = 'valid' + $lvl;
      var $errs = 'errs__' + $lvl;
      var $it = it.util.copy(it);
      $it.level++;
      var $nextValid = 'valid' + $it.level;
      var $thenSch = it.schema['then'],
        $elseSch = it.schema['else'],
        $thenPresent = $thenSch !== undefined && (it.opts.strictKeywords ? typeof $thenSch == 'object' && Object.keys($thenSch).length > 0 : it.util.schemaHasRules($thenSch, it.RULES.all)),
        $elsePresent = $elseSch !== undefined && (it.opts.strictKeywords ? typeof $elseSch == 'object' && Object.keys($elseSch).length > 0 : it.util.schemaHasRules($elseSch, it.RULES.all)),
        $currentBaseId = $it.baseId;
      if ($thenPresent || $elsePresent) {
        var $ifClause;
        $it.createErrors = false;
        $it.schema = $schema;
        $it.schemaPath = $schemaPath;
        $it.errSchemaPath = $errSchemaPath;
        out += ' var ' + ($errs) + ' = errors; var ' + ($valid) + ' = true;  ';
        var $wasComposite = it.compositeRule;
        it.compositeRule = $it.compositeRule = true;
        out += '  ' + (it.validate($it)) + ' ';
        $it.baseId = $currentBaseId;
        $it.createErrors = true;
        out += '  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; }  ';
        it.compositeRule = $it.compositeRule = $wasComposite;
        if ($thenPresent) {
          out += ' if (' + ($nextValid) + ') {  ';
          $it.schema = it.schema['then'];
          $it.schemaPath = it.schemaPath + '.then';
          $it.errSchemaPath = it.errSchemaPath + '/then';
          out += '  ' + (it.validate($it)) + ' ';
          $it.baseId = $currentBaseId;
          out += ' ' + ($valid) + ' = ' + ($nextValid) + '; ';
          if ($thenPresent && $elsePresent) {
            $ifClause = 'ifClause' + $lvl;
            out += ' var ' + ($ifClause) + ' = \'then\'; ';
          } else {
            $ifClause = '\'then\'';
          }
          out += ' } ';
          if ($elsePresent) {
            out += ' else { ';
          }
        } else {
          out += ' if (!' + ($nextValid) + ') { ';
        }
        if ($elsePresent) {
          $it.schema = it.schema['else'];
          $it.schemaPath = it.schemaPath + '.else';
          $it.errSchemaPath = it.errSchemaPath + '/else';
          out += '  ' + (it.validate($it)) + ' ';
          $it.baseId = $currentBaseId;
          out += ' ' + ($valid) + ' = ' + ($nextValid) + '; ';
          if ($thenPresent && $elsePresent) {
            $ifClause = 'ifClause' + $lvl;
            out += ' var ' + ($ifClause) + ' = \'else\'; ';
          } else {
            $ifClause = '\'else\'';
          }
          out += ' } ';
        }
        out += ' if (!' + ($valid) + ') {   var err =   '; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ('if') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { failingKeyword: ' + ($ifClause) + ' } ';
          if (it.opts.messages !== false) {
            out += ' , message: \'should match "\' + ' + ($ifClause) + ' + \'" schema\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        if (!it.compositeRule && $breakOnError) {
          /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError(vErrors); ';
          } else {
            out += ' validate.errors = vErrors; return false; ';
          }
        }
        out += ' }   ';
        if ($breakOnError) {
          out += ' else { ';
        }
        out = it.util.cleanUpCode(out);
      } else {
        if ($breakOnError) {
          out += ' if (true) { ';
        }
      }
      return out;
    };

    var items = function generate_items(it, $keyword, $ruleType) {
      var out = ' ';
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = 'data' + ($dataLvl || '');
      var $valid = 'valid' + $lvl;
      var $errs = 'errs__' + $lvl;
      var $it = it.util.copy(it);
      var $closingBraces = '';
      $it.level++;
      var $nextValid = 'valid' + $it.level;
      var $idx = 'i' + $lvl,
        $dataNxt = $it.dataLevel = it.dataLevel + 1,
        $nextData = 'data' + $dataNxt,
        $currentBaseId = it.baseId;
      out += 'var ' + ($errs) + ' = errors;var ' + ($valid) + ';';
      if (Array.isArray($schema)) {
        var $additionalItems = it.schema.additionalItems;
        if ($additionalItems === false) {
          out += ' ' + ($valid) + ' = ' + ($data) + '.length <= ' + ($schema.length) + '; ';
          var $currErrSchemaPath = $errSchemaPath;
          $errSchemaPath = it.errSchemaPath + '/additionalItems';
          out += '  if (!' + ($valid) + ') {   ';
          var $$outStack = $$outStack || [];
          $$outStack.push(out);
          out = ''; /* istanbul ignore else */
          if (it.createErrors !== false) {
            out += ' { keyword: \'' + ('additionalItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schema.length) + ' } ';
            if (it.opts.messages !== false) {
              out += ' , message: \'should NOT have more than ' + ($schema.length) + ' items\' ';
            }
            if (it.opts.verbose) {
              out += ' , schema: false , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
            }
            out += ' } ';
          } else {
            out += ' {} ';
          }
          var __err = out;
          out = $$outStack.pop();
          if (!it.compositeRule && $breakOnError) {
            /* istanbul ignore if */
            if (it.async) {
              out += ' throw new ValidationError([' + (__err) + ']); ';
            } else {
              out += ' validate.errors = [' + (__err) + ']; return false; ';
            }
          } else {
            out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          }
          out += ' } ';
          $errSchemaPath = $currErrSchemaPath;
          if ($breakOnError) {
            $closingBraces += '}';
            out += ' else { ';
          }
        }
        var arr1 = $schema;
        if (arr1) {
          var $sch, $i = -1,
            l1 = arr1.length - 1;
          while ($i < l1) {
            $sch = arr1[$i += 1];
            if ((it.opts.strictKeywords ? typeof $sch == 'object' && Object.keys($sch).length > 0 : it.util.schemaHasRules($sch, it.RULES.all))) {
              out += ' ' + ($nextValid) + ' = true; if (' + ($data) + '.length > ' + ($i) + ') { ';
              var $passData = $data + '[' + $i + ']';
              $it.schema = $sch;
              $it.schemaPath = $schemaPath + '[' + $i + ']';
              $it.errSchemaPath = $errSchemaPath + '/' + $i;
              $it.errorPath = it.util.getPathExpr(it.errorPath, $i, it.opts.jsonPointers, true);
              $it.dataPathArr[$dataNxt] = $i;
              var $code = it.validate($it);
              $it.baseId = $currentBaseId;
              if (it.util.varOccurences($code, $nextData) < 2) {
                out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
              } else {
                out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
              }
              out += ' }  ';
              if ($breakOnError) {
                out += ' if (' + ($nextValid) + ') { ';
                $closingBraces += '}';
              }
            }
          }
        }
        if (typeof $additionalItems == 'object' && (it.opts.strictKeywords ? typeof $additionalItems == 'object' && Object.keys($additionalItems).length > 0 : it.util.schemaHasRules($additionalItems, it.RULES.all))) {
          $it.schema = $additionalItems;
          $it.schemaPath = it.schemaPath + '.additionalItems';
          $it.errSchemaPath = it.errSchemaPath + '/additionalItems';
          out += ' ' + ($nextValid) + ' = true; if (' + ($data) + '.length > ' + ($schema.length) + ') {  for (var ' + ($idx) + ' = ' + ($schema.length) + '; ' + ($idx) + ' < ' + ($data) + '.length; ' + ($idx) + '++) { ';
          $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
          var $passData = $data + '[' + $idx + ']';
          $it.dataPathArr[$dataNxt] = $idx;
          var $code = it.validate($it);
          $it.baseId = $currentBaseId;
          if (it.util.varOccurences($code, $nextData) < 2) {
            out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
          } else {
            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
          }
          if ($breakOnError) {
            out += ' if (!' + ($nextValid) + ') break; ';
          }
          out += ' } }  ';
          if ($breakOnError) {
            out += ' if (' + ($nextValid) + ') { ';
            $closingBraces += '}';
          }
        }
      } else if ((it.opts.strictKeywords ? typeof $schema == 'object' && Object.keys($schema).length > 0 : it.util.schemaHasRules($schema, it.RULES.all))) {
        $it.schema = $schema;
        $it.schemaPath = $schemaPath;
        $it.errSchemaPath = $errSchemaPath;
        out += '  for (var ' + ($idx) + ' = ' + (0) + '; ' + ($idx) + ' < ' + ($data) + '.length; ' + ($idx) + '++) { ';
        $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
        var $passData = $data + '[' + $idx + ']';
        $it.dataPathArr[$dataNxt] = $idx;
        var $code = it.validate($it);
        $it.baseId = $currentBaseId;
        if (it.util.varOccurences($code, $nextData) < 2) {
          out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
        } else {
          out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
        }
        if ($breakOnError) {
          out += ' if (!' + ($nextValid) + ') break; ';
        }
        out += ' }';
      }
      if ($breakOnError) {
        out += ' ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
      }
      out = it.util.cleanUpCode(out);
      return out;
    };

    var _limit = function generate__limit(it, $keyword, $ruleType) {
      var out = ' ';
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $errorKeyword;
      var $data = 'data' + ($dataLvl || '');
      var $isData = it.opts.$data && $schema && $schema.$data,
        $schemaValue;
      if ($isData) {
        out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
        $schemaValue = 'schema' + $lvl;
      } else {
        $schemaValue = $schema;
      }
      var $isMax = $keyword == 'maximum',
        $exclusiveKeyword = $isMax ? 'exclusiveMaximum' : 'exclusiveMinimum',
        $schemaExcl = it.schema[$exclusiveKeyword],
        $isDataExcl = it.opts.$data && $schemaExcl && $schemaExcl.$data,
        $op = $isMax ? '<' : '>',
        $notOp = $isMax ? '>' : '<',
        $errorKeyword = undefined;
      if ($isDataExcl) {
        var $schemaValueExcl = it.util.getData($schemaExcl.$data, $dataLvl, it.dataPathArr),
          $exclusive = 'exclusive' + $lvl,
          $exclType = 'exclType' + $lvl,
          $exclIsNumber = 'exclIsNumber' + $lvl,
          $opExpr = 'op' + $lvl,
          $opStr = '\' + ' + $opExpr + ' + \'';
        out += ' var schemaExcl' + ($lvl) + ' = ' + ($schemaValueExcl) + '; ';
        $schemaValueExcl = 'schemaExcl' + $lvl;
        out += ' var ' + ($exclusive) + '; var ' + ($exclType) + ' = typeof ' + ($schemaValueExcl) + '; if (' + ($exclType) + ' != \'boolean\' && ' + ($exclType) + ' != \'undefined\' && ' + ($exclType) + ' != \'number\') { ';
        var $errorKeyword = $exclusiveKeyword;
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = ''; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ($errorKeyword || '_exclusiveLimit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
          if (it.opts.messages !== false) {
            out += ' , message: \'' + ($exclusiveKeyword) + ' should be boolean\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) {
          /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + (__err) + ']); ';
          } else {
            out += ' validate.errors = [' + (__err) + ']; return false; ';
          }
        } else {
          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        out += ' } else if ( ';
        if ($isData) {
          out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
        }
        out += ' ' + ($exclType) + ' == \'number\' ? ( (' + ($exclusive) + ' = ' + ($schemaValue) + ' === undefined || ' + ($schemaValueExcl) + ' ' + ($op) + '= ' + ($schemaValue) + ') ? ' + ($data) + ' ' + ($notOp) + '= ' + ($schemaValueExcl) + ' : ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' ) : ( (' + ($exclusive) + ' = ' + ($schemaValueExcl) + ' === true) ? ' + ($data) + ' ' + ($notOp) + '= ' + ($schemaValue) + ' : ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' ) || ' + ($data) + ' !== ' + ($data) + ') { var op' + ($lvl) + ' = ' + ($exclusive) + ' ? \'' + ($op) + '\' : \'' + ($op) + '=\'; ';
        if ($schema === undefined) {
          $errorKeyword = $exclusiveKeyword;
          $errSchemaPath = it.errSchemaPath + '/' + $exclusiveKeyword;
          $schemaValue = $schemaValueExcl;
          $isData = $isDataExcl;
        }
      } else {
        var $exclIsNumber = typeof $schemaExcl == 'number',
          $opStr = $op;
        if ($exclIsNumber && $isData) {
          var $opExpr = '\'' + $opStr + '\'';
          out += ' if ( ';
          if ($isData) {
            out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
          }
          out += ' ( ' + ($schemaValue) + ' === undefined || ' + ($schemaExcl) + ' ' + ($op) + '= ' + ($schemaValue) + ' ? ' + ($data) + ' ' + ($notOp) + '= ' + ($schemaExcl) + ' : ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' ) || ' + ($data) + ' !== ' + ($data) + ') { ';
        } else {
          if ($exclIsNumber && $schema === undefined) {
            $exclusive = true;
            $errorKeyword = $exclusiveKeyword;
            $errSchemaPath = it.errSchemaPath + '/' + $exclusiveKeyword;
            $schemaValue = $schemaExcl;
            $notOp += '=';
          } else {
            if ($exclIsNumber) $schemaValue = Math[$isMax ? 'min' : 'max']($schemaExcl, $schema);
            if ($schemaExcl === ($exclIsNumber ? $schemaValue : true)) {
              $exclusive = true;
              $errorKeyword = $exclusiveKeyword;
              $errSchemaPath = it.errSchemaPath + '/' + $exclusiveKeyword;
              $notOp += '=';
            } else {
              $exclusive = false;
              $opStr += '=';
            }
          }
          var $opExpr = '\'' + $opStr + '\'';
          out += ' if ( ';
          if ($isData) {
            out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
          }
          out += ' ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' || ' + ($data) + ' !== ' + ($data) + ') { ';
        }
      }
      $errorKeyword = $errorKeyword || $keyword;
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = ''; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ($errorKeyword || '_limit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { comparison: ' + ($opExpr) + ', limit: ' + ($schemaValue) + ', exclusive: ' + ($exclusive) + ' } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should be ' + ($opStr) + ' ';
          if ($isData) {
            out += '\' + ' + ($schemaValue);
          } else {
            out += '' + ($schemaValue) + '\'';
          }
        }
        if (it.opts.verbose) {
          out += ' , schema:  ';
          if ($isData) {
            out += 'validate.schema' + ($schemaPath);
          } else {
            out += '' + ($schema);
          }
          out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + (__err) + ']); ';
        } else {
          out += ' validate.errors = [' + (__err) + ']; return false; ';
        }
      } else {
        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }
      out += ' } ';
      if ($breakOnError) {
        out += ' else { ';
      }
      return out;
    };

    var _limitItems = function generate__limitItems(it, $keyword, $ruleType) {
      var out = ' ';
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $errorKeyword;
      var $data = 'data' + ($dataLvl || '');
      var $isData = it.opts.$data && $schema && $schema.$data,
        $schemaValue;
      if ($isData) {
        out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
        $schemaValue = 'schema' + $lvl;
      } else {
        $schemaValue = $schema;
      }
      var $op = $keyword == 'maxItems' ? '>' : '<';
      out += 'if ( ';
      if ($isData) {
        out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
      }
      out += ' ' + ($data) + '.length ' + ($op) + ' ' + ($schemaValue) + ') { ';
      var $errorKeyword = $keyword;
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = ''; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ($errorKeyword || '_limitItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schemaValue) + ' } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should NOT have ';
          if ($keyword == 'maxItems') {
            out += 'more';
          } else {
            out += 'fewer';
          }
          out += ' than ';
          if ($isData) {
            out += '\' + ' + ($schemaValue) + ' + \'';
          } else {
            out += '' + ($schema);
          }
          out += ' items\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema:  ';
          if ($isData) {
            out += 'validate.schema' + ($schemaPath);
          } else {
            out += '' + ($schema);
          }
          out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + (__err) + ']); ';
        } else {
          out += ' validate.errors = [' + (__err) + ']; return false; ';
        }
      } else {
        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }
      out += '} ';
      if ($breakOnError) {
        out += ' else { ';
      }
      return out;
    };

    var _limitLength = function generate__limitLength(it, $keyword, $ruleType) {
      var out = ' ';
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $errorKeyword;
      var $data = 'data' + ($dataLvl || '');
      var $isData = it.opts.$data && $schema && $schema.$data,
        $schemaValue;
      if ($isData) {
        out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
        $schemaValue = 'schema' + $lvl;
      } else {
        $schemaValue = $schema;
      }
      var $op = $keyword == 'maxLength' ? '>' : '<';
      out += 'if ( ';
      if ($isData) {
        out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
      }
      if (it.opts.unicode === false) {
        out += ' ' + ($data) + '.length ';
      } else {
        out += ' ucs2length(' + ($data) + ') ';
      }
      out += ' ' + ($op) + ' ' + ($schemaValue) + ') { ';
      var $errorKeyword = $keyword;
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = ''; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ($errorKeyword || '_limitLength') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schemaValue) + ' } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should NOT be ';
          if ($keyword == 'maxLength') {
            out += 'longer';
          } else {
            out += 'shorter';
          }
          out += ' than ';
          if ($isData) {
            out += '\' + ' + ($schemaValue) + ' + \'';
          } else {
            out += '' + ($schema);
          }
          out += ' characters\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema:  ';
          if ($isData) {
            out += 'validate.schema' + ($schemaPath);
          } else {
            out += '' + ($schema);
          }
          out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + (__err) + ']); ';
        } else {
          out += ' validate.errors = [' + (__err) + ']; return false; ';
        }
      } else {
        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }
      out += '} ';
      if ($breakOnError) {
        out += ' else { ';
      }
      return out;
    };

    var _limitProperties = function generate__limitProperties(it, $keyword, $ruleType) {
      var out = ' ';
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $errorKeyword;
      var $data = 'data' + ($dataLvl || '');
      var $isData = it.opts.$data && $schema && $schema.$data,
        $schemaValue;
      if ($isData) {
        out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
        $schemaValue = 'schema' + $lvl;
      } else {
        $schemaValue = $schema;
      }
      var $op = $keyword == 'maxProperties' ? '>' : '<';
      out += 'if ( ';
      if ($isData) {
        out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
      }
      out += ' Object.keys(' + ($data) + ').length ' + ($op) + ' ' + ($schemaValue) + ') { ';
      var $errorKeyword = $keyword;
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = ''; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ($errorKeyword || '_limitProperties') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schemaValue) + ' } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should NOT have ';
          if ($keyword == 'maxProperties') {
            out += 'more';
          } else {
            out += 'fewer';
          }
          out += ' than ';
          if ($isData) {
            out += '\' + ' + ($schemaValue) + ' + \'';
          } else {
            out += '' + ($schema);
          }
          out += ' properties\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema:  ';
          if ($isData) {
            out += 'validate.schema' + ($schemaPath);
          } else {
            out += '' + ($schema);
          }
          out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + (__err) + ']); ';
        } else {
          out += ' validate.errors = [' + (__err) + ']; return false; ';
        }
      } else {
        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }
      out += '} ';
      if ($breakOnError) {
        out += ' else { ';
      }
      return out;
    };

    var multipleOf = function generate_multipleOf(it, $keyword, $ruleType) {
      var out = ' ';
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = 'data' + ($dataLvl || '');
      var $isData = it.opts.$data && $schema && $schema.$data,
        $schemaValue;
      if ($isData) {
        out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
        $schemaValue = 'schema' + $lvl;
      } else {
        $schemaValue = $schema;
      }
      out += 'var division' + ($lvl) + ';if (';
      if ($isData) {
        out += ' ' + ($schemaValue) + ' !== undefined && ( typeof ' + ($schemaValue) + ' != \'number\' || ';
      }
      out += ' (division' + ($lvl) + ' = ' + ($data) + ' / ' + ($schemaValue) + ', ';
      if (it.opts.multipleOfPrecision) {
        out += ' Math.abs(Math.round(division' + ($lvl) + ') - division' + ($lvl) + ') > 1e-' + (it.opts.multipleOfPrecision) + ' ';
      } else {
        out += ' division' + ($lvl) + ' !== parseInt(division' + ($lvl) + ') ';
      }
      out += ' ) ';
      if ($isData) {
        out += '  )  ';
      }
      out += ' ) {   ';
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = ''; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('multipleOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { multipleOf: ' + ($schemaValue) + ' } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should be multiple of ';
          if ($isData) {
            out += '\' + ' + ($schemaValue);
          } else {
            out += '' + ($schemaValue) + '\'';
          }
        }
        if (it.opts.verbose) {
          out += ' , schema:  ';
          if ($isData) {
            out += 'validate.schema' + ($schemaPath);
          } else {
            out += '' + ($schema);
          }
          out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + (__err) + ']); ';
        } else {
          out += ' validate.errors = [' + (__err) + ']; return false; ';
        }
      } else {
        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }
      out += '} ';
      if ($breakOnError) {
        out += ' else { ';
      }
      return out;
    };

    var not = function generate_not(it, $keyword, $ruleType) {
      var out = ' ';
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = 'data' + ($dataLvl || '');
      var $errs = 'errs__' + $lvl;
      var $it = it.util.copy(it);
      $it.level++;
      var $nextValid = 'valid' + $it.level;
      if ((it.opts.strictKeywords ? typeof $schema == 'object' && Object.keys($schema).length > 0 : it.util.schemaHasRules($schema, it.RULES.all))) {
        $it.schema = $schema;
        $it.schemaPath = $schemaPath;
        $it.errSchemaPath = $errSchemaPath;
        out += ' var ' + ($errs) + ' = errors;  ';
        var $wasComposite = it.compositeRule;
        it.compositeRule = $it.compositeRule = true;
        $it.createErrors = false;
        var $allErrorsOption;
        if ($it.opts.allErrors) {
          $allErrorsOption = $it.opts.allErrors;
          $it.opts.allErrors = false;
        }
        out += ' ' + (it.validate($it)) + ' ';
        $it.createErrors = true;
        if ($allErrorsOption) $it.opts.allErrors = $allErrorsOption;
        it.compositeRule = $it.compositeRule = $wasComposite;
        out += ' if (' + ($nextValid) + ') {   ';
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = ''; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ('not') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
          if (it.opts.messages !== false) {
            out += ' , message: \'should NOT be valid\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) {
          /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + (__err) + ']); ';
          } else {
            out += ' validate.errors = [' + (__err) + ']; return false; ';
          }
        } else {
          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        out += ' } else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } ';
        if (it.opts.allErrors) {
          out += ' } ';
        }
      } else {
        out += '  var err =   '; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ('not') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
          if (it.opts.messages !== false) {
            out += ' , message: \'should NOT be valid\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        if ($breakOnError) {
          out += ' if (false) { ';
        }
      }
      return out;
    };

    var oneOf = function generate_oneOf(it, $keyword, $ruleType) {
      var out = ' ';
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = 'data' + ($dataLvl || '');
      var $valid = 'valid' + $lvl;
      var $errs = 'errs__' + $lvl;
      var $it = it.util.copy(it);
      var $closingBraces = '';
      $it.level++;
      var $nextValid = 'valid' + $it.level;
      var $currentBaseId = $it.baseId,
        $prevValid = 'prevValid' + $lvl,
        $passingSchemas = 'passingSchemas' + $lvl;
      out += 'var ' + ($errs) + ' = errors , ' + ($prevValid) + ' = false , ' + ($valid) + ' = false , ' + ($passingSchemas) + ' = null; ';
      var $wasComposite = it.compositeRule;
      it.compositeRule = $it.compositeRule = true;
      var arr1 = $schema;
      if (arr1) {
        var $sch, $i = -1,
          l1 = arr1.length - 1;
        while ($i < l1) {
          $sch = arr1[$i += 1];
          if ((it.opts.strictKeywords ? typeof $sch == 'object' && Object.keys($sch).length > 0 : it.util.schemaHasRules($sch, it.RULES.all))) {
            $it.schema = $sch;
            $it.schemaPath = $schemaPath + '[' + $i + ']';
            $it.errSchemaPath = $errSchemaPath + '/' + $i;
            out += '  ' + (it.validate($it)) + ' ';
            $it.baseId = $currentBaseId;
          } else {
            out += ' var ' + ($nextValid) + ' = true; ';
          }
          if ($i) {
            out += ' if (' + ($nextValid) + ' && ' + ($prevValid) + ') { ' + ($valid) + ' = false; ' + ($passingSchemas) + ' = [' + ($passingSchemas) + ', ' + ($i) + ']; } else { ';
            $closingBraces += '}';
          }
          out += ' if (' + ($nextValid) + ') { ' + ($valid) + ' = ' + ($prevValid) + ' = true; ' + ($passingSchemas) + ' = ' + ($i) + '; }';
        }
      }
      it.compositeRule = $it.compositeRule = $wasComposite;
      out += '' + ($closingBraces) + 'if (!' + ($valid) + ') {   var err =   '; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('oneOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { passingSchemas: ' + ($passingSchemas) + ' } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should match exactly one schema in oneOf\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError(vErrors); ';
        } else {
          out += ' validate.errors = vErrors; return false; ';
        }
      }
      out += '} else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; }';
      if (it.opts.allErrors) {
        out += ' } ';
      }
      return out;
    };

    var pattern = function generate_pattern(it, $keyword, $ruleType) {
      var out = ' ';
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = 'data' + ($dataLvl || '');
      var $isData = it.opts.$data && $schema && $schema.$data,
        $schemaValue;
      if ($isData) {
        out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
        $schemaValue = 'schema' + $lvl;
      } else {
        $schemaValue = $schema;
      }
      var $regexp = $isData ? '(new RegExp(' + $schemaValue + '))' : it.usePattern($schema);
      out += 'if ( ';
      if ($isData) {
        out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'string\') || ';
      }
      out += ' !' + ($regexp) + '.test(' + ($data) + ') ) {   ';
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = ''; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('pattern') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { pattern:  ';
        if ($isData) {
          out += '' + ($schemaValue);
        } else {
          out += '' + (it.util.toQuotedString($schema));
        }
        out += '  } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should match pattern "';
          if ($isData) {
            out += '\' + ' + ($schemaValue) + ' + \'';
          } else {
            out += '' + (it.util.escapeQuotes($schema));
          }
          out += '"\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema:  ';
          if ($isData) {
            out += 'validate.schema' + ($schemaPath);
          } else {
            out += '' + (it.util.toQuotedString($schema));
          }
          out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + (__err) + ']); ';
        } else {
          out += ' validate.errors = [' + (__err) + ']; return false; ';
        }
      } else {
        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }
      out += '} ';
      if ($breakOnError) {
        out += ' else { ';
      }
      return out;
    };

    var properties = function generate_properties(it, $keyword, $ruleType) {
      var out = ' ';
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = 'data' + ($dataLvl || '');
      var $errs = 'errs__' + $lvl;
      var $it = it.util.copy(it);
      var $closingBraces = '';
      $it.level++;
      var $nextValid = 'valid' + $it.level;
      var $key = 'key' + $lvl,
        $idx = 'idx' + $lvl,
        $dataNxt = $it.dataLevel = it.dataLevel + 1,
        $nextData = 'data' + $dataNxt,
        $dataProperties = 'dataProperties' + $lvl;
      var $schemaKeys = Object.keys($schema || {}),
        $pProperties = it.schema.patternProperties || {},
        $pPropertyKeys = Object.keys($pProperties),
        $aProperties = it.schema.additionalProperties,
        $someProperties = $schemaKeys.length || $pPropertyKeys.length,
        $noAdditional = $aProperties === false,
        $additionalIsSchema = typeof $aProperties == 'object' && Object.keys($aProperties).length,
        $removeAdditional = it.opts.removeAdditional,
        $checkAdditional = $noAdditional || $additionalIsSchema || $removeAdditional,
        $ownProperties = it.opts.ownProperties,
        $currentBaseId = it.baseId;
      var $required = it.schema.required;
      if ($required && !(it.opts.$data && $required.$data) && $required.length < it.opts.loopRequired) var $requiredHash = it.util.toHash($required);
      out += 'var ' + ($errs) + ' = errors;var ' + ($nextValid) + ' = true;';
      if ($ownProperties) {
        out += ' var ' + ($dataProperties) + ' = undefined;';
      }
      if ($checkAdditional) {
        if ($ownProperties) {
          out += ' ' + ($dataProperties) + ' = ' + ($dataProperties) + ' || Object.keys(' + ($data) + '); for (var ' + ($idx) + '=0; ' + ($idx) + '<' + ($dataProperties) + '.length; ' + ($idx) + '++) { var ' + ($key) + ' = ' + ($dataProperties) + '[' + ($idx) + ']; ';
        } else {
          out += ' for (var ' + ($key) + ' in ' + ($data) + ') { ';
        }
        if ($someProperties) {
          out += ' var isAdditional' + ($lvl) + ' = !(false ';
          if ($schemaKeys.length) {
            if ($schemaKeys.length > 8) {
              out += ' || validate.schema' + ($schemaPath) + '.hasOwnProperty(' + ($key) + ') ';
            } else {
              var arr1 = $schemaKeys;
              if (arr1) {
                var $propertyKey, i1 = -1,
                  l1 = arr1.length - 1;
                while (i1 < l1) {
                  $propertyKey = arr1[i1 += 1];
                  out += ' || ' + ($key) + ' == ' + (it.util.toQuotedString($propertyKey)) + ' ';
                }
              }
            }
          }
          if ($pPropertyKeys.length) {
            var arr2 = $pPropertyKeys;
            if (arr2) {
              var $pProperty, $i = -1,
                l2 = arr2.length - 1;
              while ($i < l2) {
                $pProperty = arr2[$i += 1];
                out += ' || ' + (it.usePattern($pProperty)) + '.test(' + ($key) + ') ';
              }
            }
          }
          out += ' ); if (isAdditional' + ($lvl) + ') { ';
        }
        if ($removeAdditional == 'all') {
          out += ' delete ' + ($data) + '[' + ($key) + ']; ';
        } else {
          var $currentErrorPath = it.errorPath;
          var $additionalProperty = '\' + ' + $key + ' + \'';
          if (it.opts._errorDataPathProperty) {
            it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
          }
          if ($noAdditional) {
            if ($removeAdditional) {
              out += ' delete ' + ($data) + '[' + ($key) + ']; ';
            } else {
              out += ' ' + ($nextValid) + ' = false; ';
              var $currErrSchemaPath = $errSchemaPath;
              $errSchemaPath = it.errSchemaPath + '/additionalProperties';
              var $$outStack = $$outStack || [];
              $$outStack.push(out);
              out = ''; /* istanbul ignore else */
              if (it.createErrors !== false) {
                out += ' { keyword: \'' + ('additionalProperties') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { additionalProperty: \'' + ($additionalProperty) + '\' } ';
                if (it.opts.messages !== false) {
                  out += ' , message: \'';
                  if (it.opts._errorDataPathProperty) {
                    out += 'is an invalid additional property';
                  } else {
                    out += 'should NOT have additional properties';
                  }
                  out += '\' ';
                }
                if (it.opts.verbose) {
                  out += ' , schema: false , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
                }
                out += ' } ';
              } else {
                out += ' {} ';
              }
              var __err = out;
              out = $$outStack.pop();
              if (!it.compositeRule && $breakOnError) {
                /* istanbul ignore if */
                if (it.async) {
                  out += ' throw new ValidationError([' + (__err) + ']); ';
                } else {
                  out += ' validate.errors = [' + (__err) + ']; return false; ';
                }
              } else {
                out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
              }
              $errSchemaPath = $currErrSchemaPath;
              if ($breakOnError) {
                out += ' break; ';
              }
            }
          } else if ($additionalIsSchema) {
            if ($removeAdditional == 'failing') {
              out += ' var ' + ($errs) + ' = errors;  ';
              var $wasComposite = it.compositeRule;
              it.compositeRule = $it.compositeRule = true;
              $it.schema = $aProperties;
              $it.schemaPath = it.schemaPath + '.additionalProperties';
              $it.errSchemaPath = it.errSchemaPath + '/additionalProperties';
              $it.errorPath = it.opts._errorDataPathProperty ? it.errorPath : it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
              var $passData = $data + '[' + $key + ']';
              $it.dataPathArr[$dataNxt] = $key;
              var $code = it.validate($it);
              $it.baseId = $currentBaseId;
              if (it.util.varOccurences($code, $nextData) < 2) {
                out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
              } else {
                out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
              }
              out += ' if (!' + ($nextValid) + ') { errors = ' + ($errs) + '; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ' + ($data) + '[' + ($key) + ']; }  ';
              it.compositeRule = $it.compositeRule = $wasComposite;
            } else {
              $it.schema = $aProperties;
              $it.schemaPath = it.schemaPath + '.additionalProperties';
              $it.errSchemaPath = it.errSchemaPath + '/additionalProperties';
              $it.errorPath = it.opts._errorDataPathProperty ? it.errorPath : it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
              var $passData = $data + '[' + $key + ']';
              $it.dataPathArr[$dataNxt] = $key;
              var $code = it.validate($it);
              $it.baseId = $currentBaseId;
              if (it.util.varOccurences($code, $nextData) < 2) {
                out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
              } else {
                out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
              }
              if ($breakOnError) {
                out += ' if (!' + ($nextValid) + ') break; ';
              }
            }
          }
          it.errorPath = $currentErrorPath;
        }
        if ($someProperties) {
          out += ' } ';
        }
        out += ' }  ';
        if ($breakOnError) {
          out += ' if (' + ($nextValid) + ') { ';
          $closingBraces += '}';
        }
      }
      var $useDefaults = it.opts.useDefaults && !it.compositeRule;
      if ($schemaKeys.length) {
        var arr3 = $schemaKeys;
        if (arr3) {
          var $propertyKey, i3 = -1,
            l3 = arr3.length - 1;
          while (i3 < l3) {
            $propertyKey = arr3[i3 += 1];
            var $sch = $schema[$propertyKey];
            if ((it.opts.strictKeywords ? typeof $sch == 'object' && Object.keys($sch).length > 0 : it.util.schemaHasRules($sch, it.RULES.all))) {
              var $prop = it.util.getProperty($propertyKey),
                $passData = $data + $prop,
                $hasDefault = $useDefaults && $sch.default !== undefined;
              $it.schema = $sch;
              $it.schemaPath = $schemaPath + $prop;
              $it.errSchemaPath = $errSchemaPath + '/' + it.util.escapeFragment($propertyKey);
              $it.errorPath = it.util.getPath(it.errorPath, $propertyKey, it.opts.jsonPointers);
              $it.dataPathArr[$dataNxt] = it.util.toQuotedString($propertyKey);
              var $code = it.validate($it);
              $it.baseId = $currentBaseId;
              if (it.util.varOccurences($code, $nextData) < 2) {
                $code = it.util.varReplace($code, $nextData, $passData);
                var $useData = $passData;
              } else {
                var $useData = $nextData;
                out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ';
              }
              if ($hasDefault) {
                out += ' ' + ($code) + ' ';
              } else {
                if ($requiredHash && $requiredHash[$propertyKey]) {
                  out += ' if ( ' + ($useData) + ' === undefined ';
                  if ($ownProperties) {
                    out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
                  }
                  out += ') { ' + ($nextValid) + ' = false; ';
                  var $currentErrorPath = it.errorPath,
                    $currErrSchemaPath = $errSchemaPath,
                    $missingProperty = it.util.escapeQuotes($propertyKey);
                  if (it.opts._errorDataPathProperty) {
                    it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
                  }
                  $errSchemaPath = it.errSchemaPath + '/required';
                  var $$outStack = $$outStack || [];
                  $$outStack.push(out);
                  out = ''; /* istanbul ignore else */
                  if (it.createErrors !== false) {
                    out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
                    if (it.opts.messages !== false) {
                      out += ' , message: \'';
                      if (it.opts._errorDataPathProperty) {
                        out += 'is a required property';
                      } else {
                        out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
                      }
                      out += '\' ';
                    }
                    if (it.opts.verbose) {
                      out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
                    }
                    out += ' } ';
                  } else {
                    out += ' {} ';
                  }
                  var __err = out;
                  out = $$outStack.pop();
                  if (!it.compositeRule && $breakOnError) {
                    /* istanbul ignore if */
                    if (it.async) {
                      out += ' throw new ValidationError([' + (__err) + ']); ';
                    } else {
                      out += ' validate.errors = [' + (__err) + ']; return false; ';
                    }
                  } else {
                    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
                  }
                  $errSchemaPath = $currErrSchemaPath;
                  it.errorPath = $currentErrorPath;
                  out += ' } else { ';
                } else {
                  if ($breakOnError) {
                    out += ' if ( ' + ($useData) + ' === undefined ';
                    if ($ownProperties) {
                      out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
                    }
                    out += ') { ' + ($nextValid) + ' = true; } else { ';
                  } else {
                    out += ' if (' + ($useData) + ' !== undefined ';
                    if ($ownProperties) {
                      out += ' &&   Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
                    }
                    out += ' ) { ';
                  }
                }
                out += ' ' + ($code) + ' } ';
              }
            }
            if ($breakOnError) {
              out += ' if (' + ($nextValid) + ') { ';
              $closingBraces += '}';
            }
          }
        }
      }
      if ($pPropertyKeys.length) {
        var arr4 = $pPropertyKeys;
        if (arr4) {
          var $pProperty, i4 = -1,
            l4 = arr4.length - 1;
          while (i4 < l4) {
            $pProperty = arr4[i4 += 1];
            var $sch = $pProperties[$pProperty];
            if ((it.opts.strictKeywords ? typeof $sch == 'object' && Object.keys($sch).length > 0 : it.util.schemaHasRules($sch, it.RULES.all))) {
              $it.schema = $sch;
              $it.schemaPath = it.schemaPath + '.patternProperties' + it.util.getProperty($pProperty);
              $it.errSchemaPath = it.errSchemaPath + '/patternProperties/' + it.util.escapeFragment($pProperty);
              if ($ownProperties) {
                out += ' ' + ($dataProperties) + ' = ' + ($dataProperties) + ' || Object.keys(' + ($data) + '); for (var ' + ($idx) + '=0; ' + ($idx) + '<' + ($dataProperties) + '.length; ' + ($idx) + '++) { var ' + ($key) + ' = ' + ($dataProperties) + '[' + ($idx) + ']; ';
              } else {
                out += ' for (var ' + ($key) + ' in ' + ($data) + ') { ';
              }
              out += ' if (' + (it.usePattern($pProperty)) + '.test(' + ($key) + ')) { ';
              $it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
              var $passData = $data + '[' + $key + ']';
              $it.dataPathArr[$dataNxt] = $key;
              var $code = it.validate($it);
              $it.baseId = $currentBaseId;
              if (it.util.varOccurences($code, $nextData) < 2) {
                out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
              } else {
                out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
              }
              if ($breakOnError) {
                out += ' if (!' + ($nextValid) + ') break; ';
              }
              out += ' } ';
              if ($breakOnError) {
                out += ' else ' + ($nextValid) + ' = true; ';
              }
              out += ' }  ';
              if ($breakOnError) {
                out += ' if (' + ($nextValid) + ') { ';
                $closingBraces += '}';
              }
            }
          }
        }
      }
      if ($breakOnError) {
        out += ' ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
      }
      out = it.util.cleanUpCode(out);
      return out;
    };

    var propertyNames = function generate_propertyNames(it, $keyword, $ruleType) {
      var out = ' ';
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = 'data' + ($dataLvl || '');
      var $errs = 'errs__' + $lvl;
      var $it = it.util.copy(it);
      var $closingBraces = '';
      $it.level++;
      var $nextValid = 'valid' + $it.level;
      out += 'var ' + ($errs) + ' = errors;';
      if ((it.opts.strictKeywords ? typeof $schema == 'object' && Object.keys($schema).length > 0 : it.util.schemaHasRules($schema, it.RULES.all))) {
        $it.schema = $schema;
        $it.schemaPath = $schemaPath;
        $it.errSchemaPath = $errSchemaPath;
        var $key = 'key' + $lvl,
          $idx = 'idx' + $lvl,
          $i = 'i' + $lvl,
          $invalidName = '\' + ' + $key + ' + \'',
          $dataNxt = $it.dataLevel = it.dataLevel + 1,
          $nextData = 'data' + $dataNxt,
          $dataProperties = 'dataProperties' + $lvl,
          $ownProperties = it.opts.ownProperties,
          $currentBaseId = it.baseId;
        if ($ownProperties) {
          out += ' var ' + ($dataProperties) + ' = undefined; ';
        }
        if ($ownProperties) {
          out += ' ' + ($dataProperties) + ' = ' + ($dataProperties) + ' || Object.keys(' + ($data) + '); for (var ' + ($idx) + '=0; ' + ($idx) + '<' + ($dataProperties) + '.length; ' + ($idx) + '++) { var ' + ($key) + ' = ' + ($dataProperties) + '[' + ($idx) + ']; ';
        } else {
          out += ' for (var ' + ($key) + ' in ' + ($data) + ') { ';
        }
        out += ' var startErrs' + ($lvl) + ' = errors; ';
        var $passData = $key;
        var $wasComposite = it.compositeRule;
        it.compositeRule = $it.compositeRule = true;
        var $code = it.validate($it);
        $it.baseId = $currentBaseId;
        if (it.util.varOccurences($code, $nextData) < 2) {
          out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
        } else {
          out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
        }
        it.compositeRule = $it.compositeRule = $wasComposite;
        out += ' if (!' + ($nextValid) + ') { for (var ' + ($i) + '=startErrs' + ($lvl) + '; ' + ($i) + '<errors; ' + ($i) + '++) { vErrors[' + ($i) + '].propertyName = ' + ($key) + '; }   var err =   '; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ('propertyNames') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { propertyName: \'' + ($invalidName) + '\' } ';
          if (it.opts.messages !== false) {
            out += ' , message: \'property name \\\'' + ($invalidName) + '\\\' is invalid\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        if (!it.compositeRule && $breakOnError) {
          /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError(vErrors); ';
          } else {
            out += ' validate.errors = vErrors; return false; ';
          }
        }
        if ($breakOnError) {
          out += ' break; ';
        }
        out += ' } }';
      }
      if ($breakOnError) {
        out += ' ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
      }
      out = it.util.cleanUpCode(out);
      return out;
    };

    var required = function generate_required(it, $keyword, $ruleType) {
      var out = ' ';
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = 'data' + ($dataLvl || '');
      var $valid = 'valid' + $lvl;
      var $isData = it.opts.$data && $schema && $schema.$data;
      if ($isData) {
        out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
      }
      var $vSchema = 'schema' + $lvl;
      if (!$isData) {
        if ($schema.length < it.opts.loopRequired && it.schema.properties && Object.keys(it.schema.properties).length) {
          var $required = [];
          var arr1 = $schema;
          if (arr1) {
            var $property, i1 = -1,
              l1 = arr1.length - 1;
            while (i1 < l1) {
              $property = arr1[i1 += 1];
              var $propertySch = it.schema.properties[$property];
              if (!($propertySch && (it.opts.strictKeywords ? typeof $propertySch == 'object' && Object.keys($propertySch).length > 0 : it.util.schemaHasRules($propertySch, it.RULES.all)))) {
                $required[$required.length] = $property;
              }
            }
          }
        } else {
          var $required = $schema;
        }
      }
      if ($isData || $required.length) {
        var $currentErrorPath = it.errorPath,
          $loopRequired = $isData || $required.length >= it.opts.loopRequired,
          $ownProperties = it.opts.ownProperties;
        if ($breakOnError) {
          out += ' var missing' + ($lvl) + '; ';
          if ($loopRequired) {
            if (!$isData) {
              out += ' var ' + ($vSchema) + ' = validate.schema' + ($schemaPath) + '; ';
            }
            var $i = 'i' + $lvl,
              $propertyPath = 'schema' + $lvl + '[' + $i + ']',
              $missingProperty = '\' + ' + $propertyPath + ' + \'';
            if (it.opts._errorDataPathProperty) {
              it.errorPath = it.util.getPathExpr($currentErrorPath, $propertyPath, it.opts.jsonPointers);
            }
            out += ' var ' + ($valid) + ' = true; ';
            if ($isData) {
              out += ' if (schema' + ($lvl) + ' === undefined) ' + ($valid) + ' = true; else if (!Array.isArray(schema' + ($lvl) + ')) ' + ($valid) + ' = false; else {';
            }
            out += ' for (var ' + ($i) + ' = 0; ' + ($i) + ' < ' + ($vSchema) + '.length; ' + ($i) + '++) { ' + ($valid) + ' = ' + ($data) + '[' + ($vSchema) + '[' + ($i) + ']] !== undefined ';
            if ($ownProperties) {
              out += ' &&   Object.prototype.hasOwnProperty.call(' + ($data) + ', ' + ($vSchema) + '[' + ($i) + ']) ';
            }
            out += '; if (!' + ($valid) + ') break; } ';
            if ($isData) {
              out += '  }  ';
            }
            out += '  if (!' + ($valid) + ') {   ';
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = ''; /* istanbul ignore else */
            if (it.createErrors !== false) {
              out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
              if (it.opts.messages !== false) {
                out += ' , message: \'';
                if (it.opts._errorDataPathProperty) {
                  out += 'is a required property';
                } else {
                  out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
                }
                out += '\' ';
              }
              if (it.opts.verbose) {
                out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
              }
              out += ' } ';
            } else {
              out += ' {} ';
            }
            var __err = out;
            out = $$outStack.pop();
            if (!it.compositeRule && $breakOnError) {
              /* istanbul ignore if */
              if (it.async) {
                out += ' throw new ValidationError([' + (__err) + ']); ';
              } else {
                out += ' validate.errors = [' + (__err) + ']; return false; ';
              }
            } else {
              out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
            }
            out += ' } else { ';
          } else {
            out += ' if ( ';
            var arr2 = $required;
            if (arr2) {
              var $propertyKey, $i = -1,
                l2 = arr2.length - 1;
              while ($i < l2) {
                $propertyKey = arr2[$i += 1];
                if ($i) {
                  out += ' || ';
                }
                var $prop = it.util.getProperty($propertyKey),
                  $useData = $data + $prop;
                out += ' ( ( ' + ($useData) + ' === undefined ';
                if ($ownProperties) {
                  out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
                }
                out += ') && (missing' + ($lvl) + ' = ' + (it.util.toQuotedString(it.opts.jsonPointers ? $propertyKey : $prop)) + ') ) ';
              }
            }
            out += ') {  ';
            var $propertyPath = 'missing' + $lvl,
              $missingProperty = '\' + ' + $propertyPath + ' + \'';
            if (it.opts._errorDataPathProperty) {
              it.errorPath = it.opts.jsonPointers ? it.util.getPathExpr($currentErrorPath, $propertyPath, true) : $currentErrorPath + ' + ' + $propertyPath;
            }
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = ''; /* istanbul ignore else */
            if (it.createErrors !== false) {
              out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
              if (it.opts.messages !== false) {
                out += ' , message: \'';
                if (it.opts._errorDataPathProperty) {
                  out += 'is a required property';
                } else {
                  out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
                }
                out += '\' ';
              }
              if (it.opts.verbose) {
                out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
              }
              out += ' } ';
            } else {
              out += ' {} ';
            }
            var __err = out;
            out = $$outStack.pop();
            if (!it.compositeRule && $breakOnError) {
              /* istanbul ignore if */
              if (it.async) {
                out += ' throw new ValidationError([' + (__err) + ']); ';
              } else {
                out += ' validate.errors = [' + (__err) + ']; return false; ';
              }
            } else {
              out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
            }
            out += ' } else { ';
          }
        } else {
          if ($loopRequired) {
            if (!$isData) {
              out += ' var ' + ($vSchema) + ' = validate.schema' + ($schemaPath) + '; ';
            }
            var $i = 'i' + $lvl,
              $propertyPath = 'schema' + $lvl + '[' + $i + ']',
              $missingProperty = '\' + ' + $propertyPath + ' + \'';
            if (it.opts._errorDataPathProperty) {
              it.errorPath = it.util.getPathExpr($currentErrorPath, $propertyPath, it.opts.jsonPointers);
            }
            if ($isData) {
              out += ' if (' + ($vSchema) + ' && !Array.isArray(' + ($vSchema) + ')) {  var err =   '; /* istanbul ignore else */
              if (it.createErrors !== false) {
                out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
                if (it.opts.messages !== false) {
                  out += ' , message: \'';
                  if (it.opts._errorDataPathProperty) {
                    out += 'is a required property';
                  } else {
                    out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
                  }
                  out += '\' ';
                }
                if (it.opts.verbose) {
                  out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
                }
                out += ' } ';
              } else {
                out += ' {} ';
              }
              out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (' + ($vSchema) + ' !== undefined) { ';
            }
            out += ' for (var ' + ($i) + ' = 0; ' + ($i) + ' < ' + ($vSchema) + '.length; ' + ($i) + '++) { if (' + ($data) + '[' + ($vSchema) + '[' + ($i) + ']] === undefined ';
            if ($ownProperties) {
              out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', ' + ($vSchema) + '[' + ($i) + ']) ';
            }
            out += ') {  var err =   '; /* istanbul ignore else */
            if (it.createErrors !== false) {
              out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
              if (it.opts.messages !== false) {
                out += ' , message: \'';
                if (it.opts._errorDataPathProperty) {
                  out += 'is a required property';
                } else {
                  out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
                }
                out += '\' ';
              }
              if (it.opts.verbose) {
                out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
              }
              out += ' } ';
            } else {
              out += ' {} ';
            }
            out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ';
            if ($isData) {
              out += '  }  ';
            }
          } else {
            var arr3 = $required;
            if (arr3) {
              var $propertyKey, i3 = -1,
                l3 = arr3.length - 1;
              while (i3 < l3) {
                $propertyKey = arr3[i3 += 1];
                var $prop = it.util.getProperty($propertyKey),
                  $missingProperty = it.util.escapeQuotes($propertyKey),
                  $useData = $data + $prop;
                if (it.opts._errorDataPathProperty) {
                  it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
                }
                out += ' if ( ' + ($useData) + ' === undefined ';
                if ($ownProperties) {
                  out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
                }
                out += ') {  var err =   '; /* istanbul ignore else */
                if (it.createErrors !== false) {
                  out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
                  if (it.opts.messages !== false) {
                    out += ' , message: \'';
                    if (it.opts._errorDataPathProperty) {
                      out += 'is a required property';
                    } else {
                      out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
                    }
                    out += '\' ';
                  }
                  if (it.opts.verbose) {
                    out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
                  }
                  out += ' } ';
                } else {
                  out += ' {} ';
                }
                out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ';
              }
            }
          }
        }
        it.errorPath = $currentErrorPath;
      } else if ($breakOnError) {
        out += ' if (true) {';
      }
      return out;
    };

    var uniqueItems = function generate_uniqueItems(it, $keyword, $ruleType) {
      var out = ' ';
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = 'data' + ($dataLvl || '');
      var $valid = 'valid' + $lvl;
      var $isData = it.opts.$data && $schema && $schema.$data,
        $schemaValue;
      if ($isData) {
        out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
        $schemaValue = 'schema' + $lvl;
      } else {
        $schemaValue = $schema;
      }
      if (($schema || $isData) && it.opts.uniqueItems !== false) {
        if ($isData) {
          out += ' var ' + ($valid) + '; if (' + ($schemaValue) + ' === false || ' + ($schemaValue) + ' === undefined) ' + ($valid) + ' = true; else if (typeof ' + ($schemaValue) + ' != \'boolean\') ' + ($valid) + ' = false; else { ';
        }
        out += ' var i = ' + ($data) + '.length , ' + ($valid) + ' = true , j; if (i > 1) { ';
        var $itemType = it.schema.items && it.schema.items.type,
          $typeIsArray = Array.isArray($itemType);
        if (!$itemType || $itemType == 'object' || $itemType == 'array' || ($typeIsArray && ($itemType.indexOf('object') >= 0 || $itemType.indexOf('array') >= 0))) {
          out += ' outer: for (;i--;) { for (j = i; j--;) { if (equal(' + ($data) + '[i], ' + ($data) + '[j])) { ' + ($valid) + ' = false; break outer; } } } ';
        } else {
          out += ' var itemIndices = {}, item; for (;i--;) { var item = ' + ($data) + '[i]; ';
          var $method = 'checkDataType' + ($typeIsArray ? 's' : '');
          out += ' if (' + (it.util[$method]($itemType, 'item', true)) + ') continue; ';
          if ($typeIsArray) {
            out += ' if (typeof item == \'string\') item = \'"\' + item; ';
          }
          out += ' if (typeof itemIndices[item] == \'number\') { ' + ($valid) + ' = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ';
        }
        out += ' } ';
        if ($isData) {
          out += '  }  ';
        }
        out += ' if (!' + ($valid) + ') {   ';
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = ''; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ('uniqueItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { i: i, j: j } ';
          if (it.opts.messages !== false) {
            out += ' , message: \'should NOT have duplicate items (items ## \' + j + \' and \' + i + \' are identical)\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema:  ';
            if ($isData) {
              out += 'validate.schema' + ($schemaPath);
            } else {
              out += '' + ($schema);
            }
            out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) {
          /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + (__err) + ']); ';
          } else {
            out += ' validate.errors = [' + (__err) + ']; return false; ';
          }
        } else {
          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        out += ' } ';
        if ($breakOnError) {
          out += ' else { ';
        }
      } else {
        if ($breakOnError) {
          out += ' if (true) { ';
        }
      }
      return out;
    };

    //all requires must be explicit because browserify won't work with dynamic requires
    var dotjs = {
      '$ref': ref,
      allOf: allOf,
      anyOf: anyOf,
      '$comment': comment,
      const: _const,
      contains: contains,
      dependencies: dependencies,
      'enum': _enum,
      format: format,
      'if': _if,
      items: items,
      maximum: _limit,
      minimum: _limit,
      maxItems: _limitItems,
      minItems: _limitItems,
      maxLength: _limitLength,
      minLength: _limitLength,
      maxProperties: _limitProperties,
      minProperties: _limitProperties,
      multipleOf: multipleOf,
      not: not,
      oneOf: oneOf,
      pattern: pattern,
      properties: properties,
      propertyNames: propertyNames,
      required: required,
      uniqueItems: uniqueItems,
      validate: validate
    };

    var toHash$1 = util.toHash;

    var rules = function rules() {
      var RULES = [
        { type: 'number',
          rules: [ { 'maximum': ['exclusiveMaximum'] },
                   { 'minimum': ['exclusiveMinimum'] }, 'multipleOf', 'format'] },
        { type: 'string',
          rules: [ 'maxLength', 'minLength', 'pattern', 'format' ] },
        { type: 'array',
          rules: [ 'maxItems', 'minItems', 'items', 'contains', 'uniqueItems' ] },
        { type: 'object',
          rules: [ 'maxProperties', 'minProperties', 'required', 'dependencies', 'propertyNames',
                   { 'properties': ['additionalProperties', 'patternProperties'] } ] },
        { rules: [ '$ref', 'const', 'enum', 'not', 'anyOf', 'oneOf', 'allOf', 'if' ] }
      ];

      var ALL = [ 'type', '$comment' ];
      var KEYWORDS = [
        '$schema', '$id', 'id', '$data', '$async', 'title',
        'description', 'default', 'definitions',
        'examples', 'readOnly', 'writeOnly',
        'contentMediaType', 'contentEncoding',
        'additionalItems', 'then', 'else'
      ];
      var TYPES = [ 'number', 'integer', 'string', 'array', 'object', 'boolean', 'null' ];
      RULES.all = toHash$1(ALL);
      RULES.types = toHash$1(TYPES);

      RULES.forEach(function (group) {
        group.rules = group.rules.map(function (keyword) {
          var implKeywords;
          if (typeof keyword == 'object') {
            var key = Object.keys(keyword)[0];
            implKeywords = keyword[key];
            keyword = key;
            implKeywords.forEach(function (k) {
              ALL.push(k);
              RULES.all[k] = true;
            });
          }
          ALL.push(keyword);
          var rule = RULES.all[keyword] = {
            keyword: keyword,
            code: dotjs[keyword],
            implements: implKeywords
          };
          return rule;
        });

        RULES.all.$comment = {
          keyword: '$comment',
          code: dotjs.$comment
        };

        if (group.type) RULES.types[group.type] = group;
      });

      RULES.keywords = toHash$1(ALL.concat(KEYWORDS));
      RULES.custom = {};

      return RULES;
    };

    var KEYWORDS = [
      'multipleOf',
      'maximum',
      'exclusiveMaximum',
      'minimum',
      'exclusiveMinimum',
      'maxLength',
      'minLength',
      'pattern',
      'additionalItems',
      'maxItems',
      'minItems',
      'uniqueItems',
      'maxProperties',
      'minProperties',
      'required',
      'additionalProperties',
      'enum',
      'format',
      'const'
    ];

    var data = function (metaSchema, keywordsJsonPointers) {
      for (var i=0; i<keywordsJsonPointers.length; i++) {
        metaSchema = JSON.parse(JSON.stringify(metaSchema));
        var segments = keywordsJsonPointers[i].split('/');
        var keywords = metaSchema;
        var j;
        for (j=1; j<segments.length; j++)
          keywords = keywords[segments[j]];

        for (j=0; j<KEYWORDS.length; j++) {
          var key = KEYWORDS[j];
          var schema = keywords[key];
          if (schema) {
            keywords[key] = {
              anyOf: [
                schema,
                { $ref: 'https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#' }
              ]
            };
          }
        }
      }

      return metaSchema;
    };

    var MissingRefError$1 = error_classes.MissingRef;

    var async = compileAsync;


    /**
     * Creates validating function for passed schema with asynchronous loading of missing schemas.
     * `loadSchema` option should be a function that accepts schema uri and returns promise that resolves with the schema.
     * @this  Ajv
     * @param {Object}   schema schema object
     * @param {Boolean}  meta optional true to compile meta-schema; this parameter can be skipped
     * @param {Function} callback an optional node-style callback, it is called with 2 parameters: error (or null) and validating function.
     * @return {Promise} promise that resolves with a validating function.
     */
    function compileAsync(schema, meta, callback) {
      /* eslint no-shadow: 0 */
      /* global Promise */
      /* jshint validthis: true */
      var self = this;
      if (typeof this._opts.loadSchema != 'function')
        throw new Error('options.loadSchema should be a function');

      if (typeof meta == 'function') {
        callback = meta;
        meta = undefined;
      }

      var p = loadMetaSchemaOf(schema).then(function () {
        var schemaObj = self._addSchema(schema, undefined, meta);
        return schemaObj.validate || _compileAsync(schemaObj);
      });

      if (callback) {
        p.then(
          function(v) { callback(null, v); },
          callback
        );
      }

      return p;


      function loadMetaSchemaOf(sch) {
        var $schema = sch.$schema;
        return $schema && !self.getSchema($schema)
                ? compileAsync.call(self, { $ref: $schema }, true)
                : Promise.resolve();
      }


      function _compileAsync(schemaObj) {
        try { return self._compile(schemaObj); }
        catch(e) {
          if (e instanceof MissingRefError$1) return loadMissingSchema(e);
          throw e;
        }


        function loadMissingSchema(e) {
          var ref = e.missingSchema;
          if (added(ref)) throw new Error('Schema ' + ref + ' is loaded but ' + e.missingRef + ' cannot be resolved');

          var schemaPromise = self._loadingSchemas[ref];
          if (!schemaPromise) {
            schemaPromise = self._loadingSchemas[ref] = self._opts.loadSchema(ref);
            schemaPromise.then(removePromise, removePromise);
          }

          return schemaPromise.then(function (sch) {
            if (!added(ref)) {
              return loadMetaSchemaOf(sch).then(function () {
                if (!added(ref)) self.addSchema(sch, ref, undefined, meta);
              });
            }
          }).then(function() {
            return _compileAsync(schemaObj);
          });

          function removePromise() {
            delete self._loadingSchemas[ref];
          }

          function added(ref) {
            return self._refs[ref] || self._schemas[ref];
          }
        }
      }
    }

    var custom = function generate_custom(it, $keyword, $ruleType) {
      var out = ' ';
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $errorKeyword;
      var $data = 'data' + ($dataLvl || '');
      var $valid = 'valid' + $lvl;
      var $errs = 'errs__' + $lvl;
      var $isData = it.opts.$data && $schema && $schema.$data,
        $schemaValue;
      if ($isData) {
        out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
        $schemaValue = 'schema' + $lvl;
      } else {
        $schemaValue = $schema;
      }
      var $rule = this,
        $definition = 'definition' + $lvl,
        $rDef = $rule.definition,
        $closingBraces = '';
      var $compile, $inline, $macro, $ruleValidate, $validateCode;
      if ($isData && $rDef.$data) {
        $validateCode = 'keywordValidate' + $lvl;
        var $validateSchema = $rDef.validateSchema;
        out += ' var ' + ($definition) + ' = RULES.custom[\'' + ($keyword) + '\'].definition; var ' + ($validateCode) + ' = ' + ($definition) + '.validate;';
      } else {
        $ruleValidate = it.useCustomRule($rule, $schema, it.schema, it);
        if (!$ruleValidate) return;
        $schemaValue = 'validate.schema' + $schemaPath;
        $validateCode = $ruleValidate.code;
        $compile = $rDef.compile;
        $inline = $rDef.inline;
        $macro = $rDef.macro;
      }
      var $ruleErrs = $validateCode + '.errors',
        $i = 'i' + $lvl,
        $ruleErr = 'ruleErr' + $lvl,
        $asyncKeyword = $rDef.async;
      if ($asyncKeyword && !it.async) throw new Error('async keyword in sync schema');
      if (!($inline || $macro)) {
        out += '' + ($ruleErrs) + ' = null;';
      }
      out += 'var ' + ($errs) + ' = errors;var ' + ($valid) + ';';
      if ($isData && $rDef.$data) {
        $closingBraces += '}';
        out += ' if (' + ($schemaValue) + ' === undefined) { ' + ($valid) + ' = true; } else { ';
        if ($validateSchema) {
          $closingBraces += '}';
          out += ' ' + ($valid) + ' = ' + ($definition) + '.validateSchema(' + ($schemaValue) + '); if (' + ($valid) + ') { ';
        }
      }
      if ($inline) {
        if ($rDef.statements) {
          out += ' ' + ($ruleValidate.validate) + ' ';
        } else {
          out += ' ' + ($valid) + ' = ' + ($ruleValidate.validate) + '; ';
        }
      } else if ($macro) {
        var $it = it.util.copy(it);
        var $closingBraces = '';
        $it.level++;
        var $nextValid = 'valid' + $it.level;
        $it.schema = $ruleValidate.validate;
        $it.schemaPath = '';
        var $wasComposite = it.compositeRule;
        it.compositeRule = $it.compositeRule = true;
        var $code = it.validate($it).replace(/validate\.schema/g, $validateCode);
        it.compositeRule = $it.compositeRule = $wasComposite;
        out += ' ' + ($code);
      } else {
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = '';
        out += '  ' + ($validateCode) + '.call( ';
        if (it.opts.passContext) {
          out += 'this';
        } else {
          out += 'self';
        }
        if ($compile || $rDef.schema === false) {
          out += ' , ' + ($data) + ' ';
        } else {
          out += ' , ' + ($schemaValue) + ' , ' + ($data) + ' , validate.schema' + (it.schemaPath) + ' ';
        }
        out += ' , (dataPath || \'\')';
        if (it.errorPath != '""') {
          out += ' + ' + (it.errorPath);
        }
        var $parentData = $dataLvl ? 'data' + (($dataLvl - 1) || '') : 'parentData',
          $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
        out += ' , ' + ($parentData) + ' , ' + ($parentDataProperty) + ' , rootData )  ';
        var def_callRuleValidate = out;
        out = $$outStack.pop();
        if ($rDef.errors === false) {
          out += ' ' + ($valid) + ' = ';
          if ($asyncKeyword) {
            out += 'await ';
          }
          out += '' + (def_callRuleValidate) + '; ';
        } else {
          if ($asyncKeyword) {
            $ruleErrs = 'customErrors' + $lvl;
            out += ' var ' + ($ruleErrs) + ' = null; try { ' + ($valid) + ' = await ' + (def_callRuleValidate) + '; } catch (e) { ' + ($valid) + ' = false; if (e instanceof ValidationError) ' + ($ruleErrs) + ' = e.errors; else throw e; } ';
          } else {
            out += ' ' + ($ruleErrs) + ' = null; ' + ($valid) + ' = ' + (def_callRuleValidate) + '; ';
          }
        }
      }
      if ($rDef.modifying) {
        out += ' if (' + ($parentData) + ') ' + ($data) + ' = ' + ($parentData) + '[' + ($parentDataProperty) + '];';
      }
      out += '' + ($closingBraces);
      if ($rDef.valid) {
        if ($breakOnError) {
          out += ' if (true) { ';
        }
      } else {
        out += ' if ( ';
        if ($rDef.valid === undefined) {
          out += ' !';
          if ($macro) {
            out += '' + ($nextValid);
          } else {
            out += '' + ($valid);
          }
        } else {
          out += ' ' + (!$rDef.valid) + ' ';
        }
        out += ') { ';
        $errorKeyword = $rule.keyword;
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = '';
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = ''; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ($errorKeyword || 'custom') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { keyword: \'' + ($rule.keyword) + '\' } ';
          if (it.opts.messages !== false) {
            out += ' , message: \'should pass "' + ($rule.keyword) + '" keyword validation\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) {
          /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + (__err) + ']); ';
          } else {
            out += ' validate.errors = [' + (__err) + ']; return false; ';
          }
        } else {
          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        var def_customError = out;
        out = $$outStack.pop();
        if ($inline) {
          if ($rDef.errors) {
            if ($rDef.errors != 'full') {
              out += '  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + ']; if (' + ($ruleErr) + '.dataPath === undefined) ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + '; if (' + ($ruleErr) + '.schemaPath === undefined) { ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '"; } ';
              if (it.opts.verbose) {
                out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
              }
              out += ' } ';
            }
          } else {
            if ($rDef.errors === false) {
              out += ' ' + (def_customError) + ' ';
            } else {
              out += ' if (' + ($errs) + ' == errors) { ' + (def_customError) + ' } else {  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + ']; if (' + ($ruleErr) + '.dataPath === undefined) ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + '; if (' + ($ruleErr) + '.schemaPath === undefined) { ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '"; } ';
              if (it.opts.verbose) {
                out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
              }
              out += ' } } ';
            }
          }
        } else if ($macro) {
          out += '   var err =   '; /* istanbul ignore else */
          if (it.createErrors !== false) {
            out += ' { keyword: \'' + ($errorKeyword || 'custom') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { keyword: \'' + ($rule.keyword) + '\' } ';
            if (it.opts.messages !== false) {
              out += ' , message: \'should pass "' + ($rule.keyword) + '" keyword validation\' ';
            }
            if (it.opts.verbose) {
              out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
            }
            out += ' } ';
          } else {
            out += ' {} ';
          }
          out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          if (!it.compositeRule && $breakOnError) {
            /* istanbul ignore if */
            if (it.async) {
              out += ' throw new ValidationError(vErrors); ';
            } else {
              out += ' validate.errors = vErrors; return false; ';
            }
          }
        } else {
          if ($rDef.errors === false) {
            out += ' ' + (def_customError) + ' ';
          } else {
            out += ' if (Array.isArray(' + ($ruleErrs) + ')) { if (vErrors === null) vErrors = ' + ($ruleErrs) + '; else vErrors = vErrors.concat(' + ($ruleErrs) + '); errors = vErrors.length;  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + ']; if (' + ($ruleErr) + '.dataPath === undefined) ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + ';  ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '";  ';
            if (it.opts.verbose) {
              out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
            }
            out += ' } } else { ' + (def_customError) + ' } ';
          }
        }
        out += ' } ';
        if ($breakOnError) {
          out += ' else { ';
        }
      }
      return out;
    };

    var $schema$1 = "http://json-schema.org/draft-07/schema#";
    var $id = "http://json-schema.org/draft-07/schema#";
    var title = "Core schema meta-schema";
    var definitions$1 = {
    	schemaArray: {
    		type: "array",
    		minItems: 1,
    		items: {
    			$ref: "#"
    		}
    	},
    	nonNegativeInteger: {
    		type: "integer",
    		minimum: 0
    	},
    	nonNegativeIntegerDefault0: {
    		allOf: [
    			{
    				$ref: "#/definitions/nonNegativeInteger"
    			},
    			{
    				"default": 0
    			}
    		]
    	},
    	simpleTypes: {
    		"enum": [
    			"array",
    			"boolean",
    			"integer",
    			"null",
    			"number",
    			"object",
    			"string"
    		]
    	},
    	stringArray: {
    		type: "array",
    		items: {
    			type: "string"
    		},
    		uniqueItems: true,
    		"default": [
    		]
    	}
    };
    var type = [
    	"object",
    	"boolean"
    ];
    var properties$1 = {
    	$id: {
    		type: "string",
    		format: "uri-reference"
    	},
    	$schema: {
    		type: "string",
    		format: "uri"
    	},
    	$ref: {
    		type: "string",
    		format: "uri-reference"
    	},
    	$comment: {
    		type: "string"
    	},
    	title: {
    		type: "string"
    	},
    	description: {
    		type: "string"
    	},
    	"default": true,
    	readOnly: {
    		type: "boolean",
    		"default": false
    	},
    	examples: {
    		type: "array",
    		items: true
    	},
    	multipleOf: {
    		type: "number",
    		exclusiveMinimum: 0
    	},
    	maximum: {
    		type: "number"
    	},
    	exclusiveMaximum: {
    		type: "number"
    	},
    	minimum: {
    		type: "number"
    	},
    	exclusiveMinimum: {
    		type: "number"
    	},
    	maxLength: {
    		$ref: "#/definitions/nonNegativeInteger"
    	},
    	minLength: {
    		$ref: "#/definitions/nonNegativeIntegerDefault0"
    	},
    	pattern: {
    		type: "string",
    		format: "regex"
    	},
    	additionalItems: {
    		$ref: "#"
    	},
    	items: {
    		anyOf: [
    			{
    				$ref: "#"
    			},
    			{
    				$ref: "#/definitions/schemaArray"
    			}
    		],
    		"default": true
    	},
    	maxItems: {
    		$ref: "#/definitions/nonNegativeInteger"
    	},
    	minItems: {
    		$ref: "#/definitions/nonNegativeIntegerDefault0"
    	},
    	uniqueItems: {
    		type: "boolean",
    		"default": false
    	},
    	contains: {
    		$ref: "#"
    	},
    	maxProperties: {
    		$ref: "#/definitions/nonNegativeInteger"
    	},
    	minProperties: {
    		$ref: "#/definitions/nonNegativeIntegerDefault0"
    	},
    	required: {
    		$ref: "#/definitions/stringArray"
    	},
    	additionalProperties: {
    		$ref: "#"
    	},
    	definitions: {
    		type: "object",
    		additionalProperties: {
    			$ref: "#"
    		},
    		"default": {
    		}
    	},
    	properties: {
    		type: "object",
    		additionalProperties: {
    			$ref: "#"
    		},
    		"default": {
    		}
    	},
    	patternProperties: {
    		type: "object",
    		additionalProperties: {
    			$ref: "#"
    		},
    		propertyNames: {
    			format: "regex"
    		},
    		"default": {
    		}
    	},
    	dependencies: {
    		type: "object",
    		additionalProperties: {
    			anyOf: [
    				{
    					$ref: "#"
    				},
    				{
    					$ref: "#/definitions/stringArray"
    				}
    			]
    		}
    	},
    	propertyNames: {
    		$ref: "#"
    	},
    	"const": true,
    	"enum": {
    		type: "array",
    		items: true,
    		minItems: 1,
    		uniqueItems: true
    	},
    	type: {
    		anyOf: [
    			{
    				$ref: "#/definitions/simpleTypes"
    			},
    			{
    				type: "array",
    				items: {
    					$ref: "#/definitions/simpleTypes"
    				},
    				minItems: 1,
    				uniqueItems: true
    			}
    		]
    	},
    	format: {
    		type: "string"
    	},
    	contentMediaType: {
    		type: "string"
    	},
    	contentEncoding: {
    		type: "string"
    	},
    	"if": {
    		$ref: "#"
    	},
    	then: {
    		$ref: "#"
    	},
    	"else": {
    		$ref: "#"
    	},
    	allOf: {
    		$ref: "#/definitions/schemaArray"
    	},
    	anyOf: {
    		$ref: "#/definitions/schemaArray"
    	},
    	oneOf: {
    		$ref: "#/definitions/schemaArray"
    	},
    	not: {
    		$ref: "#"
    	}
    };
    var jsonSchemaDraft07 = {
    	$schema: $schema$1,
    	$id: $id,
    	title: title,
    	definitions: definitions$1,
    	type: type,
    	properties: properties$1,
    	"default": true
    };

    var jsonSchemaDraft07$1 = /*#__PURE__*/Object.freeze({
        $schema: $schema$1,
        $id: $id,
        title: title,
        definitions: definitions$1,
        type: type,
        properties: properties$1,
        'default': jsonSchemaDraft07
    });

    var require$$2 = getCjsExportFromNamespace(jsonSchemaDraft07$1);

    var definition_schema = {
      $id: 'https://github.com/epoberezkin/ajv/blob/master/lib/definition_schema.js',
      definitions: {
        simpleTypes: require$$2.definitions.simpleTypes
      },
      type: 'object',
      dependencies: {
        schema: ['validate'],
        $data: ['validate'],
        statements: ['inline'],
        valid: {not: {required: ['macro']}}
      },
      properties: {
        type: require$$2.properties.type,
        schema: {type: 'boolean'},
        statements: {type: 'boolean'},
        dependencies: {
          type: 'array',
          items: {type: 'string'}
        },
        metaSchema: {type: 'object'},
        modifying: {type: 'boolean'},
        valid: {type: 'boolean'},
        $data: {type: 'boolean'},
        async: {type: 'boolean'},
        errors: {
          anyOf: [
            {type: 'boolean'},
            {const: 'full'}
          ]
        }
      }
    };

    var IDENTIFIER$1 = /^[a-z_$][a-z0-9_$-]*$/i;



    var keyword = {
      add: addKeyword,
      get: getKeyword,
      remove: removeKeyword,
      validate: validateKeyword
    };


    /**
     * Define custom keyword
     * @this  Ajv
     * @param {String} keyword custom keyword, should be unique (including different from all standard, custom and macro keywords).
     * @param {Object} definition keyword definition object with properties `type` (type(s) which the keyword applies to), `validate` or `compile`.
     * @return {Ajv} this for method chaining
     */
    function addKeyword(keyword, definition) {
      /* jshint validthis: true */
      /* eslint no-shadow: 0 */
      var RULES = this.RULES;
      if (RULES.keywords[keyword])
        throw new Error('Keyword ' + keyword + ' is already defined');

      if (!IDENTIFIER$1.test(keyword))
        throw new Error('Keyword ' + keyword + ' is not a valid identifier');

      if (definition) {
        this.validateKeyword(definition, true);

        var dataType = definition.type;
        if (Array.isArray(dataType)) {
          for (var i=0; i<dataType.length; i++)
            _addRule(keyword, dataType[i], definition);
        } else {
          _addRule(keyword, dataType, definition);
        }

        var metaSchema = definition.metaSchema;
        if (metaSchema) {
          if (definition.$data && this._opts.$data) {
            metaSchema = {
              anyOf: [
                metaSchema,
                { '$ref': 'https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#' }
              ]
            };
          }
          definition.validateSchema = this.compile(metaSchema, true);
        }
      }

      RULES.keywords[keyword] = RULES.all[keyword] = true;


      function _addRule(keyword, dataType, definition) {
        var ruleGroup;
        for (var i=0; i<RULES.length; i++) {
          var rg = RULES[i];
          if (rg.type == dataType) {
            ruleGroup = rg;
            break;
          }
        }

        if (!ruleGroup) {
          ruleGroup = { type: dataType, rules: [] };
          RULES.push(ruleGroup);
        }

        var rule = {
          keyword: keyword,
          definition: definition,
          custom: true,
          code: custom,
          implements: definition.implements
        };
        ruleGroup.rules.push(rule);
        RULES.custom[keyword] = rule;
      }

      return this;
    }


    /**
     * Get keyword
     * @this  Ajv
     * @param {String} keyword pre-defined or custom keyword.
     * @return {Object|Boolean} custom keyword definition, `true` if it is a predefined keyword, `false` otherwise.
     */
    function getKeyword(keyword) {
      /* jshint validthis: true */
      var rule = this.RULES.custom[keyword];
      return rule ? rule.definition : this.RULES.keywords[keyword] || false;
    }


    /**
     * Remove keyword
     * @this  Ajv
     * @param {String} keyword pre-defined or custom keyword.
     * @return {Ajv} this for method chaining
     */
    function removeKeyword(keyword) {
      /* jshint validthis: true */
      var RULES = this.RULES;
      delete RULES.keywords[keyword];
      delete RULES.all[keyword];
      delete RULES.custom[keyword];
      for (var i=0; i<RULES.length; i++) {
        var rules = RULES[i].rules;
        for (var j=0; j<rules.length; j++) {
          if (rules[j].keyword == keyword) {
            rules.splice(j, 1);
            break;
          }
        }
      }
      return this;
    }


    /**
     * Validate keyword definition
     * @this  Ajv
     * @param {Object} definition keyword definition object.
     * @param {Boolean} throwError true to throw exception if definition is invalid
     * @return {boolean} validation result
     */
    function validateKeyword(definition, throwError) {
      validateKeyword.errors = null;
      var v = this._validateKeyword = this._validateKeyword
                                      || this.compile(definition_schema, true);

      if (v(definition)) return true;
      validateKeyword.errors = v.errors;
      if (throwError)
        throw new Error('custom keyword definition is invalid: '  + this.errorsText(v.errors));
      else
        return false;
    }

    var $schema$2 = "http://json-schema.org/draft-07/schema#";
    var $id$1 = "https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#";
    var description = "Meta-schema for $data reference (JSON Schema extension proposal)";
    var type$1 = "object";
    var required$1 = [
    	"$data"
    ];
    var properties$2 = {
    	$data: {
    		type: "string",
    		anyOf: [
    			{
    				format: "relative-json-pointer"
    			},
    			{
    				format: "json-pointer"
    			}
    		]
    	}
    };
    var additionalProperties = false;
    var data$1 = {
    	$schema: $schema$2,
    	$id: $id$1,
    	description: description,
    	type: type$1,
    	required: required$1,
    	properties: properties$2,
    	additionalProperties: additionalProperties
    };

    var data$2 = /*#__PURE__*/Object.freeze({
        $schema: $schema$2,
        $id: $id$1,
        description: description,
        type: type$1,
        required: required$1,
        properties: properties$2,
        additionalProperties: additionalProperties,
        'default': data$1
    });

    var require$$1 = getCjsExportFromNamespace(data$2);

    var ajv = Ajv;

    Ajv.prototype.validate = validate$1;
    Ajv.prototype.compile = compile$1;
    Ajv.prototype.addSchema = addSchema;
    Ajv.prototype.addMetaSchema = addMetaSchema;
    Ajv.prototype.validateSchema = validateSchema;
    Ajv.prototype.getSchema = getSchema;
    Ajv.prototype.removeSchema = removeSchema;
    Ajv.prototype.addFormat = addFormat;
    Ajv.prototype.errorsText = errorsText;

    Ajv.prototype._addSchema = _addSchema;
    Ajv.prototype._compile = _compile;

    Ajv.prototype.compileAsync = async;

    Ajv.prototype.addKeyword = keyword.add;
    Ajv.prototype.getKeyword = keyword.get;
    Ajv.prototype.removeKeyword = keyword.remove;
    Ajv.prototype.validateKeyword = keyword.validate;


    Ajv.ValidationError = error_classes.Validation;
    Ajv.MissingRefError = error_classes.MissingRef;
    Ajv.$dataMetaSchema = data;

    var META_SCHEMA_ID = 'http://json-schema.org/draft-07/schema';

    var META_IGNORE_OPTIONS = [ 'removeAdditional', 'useDefaults', 'coerceTypes', 'strictDefaults' ];
    var META_SUPPORT_DATA = ['/properties'];

    /**
     * Creates validator instance.
     * Usage: `Ajv(opts)`
     * @param {Object} opts optional options
     * @return {Object} ajv instance
     */
    function Ajv(opts) {
      if (!(this instanceof Ajv)) return new Ajv(opts);
      opts = this._opts = util.copy(opts) || {};
      setLogger(this);
      this._schemas = {};
      this._refs = {};
      this._fragments = {};
      this._formats = formats_1(opts.format);

      this._cache = opts.cache || new cache;
      this._loadingSchemas = {};
      this._compilations = [];
      this.RULES = rules();
      this._getId = chooseGetId(opts);

      opts.loopRequired = opts.loopRequired || Infinity;
      if (opts.errorDataPath == 'property') opts._errorDataPathProperty = true;
      if (opts.serialize === undefined) opts.serialize = fastJsonStableStringify;
      this._metaOpts = getMetaSchemaOptions(this);

      if (opts.formats) addInitialFormats(this);
      addDefaultMetaSchema(this);
      if (typeof opts.meta == 'object') this.addMetaSchema(opts.meta);
      if (opts.nullable) this.addKeyword('nullable', {metaSchema: {type: 'boolean'}});
      addInitialSchemas(this);
    }



    /**
     * Validate data using schema
     * Schema will be compiled and cached (using serialized JSON as key. [fast-json-stable-stringify](https://github.com/epoberezkin/fast-json-stable-stringify) is used to serialize.
     * @this   Ajv
     * @param  {String|Object} schemaKeyRef key, ref or schema object
     * @param  {Any} data to be validated
     * @return {Boolean} validation result. Errors from the last validation will be available in `ajv.errors` (and also in compiled schema: `schema.errors`).
     */
    function validate$1(schemaKeyRef, data) {
      var v;
      if (typeof schemaKeyRef == 'string') {
        v = this.getSchema(schemaKeyRef);
        if (!v) throw new Error('no schema with key or ref "' + schemaKeyRef + '"');
      } else {
        var schemaObj = this._addSchema(schemaKeyRef);
        v = schemaObj.validate || this._compile(schemaObj);
      }

      var valid = v(data);
      if (v.$async !== true) this.errors = v.errors;
      return valid;
    }


    /**
     * Create validating function for passed schema.
     * @this   Ajv
     * @param  {Object} schema schema object
     * @param  {Boolean} _meta true if schema is a meta-schema. Used internally to compile meta schemas of custom keywords.
     * @return {Function} validating function
     */
    function compile$1(schema, _meta) {
      var schemaObj = this._addSchema(schema, undefined, _meta);
      return schemaObj.validate || this._compile(schemaObj);
    }


    /**
     * Adds schema to the instance.
     * @this   Ajv
     * @param {Object|Array} schema schema or array of schemas. If array is passed, `key` and other parameters will be ignored.
     * @param {String} key Optional schema key. Can be passed to `validate` method instead of schema object or id/ref. One schema per instance can have empty `id` and `key`.
     * @param {Boolean} _skipValidation true to skip schema validation. Used internally, option validateSchema should be used instead.
     * @param {Boolean} _meta true if schema is a meta-schema. Used internally, addMetaSchema should be used instead.
     * @return {Ajv} this for method chaining
     */
    function addSchema(schema, key, _skipValidation, _meta) {
      if (Array.isArray(schema)){
        for (var i=0; i<schema.length; i++) this.addSchema(schema[i], undefined, _skipValidation, _meta);
        return this;
      }
      var id = this._getId(schema);
      if (id !== undefined && typeof id != 'string')
        throw new Error('schema id must be string');
      key = resolve_1.normalizeId(key || id);
      checkUnique(this, key);
      this._schemas[key] = this._addSchema(schema, _skipValidation, _meta, true);
      return this;
    }


    /**
     * Add schema that will be used to validate other schemas
     * options in META_IGNORE_OPTIONS are alway set to false
     * @this   Ajv
     * @param {Object} schema schema object
     * @param {String} key optional schema key
     * @param {Boolean} skipValidation true to skip schema validation, can be used to override validateSchema option for meta-schema
     * @return {Ajv} this for method chaining
     */
    function addMetaSchema(schema, key, skipValidation) {
      this.addSchema(schema, key, skipValidation, true);
      return this;
    }


    /**
     * Validate schema
     * @this   Ajv
     * @param {Object} schema schema to validate
     * @param {Boolean} throwOrLogError pass true to throw (or log) an error if invalid
     * @return {Boolean} true if schema is valid
     */
    function validateSchema(schema, throwOrLogError) {
      var $schema = schema.$schema;
      if ($schema !== undefined && typeof $schema != 'string')
        throw new Error('$schema must be a string');
      $schema = $schema || this._opts.defaultMeta || defaultMeta(this);
      if (!$schema) {
        this.logger.warn('meta-schema not available');
        this.errors = null;
        return true;
      }
      var valid = this.validate($schema, schema);
      if (!valid && throwOrLogError) {
        var message = 'schema is invalid: ' + this.errorsText();
        if (this._opts.validateSchema == 'log') this.logger.error(message);
        else throw new Error(message);
      }
      return valid;
    }


    function defaultMeta(self) {
      var meta = self._opts.meta;
      self._opts.defaultMeta = typeof meta == 'object'
                                ? self._getId(meta) || meta
                                : self.getSchema(META_SCHEMA_ID)
                                  ? META_SCHEMA_ID
                                  : undefined;
      return self._opts.defaultMeta;
    }


    /**
     * Get compiled schema from the instance by `key` or `ref`.
     * @this   Ajv
     * @param  {String} keyRef `key` that was passed to `addSchema` or full schema reference (`schema.id` or resolved id).
     * @return {Function} schema validating function (with property `schema`).
     */
    function getSchema(keyRef) {
      var schemaObj = _getSchemaObj(this, keyRef);
      switch (typeof schemaObj) {
        case 'object': return schemaObj.validate || this._compile(schemaObj);
        case 'string': return this.getSchema(schemaObj);
        case 'undefined': return _getSchemaFragment(this, keyRef);
      }
    }


    function _getSchemaFragment(self, ref) {
      var res = resolve_1.schema.call(self, { schema: {} }, ref);
      if (res) {
        var schema = res.schema
          , root = res.root
          , baseId = res.baseId;
        var v = compile_1.call(self, schema, root, undefined, baseId);
        self._fragments[ref] = new schema_obj({
          ref: ref,
          fragment: true,
          schema: schema,
          root: root,
          baseId: baseId,
          validate: v
        });
        return v;
      }
    }


    function _getSchemaObj(self, keyRef) {
      keyRef = resolve_1.normalizeId(keyRef);
      return self._schemas[keyRef] || self._refs[keyRef] || self._fragments[keyRef];
    }


    /**
     * Remove cached schema(s).
     * If no parameter is passed all schemas but meta-schemas are removed.
     * If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
     * Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
     * @this   Ajv
     * @param  {String|Object|RegExp} schemaKeyRef key, ref, pattern to match key/ref or schema object
     * @return {Ajv} this for method chaining
     */
    function removeSchema(schemaKeyRef) {
      if (schemaKeyRef instanceof RegExp) {
        _removeAllSchemas(this, this._schemas, schemaKeyRef);
        _removeAllSchemas(this, this._refs, schemaKeyRef);
        return this;
      }
      switch (typeof schemaKeyRef) {
        case 'undefined':
          _removeAllSchemas(this, this._schemas);
          _removeAllSchemas(this, this._refs);
          this._cache.clear();
          return this;
        case 'string':
          var schemaObj = _getSchemaObj(this, schemaKeyRef);
          if (schemaObj) this._cache.del(schemaObj.cacheKey);
          delete this._schemas[schemaKeyRef];
          delete this._refs[schemaKeyRef];
          return this;
        case 'object':
          var serialize = this._opts.serialize;
          var cacheKey = serialize ? serialize(schemaKeyRef) : schemaKeyRef;
          this._cache.del(cacheKey);
          var id = this._getId(schemaKeyRef);
          if (id) {
            id = resolve_1.normalizeId(id);
            delete this._schemas[id];
            delete this._refs[id];
          }
      }
      return this;
    }


    function _removeAllSchemas(self, schemas, regex) {
      for (var keyRef in schemas) {
        var schemaObj = schemas[keyRef];
        if (!schemaObj.meta && (!regex || regex.test(keyRef))) {
          self._cache.del(schemaObj.cacheKey);
          delete schemas[keyRef];
        }
      }
    }


    /* @this   Ajv */
    function _addSchema(schema, skipValidation, meta, shouldAddSchema) {
      if (typeof schema != 'object' && typeof schema != 'boolean')
        throw new Error('schema should be object or boolean');
      var serialize = this._opts.serialize;
      var cacheKey = serialize ? serialize(schema) : schema;
      var cached = this._cache.get(cacheKey);
      if (cached) return cached;

      shouldAddSchema = shouldAddSchema || this._opts.addUsedSchema !== false;

      var id = resolve_1.normalizeId(this._getId(schema));
      if (id && shouldAddSchema) checkUnique(this, id);

      var willValidate = this._opts.validateSchema !== false && !skipValidation;
      var recursiveMeta;
      if (willValidate && !(recursiveMeta = id && id == resolve_1.normalizeId(schema.$schema)))
        this.validateSchema(schema, true);

      var localRefs = resolve_1.ids.call(this, schema);

      var schemaObj = new schema_obj({
        id: id,
        schema: schema,
        localRefs: localRefs,
        cacheKey: cacheKey,
        meta: meta
      });

      if (id[0] != '#' && shouldAddSchema) this._refs[id] = schemaObj;
      this._cache.put(cacheKey, schemaObj);

      if (willValidate && recursiveMeta) this.validateSchema(schema, true);

      return schemaObj;
    }


    /* @this   Ajv */
    function _compile(schemaObj, root) {
      if (schemaObj.compiling) {
        schemaObj.validate = callValidate;
        callValidate.schema = schemaObj.schema;
        callValidate.errors = null;
        callValidate.root = root ? root : callValidate;
        if (schemaObj.schema.$async === true)
          callValidate.$async = true;
        return callValidate;
      }
      schemaObj.compiling = true;

      var currentOpts;
      if (schemaObj.meta) {
        currentOpts = this._opts;
        this._opts = this._metaOpts;
      }

      var v;
      try { v = compile_1.call(this, schemaObj.schema, root, schemaObj.localRefs); }
      catch(e) {
        delete schemaObj.validate;
        throw e;
      }
      finally {
        schemaObj.compiling = false;
        if (schemaObj.meta) this._opts = currentOpts;
      }

      schemaObj.validate = v;
      schemaObj.refs = v.refs;
      schemaObj.refVal = v.refVal;
      schemaObj.root = v.root;
      return v;


      /* @this   {*} - custom context, see passContext option */
      function callValidate() {
        /* jshint validthis: true */
        var _validate = schemaObj.validate;
        var result = _validate.apply(this, arguments);
        callValidate.errors = _validate.errors;
        return result;
      }
    }


    function chooseGetId(opts) {
      switch (opts.schemaId) {
        case 'auto': return _get$IdOrId;
        case 'id': return _getId;
        default: return _get$Id;
      }
    }

    /* @this   Ajv */
    function _getId(schema) {
      if (schema.$id) this.logger.warn('schema $id ignored', schema.$id);
      return schema.id;
    }

    /* @this   Ajv */
    function _get$Id(schema) {
      if (schema.id) this.logger.warn('schema id ignored', schema.id);
      return schema.$id;
    }


    function _get$IdOrId(schema) {
      if (schema.$id && schema.id && schema.$id != schema.id)
        throw new Error('schema $id is different from id');
      return schema.$id || schema.id;
    }


    /**
     * Convert array of error message objects to string
     * @this   Ajv
     * @param  {Array<Object>} errors optional array of validation errors, if not passed errors from the instance are used.
     * @param  {Object} options optional options with properties `separator` and `dataVar`.
     * @return {String} human readable string with all errors descriptions
     */
    function errorsText(errors, options) {
      errors = errors || this.errors;
      if (!errors) return 'No errors';
      options = options || {};
      var separator = options.separator === undefined ? ', ' : options.separator;
      var dataVar = options.dataVar === undefined ? 'data' : options.dataVar;

      var text = '';
      for (var i=0; i<errors.length; i++) {
        var e = errors[i];
        if (e) text += dataVar + e.dataPath + ' ' + e.message + separator;
      }
      return text.slice(0, -separator.length);
    }


    /**
     * Add custom format
     * @this   Ajv
     * @param {String} name format name
     * @param {String|RegExp|Function} format string is converted to RegExp; function should return boolean (true when valid)
     * @return {Ajv} this for method chaining
     */
    function addFormat(name, format) {
      if (typeof format == 'string') format = new RegExp(format);
      this._formats[name] = format;
      return this;
    }


    function addDefaultMetaSchema(self) {
      var $dataSchema;
      if (self._opts.$data) {
        $dataSchema = require$$1;
        self.addMetaSchema($dataSchema, $dataSchema.$id, true);
      }
      if (self._opts.meta === false) return;
      var metaSchema = require$$2;
      if (self._opts.$data) metaSchema = data(metaSchema, META_SUPPORT_DATA);
      self.addMetaSchema(metaSchema, META_SCHEMA_ID, true);
      self._refs['http://json-schema.org/schema'] = META_SCHEMA_ID;
    }


    function addInitialSchemas(self) {
      var optsSchemas = self._opts.schemas;
      if (!optsSchemas) return;
      if (Array.isArray(optsSchemas)) self.addSchema(optsSchemas);
      else for (var key in optsSchemas) self.addSchema(optsSchemas[key], key);
    }


    function addInitialFormats(self) {
      for (var name in self._opts.formats) {
        var format = self._opts.formats[name];
        self.addFormat(name, format);
      }
    }


    function checkUnique(self, id) {
      if (self._schemas[id] || self._refs[id])
        throw new Error('schema with key or id "' + id + '" already exists');
    }


    function getMetaSchemaOptions(self) {
      var metaOpts = util.copy(self._opts);
      for (var i=0; i<META_IGNORE_OPTIONS.length; i++)
        delete metaOpts[META_IGNORE_OPTIONS[i]];
      return metaOpts;
    }


    function setLogger(self) {
      var logger = self._opts.logger;
      if (logger === false) {
        self.logger = {log: noop, warn: noop, error: noop};
      } else {
        if (logger === undefined) logger = console;
        if (!(typeof logger == 'object' && logger.log && logger.warn && logger.error))
          throw new Error('logger must implement log, warn and error methods');
        self.logger = logger;
      }
    }


    function noop() {}

    var ajv$1 = new ajv({
        validateSchema: true,
        allErrors: true,
        extendRefs: 'fail',
        schemaId: 'auto'
    });
    var gsValidate = ajv$1.compile(ggSpecJsonSchema);
    /**
     * This function is used to validate ggSpec
     * @param spec
     */
    function validateGs(spec) {
        var valid = gsValidate(spec);
        var errors = gsValidate.errors;
        if (errors)
            errors.map(function (err) {
                console.warn('ggSpec' + err.dataPath + ' ' + err.message);
                // throw new Error('ggSpec' + err.dataPath + ' ' + err.message);
            });
        return valid;
    }
    // https://stackoverflow.com/a/237176
    /**
     * Determine if an array contains an object
     *
     * @remarks
     * **Called by**
     * a *lot* of functions
     *
     * @param a - `Array`
     * @param obj - `any`
     *
     * @returns `boolean`
     */
    function contains$1(a, obj) {
        var i = a.length;
        while (i--) {
            if (a[i] === obj) {
                return true;
            }
        }
        return false;
    }
    /**
     * Make a field-name safe
     *
     * @remarks
     * Dots have a special meaning in Vega-Lite field-names, so if
     * we use them as variable names, we have to escape any dots.
     *
     *
     * @param name - `string`
     *
     * @returns `string`
     */
    function fieldName(name) {
        // use regular expression to replaces all matches
        return name.replace(/[.]/g, '\\.');
    }

    var vlschema = "https://vega.github.io/schema/vega-lite/v3.json";

    //NOTE @wenyu: After discussion with @ian, we decide to use GG.DatasetsObject to substitute GG.Datasets
    /**
     * Create datasets object
     *
     * @remarks
     * For each key-value pair in `ggDatasetsObject`, a key-value pair is created
     * in the return object.
     *
     * **Called by**
     * @see topLevelSpec
     *
     * @param ggDatasetsObject - `{[key: string]: GG.Data}`, key-value pairs of ggspec datasets
     *
     * @returns `{[key: string]: VL.InlineDataset}`, object containing Vega-Lite inline-datasets
     *
     */
    function datasetsObject(ggDatasetsObject) {
        // validate
        if (Object.keys(ggDatasetsObject).length == 0) {
            // error messages should refer to the ggplot object; end-user is not expected to know
            // about ggspec/ggschema
            throw new Error('ggplot object has no datasets, requires at least one dataset');
        }
        // translate
        var datasetsObject = {};
        // iterate over object: https://stackoverflow.com/a/684692
        //NOTE @wenyu: https://eslint.org/docs/rules/no-prototype-builtins
        for (var dataName in ggDatasetsObject) {
            if (Object.prototype.hasOwnProperty.call(ggDatasetsObject, dataName)) {
                datasetsObject[dataName] = ggDatasetsObject[dataName].observations;
            }
        }
        return datasetsObject;
    }

    /**
     * The alignment to apply to symbol legends rows and columns. The supported string values
     * are `"all"`, `"each"` (the default), and `none`. For more information, see the [grid
     * layout documentation](https://vega.github.io/vega/docs/layout).
     *
     * __Default value:__ `"each"`.
     */
    var LayoutAlign;
    (function (LayoutAlign) {
        LayoutAlign["All"] = "all";
        LayoutAlign["Each"] = "each";
        LayoutAlign["None"] = "none";
    })(LayoutAlign || (LayoutAlign = {}));
    /**
     * Determines how size calculation should be performed, one of `"content"` or `"padding"`.
     * The default setting (`"content"`) interprets the width and height settings as the data
     * rectangle (plotting) dimensions, to which padding is then added. In contrast, the
     * `"padding"` setting includes the padding within the view size calculations, such that the
     * width and height settings indicate the **total** intended size of the view.
     *
     * __Default value__: `"content"`
     */
    var Contains;
    (function (Contains) {
        Contains["Content"] = "content";
        Contains["Padding"] = "padding";
    })(Contains || (Contains = {}));
    /**
     * The sizing format type. One of `"pad"`, `"fit"` or `"none"`. See the [autosize
     * type](https://vega.github.io/vega-lite/docs/size.html#autosize) documentation for
     * descriptions of each.
     *
     * __Default value__: `"pad"`
     */
    var AutosizeType;
    (function (AutosizeType) {
        AutosizeType["Fit"] = "fit";
        AutosizeType["None"] = "none";
        AutosizeType["Pad"] = "pad";
    })(AutosizeType || (AutosizeType = {}));
    /**
     * The bounds calculation method to use for determining the extent of a sub-plot. One of
     * `full` (the default) or `flush`.
     *
     * - If set to `full`, the entire calculated bounds (including axes, title, and legend) will
     * be used.
     * - If set to `flush`, only the specified width and height values for the sub-view will be
     * used. The `flush` setting can be useful when attempting to place sub-plots without axes
     * or legends into a uniform grid structure.
     *
     * __Default value:__ `"full"`
     */
    var BoundsEnum;
    (function (BoundsEnum) {
        BoundsEnum["Flush"] = "flush";
        BoundsEnum["Full"] = "full";
    })(BoundsEnum || (BoundsEnum = {}));
    /**
     * Type of input data: `"json"`, `"csv"`, `"tsv"`, `"dsv"`.
     *
     * __Default value:__  The default format type is determined by the extension of the file
     * URL.
     * If no extension is detected, `"json"` will be used by default.
     */
    var DataFormatType;
    (function (DataFormatType) {
        DataFormatType["CSV"] = "csv";
        DataFormatType["Dsv"] = "dsv";
        DataFormatType["JSON"] = "json";
        DataFormatType["Topojson"] = "topojson";
        DataFormatType["Tsv"] = "tsv";
    })(DataFormatType || (DataFormatType = {}));
    /**
     * An [aggregate operation](https://vega.github.io/vega-lite/docs/aggregate.html#ops) to
     * perform on the field prior to sorting (e.g., `"count"`, `"mean"` and `"median"`).
     * An aggregation is required when there are multiple values of the sort field for each
     * encoded data field.
     * The input data objects will be aggregated, grouped by the encoded data field.
     *
     * For a full list of operations, please see the documentation for
     * [aggregate](https://vega.github.io/vega-lite/docs/aggregate.html#ops).
     *
     * __Default value:__ `"sum"` for stacked plots. Otherwise, `"mean"`.
     *
     * The aggregation operation to apply to the fields (e.g., sum, average or count).
     * See the [full list of supported aggregation
     * operations](https://vega.github.io/vega-lite/docs/aggregate.html#ops)
     * for more information.
     *
     * The aggregation operation to apply (e.g., sum, average or count). See the list of all
     * supported operations [here](https://vega.github.io/vega-lite/docs/aggregate.html#ops).
     */
    var AggregateOp;
    (function (AggregateOp) {
        AggregateOp["Argmax"] = "argmax";
        AggregateOp["Argmin"] = "argmin";
        AggregateOp["Average"] = "average";
        AggregateOp["Ci0"] = "ci0";
        AggregateOp["Ci1"] = "ci1";
        AggregateOp["Count"] = "count";
        AggregateOp["Distinct"] = "distinct";
        AggregateOp["Max"] = "max";
        AggregateOp["Mean"] = "mean";
        AggregateOp["Median"] = "median";
        AggregateOp["Min"] = "min";
        AggregateOp["Missing"] = "missing";
        AggregateOp["Q1"] = "q1";
        AggregateOp["Q3"] = "q3";
        AggregateOp["Stderr"] = "stderr";
        AggregateOp["Stdev"] = "stdev";
        AggregateOp["Stdevp"] = "stdevp";
        AggregateOp["Sum"] = "sum";
        AggregateOp["Valid"] = "valid";
        AggregateOp["Values"] = "values";
        AggregateOp["Variance"] = "variance";
        AggregateOp["Variancep"] = "variancep";
    })(AggregateOp || (AggregateOp = {}));
    /**
     * Time unit for the field to be filtered.
     *
     * Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
     * or [a temporal field that gets casted as
     * ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).
     *
     * __Default value:__ `undefined` (None)
     *
     * __See also:__ [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html)
     * documentation.
     *
     * The timeUnit.
     */
    var TimeUnit;
    (function (TimeUnit) {
        TimeUnit["Date"] = "date";
        TimeUnit["Day"] = "day";
        TimeUnit["Hours"] = "hours";
        TimeUnit["Hoursminutes"] = "hoursminutes";
        TimeUnit["Hoursminutesseconds"] = "hoursminutesseconds";
        TimeUnit["Milliseconds"] = "milliseconds";
        TimeUnit["Minutes"] = "minutes";
        TimeUnit["Minutesseconds"] = "minutesseconds";
        TimeUnit["Month"] = "month";
        TimeUnit["Monthdate"] = "monthdate";
        TimeUnit["Monthdatehours"] = "monthdatehours";
        TimeUnit["Quarter"] = "quarter";
        TimeUnit["Quartermonth"] = "quartermonth";
        TimeUnit["Seconds"] = "seconds";
        TimeUnit["Secondsmilliseconds"] = "secondsmilliseconds";
        TimeUnit["Utcdate"] = "utcdate";
        TimeUnit["Utcday"] = "utcday";
        TimeUnit["Utchours"] = "utchours";
        TimeUnit["Utchoursminutes"] = "utchoursminutes";
        TimeUnit["Utchoursminutesseconds"] = "utchoursminutesseconds";
        TimeUnit["Utcmilliseconds"] = "utcmilliseconds";
        TimeUnit["Utcminutes"] = "utcminutes";
        TimeUnit["Utcminutesseconds"] = "utcminutesseconds";
        TimeUnit["Utcmonth"] = "utcmonth";
        TimeUnit["Utcmonthdate"] = "utcmonthdate";
        TimeUnit["Utcmonthdatehours"] = "utcmonthdatehours";
        TimeUnit["Utcquarter"] = "utcquarter";
        TimeUnit["Utcquartermonth"] = "utcquartermonth";
        TimeUnit["Utcseconds"] = "utcseconds";
        TimeUnit["Utcsecondsmilliseconds"] = "utcsecondsmilliseconds";
        TimeUnit["Utcyear"] = "utcyear";
        TimeUnit["Utcyearmonth"] = "utcyearmonth";
        TimeUnit["Utcyearmonthdate"] = "utcyearmonthdate";
        TimeUnit["Utcyearmonthdatehours"] = "utcyearmonthdatehours";
        TimeUnit["Utcyearmonthdatehoursminutes"] = "utcyearmonthdatehoursminutes";
        TimeUnit["Utcyearmonthdatehoursminutesseconds"] = "utcyearmonthdatehoursminutesseconds";
        TimeUnit["Utcyearquarter"] = "utcyearquarter";
        TimeUnit["Utcyearquartermonth"] = "utcyearquartermonth";
        TimeUnit["Year"] = "year";
        TimeUnit["Yearmonth"] = "yearmonth";
        TimeUnit["Yearmonthdate"] = "yearmonthdate";
        TimeUnit["Yearmonthdatehours"] = "yearmonthdatehours";
        TimeUnit["Yearmonthdatehoursminutes"] = "yearmonthdatehoursminutes";
        TimeUnit["Yearmonthdatehoursminutesseconds"] = "yearmonthdatehoursminutesseconds";
        TimeUnit["Yearquarter"] = "yearquarter";
        TimeUnit["Yearquartermonth"] = "yearquartermonth";
    })(TimeUnit || (TimeUnit = {}));
    var RepeatEnum;
    (function (RepeatEnum) {
        RepeatEnum["Column"] = "column";
        RepeatEnum["Repeat"] = "repeat";
        RepeatEnum["Row"] = "row";
    })(RepeatEnum || (RepeatEnum = {}));
    /**
     * The orientation of a non-stacked bar, tick, area, and line charts.
     * The value is either horizontal (default) or vertical.
     * - For bar, rule and tick, this determines whether the size of the bar and tick
     * should be applied to x or y dimension.
     * - For area, this property determines the orient property of the Vega output.
     * - For line and trail marks, this property determines the sort order of the points in the
     * line
     * if `config.sortLineBy` is not specified.
     * For stacked charts, this is always determined by the orientation of the stack;
     * therefore explicitly specified value will be ignored.
     *
     * The default direction (`"horizontal"` or `"vertical"`) for gradient legends.
     *
     * __Default value:__ `"vertical"`.
     *
     * The default direction (`"horizontal"` or `"vertical"`) for symbol legends.
     *
     * __Default value:__ `"vertical"`.
     *
     * The direction of the legend, one of `"vertical"` or `"horizontal"`.
     *
     * __Default value:__
     * - For top-/bottom-`orient`ed legends, `"horizontal"`
     * - For left-/right-`orient`ed legends, `"vertical"`
     * - For top/bottom-left/right-`orient`ed legends, `"horizontal"` for gradient legends and
     * `"vertical"` for symbol legends.
     *
     * Orientation of the box plot.  This is normally automatically determined based on types of
     * fields on x and y channels. However, an explicit `orient` be specified when the
     * orientation is ambiguous.
     *
     * __Default value:__ `"vertical"`.
     *
     * Orientation of the error bar.  This is normally automatically determined, but can be
     * specified when the orientation is ambiguous and cannot be automatically determined.
     *
     * Orientation of the error band. This is normally automatically determined, but can be
     * specified when the orientation is ambiguous and cannot be automatically determined.
     */
    var Orientation;
    (function (Orientation) {
        Orientation["Horizontal"] = "horizontal";
        Orientation["Vertical"] = "vertical";
    })(Orientation || (Orientation = {}));
    /**
     * The format type for labels (`"number"` or `"time"`).
     *
     * __Default value:__
     * - `"time"` for temporal fields and ordinal and nomimal fields with `timeUnit`.
     * - `"number"` for quantitative fields as well as ordinal and nomimal fields without
     * `timeUnit`.
     */
    var FormatType;
    (function (FormatType) {
        FormatType["Number"] = "number";
        FormatType["Time"] = "time";
    })(FormatType || (FormatType = {}));
    /**
     * The horizontal alignment of the text. One of `"left"`, `"right"`, `"center"`.
     *
     * Horizontal text alignment of axis tick labels, overriding the default setting for the
     * current axis orientation.
     *
     * Horizontal text alignment of axis titles.
     *
     * Horizontal text alignment of header labels.
     *
     * Horizontal text alignment (to the anchor) of header titles.
     *
     * The alignment of the legend label, can be left, center, or right.
     *
     * Horizontal text alignment for legend titles.
     *
     * __Default value:__ `"left"`.
     */
    var Align;
    (function (Align) {
        Align["Center"] = "center";
        Align["Left"] = "left";
        Align["Right"] = "right";
    })(Align || (Align = {}));
    /**
     * The vertical alignment of the text. One of `"top"`, `"middle"`, `"bottom"`.
     *
     * __Default value:__ `"middle"`
     *
     * Vertical text baseline of axis tick labels, overriding the default setting for the
     * current axis orientation. Can be `"top"`, `"middle"`, `"bottom"`, or `"alphabetic"`.
     *
     * Vertical text baseline for axis titles.
     *
     * Vertical text baseline for the header title. One of `"top"`, `"bottom"`, `"middle"`.
     *
     * __Default value:__ `"middle"`
     *
     * The position of the baseline of legend label, can be `"top"`, `"middle"`, `"bottom"`, or
     * `"alphabetic"`.
     *
     * __Default value:__ `"middle"`.
     *
     * Vertical text baseline for legend titles.
     *
     * __Default value:__ `"top"`.
     *
     * Vertical text baseline for title text. One of `"top"`, `"middle"`, `"bottom"`, or
     * `"alphabetic"`.
     */
    var TextBaseline;
    (function (TextBaseline) {
        TextBaseline["Alphabetic"] = "alphabetic";
        TextBaseline["Bottom"] = "bottom";
        TextBaseline["Middle"] = "middle";
        TextBaseline["Top"] = "top";
    })(TextBaseline || (TextBaseline = {}));
    var FontWeightEnum;
    (function (FontWeightEnum) {
        FontWeightEnum["Bold"] = "bold";
        FontWeightEnum["Bolder"] = "bolder";
        FontWeightEnum["Lighter"] = "lighter";
        FontWeightEnum["Normal"] = "normal";
    })(FontWeightEnum || (FontWeightEnum = {}));
    var LabelOverlapEnum;
    (function (LabelOverlapEnum) {
        LabelOverlapEnum["Greedy"] = "greedy";
        LabelOverlapEnum["Parity"] = "parity";
    })(LabelOverlapEnum || (LabelOverlapEnum = {}));
    /**
     * The orientation of the legend, which determines how the legend is positioned within the
     * scene. One of "left", "right", "top-left", "top-right", "bottom-left", "bottom-right",
     * "none".
     *
     * __Default value:__ `"right"`
     *
     * The orientation of the legend, which determines how the legend is positioned within the
     * scene. One of `"left"`, `"right"`, `"top"`, `"bottom"`, `"top-left"`, `"top-right"`,
     * `"bottom-left"`, `"bottom-right"`, `"none"`.
     *
     * __Default value:__ `"right"`
     */
    var LegendOrient;
    (function (LegendOrient) {
        LegendOrient["Bottom"] = "bottom";
        LegendOrient["BottomLeft"] = "bottom-left";
        LegendOrient["BottomRight"] = "bottom-right";
        LegendOrient["Left"] = "left";
        LegendOrient["None"] = "none";
        LegendOrient["Right"] = "right";
        LegendOrient["Top"] = "top";
        LegendOrient["TopLeft"] = "top-left";
        LegendOrient["TopRight"] = "top-right";
    })(LegendOrient || (LegendOrient = {}));
    var TitleAnchor;
    (function (TitleAnchor) {
        TitleAnchor["End"] = "end";
        TitleAnchor["Middle"] = "middle";
        TitleAnchor["Start"] = "start";
    })(TitleAnchor || (TitleAnchor = {}));
    /**
     * The orientation of the header label. One of `"top"`, `"bottom"`, `"left"` or `"right"`.
     *
     * The orientation of the header title. One of `"top"`, `"bottom"`, `"left"` or `"right"`.
     *
     * Orientation of the legend title.
     *
     * The orientation of the axis. One of `"top"`, `"bottom"`, `"left"` or `"right"`. The
     * orientation can be used to further specialize the axis type (e.g., a y-axis oriented
     * towards the right edge of the chart).
     *
     * __Default value:__ `"bottom"` for x-axes and `"left"` for y-axes.
     */
    var Orient;
    (function (Orient) {
        Orient["Bottom"] = "bottom";
        Orient["Left"] = "left";
        Orient["Right"] = "right";
        Orient["Top"] = "top";
    })(Orient || (Orient = {}));
    /**
     * The type of the legend. Use `"symbol"` to create a discrete legend and `"gradient"` for a
     * continuous color gradient.
     *
     * __Default value:__ `"gradient"` for non-binned quantitative fields and temporal fields;
     * `"symbol"` otherwise.
     */
    var LegendType;
    (function (LegendType) {
        LegendType["Gradient"] = "gradient";
        LegendType["Symbol"] = "symbol";
    })(LegendType || (LegendType = {}));
    var Domain;
    (function (Domain) {
        Domain["Unaggregated"] = "unaggregated";
    })(Domain || (Domain = {}));
    var ScaleInterpolateParamsType;
    (function (ScaleInterpolateParamsType) {
        ScaleInterpolateParamsType["Cubehelix"] = "cubehelix";
        ScaleInterpolateParamsType["CubehelixLong"] = "cubehelix-long";
        ScaleInterpolateParamsType["RGB"] = "rgb";
    })(ScaleInterpolateParamsType || (ScaleInterpolateParamsType = {}));
    var ScaleInterpolate;
    (function (ScaleInterpolate) {
        ScaleInterpolate["Cubehelix"] = "cubehelix";
        ScaleInterpolate["CubehelixLong"] = "cubehelix-long";
        ScaleInterpolate["HCL"] = "hcl";
        ScaleInterpolate["HCLLong"] = "hcl-long";
        ScaleInterpolate["Hsl"] = "hsl";
        ScaleInterpolate["HslLong"] = "hsl-long";
        ScaleInterpolate["Lab"] = "lab";
        ScaleInterpolate["RGB"] = "rgb";
    })(ScaleInterpolate || (ScaleInterpolate = {}));
    var NiceTime;
    (function (NiceTime) {
        NiceTime["Day"] = "day";
        NiceTime["Hour"] = "hour";
        NiceTime["Minute"] = "minute";
        NiceTime["Month"] = "month";
        NiceTime["Second"] = "second";
        NiceTime["Week"] = "week";
        NiceTime["Year"] = "year";
    })(NiceTime || (NiceTime = {}));
    /**
     * The type of scale.  Vega-Lite supports the following categories of scale types:
     *
     * 1) [**Continuous Scales**](https://vega.github.io/vega-lite/docs/scale.html#continuous)
     * -- mapping continuous domains to continuous output ranges
     * ([`"linear"`](https://vega.github.io/vega-lite/docs/scale.html#linear),
     * [`"pow"`](https://vega.github.io/vega-lite/docs/scale.html#pow),
     * [`"sqrt"`](https://vega.github.io/vega-lite/docs/scale.html#sqrt),
     * [`"symlog"`](https://vega.github.io/vega-lite/docs/scale.html#symlog),
     * [`"log"`](https://vega.github.io/vega-lite/docs/scale.html#log),
     * [`"time"`](https://vega.github.io/vega-lite/docs/scale.html#time),
     * [`"utc"`](https://vega.github.io/vega-lite/docs/scale.html#utc).
     *
     * 2) [**Discrete Scales**](https://vega.github.io/vega-lite/docs/scale.html#discrete) --
     * mapping discrete domains to discrete
     * ([`"ordinal"`](https://vega.github.io/vega-lite/docs/scale.html#ordinal)) or continuous
     * ([`"band"`](https://vega.github.io/vega-lite/docs/scale.html#band) and
     * [`"point"`](https://vega.github.io/vega-lite/docs/scale.html#point)) output ranges.
     *
     * 3) [**Discretizing
     * Scales**](https://vega.github.io/vega-lite/docs/scale.html#discretizing) -- mapping
     * continuous domains to discrete output ranges
     * [`"bin-ordinal"`](https://vega.github.io/vega-lite/docs/scale.html#bin-ordinal),
     * [`"quantile"`](https://vega.github.io/vega-lite/docs/scale.html#quantile),
     * [`"quantize"`](https://vega.github.io/vega-lite/docs/scale.html#quantize) and
     * [`"threshold"`](https://vega.github.io/vega-lite/docs/scale.html#threshold).
     *
     * __Default value:__ please see the [scale type
     * table](https://vega.github.io/vega-lite/docs/scale.html#type).
     */
    var ScaleType;
    (function (ScaleType) {
        ScaleType["Band"] = "band";
        ScaleType["BinOrdinal"] = "bin-ordinal";
        ScaleType["Linear"] = "linear";
        ScaleType["Log"] = "log";
        ScaleType["Ordinal"] = "ordinal";
        ScaleType["Point"] = "point";
        ScaleType["Pow"] = "pow";
        ScaleType["Quantile"] = "quantile";
        ScaleType["Quantize"] = "quantize";
        ScaleType["Sqrt"] = "sqrt";
        ScaleType["Symlog"] = "symlog";
        ScaleType["Threshold"] = "threshold";
        ScaleType["Time"] = "time";
        ScaleType["UTC"] = "utc";
    })(ScaleType || (ScaleType = {}));
    /**
     * The [encoding channel](https://vega.github.io/vega-lite/docs/encoding.html#channels) to
     * sort by (e.g., `"x"`, `"y"`)
     */
    var SingleDefUnitChannel;
    (function (SingleDefUnitChannel) {
        SingleDefUnitChannel["Color"] = "color";
        SingleDefUnitChannel["Fill"] = "fill";
        SingleDefUnitChannel["FillOpacity"] = "fillOpacity";
        SingleDefUnitChannel["Href"] = "href";
        SingleDefUnitChannel["Key"] = "key";
        SingleDefUnitChannel["Latitude"] = "latitude";
        SingleDefUnitChannel["Latitude2"] = "latitude2";
        SingleDefUnitChannel["Longitude"] = "longitude";
        SingleDefUnitChannel["Longitude2"] = "longitude2";
        SingleDefUnitChannel["Opacity"] = "opacity";
        SingleDefUnitChannel["Shape"] = "shape";
        SingleDefUnitChannel["Size"] = "size";
        SingleDefUnitChannel["Stroke"] = "stroke";
        SingleDefUnitChannel["StrokeOpacity"] = "strokeOpacity";
        SingleDefUnitChannel["StrokeWidth"] = "strokeWidth";
        SingleDefUnitChannel["Text"] = "text";
        SingleDefUnitChannel["Tooltip"] = "tooltip";
        SingleDefUnitChannel["X"] = "x";
        SingleDefUnitChannel["X2"] = "x2";
        SingleDefUnitChannel["Y"] = "y";
        SingleDefUnitChannel["Y2"] = "y2";
    })(SingleDefUnitChannel || (SingleDefUnitChannel = {}));
    /**
     * The sort order. One of `"ascending"` (default) or `"descending"`.
     */
    var SortOrder;
    (function (SortOrder) {
        SortOrder["Ascending"] = "ascending";
        SortOrder["Descending"] = "descending";
    })(SortOrder || (SortOrder = {}));
    /**
     * The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or
     * `"nominal"`).
     * It can also be a `"geojson"` type for encoding
     * ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).
     *
     *
     * __Note:__
     *
     * - Data values for a temporal field can be either a date-time string (e.g., `"2015-03-07
     * 12:32:17"`, `"17:01"`, `"2015-03-16"`. `"2015"`) or a timestamp number (e.g.,
     * `1552199579097`).
     * - Data `type` describes the semantics of the data rather than the primitive data types
     * (`number`, `string`, etc.). The same primitive data type can have different types of
     * measurement. For example, numeric data can represent quantitative, ordinal, or nominal
     * data.
     * - When using with [`bin`](https://vega.github.io/vega-lite/docs/bin.html), the `type`
     * property can be either `"quantitative"` (for using a linear bin scale) or [`"ordinal"`
     * (for using an ordinal bin
     * scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
     * - When using with [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html), the
     * `type` property can be either `"temporal"` (for using a temporal scale) or [`"ordinal"`
     * (for using an ordinal scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
     * - When using with [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html),
     * the `type` property refers to the post-aggregation data type. For example, we can
     * calculate count `distinct` of a categorical field `"cat"` using `{"aggregate":
     * "distinct", "field": "cat", "type": "quantitative"}`. The `"type"` of the aggregate
     * output is `"quantitative"`.
     * - Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they
     * have exactly the same type as their primary channels (e.g., `x`, `y`).
     *
     * __See also:__ [`type`](https://vega.github.io/vega-lite/docs/type.html) documentation.
     */
    var StandardType;
    (function (StandardType) {
        StandardType["Nominal"] = "nominal";
        StandardType["Ordinal"] = "ordinal";
        StandardType["Quantitative"] = "quantitative";
        StandardType["Temporal"] = "temporal";
    })(StandardType || (StandardType = {}));
    var BinEnum;
    (function (BinEnum) {
        BinEnum["Binned"] = "binned";
    })(BinEnum || (BinEnum = {}));
    /**
     * The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or
     * `"nominal"`).
     * It can also be a `"geojson"` type for encoding
     * ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).
     *
     *
     * __Note:__
     *
     * - Data values for a temporal field can be either a date-time string (e.g., `"2015-03-07
     * 12:32:17"`, `"17:01"`, `"2015-03-16"`. `"2015"`) or a timestamp number (e.g.,
     * `1552199579097`).
     * - Data `type` describes the semantics of the data rather than the primitive data types
     * (`number`, `string`, etc.). The same primitive data type can have different types of
     * measurement. For example, numeric data can represent quantitative, ordinal, or nominal
     * data.
     * - When using with [`bin`](https://vega.github.io/vega-lite/docs/bin.html), the `type`
     * property can be either `"quantitative"` (for using a linear bin scale) or [`"ordinal"`
     * (for using an ordinal bin
     * scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
     * - When using with [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html), the
     * `type` property can be either `"temporal"` (for using a temporal scale) or [`"ordinal"`
     * (for using an ordinal scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
     * - When using with [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html),
     * the `type` property refers to the post-aggregation data type. For example, we can
     * calculate count `distinct` of a categorical field `"cat"` using `{"aggregate":
     * "distinct", "field": "cat", "type": "quantitative"}`. The `"type"` of the aggregate
     * output is `"quantitative"`.
     * - Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they
     * have exactly the same type as their primary channels (e.g., `x`, `y`).
     *
     * __See also:__ [`type`](https://vega.github.io/vega-lite/docs/type.html) documentation.
     */
    var LatitudeType;
    (function (LatitudeType) {
        LatitudeType["Quantitative"] = "quantitative";
    })(LatitudeType || (LatitudeType = {}));
    /**
     * The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or
     * `"nominal"`).
     * It can also be a `"geojson"` type for encoding
     * ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).
     *
     *
     * __Note:__
     *
     * - Data values for a temporal field can be either a date-time string (e.g., `"2015-03-07
     * 12:32:17"`, `"17:01"`, `"2015-03-16"`. `"2015"`) or a timestamp number (e.g.,
     * `1552199579097`).
     * - Data `type` describes the semantics of the data rather than the primitive data types
     * (`number`, `string`, etc.). The same primitive data type can have different types of
     * measurement. For example, numeric data can represent quantitative, ordinal, or nominal
     * data.
     * - When using with [`bin`](https://vega.github.io/vega-lite/docs/bin.html), the `type`
     * property can be either `"quantitative"` (for using a linear bin scale) or [`"ordinal"`
     * (for using an ordinal bin
     * scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
     * - When using with [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html), the
     * `type` property can be either `"temporal"` (for using a temporal scale) or [`"ordinal"`
     * (for using an ordinal scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
     * - When using with [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html),
     * the `type` property refers to the post-aggregation data type. For example, we can
     * calculate count `distinct` of a categorical field `"cat"` using `{"aggregate":
     * "distinct", "field": "cat", "type": "quantitative"}`. The `"type"` of the aggregate
     * output is `"quantitative"`.
     * - Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they
     * have exactly the same type as their primary channels (e.g., `x`, `y`).
     *
     * __See also:__ [`type`](https://vega.github.io/vega-lite/docs/type.html) documentation.
     */
    var TypeForShape;
    (function (TypeForShape) {
        TypeForShape["Geojson"] = "geojson";
        TypeForShape["Nominal"] = "nominal";
        TypeForShape["Ordinal"] = "ordinal";
    })(TypeForShape || (TypeForShape = {}));
    /**
     * The imputation method to use for the field value of imputed data objects.
     * One of `value`, `mean`, `median`, `max` or `min`.
     *
     * __Default value:__  `"value"`
     */
    var ImputeMethod;
    (function (ImputeMethod) {
        ImputeMethod["Max"] = "max";
        ImputeMethod["Mean"] = "mean";
        ImputeMethod["Median"] = "median";
        ImputeMethod["Min"] = "min";
        ImputeMethod["Value"] = "value";
    })(ImputeMethod || (ImputeMethod = {}));
    /**
     * Default stack offset for stackable mark.
     *
     * Mode for stacking marks.
     * __Default value:__ `"zero"`
     */
    var StackOffset;
    (function (StackOffset) {
        StackOffset["Center"] = "center";
        StackOffset["Normalize"] = "normalize";
        StackOffset["Zero"] = "zero";
    })(StackOffset || (StackOffset = {}));
    var XEnum;
    (function (XEnum) {
        XEnum["Width"] = "width";
    })(XEnum || (XEnum = {}));
    var YEnum;
    (function (YEnum) {
        YEnum["Height"] = "height";
    })(YEnum || (YEnum = {}));
    /**
     * The mouse cursor used over the mark. Any valid [CSS cursor
     * type](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#Values) can be used.
     */
    var Cursor;
    (function (Cursor) {
        Cursor["Alias"] = "alias";
        Cursor["AllScroll"] = "all-scroll";
        Cursor["Auto"] = "auto";
        Cursor["Cell"] = "cell";
        Cursor["ColResize"] = "col-resize";
        Cursor["ContextMenu"] = "context-menu";
        Cursor["Copy"] = "copy";
        Cursor["Crosshair"] = "crosshair";
        Cursor["Default"] = "default";
        Cursor["EResize"] = "e-resize";
        Cursor["EwResize"] = "ew-resize";
        Cursor["Grab"] = "grab";
        Cursor["Grabbing"] = "grabbing";
        Cursor["Help"] = "help";
        Cursor["Move"] = "move";
        Cursor["NResize"] = "n-resize";
        Cursor["NSResize"] = "ns-resize";
        Cursor["NeResize"] = "ne-resize";
        Cursor["NeswResize"] = "nesw-resize";
        Cursor["NoDrop"] = "no-drop";
        Cursor["None"] = "none";
        Cursor["NotAllowed"] = "not-allowed";
        Cursor["NwResize"] = "nw-resize";
        Cursor["NwseResize"] = "nwse-resize";
        Cursor["Pointer"] = "pointer";
        Cursor["Progress"] = "progress";
        Cursor["RowResize"] = "row-resize";
        Cursor["SEResize"] = "se-resize";
        Cursor["SResize"] = "s-resize";
        Cursor["SwResize"] = "sw-resize";
        Cursor["Text"] = "text";
        Cursor["VerticalText"] = "vertical-text";
        Cursor["WResize"] = "w-resize";
        Cursor["Wait"] = "wait";
        Cursor["ZoomIn"] = "zoom-in";
        Cursor["ZoomOut"] = "zoom-out";
    })(Cursor || (Cursor = {}));
    /**
     * The direction of the text. One of `"ltr"` (left-to-right) or `"rtl"` (right-to-left).
     * This property determines on which side is truncated in response to the limit parameter.
     *
     * __Default value:__ `"ltr"`
     */
    var Dir;
    (function (Dir) {
        Dir["LTR"] = "ltr";
        Dir["RTL"] = "rtl";
    })(Dir || (Dir = {}));
    /**
     * The line interpolation method to use for line and area marks. One of the following:
     * - `"linear"`: piecewise linear segments, as in a polyline.
     * - `"linear-closed"`: close the linear segments to form a polygon.
     * - `"step"`: alternate between horizontal and vertical segments, as in a step function.
     * - `"step-before"`: alternate between vertical and horizontal segments, as in a step
     * function.
     * - `"step-after"`: alternate between horizontal and vertical segments, as in a step
     * function.
     * - `"basis"`: a B-spline, with control point duplication on the ends.
     * - `"basis-open"`: an open B-spline; may not intersect the start or end.
     * - `"basis-closed"`: a closed B-spline, as in a loop.
     * - `"cardinal"`: a Cardinal spline, with control point duplication on the ends.
     * - `"cardinal-open"`: an open Cardinal spline; may not intersect the start or end, but
     * will intersect other control points.
     * - `"cardinal-closed"`: a closed Cardinal spline, as in a loop.
     * - `"bundle"`: equivalent to basis, except the tension parameter is used to straighten the
     * spline.
     * - `"monotone"`: cubic interpolation that preserves monotonicity in y.
     *
     * The line interpolation method for the error band. One of the following:
     * - `"linear"`: piecewise linear segments, as in a polyline.
     * - `"linear-closed"`: close the linear segments to form a polygon.
     * - `"step"`: a piecewise constant function (a step function) consisting of alternating
     * horizontal and vertical lines. The y-value changes at the midpoint of each pair of
     * adjacent x-values.
     * - `"step-before"`: a piecewise constant function (a step function) consisting of
     * alternating horizontal and vertical lines. The y-value changes before the x-value.
     * - `"step-after"`: a piecewise constant function (a step function) consisting of
     * alternating horizontal and vertical lines. The y-value changes after the x-value.
     * - `"basis"`: a B-spline, with control point duplication on the ends.
     * - `"basis-open"`: an open B-spline; may not intersect the start or end.
     * - `"basis-closed"`: a closed B-spline, as in a loop.
     * - `"cardinal"`: a Cardinal spline, with control point duplication on the ends.
     * - `"cardinal-open"`: an open Cardinal spline; may not intersect the start or end, but
     * will intersect other control points.
     * - `"cardinal-closed"`: a closed Cardinal spline, as in a loop.
     * - `"bundle"`: equivalent to basis, except the tension parameter is used to straighten the
     * spline.
     * - `"monotone"`: cubic interpolation that preserves monotonicity in y.
     */
    var Interpolate;
    (function (Interpolate) {
        Interpolate["Basis"] = "basis";
        Interpolate["BasisClosed"] = "basis-closed";
        Interpolate["BasisOpen"] = "basis-open";
        Interpolate["Bundle"] = "bundle";
        Interpolate["Cardinal"] = "cardinal";
        Interpolate["CardinalClosed"] = "cardinal-closed";
        Interpolate["CardinalOpen"] = "cardinal-open";
        Interpolate["Linear"] = "linear";
        Interpolate["LinearClosed"] = "linear-closed";
        Interpolate["Monotone"] = "monotone";
        Interpolate["Step"] = "step";
        Interpolate["StepAfter"] = "step-after";
        Interpolate["StepBefore"] = "step-before";
    })(Interpolate || (Interpolate = {}));
    /**
     * The stroke cap for line ending style. One of `"butt"`, `"round"`, or `"square"`.
     *
     * __Default value:__ `"square"`
     */
    var StrokeCap;
    (function (StrokeCap) {
        StrokeCap["Butt"] = "butt";
        StrokeCap["Round"] = "round";
        StrokeCap["Square"] = "square";
    })(StrokeCap || (StrokeCap = {}));
    /**
     * The stroke line join method. One of `"miter"`, `"round"` or `"bevel"`.
     *
     * __Default value:__ `"miter"`
     */
    var StrokeJoin;
    (function (StrokeJoin) {
        StrokeJoin["Bevel"] = "bevel";
        StrokeJoin["Miter"] = "miter";
        StrokeJoin["Round"] = "round";
    })(StrokeJoin || (StrokeJoin = {}));
    var Content;
    (function (Content) {
        Content["Data"] = "data";
        Content["Encoding"] = "encoding";
    })(Content || (Content = {}));
    /**
     * The extent of the band. Available options include:
     * - `"ci"`: Extend the band to the confidence interval of the mean.
     * - `"stderr"`: The size of band are set to the value of standard error, extending from the
     * mean.
     * - `"stdev"`: The size of band are set to the value of standard deviation, extending from
     * the mean.
     * - `"iqr"`: Extend the band to the q1 and q3.
     *
     * __Default value:__ `"stderr"`.
     *
     * The extent of the rule. Available options include:
     * - `"ci"`: Extend the rule to the confidence interval of the mean.
     * - `"stderr"`: The size of rule are set to the value of standard error, extending from the
     * mean.
     * - `"stdev"`: The size of rule are set to the value of standard deviation, extending from
     * the mean.
     * - `"iqr"`: Extend the rule to the q1 and q3.
     *
     * __Default value:__ `"stderr"`.
     */
    var ExtentExtent;
    (function (ExtentExtent) {
        ExtentExtent["Ci"] = "ci";
        ExtentExtent["Iqr"] = "iqr";
        ExtentExtent["MinMax"] = "min-max";
        ExtentExtent["Stderr"] = "stderr";
        ExtentExtent["Stdev"] = "stdev";
    })(ExtentExtent || (ExtentExtent = {}));
    var PointEnum;
    (function (PointEnum) {
        PointEnum["Transparent"] = "transparent";
    })(PointEnum || (PointEnum = {}));
    /**
     * The mark type. This could a primitive mark type
     * (one of `"bar"`, `"circle"`, `"square"`, `"tick"`, `"line"`,
     * `"area"`, `"point"`, `"geoshape"`, `"rule"`, and `"text"`)
     * or a composite mark type (`"boxplot"`, `"errorband"`, `"errorbar"`).
     *
     * All types of primitive marks.
     */
    var Mark;
    (function (Mark) {
        Mark["Area"] = "area";
        Mark["Bar"] = "bar";
        Mark["Boxplot"] = "boxplot";
        Mark["Circle"] = "circle";
        Mark["Errorband"] = "errorband";
        Mark["Errorbar"] = "errorbar";
        Mark["Geoshape"] = "geoshape";
        Mark["Line"] = "line";
        Mark["Point"] = "point";
        Mark["Rect"] = "rect";
        Mark["Rule"] = "rule";
        Mark["Square"] = "square";
        Mark["Text"] = "text";
        Mark["Tick"] = "tick";
        Mark["Trail"] = "trail";
    })(Mark || (Mark = {}));
    /**
     * The cartographic projection to use. This value is case-insensitive, for example
     * `"albers"` and `"Albers"` indicate the same projection type. You can find all valid
     * projection types [in the
     * documentation](https://vega.github.io/vega-lite/docs/projection.html#projection-types).
     *
     * __Default value:__ `mercator`
     */
    var ProjectionType;
    (function (ProjectionType) {
        ProjectionType["Albers"] = "albers";
        ProjectionType["AlbersUsa"] = "albersUsa";
        ProjectionType["AzimuthalEqualArea"] = "azimuthalEqualArea";
        ProjectionType["AzimuthalEquidistant"] = "azimuthalEquidistant";
        ProjectionType["ConicConformal"] = "conicConformal";
        ProjectionType["ConicEqualArea"] = "conicEqualArea";
        ProjectionType["ConicEquidistant"] = "conicEquidistant";
        ProjectionType["Equirectangular"] = "equirectangular";
        ProjectionType["Gnomonic"] = "gnomonic";
        ProjectionType["Identity"] = "identity";
        ProjectionType["Mercator"] = "mercator";
        ProjectionType["NaturalEarth1"] = "naturalEarth1";
        ProjectionType["Orthographic"] = "orthographic";
        ProjectionType["Stereographic"] = "stereographic";
        ProjectionType["TransverseMercator"] = "transverseMercator";
    })(ProjectionType || (ProjectionType = {}));
    var ResolveMode;
    (function (ResolveMode) {
        ResolveMode["Independent"] = "independent";
        ResolveMode["Shared"] = "shared";
    })(ResolveMode || (ResolveMode = {}));
    /**
     * Establishes a two-way binding between the interval selection and the scales
     * used within the same view. This allows a user to interactively pan and
     * zoom the view.
     *
     * __See also:__ [`bind`](https://vega.github.io/vega-lite/docs/bind.html) documentation.
     */
    var BindEnum;
    (function (BindEnum) {
        BindEnum["Scales"] = "scales";
    })(BindEnum || (BindEnum = {}));
    /**
     * By default, `all` data values are considered to lie within an empty selection.
     * When set to `none`, empty selections contain no data values.
     */
    var Empty;
    (function (Empty) {
        Empty["All"] = "all";
        Empty["None"] = "none";
    })(Empty || (Empty = {}));
    /**
     * With layered and multi-view displays, a strategy that determines how
     * selections' data queries are resolved when applied in a filter transform,
     * conditional encoding rule, or scale domain.
     *
     * __See also:__ [`resolve`](https://vega.github.io/vega-lite/docs/selection-resolve.html)
     * documentation.
     */
    var SelectionResolution;
    (function (SelectionResolution) {
        SelectionResolution["Global"] = "global";
        SelectionResolution["Intersect"] = "intersect";
        SelectionResolution["Union"] = "union";
    })(SelectionResolution || (SelectionResolution = {}));
    /**
     * Determines the default event processing and data query for the selection. Vega-Lite
     * currently supports three selection types:
     *
     * - `single` -- to select a single discrete data value on `click`.
     * - `multi` -- to select multiple discrete data value; the first value is selected on
     * `click` and additional values toggled on shift-`click`.
     * - `interval` -- to select a continuous range of data values on `drag`.
     */
    var SelectionDefType;
    (function (SelectionDefType) {
        SelectionDefType["Interval"] = "interval";
        SelectionDefType["Multi"] = "multi";
        SelectionDefType["Single"] = "single";
    })(SelectionDefType || (SelectionDefType = {}));
    /**
     * The reference frame for the anchor position, one of `"bounds"` (to anchor relative to the
     * full bounding box) or `"group"` (to anchor relative to the group width or height).
     */
    var TitleFrame;
    (function (TitleFrame) {
        TitleFrame["Bounds"] = "bounds";
        TitleFrame["Group"] = "group";
    })(TitleFrame || (TitleFrame = {}));
    /**
     * Default title orientation (`"top"`, `"bottom"`, `"left"`, or `"right"`)
     */
    var TitleOrient;
    (function (TitleOrient) {
        TitleOrient["Bottom"] = "bottom";
        TitleOrient["Left"] = "left";
        TitleOrient["None"] = "none";
        TitleOrient["Right"] = "right";
        TitleOrient["Top"] = "top";
    })(TitleOrient || (TitleOrient = {}));
    /**
     * The window or aggregation operation to apply within a window (e.g.,`rank`, `lead`, `sum`,
     * `average` or `count`). See the list of all supported operations
     * [here](https://vega.github.io/vega-lite/docs/window.html#ops).
     *
     * An [aggregate operation](https://vega.github.io/vega-lite/docs/aggregate.html#ops) to
     * perform on the field prior to sorting (e.g., `"count"`, `"mean"` and `"median"`).
     * An aggregation is required when there are multiple values of the sort field for each
     * encoded data field.
     * The input data objects will be aggregated, grouped by the encoded data field.
     *
     * For a full list of operations, please see the documentation for
     * [aggregate](https://vega.github.io/vega-lite/docs/aggregate.html#ops).
     *
     * __Default value:__ `"sum"` for stacked plots. Otherwise, `"mean"`.
     *
     * The aggregation operation to apply to the fields (e.g., sum, average or count).
     * See the [full list of supported aggregation
     * operations](https://vega.github.io/vega-lite/docs/aggregate.html#ops)
     * for more information.
     *
     * The aggregation operation to apply (e.g., sum, average or count). See the list of all
     * supported operations [here](https://vega.github.io/vega-lite/docs/aggregate.html#ops).
     */
    var Op;
    (function (Op) {
        Op["Argmax"] = "argmax";
        Op["Argmin"] = "argmin";
        Op["Average"] = "average";
        Op["Ci0"] = "ci0";
        Op["Ci1"] = "ci1";
        Op["Count"] = "count";
        Op["CumeDist"] = "cume_dist";
        Op["DenseRank"] = "dense_rank";
        Op["Distinct"] = "distinct";
        Op["FirstValue"] = "first_value";
        Op["Lag"] = "lag";
        Op["LastValue"] = "last_value";
        Op["Lead"] = "lead";
        Op["Max"] = "max";
        Op["Mean"] = "mean";
        Op["Median"] = "median";
        Op["Min"] = "min";
        Op["Missing"] = "missing";
        Op["NthValue"] = "nth_value";
        Op["Ntile"] = "ntile";
        Op["PercentRank"] = "percent_rank";
        Op["Q1"] = "q1";
        Op["Q3"] = "q3";
        Op["Rank"] = "rank";
        Op["RowNumber"] = "row_number";
        Op["Stderr"] = "stderr";
        Op["Stdev"] = "stdev";
        Op["Stdevp"] = "stdevp";
        Op["Sum"] = "sum";
        Op["Valid"] = "valid";
        Op["Values"] = "values";
        Op["Variance"] = "variance";
        Op["Variancep"] = "variancep";
    })(Op || (Op = {}));
    var ExtentEnum;
    (function (ExtentEnum) {
        ExtentEnum["MinMax"] = "min-max";
    })(ExtentEnum || (ExtentEnum = {}));
    /**
     * The extent of the band. Available options include:
     * - `"ci"`: Extend the band to the confidence interval of the mean.
     * - `"stderr"`: The size of band are set to the value of standard error, extending from the
     * mean.
     * - `"stdev"`: The size of band are set to the value of standard deviation, extending from
     * the mean.
     * - `"iqr"`: Extend the band to the q1 and q3.
     *
     * __Default value:__ `"stderr"`.
     *
     * The extent of the rule. Available options include:
     * - `"ci"`: Extend the rule to the confidence interval of the mean.
     * - `"stderr"`: The size of rule are set to the value of standard error, extending from the
     * mean.
     * - `"stdev"`: The size of rule are set to the value of standard deviation, extending from
     * the mean.
     * - `"iqr"`: Extend the rule to the q1 and q3.
     *
     * __Default value:__ `"stderr"`.
     */
    var ErrorbandExtent;
    (function (ErrorbandExtent) {
        ErrorbandExtent["Ci"] = "ci";
        ErrorbandExtent["Iqr"] = "iqr";
        ErrorbandExtent["Stderr"] = "stderr";
        ErrorbandExtent["Stdev"] = "stdev";
    })(ErrorbandExtent || (ErrorbandExtent = {}));
    /**
     * Defines how Vega-Lite generates title for fields.  There are three possible styles:
     * - `"verbal"` (Default) - displays function in a verbal style (e.g., "Sum of field",
     * "Year-month of date", "field (binned)").
     * - `"function"` - displays function using parentheses and capitalized texts (e.g.,
     * "SUM(field)", "YEARMONTH(date)", "BIN(field)").
     * - `"plain"` - displays only the field name without functions (e.g., "field", "date",
     * "field").
     */
    var FieldTitle;
    (function (FieldTitle) {
        FieldTitle["Functional"] = "functional";
        FieldTitle["Plain"] = "plain";
        FieldTitle["Verbal"] = "verbal";
    })(FieldTitle || (FieldTitle = {}));
    var InvalidValues;
    (function (InvalidValues) {
        InvalidValues["Filter"] = "filter";
    })(InvalidValues || (InvalidValues = {}));

    /**
     * Create a `mark` using a `geom`
     *
     * @remark
     *
     * This function creates a Vega-Lite `mark` according to a ggspec `geom`.
     *
     * For most classes of `geom`, we need only the name of the class. For other
     * classes, like `GeomBoxplot`, we need additional information from `geom_params`
     * and `stat_params`.
     *
     * For developers of this package, when a new `geom` is added, you will have to
     * add the corresponding `mark` name to {@link markByGeomDefault}. If the `mark`
     * requires additional information, then you can build a new function, like
     * {@link markByGeomBoxplot}, to handle the creation of the `mark` object.
     *
     * @param ggGeom - `GG.Geom`, contains class of the ggplot2 `geom`;
     *   these map to the `mark` type
     * @param gsGeomParams - `GG.GeomParams`
     * @param ggStatParams - `GG.StatParams`
     *
     * @returns `VL.Mark`
     *
     * **Called by**
     *
     * @see itmLayer
     *
     * **Calls**
     *
     * @see {@link markByGeomDefault} for most geoms
     * @see {@link markByGeomBoxplot} for boxplots
     *
     */
    function markByGeom(ggGeomSet, ggStatSet) {
        // use this pattern for dispatch if we have only a few exceptions to the default
        // NOTE: we don't have Boxplot defined yet
        if (ggGeomSet.geom.class == 'GeomBoxplot') {
            return markByGeomBoxplot(ggGeomSet, ggStatSet);
        }
        return markByGeomDefault(ggGeomSet);
    }
    /**
     * Create a mark object given a geom class
     *
     * @remark
     * This is the default constructor for a mark object.
     *
     * For developers, whenever you add a new `geom`, you will have to add to the
     * `markByGeomMap` object, which maps names of ggplot2 `geom` classes to
     * names of Vega-Lite `mark` types.
     *
     * **Called by**
     *
     * @see markByGeom
     * @see markByBoxplot
     *
     * @param ggGeom
     *
     * @returns `VL.Mark`
     *
     */
    function markByGeomDefault(ggGeomSet) {
        // key: name of ggplot2 geom class
        // value: name of Vega-Lite mark type
        var markByGeomMap = {
            GeomPoint: 'point',
            GeomBar: 'bar',
            GeomBoxplot: 'boxplot',
            GeomLine: 'line'
        };
        // validate
        if (!contains$1(Object.keys(markByGeomMap), ggGeomSet.geom.class)) {
            throw new Error('ggplot object contains unsupported geom: ' + ggGeomSet.geom.class);
        }
        // translate
        var mark = {
            type: markByGeomMap[ggGeomSet.geom.class]
        };
        return mark;
    }
    /**
     * Create a boxplot `mark`
     *
     * @remark
     * The boxplot `mark` is a compound type, defined by more than
     * the class of the `geom`:
     *
     * - `extent` is equivalent to ggplot2 `coef`, normally a number,
     *   but we have to take into account infinite values which serialize
     *   and translate as strings.
     *
     * **Called by**
     * @see markByGeom
     *
     * **Calls**
     * @see markByGeomDefault
     *
     *
     * @param ggGeom - `GG.Geom`, contains class of the ggplot2 `geom`
     * @param ggGeomParams - `GG.GeomParams`
     * @param gsStatParams - `GG.StatParams`
     *
     * @returns `VL.Mark`
     *
     */
    function markByGeomBoxplot(ggGeomSet, ggStatSet) {
        // I know we have not done boxplots yet, this is just to propose an
        // extension mechanism.
        // validate (look for GeomParams and StatParams we can't translate)
        // translate
        var mark = markByGeomDefault(ggGeomSet);
        // TODO: add geomParams
        //NOTE @wenyu: use VL.ExtentExtent.MinMax
        function coef(coef) {
            if (typeof coef == 'string') {
                return ExtentExtent.MinMax; // catch-all for "Inf"
            }
            return coef;
        }
        mark.extent = coef(ggStatSet.stat_params.coef);
        return mark;
    }

    /**
     * Create an empty `Encoding` according to an aesthetic-name
     *
     * @remarks
     * There are different "flavors" of Vega-Lite encodings; which one is used
     * depends on the encoding key (name), which in turn depends on the
     * aesthetic name.
     *
     * In the future, maybe we could imagine an `opts` argument so that we could
     * instantiate the encoding and set values in one step.
     *
     * **Called by**
     * @see {@link itmEncodingObjectByMappingObject}
     * @see {@link itmEncodingObjectByAesParamsObject}
     *
     * **Calls**
     * @see encodingX
     * @see encodingY
     * @see encodingString
     * @see encodingNumber
     * @see encodingShape
     * @see encodingDetail
     *
     * @param aesName - `string` name of ggplot2 aesthetic
     *
     * @returns `VL.Encoding` empty encoding
     */
    function encodingByAes(aesName) {
        // assuming that VL.ValueDefWithConditionMarkPropFieldDefNumber, etc.
        // are all subclasses of VL.Encoding
        //NOTE @wenyu: Add group` and `weight` to GG.Mapping
        // keys are ggplot2 aesthetic names
        // values are Vega-Lite encoding constructor-functions for values
        var itmEncodingMap = {
            x: encodingX,
            y: encodingY,
            colour: encodingString,
            fill: encodingString,
            size: encodingNumber,
            stroke: encodingNumber,
            alpha: encodingNumber,
            group: encodingDetail,
            shape: encodingShape,
            weight: encodingNumber
            // NOTE: the weight aesthetic is used for stat calculations, it will not appear as an encoding key.
        };
        // validate
        if (!contains$1(Object.keys(itmEncodingMap), aesName)) {
            throw new Error('ggplot object contains unsupported aesthetic: ' + aesName);
        }
        // return empty object
        return itmEncodingMap[aesName]();
    }
    /**
     * Create empty X-encoding
     *
     * @remarks
     * **Called by**
     * @see encodingByAes
     *
     * @returns `VL.XClass`
     */
    function encodingX() {
        var encoding = {};
        return encoding;
    }
    /**
     * Create empty Y-encoding
     *
     * @remarks
     * **Called by**
     * @see encodingByAes
     *
     * @returns `VL.YClass`
     */
    function encodingY() {
        var encoding = {};
        return encoding;
    }
    /**
     * Create empty number-encoding
     *
     * @remarks
     * **Called by**
     * @see encodingByAes
     *
     * @returns `VL.DefWithConditionMarkPropFieldDefNumber`
     */
    function encodingNumber() {
        var encoding = {};
        return encoding;
    }
    /**
     * Create empty string-encoding
     *
     * @remarks
     * **Called by**
     * @see encodingByAes
     *
     * @returns `VL.DefWithConditionMarkPropFieldDefStringNull`
     */
    function encodingString() {
        var encoding = {};
        return encoding;
    }
    //NOTE @wenyu: Use VL.TypedFieldDef rather than VL.Details. Because we only use VL.TypedFieldDef
    /**
     * Create empty detail-encoding
     *
     * @remarks
     * **Called by**
     * @see encodingByAes
     *
     * @returns `VL.Detail`
     */
    function encodingDetail() {
        //NOTE @wenyu: VL.Detail has to define the type - we think we can change this later
        var encoding = { type: StandardType.Nominal };
        return encoding;
    }
    /**
     * Create empty shape-encoding
     *
     * @remarks
     * **Called by**
     * @see encodingByAes
     *
     * @returns `VL.DefWithConditionMarkPropFieldDefTypeForShapeStringNull`
     */
    function encodingShape() {
        var encoding = {};
        return encoding;
    }

    /**
     * Translate a ggplot2 size to a Vega-Lite size
     *
     * @remarks
     * In the future, we may have to take the geom into account.
     *
     * **Called by**
     * @see itmEncodingObjectByAesParamsObject
     *
     * @param size - `number`
     *
     * @returns `number`
     */
    function encodingValueSize(size) {
        // translate
        return 20 * size;
    }
    /**
     * Translate a ggplot2 shape to a Vega-Lite shape
     *
     * @remark
     *
     * We need to think more about how this function behaves.
     *
     * **Called by**
     * @see itmEncodingObjectByAesParamsObject
     *
     * @param size - `number`
     *
     * @returns `number`
     */
    function encodingValueShape(shape) {
        // TODO: think more about this map
        var shapeMap = {
            0: 'circle',
            1: 'square',
            3: 'cross',
            4: 'diamond',
            5: 'triangle-up',
            6: 'triangle-down',
            7: 'triangle-right',
            8: 'triangle-left'
        };
        // validate
        if (!contains$1(Object.keys(shapeMap), shape)) {
            throw new Error('ggplot object contains unsupported shape: ' + shape);
        }
        // translate
        return shapeMap[shape];
    }
    /**
     * Translate a ggplot2 colour to a Vega-Lite color
     *
     * @remark
     *
     * In ggplot2, colours can be hex-codes or named colours; In Vega-Lite,
     * colors can be hex-codes or named colors. Hex-codes mean the same thing
     * in both. Colours, although they have a common heritage, X11, are a little
     * bit different.
     *
     * Hex-codes are returned unchanged.
     *
     * Colour-names that end in numbers have the numbers removed.
     *
     * In the future, we might imagine something more-sophisticated that preserves the
     * names of colours that correspond, but replace those that do not correspond
     * with hex-codes.
     *
     * **Called by**
     * @see itmEncodingObjectByAesParamsObject
     *
     * @param size - `number`
     *
     * @returns `number`
     */
    function encodingValueColor(color) {
        // colors in R can have numbers at the end, in Vega-Lite (css), they don't
        // - we can get a good-enough mapping by removing the numbers.
        // return hex-values as-is
        // validate
        if (color.match(/^(#[0-9a-f]{3}|#[0-9a-f]{6})$/i)) {
            // translate
            return color;
        }
        // translate
        var colorNew = color.replace(/[0-9]+$/, '');
        // TODO validate - check that color is in Vega-Lite colors
        // if (!validColorNew) {
        //   throw new Error('ggplot object contains unsupported color: ' + color);
        // }
        return colorNew;
    }

    /**
     * Create an intermediate `encoding` object using a `mapping` object
     *
     * @remark
     * This function creates an intermdiate `encoding` object using a
     * ggspec `mapping` object and a ggspec `Metadata` object.
     *
     * Currently, a ggspec `mapping` is an object with a single key, `field`.
     * Its value is a string; that string matches to a variable-name
     * in the data.
     *
     * In the near future, a ggspec `mapping` may instead contain a different
     * single key, `stat`, with a string that matches an stat (aggregation)
     * operation, like `"count"`, or `"sum"`.
     *
     * This is more of a note to myself, we are starting to see the patterns
     * of how ggplot2 mappings, aes_params, and stat default_aes are related.
     * I suspect this should be addressed in ggschema.
     * See <https://github.com/vegawidget/ggvega/issues/44>
     *
     * **Called by**
     *
     * @see {@link itmLayer} to create an intermediate layer
     *
     * **Calls**
     *
     * @see {@link encodingByAes} to create an empty encoding
     * @see {@link fieldName} to handle dots, ".", in field names
     *
     * @param ggMappingObject - `GG.Mapping` maps data varaibles to aesthetics
     * @param ggMetadataObject - `GG.Metadata` contains the metadata for the data
     *   associated to this layer
     *
     * @returns `ItmEncodingObject`
     */
    function itmEncodingObjectByMappingObject(ggMappingObject, ggMetadataObject) {
        // translate
        // create empty itmEncodingObject
        var itmEncodingObject = {};
        // TODO: if the type is `ordinal`, and we have level,
        // we should set the scale domain according to the levels.
        //
        // larger TODO: determine and document the relationship between
        // ggplot    - factor, ordered-factor, levels
        // Vega-Lite - nominal, ordinal, scale-domain
        // for each mapping in gsMappingObject:
        //   - extract the information from the mapping object, metadata
        //   - create Encoding
        //   - populate Encoding
        //   - put Encoding into itmEncodingObject
        for (var aesName in ggMappingObject) {
            if (Object.prototype.hasOwnProperty.call(ggMappingObject, aesName)) {
                // do we have a type/class for `mapping`?
                // extract information from mapping object, metatdata
                var mapping = ggMappingObject[aesName];
                // TODO: we need to handle the situation where the mapping is a
                // `stat` instead of a `field`
                // NOTE @wenyu: Define `type` before we change the value of `field`
                var type = ggMetadataObject[mapping.field].type;
                var field = fieldName(mapping.field);
                // create Encoding
                var encoding = encodingByAes(aesName);
                // popuate Encoding
                encoding.field = field;
                encoding.type = type;
                // assuming that TypeScript will protect us from setting
                // properties that are not available
                // put Encoding into ItmEncodingObject
                itmEncodingObject[aesName] = encoding;
            }
        }
        // return
        return itmEncodingObject;
    }
    /**
     * Modify an intermediate `encoding` object using an `AesParams` object
     *
     * @remarks
     * This function will have side-effects, as the argument `itmEncodingObject`
     * is mutable, and is modified inside this function. We return this object
     * to signify that we intend to modify it, but we suspect that this is not
     * strictly necessary; the function could return `null` to signify that it
     * is called for side-effects. I am curious to know the convention here.
     *
     * This function modifies an intermdiate `encoding` object using a
     * ggspec `AesParams` object. In the future, we may need the `geom`.
     *
     * A ggspec `AesParams` element is a key-value pair, where the key
     * is a ggplot2 aesthetic-name, and the value can be a `string`, `number`,
     * or `boolean` (?).
     *
     * For each `AesParams` element, an `encoding` object is created, and put
     * into `itmEncodingObject` using the ggplot2 aesthetic-name as a key. The
     * value (of this key-value pair) is an object with a single key-value
     * pair: the key is `value`; its value is the value in "visual" space.
     *
     * There are helper functions to translate values for shape, color, and size.
     *
     * In the future, we may be able to take into account values that are specified
     * using "data" space: <https://github.com/vega/vega-lite/issues/1601>
     *
     * **Called by**
     * @see {@link itmLayer} to create an intermediate layer
     *
     * **Calls**
     * @see {@link encodingByAes} to create an empty encoding
     * @see {@link encodingValueShape} to translate shape values
     * @see {@link encodingValueColor} to translate color values
     * @see {@link encodingValueSize} to translate size values
     *
     *
     * @param itmEncodingObject
     * @param ggAesParamsObject
     *
     * @returns `ItmEncodingObject`
     */
    function itmEncodingObjectByAesParamsObject(itmEncodingObject, ggAesParamsObject) {
        // NOTE: we may have to pass the `geom` from itmLayer()
        // for each member of gsAesParams:
        //   - extract information from aesParams
        //   - create ItmEncoding
        //   - populate ItmEncoding
        //   - put ItmEncoding into itmEncodingObject
        for (var aesName in ggAesParamsObject) {
            if (Object.prototype.hasOwnProperty.call(ggAesParamsObject, aesName)) {
                // extract information from aes_params
                // NOTE @wenyu: Maybe the `value` can have other types
                var value = ggAesParamsObject[aesName];
                /**
                 * keep in mind that values are interpreted
                 * in the "visual" space, not the "data" space
                 *
                 * this will be an issue for geom_hline and geom_vline,
                 * as their x & y aes_params are specified in "data" space
                 *
                 * issue: https://github.com/vega/vega-lite/issues/1601
                 * PR: https://github.com/vega/vega-lite/pull/4201
                 */
                // tranlsate
                if (aesName == 'shape') {
                    // NOTE: we will likely need the Geom, which I think we can get
                    // from the `geom` breadcrumb included with the itmEncoding
                    value = encodingValueShape(Number(value));
                }
                if (aesName == 'colour' || aesName == 'fill') {
                    value = encodingValueColor(String(value));
                }
                if (aesName == 'size') {
                    value = encodingValueSize(Number(value));
                }
                //NOTE @wenyu: do we need create Encoding?
                // create Encoding
                var encoding = {};
                // populate Encoding
                encoding.value = value;
                // put Encoding into ItmEncodingObject
                itmEncodingObject[aesName] = encoding;
            }
        }
        // return
        return itmEncodingObject;
    }

    /**
     * Modify an encoding object according to a ggspec stat
     *
     * @remarks
     * Note about side-effects.
     *
     * This function is used to determine the specific function
     * according to the class of the ggspec stat. The actual work
     * is done in these specific functions.
     *
     * Right now, we support only one ggspec stat: `StatIdentity`.
     *
     * **Called by**
     * @see itmLayer
     *
     * **Calls**
     * @see itmEncodingObjectByStatIdentity
     *
     *
     * @param itmEncodingObject
     * @param ggStat
     * @param ggStatParams
     *
     * @returns itmEncodingObject
     */
    function itmEncodingObjectByStat(itmEncodingObject, ggStatSet) {
        var statMap = {
            StatIdentity: itmEncodingObjectByStatIdentity
        };
        // validate
        if (!contains$1(Object.keys(statMap), ggStatSet.stat.class)) {
            throw new Error('ggplot object contains unsupported stat: ' + ggStatSet.stat.class);
        }
        // translate
        var functionTranslate = statMap[ggStatSet.stat.class];
        return functionTranslate(itmEncodingObject, ggStatSet);
    }
    /**
     * Modify an encoding object according an identity stat
     *
     * @remarks
     * This function does nothing.
     *
     * **Called by**
     * @see itmEncodingObjectByStat
     *
     * @param itmEncodingObject
     * @param ggStat
     * @param ggStatParams
     *
     * @return itmEncodingObject
     */
    function itmEncodingObjectByStatIdentity(itmEncodingObject, ggStatSet) {
        // do nothing
        return itmEncodingObject;
    }

    /**
     * Create intermediate layer
     *
     * @remarks
     * This function is used to create an intermediate `layer`, using the
     * information contained ggspec `layer`. Other functions will add to the
     * intermediate `layer` using the `scales`, `labels`, etc.
     *
     * Within a `layer`, an `encoding` needs to know the type, e.g.
     * `"quantitative"`, of the variables (`field`s) it uses; this information
     * is kept in the ggspec `data`.
     *
     * An intermediate `layer` has two difference from a Vega-Lite `layer`:
     *
     * - It keeps the ggspec `geom` as an element, using it as a breadcrumb.
     * - Its `encoding` keys use ggplot2 aesthetic names as its namespace,
     *   rather than using Vega-Lite `encoding` names.
     *
     * This function compiles four elements of the `layer`:
     *
     * - `data`: name of the dataframe used for the layer
     * - `geom`: breadcrumb, contains the class of the ggplot2 `geom`
     * - `mark`: determined mainly using the `geom`
     * - `encoding` this is an intermediate encoding, where
     *     the keys use the ggplot2-aesthetic namespace,
     *     rather than the Vega-Lite encoding namespace:
     *     - initial version is built using ggplot2 `mapping`,
     *       as well as the `metadata`
     *     - then modified by `aes_params`
     *     - then modified by `stat` and `stat_params`
     *     - then modified by `position`
     *
     * **Called by**
     * @see layerArray
     *
     * **Calls**
     * @see markByGeom
     * @see itmEncodingObjectByMappingObject
     * @see itmEncodingObjectByAesParamsObject
     * @see itmEncodingObjectByStat
     * @see itmEncodingOjectByPosition
     *
     * @param ggLayer - `GG.Layer`, ggspec layer
     * @param gsData - `GG.Data`, ggspec data - used here for its `metadata`
     *
     * @returns `ItmLayer`, intermediate layer
     */
    function itmLayer(ggLayer, ggDatasetsObject) {
        // translate
        // get the metadata for the data for this layer
        var ggMetadataObject = ggDatasetsObject[ggLayer.data].metadata;
        var itmLayer = {
            data: { name: ggLayer.data },
            //NOTE @wenyu: Use GeomSet as breadcrumb?
            // leave `geom` as a breadcrumb so that we can use encodingNameByGeom()
            // - will not be not included in vl.Layer
            geomSet: ggGeomSet(ggLayer),
            mark: markByGeom(ggGeomSet(ggLayer), ggStatSet(ggLayer)),
            encoding: itmEncodingObjectByMappingObject(ggLayer.mapping, ggMetadataObject)
        };
        // incorporate aes_params into encoding
        itmLayer.encoding = itmEncodingObjectByAesParamsObject(itmLayer.encoding, ggLayer.aes_params);
        // incorporate stat into encoding
        itmLayer.encoding = itmEncodingObjectByStat(itmLayer.encoding, ggStatSet(ggLayer));
        // incorporate position into encoding (not yet active)
        // itmLayer.encoding = itmEncodingOjectByPosition(itmLayer.encoding, gsLayer.position);
        return itmLayer;
    }
    // NOTE @wenyu: Remove these 2 functions from ggschema to here. For test these functions and make ggschema clearer
    function ggGeomSet(layer) {
        return { geom: layer.geom, geom_params: layer.geom_params };
    }
    function ggStatSet(layer) {
        return { stat: layer.stat, stat_params: layer.stat_params };
    }

    /**
     * Modify a layer array according to a set of labels
     *
     * @remark
     * We want to attach a label to the first match that it finds, but we want it
     * to match only once.
     *
     * One way we can do this is to delete an item from the label object as
     * as soon as we match it - this way it can be used no more than once.
     *
     * We need to define what is a match - I think a match is made between:
     *   - a key (aesthetic name) of an encoding object
     *   - a key of a label
     *
     * Is this always an exact match? Perhaps for position channels, x & y,
     * it need match only the first character. A function could be useful here
     * to determine a match between two strings.
     *
     * I think we have to start by looping over the layers.
     *
     * Then we can have a function that takes an (intermediate) encoding object
     * and a label object. This function can loop over both the enconding object
     * and the label object, looking for a match.
     *
     * **Called by**
     * @see layerArray
     *
     *
     * @param itmLayerArray - `itmLayer[]`
     * @param ggLabelObject - `GG.Labels`
     *
     * @returns `ItmLayer[]`
     */
    function itmLayerArrayByLabelsObject(itmLayerArray, ggLabelObject) {
        //NOTE@ian consider deleting labels that have keys that begin with `x` or `y` but are not `x` or `y`
        //NOTE@ian - I think the position aesthetics are different in that we want to consider only those
        //  labels associated with 'x' or 'y', but we want to associate an `y` label with a `ymin` aesthetic.
        itmLayerArray.map(function (itmLayer) {
            for (var encodingKey in itmLayer.encoding) {
                for (var labelKey in ggLabelObject) {
                    //NOTE@ian - do we need to protect
                    //NOTE@ian - consider using a function that takes a labelKey and an encodingKey, returns a boolean
                    if (labelKey == encodingKey) {
                        itmLayer.encoding[encodingKey].title = ggLabelObject[labelKey];
                        delete ggLabelObject[labelKey];
                    }
                }
            }
        });
        // loop through the layers
        // within each layer:
        //   - get the encoding keys (aesthetic names)
        //   - get the label keys (aesthetic names)
        //   - for each label key:
        //       - if there is a match with an encoding key (first match that is not value-only):
        //           -  set the encoding title to the label value
        //           -  remove the label from the label object
        return itmLayerArray;
    }

    /**
     * Modify a layer array according to a scale array
     *
     * I think the match-and-delete strategy for scales can be very similar
     * to the one used in {@link itmLayerArrayByLabelsObject}.
     *
     * The obvious difference is that scales are in array, rather than in an object.
     * Another difference is that a scale has an element called `aesthetics` that
     * can make it simpler to match to the encoding key. Perhaps {@link contains}
     * could be used.
     *
     * **Called by**
     * @see layerArray
     *
     * @param itmLayerArray
     * @param ggScaleArray
     *
     * @returns `ItmLayer[]`
     */
    function itmLayerArrayByScalesArray(itmLayerArray, ggScaleArray) {
        // suspect we will need metadata
        // why? - looking at this later, I can't remember
        // loop through the layers
        // within each layer:
        //   - get the encoding keys (aesthetic names)
        //   - get the scale keys (aesthetic names)
        //   - for each scale key:
        //       - if there is a match with an encoding key (first match that is not value-only):
        //           -  set the scale on the encoding
        //           -  set the encoing name to the scale name
        //           -  remove the scale from the scale array
        return itmLayerArray;
    }

    /**
     * Modify an intermediate-layer array by coordinates
     *
     * @remarks
     * This function is used to dispatch according to the ggschema coordinates.
     *
     * **Calls**
     * @see itmLayerArrayByCoordCartesian
     *
     *
     * @param itmLayerArray
     * @param ggCoord
     *
     * @returns `ItmLayer[]`
     */
    function itmLayerArrayByCoord(itmLayerArray, ggCoord) {
        // keys: class names
        // values: function to call
        var CoordMap = {
            CoordCartesian: itmLayerArrayByCoordCartesian
        };
        // validate
        var className = ggCoord.class;
        if (!contains$1(Object.keys(CoordMap), className)) {
            throw new Error('ggplot object contains unsupported coordinates: ' + className);
        }
        // translate
        return CoordMap[className](itmLayerArray, ggCoord);
    }
    /**
     * Modify an intermediate-layer array by Cartesian coordinates
     *
     * @remarks
     * Cartesian coordinates are the default; this function is a no-op.
     *
     * **Called by**
     * @see itmLayerArrayByCoord
     *
     * @param itmLayerArray
     * @param ggCoord
     *
     * @returns `ItmLayer[]`
     */
    function itmLayerArrayByCoordCartesian(itmLayerArray, gsCoord) {
        // do nothing
        return itmLayerArray;
    }

    /**
     * Get encoding name from aesthetic name
     *
     * @remarks
     * The mapping of a ggplot aesthetic name to an encoding name depends
     * on the Geom under consideration.
     *
     * **Called by**
     * @see layerByItmLayer
     *
     * @param aesName - `GGEncodingKey` ggplot aesthetic-name
     * @param ggGeom - `GG.GeomSet` ggschema GeomSet object
     *
     * @returns
     */
    function encodingNameByGeom(aesName, ggGeomSet) {
        // keys: names of ggplot2 aesthetics
        // values: names of Vega-Lite encodings
        //NOTE @wenyu: Add `stroke`, What's `weight`
        var encodingMap = encodingMapDefault;
        // validate
        if (!contains$1(Object.keys(encodingMap), aesName)) {
            throw new Error('ggplot object contains unsupported aesthetic: ' + aesName);
        }
        // translate
        // exceptions
        if (ggGeomSet.geom.class == 'GeomLine') {
            encodingMap.size = 'strokeWidth';
        }
        if (ggGeomSet.geom.class == 'GeomBar') {
            encodingMap.size = 'strokeWidth';
        }
        return encodingMap[aesName];
    }
    // keys: names of ggplot2 aesthetics
    // values: names of Vega-Lite encodings
    var encodingMapDefault = {
        x: 'x',
        y: 'y',
        colour: 'stroke',
        fill: 'fill',
        size: 'size',
        stroke: 'strokeWidth',
        alpha: 'opacity',
        group: 'detail',
        shape: 'shape'
    };

    /**
     * Create layer array
     *
     * @remark
     * A layer array is composed of individual layers. Here, the translation
     * process has two parts; the layer array is built in stages:
     *
     *  - Each Vega-Lite `layer` is built according to its corresponding
     *    ggspec `layer`.
     *
     *  - The Vega-Lite layer array is then modified according to:
     *
     *    - ggspec `labels`:
     *       - each label is associated with a group of aesthetics
     *       - each aesthetic-group is to be labelled no more than once
     *       - as such, we apply a label to its first match in a layer array:
     *         the first matching aesthetic in the first matching layer
     *
     *    - ggspec `scales`:
     *       - each scale is associated with a group of aesthetics
     *       - each aesthetic-group is to have a scale defined no more than once
     *       - as such, we apply a scale to its first match in a layer array:
     *         the first matching aesthetic in the first matching layer
     *
     *    - ggspec `coordinates`:
     *       - for the immediate future, Vega-Lite can support only Cartesian
     *         coordinates: <https://github.com/vega/vega-lite/issues/408>
     *       - ggplot2 offers "flipped" (Cartesian) coordinates,
     *         which we will support
     *
     *  There is one other process happening here - each `layer` is initially
     *  constructed not as a Vega-Lite `layer`, but as an "intermediate" `layer`.
     *
     *  When constructing a `layer` (array), we found to simpler to keep the
     *  `encoding` namespace, i.e. the names of the keys in the `encoding`
     *  object, based on ggplot2's aesthetic names, rather than Vega-Lite's encoding
     *  names. This makes it easier to incorporate `stat`s, `scales`, `labels`, etc.
     *
     *  This means, at the end of this process, to convert from an intermediate
     *  `layer` array Vega-Lite `layer` array, we have change the `encoding`
     *  namespace to conform to Vega-Lite.
     *
     * **Called by**
     *
     * @see topLevelSpec
     *
     * **Calls**
     *
     * @see itmLayer
     * @see itmLayerArrayByLabelObject
     * @see itmLayerArrayByScaleArray
     * @see itmLayerArrayByCoord
     * @see layerByItmLayer
     *
     * @param ggDatasets `GG.ggDatasetsObject`, key-value pairs of ggspec datasets
     * @param ggLayerArray `GG.Layer[]` - array of ggspec layers
     * @param ggScaleArray `GG.Scale[]` - array of ggspec scales
     * @param ggLabelObject `GG.Labels` - key-value pairs of ggspec labels
     * @param ggCoordinates `GG.Coord` - ggspec coordinates
     *
     * @returns `vl.LayerSpec[]`, array containing Vega-Lite layer specs
     *
     */
    function layerArrayByAes(ggDatasetsObject, ggLayerArray, ggScaleArray, ggLabelObject, ggCoordinates) {
        // validate
        if (ggLayerArray.length == 0) {
            throw new Error('ggplot object has no layers, requires at least one layer');
        }
        // translate
        // start intermediate layers according to ggLayerArray
        // could this work?
        var itmLayerArray = ggLayerArray.map(function (ggLayer) {
            return itmLayer(ggLayer, ggDatasetsObject);
        });
        // incorporate labels
        itmLayerArray = itmLayerArrayByLabelsObject(itmLayerArray, ggLabelObject);
        // incorporate scales
        itmLayerArray = itmLayerArrayByScalesArray(itmLayerArray);
        // incorporate coordinates
        itmLayerArray = itmLayerArrayByCoord(itmLayerArray, ggCoordinates);
        // change encoding-key namespace from ggplot2 to Vega-Lite
        var layerArray = itmLayerArray.map(layerByItmLayer);
        return layerArray;
    }
    /**
     * Change the `encoding` namespace
     *
     * @remark
     * To translate an intermediate `layer` to a Vega-Lite `layer`, this function
     * changes the `encoding` namespace from ggplo2 aesthetic-names to Vega-Lite
     * `encoding` keys.
     *
     * As well, a ggspec `geom` is an element of an intermediate `layer`; we use it
     * as a "breadcrumb", as the mapping of aesthetic names to encoding names depends
     * on the `geom`.
     *
     * **Called by**
     * @see layerArray
     *
     * **Calls**
     * @see encodingNameByGeom
     *
     *
     * @param itmLayer - `itmLayer`, intermediate layer-object
     *
     * @returns `VL.Layer`, Vega-Lite layer-object
     *
     */
    function layerByItmLayer(itmLayer) {
        // create new encoding
        var encoding = {};
        // loop over aesthetic names in itmLayerEncoding
        for (var aesName in itmLayer.encoding) {
            if (Object.prototype.hasOwnProperty.call(itmLayer.encoding, aesName)) {
                // get the encoding name, add to the encoding
                var encodingName = encodingNameByGeom(aesName, itmLayer.geomSet);
                if (encodingName == 'x')
                    encoding[encodingName] = itmLayer.encoding[aesName];
                if (encodingName == 'y')
                    encoding[encodingName] = itmLayer.encoding[aesName];
                if (encodingName == ('size'  ))
                    encoding[encodingName] = itmLayer.encoding[aesName];
                if (encodingName == ('stroke' ))
                    encoding[encodingName] = itmLayer.encoding[aesName];
                if (encodingName == 'shape')
                    encoding[encodingName] = itmLayer.encoding[aesName];
            }
        }
        var layer = {
            data: itmLayer.data,
            mark: itmLayer.mark,
            encoding: encoding
        };
        return layer;
    }

    /**
     * Create a Facet object
     *
     * @remarks
     * This is just a stub right now - to be built soon.
     *
     * **Called by**
     * @see topLevelSpec
     *
     *
     * @param ggFacet - `GG.Facet` ggschema Facet object
     *
     * @returns `VL.Facet`
     */
    function facet(ggFacet) {
        // validate
        throw new Error('ggplot object contains unsupported facet: ' + ggFacet.class);
        var facet = {};
        return facet;
    }

    function spec2vl(spec) {
        var ggSpec = ggValidate(spec);
        var vlSpec = topLevelSpec(ggSpec);
        return vlSpec;
    }
    function ggValidate(spec) {
        // validate here
        //NOTE @wenyu: This function throw warnings and return true(validated) or false(not validated).
        validateGs(spec);
        var ggSpec = spec;
        return ggSpec;
    }
    /**
     * Create a TopLevelSpec
     *
     * @remarks
     * This seems like a good place to discuss coding ideas.
     *
     * **Motivation**
     *
     * When we add another ggplot2 `Geom`, `Stat`, `Position`, etc., we want to make it
     * as simple as possible to add the translation code here.
     *
     * **Principles**
     *
     * - Use short, focused functions.
     * - Use class-dispatch where appropriate.
     * - Keep in mind that ggplot/ggspec can provide redundant or conflicting
     *   information, develop rules to resolve those conflicts.
     *
     * **Conventions**
     *
     * - The word `translate` is not used in function names because virtually
     *   every function performs a translation; the word is not telling us
     *   anything new.
     *
     * - Functions are named after the type of object they return,
     *   e.g. this function is named `topLevelSpec`.
     *
     * - Functions or variables that refer to a Vega-Lite objects
     *   do *not* use a prefix. Those that refer to a ggspec or intermidate object
     *   use the prefixes `gg` or `itm`, respectively.
     *
     * - Functions and files containing functions that depend on
     *   certain ggplot2 features, e.g. `Geom`, are further named using
     *   the preposition `By`, e.g. `markByGeom`.
     *
     *   - Functions that operate on different types of a ggplot2 feature,
     *     e.g. `markByGeom`: `markByGeomDefault`, `markByGeomBoxplot`,
     *     are collected in a single file, e.g. `markByGeom.ts`
     *
     * - Functions or variables that refer to collections of similar things,
     *   e.g. `layerArray` or `encodingObject`, use the suffixes `Array` or
     *   `Object`.
     *
     * - TODO: find out the convention for noting that mutable function-arguments
     *   are changed as a side-effect of calling, and that sometimes we might do this
     *   intentionally.
     *
     * - End-users are not expected to know about ggspec or ggschema;
     *   error messages should refer to the ggplot object.
     *
     * **Resolutions**
     *
     *  - In an `encoding`:
     *   - a ggplot2 `scale` name takes precedence over a ggplot2 `label` value.
     *   - a ggplot2 `mapping` takes precedence over a ggplot2 `stat` `default_aes`.
     *
     * ---
     *
     * **Calls**
     * @see datasetsObject
     * @see layerArray
     * @see facet
     *
     * @param ggSpec - `GG.TopLevelSpec`, validated ggspec
     *
     * @returns `VL.TopLevelSpec`, Vega-Lite specification
     *
     */
    function topLevelSpec(ggSpec) {
        // The structure of a Vega-Lite specification depends on whether or not
        // it is faceted.
        // Want to specify this URL exactly **one** place in the project
        // also - what mechanism do we use to update the Vega-Lite schema?
        // NOTE @wenyu: Remove schema and use `vlschema`
        // const schema = 'https://vega.github.io/schema/vega-lite/v3.json';
        var topLevelSpec = {};
        // faceted
        if (ggSpec.facet.class != 'FacetNull') {
            // at the moment, this code will not run because
            // `facet()`, by design, throws an error
            topLevelSpec = {
                $schema: vlschema,
                //NOTE @wenyu: It's better to use undefined rather than '' to avoid `title=''`
                title: ggSpec.labels.title || undefined,
                datasets: datasetsObject(ggSpec.data),
                spec: {
                    layer: layerArrayByAes(ggSpec.data, ggSpec.layers, ggSpec.scales, ggSpec.labels, ggSpec.coordinates)
                },
                facet: facet(ggSpec.facet)
            };
            return topLevelSpec;
        }
        // not faceted
        topLevelSpec = {
            $schema: vlschema,
            title: ggSpec.labels.title || undefined,
            datasets: datasetsObject(ggSpec.data),
            layer: layerArrayByAes(ggSpec.data, ggSpec.layers, ggSpec.scales, ggSpec.labels, ggSpec.coordinates)
        };
        return topLevelSpec;
    }

    exports.spec2vl = spec2vl;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ggvega.js.map
