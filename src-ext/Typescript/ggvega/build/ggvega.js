(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
    ? define(['exports'], factory)
    : ((global = global || self), factory((global.ggvega = {})));
})(this, function(exports) {
  'use strict';

  function TranslatePointShape(ggShape) {
    var shape = '';
    if (ggShape % 8 == 0) {
      shape = 'circle';
    }
    if (ggShape % 8 == 1) {
      shape = 'square';
    }
    if (ggShape % 8 == 2) {
      shape = 'cross';
    }
    if (ggShape % 8 == 3) {
      shape = 'diamond';
    }
    if (ggShape % 8 == 4) {
      shape = 'triangle-up';
    }
    if (ggShape % 8 == 5) {
      shape = 'triangle-down';
    }
    if (ggShape % 8 == 6) {
      shape = 'triangle-right';
    }
    if (ggShape % 8 == 7) {
      shape = 'triangle-left';
    }
    return shape;
  }
  function TranslateStroke(ggStroke) {
    return ggStroke;
  }
  function TranslateStrokeWidth(ggStrokeWidth) {
    return ggStrokeWidth;
  }
  function TranslateOpacity(ggOpacity) {
    return ggOpacity;
  }
  function TranslateFill(ggFill) {
    return ggFill;
  }
  function TranslatePointSize(ggSize) {
    return ggSize * 20;
  }

  function TranslateEncoding(layer, labels, layerData, scales) {
    var layerEncoding = {
      x: TranslateXClass(layer, labels, layerData, scales),
      y: TranslateYClass(layer, labels, layerData, scales),
      // color: TranslateColor(layer, labels, layerData),
      size: TranslateSize(layer, labels, layerData),
      shape: TranslateShape(layer, labels, layerData),
      stroke: TranslateStroke$1(layer, labels, layerData),
      strokeWidth: TranslateStrokeWidth$1(layer, labels, layerData),
      opacity: TranslateOpacity$1(layer, labels, layerData),
      fill: TranslateFill$1(layer, labels, layerData)
    };
    return layerEncoding;
  }
  function TranslateXClass(layer, labels, layerData, scales) {
    var field = layer['mapping']['x']['field'];
    var type = layerData['metadata'][field]['type'];
    var scale;
    var title = labels['x'];
    for (var _i = 0, scales_1 = scales; _i < scales_1.length; _i++) {
      var ggScale = scales_1[_i];
      if (ggScale['aesthetics'][0] == 'x') {
        scale = TranslateScale(ggScale['transform']);
        if (ggScale['name']) {
          title = ggScale['name'];
        }
      }
    }
    field = field.replace('.', '\\.');
    var xClass = {
      field: field,
      type: type,
      title: title,
      scale: scale
    };
    return xClass;
  }
  function TranslateYClass(layer, labels, layerData, scales) {
    var field = layer['mapping']['y']['field'];
    var type = layerData['metadata'][field]['type'];
    var scale;
    var title = labels['y'];
    for (var _i = 0, scales_2 = scales; _i < scales_2.length; _i++) {
      var ggScale = scales_2[_i];
      if (ggScale['aesthetics'][0] == 'y') {
        scale = TranslateScale(ggScale['transform']);
        if (ggScale['name']) {
          title = ggScale['name'];
        }
      }
    }
    field = field.replace('.', '\\.');
    var yClass = {
      field: field,
      type: type,
      title: title,
      scale: scale
    };
    return yClass;
  }
  /**
   * This function used tp translate `color`.
   * For now, we believe we can use `fill` and `stroke` substitute `color`. So we just comment this function
   * @param layer
   * @param ggSpec
   */
  // function TranslateColor(layer: any, labels: any, layerData: any): vlspec.ValueDefWithConditionMarkPropFieldDefStringNull | undefined {
  //   let color: vlspec.ValueDefWithConditionMarkPropFieldDefStringNull | undefined;
  //   if (layer['aes_params']['colour']) {
  //     color = layer['aes_params']['colour'];
  //   }
  //   if (layer['mapping']['colour']) {
  //     if (!layer['mapping']['colour']['field']) {
  //       return color;
  //     }
  //     let field: string = layer['mapping']['colour']['field'];
  //     const type: vlspec.StandardType = layerData['metadata'][field]['type'];
  //     field = field.replace('.', '\\.');
  //     color = {
  //       field: field,
  //       type: type,
  //       title: labels['colour']
  //     };
  //   }
  //   return color;
  // }
  /**
   * TODO:// default type is ordinal bin
   * translate encoding.size
   * @param layer in ggSpec['layers']
   * @param ggSpec is the ggSpec
   */
  function TranslateSize(layer, labels, layerData) {
    var size;
    if (layer['aes_params']) {
      if (layer['aes_params']['size']) {
        if (layer['aes_params']['size']['value']) {
          size = {
            value: TranslatePointSize(layer['aes_params']['size']['value'])
          };
        }
      }
    }
    if (layer['mapping']['size']) {
      if (!layer['mapping']['size']['field']) {
        return size;
      }
      var field = layer['mapping']['size']['field'];
      var type = layerData['metadata'][field]['type'];
      field = field.replace('.', '\\.');
      size = {
        field: field,
        type: type,
        title: labels['size'],
        bin: true
      };
    }
    return size;
  }
  function TranslateShape(layer, labels, layerData) {
    var shape;
    if (layer['aes_params']) {
      if (layer['aes_params']['shape']) {
        if (layer['aes_params']['shape']['value']) {
          if (layer['geom']['class'] == 'GeomPoint') {
            shape = {
              value: TranslatePointShape(layer['aes_params']['shape']['value'])
            };
          }
        }
      }
    }
    if (layer['mapping']['shape']) {
      if (!layer['mapping']['shape']['field']) {
        return shape;
      }
      var field = layer['mapping']['shape']['field'];
      var type = layerData['metadata'][field]['type'];
      field = field.replace('.', '\\.');
      shape = {
        field: field,
        type: type,
        title: labels['shape']
      };
    }
    return shape;
  }
  function TranslateScale(transform) {
    return transform;
  }
  function TranslateStroke$1(layer, labels, layerData) {
    var stroke;
    if (layer['aes_params']) {
      if (layer['aes_params']['colour']) {
        if (layer['aes_params']['colour']['value']) {
          stroke = {
            value: TranslateStroke(layer['aes_params']['colour']['value'])
          };
        }
      }
    }
    if (layer['mapping']['colour']) {
      if (!layer['mapping']['colour']['field']) {
        return stroke;
      }
      var field = layer['mapping']['colour']['field'];
      var type = layerData['metadata'][field]['type'];
      field = field.replace('.', '\\.');
      stroke = {
        field: field,
        type: type,
        title: labels['colour']
      };
    }
    return stroke;
  }
  function TranslateStrokeWidth$1(layer, labels, layerData) {
    var strokeWidth;
    if (layer['aes_params']) {
      if (layer['aes_params']['stroke']) {
        if (layer['aes_params']['stroke']['value']) {
          strokeWidth = {
            value: TranslateStrokeWidth(layer['aes_params']['stroke']['value'])
          };
        }
      }
    }
    if (layer['mapping']['stroke']) {
      if (!layer['mapping']['stroke']['field']) {
        return strokeWidth;
      }
      var field = layer['mapping']['stroke']['field'];
      var type = layerData['metadata'][field]['type'];
      field = field.replace('.', '\\.');
      strokeWidth = {
        field: field,
        type: type,
        title: labels['stroke']
      };
    }
    return strokeWidth;
  }
  function TranslateOpacity$1(layer, labels, layerData) {
    var opacity;
    if (layer['aes_params']) {
      if (layer['aes_params']['alpha']) {
        if (layer['aes_params']['alpha']['value']) {
          opacity = {
            value: TranslateOpacity(layer['aes_params']['alpha']['value'])
          };
        }
      }
    }
    if (layer['mapping']['alpha']) {
      if (!layer['mapping']['alpha']['field']) {
        return opacity;
      }
      var field = layer['mapping']['alpha']['field'];
      var type = layerData['metadata'][field]['type'];
      field = field.replace('.', '\\.');
      opacity = {
        field: field,
        type: type,
        title: labels['stroke']
      };
    }
    return opacity;
  }
  function TranslateFill$1(layer, labels, layerData) {
    var fill;
    if (layer['aes_params']) {
      if (layer['aes_params']['fill']) {
        if (layer['aes_params']['fill']['value']) {
          fill = {
            value: TranslateFill(layer['aes_params']['fill']['value'])
          };
        }
      }
    }
    if (layer['mapping']['fill']) {
      if (!layer['mapping']['fill']['field']) {
        return fill;
      }
      var field = layer['mapping']['fill']['field'];
      var type = layerData['metadata'][field]['type'];
      field = field.replace('.', '\\.');
      fill = {
        field: field,
        type: type,
        title: labels['colour']
      };
    }
    return fill;
  }

  function accessor(fn, fields, name) {
    fn.fields = fields || [];
    fn.fname = name;
    return fn;
  }

  function error(message) {
    throw Error(message);
  }

  function splitAccessPath(p) {
    var path = [],
      q = null,
      b = 0,
      n = p.length,
      s = '',
      i,
      j,
      c;

    p = p + '';

    function push() {
      path.push(s + p.substring(i, j));
      s = '';
      i = j + 1;
    }

    for (i = j = 0; j < n; ++j) {
      c = p[j];
      if (c === '\\') {
        s += p.substring(i, j);
        i = ++j;
      } else if (c === q) {
        push();
        q = null;
        b = -1;
      } else if (q) {
        continue;
      } else if (i === b && c === '"') {
        i = j + 1;
        q = c;
      } else if (i === b && c === "'") {
        i = j + 1;
        q = c;
      } else if (c === '.' && !b) {
        if (j > i) {
          push();
        } else {
          i = j + 1;
        }
      } else if (c === '[') {
        if (j > i) push();
        b = i = j + 1;
      } else if (c === ']') {
        if (!b) error('Access path missing open bracket: ' + p);
        if (b > 0) push();
        b = 0;
        i = j + 1;
      }
    }

    if (b) error('Access path missing closing bracket: ' + p);
    if (q) error('Access path missing closing quote: ' + p);

    if (j > i) {
      j++;
      push();
    }

    return path;
  }

  var isArray = Array.isArray;

  function isObject(_) {
    return _ === Object(_);
  }

  function isString(_) {
    return typeof _ === 'string';
  }

  function $(x) {
    return isArray(x)
      ? '[' + x.map($) + ']'
      : isObject(x) || isString(x)
      ? // Output valid JSON and JS source strings.
        // See http://timelessrepo.com/json-isnt-a-javascript-subset
        JSON.stringify(x)
          .replace('\u2028', '\\u2028')
          .replace('\u2029', '\\u2029')
      : x;
  }

  function field(field, name) {
    var path = splitAccessPath(field),
      code = 'return _[' + path.map($).join('][') + '];';

    return accessor(Function('_', code), [(field = path.length === 1 ? path[0] : field)], name || field);
  }

  var empty = [];

  var id = field('id');

  var identity = accessor(
    function(_) {
      return _;
    },
    empty,
    'identity'
  );

  var zero = accessor(
    function() {
      return 0;
    },
    empty,
    'zero'
  );

  var one = accessor(
    function() {
      return 1;
    },
    empty,
    'one'
  );

  var truthy = accessor(
    function() {
      return true;
    },
    empty,
    'true'
  );

  var falsy = accessor(
    function() {
      return false;
    },
    empty,
    'false'
  );

  /**
   * Span-preserving range clamp. If the span of the input range is less
   * than (max - min) and an endpoint exceeds either the min or max value,
   * the range is translated such that the span is preserved and one
   * endpoint touches the boundary of the min/max range.
   * If the span exceeds (max - min), the range [min, max] is returned.
   */

  /**
   * Return an array with minimum and maximum values, in the
   * form [min, max]. Ignores null, undefined, and NaN values.
   */

  /**
   * Predicate that returns true if the value lies within the span
   * of the given range. The left and right flags control the use
   * of inclusive (true) or exclusive (false) comparisons.
   */

  function toSet(_) {
    for (var s = {}, i = 0, n = _.length; i < n; ++i) s[_[i]] = true;
    return s;
  }

  function createCommonjsModule(fn, module) {
    return (module = {exports: {}}), fn(module, module.exports), module.exports;
  }

  var clone_1 = createCommonjsModule(function(module) {
    var clone = (function() {
      function _instanceof(obj, type) {
        return type != null && obj instanceof type;
      }

      var nativeMap;
      try {
        nativeMap = Map;
      } catch (_) {
        // maybe a reference error because no `Map`. Give it a dummy value that no
        // value will ever be an instanceof.
        nativeMap = function() {};
      }

      var nativeSet;
      try {
        nativeSet = Set;
      } catch (_) {
        nativeSet = function() {};
      }

      var nativePromise;
      try {
        nativePromise = Promise;
      } catch (_) {
        nativePromise = function() {};
      }

      /**
       * Clones (copies) an Object using deep copying.
       *
       * This function supports circular references by default, but if you are certain
       * there are no circular references in your object, you can save some CPU time
       * by calling clone(obj, false).
       *
       * Caution: if `circular` is false and `parent` contains circular references,
       * your program may enter an infinite loop and crash.
       *
       * @param `parent` - the object to be cloned
       * @param `circular` - set to true if the object to be cloned may contain
       *    circular references. (optional - true by default)
       * @param `depth` - set to a number if the object is only to be cloned to
       *    a particular depth. (optional - defaults to Infinity)
       * @param `prototype` - sets the prototype to be used when cloning an object.
       *    (optional - defaults to parent prototype).
       * @param `includeNonEnumerable` - set to true if the non-enumerable properties
       *    should be cloned as well. Non-enumerable properties on the prototype
       *    chain will be ignored. (optional - false by default)
       */
      function clone(parent, circular, depth, prototype, includeNonEnumerable) {
        if (typeof circular === 'object') {
          depth = circular.depth;
          prototype = circular.prototype;
          includeNonEnumerable = circular.includeNonEnumerable;
          circular = circular.circular;
        }
        // maintain two arrays for circular references, where corresponding parents
        // and children have the same index
        var allParents = [];
        var allChildren = [];

        var useBuffer = typeof Buffer != 'undefined';

        if (typeof circular == 'undefined') circular = true;

        if (typeof depth == 'undefined') depth = Infinity;

        // recurse this function so we don't reset allParents and allChildren
        function _clone(parent, depth) {
          // cloning null always returns null
          if (parent === null) return null;

          if (depth === 0) return parent;

          var child;
          var proto;
          if (typeof parent != 'object') {
            return parent;
          }

          if (_instanceof(parent, nativeMap)) {
            child = new nativeMap();
          } else if (_instanceof(parent, nativeSet)) {
            child = new nativeSet();
          } else if (_instanceof(parent, nativePromise)) {
            child = new nativePromise(function(resolve, reject) {
              parent.then(
                function(value) {
                  resolve(_clone(value, depth - 1));
                },
                function(err) {
                  reject(_clone(err, depth - 1));
                }
              );
            });
          } else if (clone.__isArray(parent)) {
            child = [];
          } else if (clone.__isRegExp(parent)) {
            child = new RegExp(parent.source, __getRegExpFlags(parent));
            if (parent.lastIndex) child.lastIndex = parent.lastIndex;
          } else if (clone.__isDate(parent)) {
            child = new Date(parent.getTime());
          } else if (useBuffer && Buffer.isBuffer(parent)) {
            if (Buffer.allocUnsafe) {
              // Node.js >= 4.5.0
              child = Buffer.allocUnsafe(parent.length);
            } else {
              // Older Node.js versions
              child = new Buffer(parent.length);
            }
            parent.copy(child);
            return child;
          } else if (_instanceof(parent, Error)) {
            child = Object.create(parent);
          } else {
            if (typeof prototype == 'undefined') {
              proto = Object.getPrototypeOf(parent);
              child = Object.create(proto);
            } else {
              child = Object.create(prototype);
              proto = prototype;
            }
          }

          if (circular) {
            var index = allParents.indexOf(parent);

            if (index != -1) {
              return allChildren[index];
            }
            allParents.push(parent);
            allChildren.push(child);
          }

          if (_instanceof(parent, nativeMap)) {
            parent.forEach(function(value, key) {
              var keyChild = _clone(key, depth - 1);
              var valueChild = _clone(value, depth - 1);
              child.set(keyChild, valueChild);
            });
          }
          if (_instanceof(parent, nativeSet)) {
            parent.forEach(function(value) {
              var entryChild = _clone(value, depth - 1);
              child.add(entryChild);
            });
          }

          for (var i in parent) {
            var attrs;
            if (proto) {
              attrs = Object.getOwnPropertyDescriptor(proto, i);
            }

            if (attrs && attrs.set == null) {
              continue;
            }
            child[i] = _clone(parent[i], depth - 1);
          }

          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(parent);
            for (var i = 0; i < symbols.length; i++) {
              // Don't need to worry about cloning a symbol because it is a primitive,
              // like a number or string.
              var symbol = symbols[i];
              var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
              if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
                continue;
              }
              child[symbol] = _clone(parent[symbol], depth - 1);
              if (!descriptor.enumerable) {
                Object.defineProperty(child, symbol, {
                  enumerable: false
                });
              }
            }
          }

          if (includeNonEnumerable) {
            var allPropertyNames = Object.getOwnPropertyNames(parent);
            for (var i = 0; i < allPropertyNames.length; i++) {
              var propertyName = allPropertyNames[i];
              var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
              if (descriptor && descriptor.enumerable) {
                continue;
              }
              child[propertyName] = _clone(parent[propertyName], depth - 1);
              Object.defineProperty(child, propertyName, {
                enumerable: false
              });
            }
          }

          return child;
        }

        return _clone(parent, depth);
      }

      /**
       * Simple flat clone using prototype, accepts only objects, usefull for property
       * override on FLAT configuration object (no nested props).
       *
       * USE WITH CAUTION! This may not behave as you wish if you do not know how this
       * works.
       */
      clone.clonePrototype = function clonePrototype(parent) {
        if (parent === null) return null;

        var c = function() {};
        c.prototype = parent;
        return new c();
      };

      // private utility functions

      function __objToStr(o) {
        return Object.prototype.toString.call(o);
      }
      clone.__objToStr = __objToStr;

      function __isDate(o) {
        return typeof o === 'object' && __objToStr(o) === '[object Date]';
      }
      clone.__isDate = __isDate;

      function __isArray(o) {
        return typeof o === 'object' && __objToStr(o) === '[object Array]';
      }
      clone.__isArray = __isArray;

      function __isRegExp(o) {
        return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
      }
      clone.__isRegExp = __isRegExp;

      function __getRegExpFlags(re) {
        var flags = '';
        if (re.global) flags += 'g';
        if (re.ignoreCase) flags += 'i';
        if (re.multiline) flags += 'm';
        return flags;
      }
      clone.__getRegExpFlags = __getRegExpFlags;

      return clone;
    })();

    if (module.exports) {
      module.exports = clone;
    }
  });

  var fastJsonStableStringify = function(data, opts) {
    if (!opts) opts = {};
    if (typeof opts === 'function') opts = {cmp: opts};
    var cycles = typeof opts.cycles === 'boolean' ? opts.cycles : false;

    var cmp =
      opts.cmp &&
      (function(f) {
        return function(node) {
          return function(a, b) {
            var aobj = {key: a, value: node[a]};
            var bobj = {key: b, value: node[b]};
            return f(aobj, bobj);
          };
        };
      })(opts.cmp);

    var seen = [];
    return (function stringify(node) {
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

  /**
   * Monkey patch Set so that `stringify` produces a string representation of sets.
   */
  Set.prototype['toJSON'] = function() {
    return `Set(${[...this].map(x => fastJsonStableStringify(x)).join(',')})`;
  };
  // This is a stricter version of Object.keys but with better types. See https://github.com/Microsoft/TypeScript/pull/12253#issuecomment-263132208
  const keys = Object.keys;
  function flagKeys(f) {
    return keys(f);
  }

  const POINT = 'point';
  // Using mapped type to declare index, ensuring we always have all marks when we add more.
  const MARK_INDEX = {
    area: 1,
    bar: 1,
    line: 1,
    point: 1,
    text: 1,
    tick: 1,
    trail: 1,
    rect: 1,
    geoshape: 1,
    rule: 1,
    circle: 1,
    square: 1
  };
  const PRIMITIVE_MARKS = flagKeys(MARK_INDEX);
  const PRIMITIVE_MARK_INDEX = toSet(PRIMITIVE_MARKS);

  /**
   * This function used to translate the LayerSpec
   * @param layer
   * The layer in ggSpec
   * @param ggSpec
   */
  function TranslateLayer(layer, labels, data, scales) {
    var layerData = data[layer['data']];
    var layerspec = {
      data: {
        name: layer['data']
      },
      mark: TranslateMark(layer['geom']),
      encoding: TranslateEncoding(layer, labels, layerData, scales)
    };
    return layerspec;
  }
  function TranslateMark(geom) {
    var mark;
    if (geom['class'] == 'GeomPoint') {
      mark = POINT;
    } else {
      mark = POINT;
    }
    return mark;
  }

  function gg2vl(ggSpec) {
    var vl = {
      $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
      title: TranslateTitle(ggSpec['labels']),
      datasets: TranslateDatasets(ggSpec['data']),
      layer: TranslateLayers(ggSpec['layers'], ggSpec['labels'], ggSpec['data'], ggSpec['scales'])
    };
    return vl;
  }
  function TranslateTitle(ggLables) {
    if (!ggLables) return undefined;
    if (ggLables['title']) return ggLables['title'];
  }
  function TranslateDatasets(ggData) {
    if (!ggData) return undefined;
    var n = 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (var _dataset in ggData) {
      n++;
    }
    if (n == 0) return undefined;
    else {
      var datasets = {};
      for (var dataset in ggData) {
        datasets[dataset] = ggData[dataset]['observations'];
      }
      return datasets;
    }
  }
  function TranslateLayers(ggLayers, ggLables, ggData, ggScales) {
    var layers = [];
    if (ggLayers != null) {
      for (var _i = 0, ggLayers_1 = ggLayers; _i < ggLayers_1.length; _i++) {
        var layer = ggLayers_1[_i];
        layers.push(TranslateLayer(layer, ggLables, ggData, ggScales));
      }
    }
    return layers;
  }
  /**
   * This function remove empty object in the vlSpec
   * @param obj
   *
   */
  function removeEmpty(obj) {
    if (!(obj != null && typeof obj === 'object')) return;
    Object.keys(obj).forEach(function(key) {
      if (obj[key] && typeof obj[key] === 'object') {
        if (Object.keys(obj[key]).length === 0) {
          delete obj[key];
          return;
        }
        removeEmpty(obj[key]);
        if (Object.keys(obj[key]).length === 0) {
          delete obj[key];
          return;
        }
      } else if (obj[key] === null) {
        delete obj[key];
        return;
      }
    });
  }

  exports.gg2vl = gg2vl;
  exports.removeEmpty = removeEmpty;

  Object.defineProperty(exports, '__esModule', {value: true});
});
//# sourceMappingURL=ggvega.js.map
