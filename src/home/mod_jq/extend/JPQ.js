/*eslint-disable*/
;
(function (global, factory) {

    if (typeof module === 'object' && typeof module.exports === 'object' ) {
        module.exports = global.document ?
            factory(global, true) :
            function( w ) {
                if ( !w.document ) {
                    throw new Error( "jQuery requires a window with a document" );
                }
                return factory( w );
            };
    }else {
        factory(global);
    }
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

    var jQuery = function (selector, context) {
        return new jQuery.fn.init(selector, context);
    };

    jQuery.fn = jQuery.prototype = {
    }

    // extend的实现
    jQuery.extend = jQuery.fn.extend = function () {
        var target = arguments[0] || {};
        var len = arguments.length;
        var i = 1;
        var deep, // 是否深拷贝
            clone, // 深拷贝的数据项target[name];
            src, // 需要拷贝的对象的某个值
            option, // 被拷贝的对象
            copy, // 被拷贝的对象的某个值。
            copyIsArray; //被拷贝的对象的具体某个值是不是数组；
        if (typeof target === 'boolean') {
            deep = target;
            target = arguments[i++] || {};
        }
        // 假如目录对象不是一个普通的对象，并且也不是一个函数。
        if (typeof target !== 'object' && !isFunction(target) ) {
            target = {};
        }
        if (i === len) {
            target = this;
            i--;
        }
        for (; i< len; i++) {
            if ( (option = arguments[i]) !== null ) {
                for (name in option) {
                    src = target[name];
                    copy = option[name];
                    if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy))) ) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = Array.isArray(src) ? src : [];
                        } else {
                            clone = jQuery.isPlainObject(src) ? src : {};
                        }
                        target[name] = jQuery.extend(deep, clone, copy)

                    } else if (copy !== undefined ) {
                        target[name] = copy;
                    }

                }

            }
        }
        return target;
    };
    jQuery.extend({
        isPlainObject: function (obj) {
            return toString.call(obj) === '[object Object]';
        }
    });
    var init;
    init = jQuery.fn.init = function (selector, context, root) {

    }
    init.prototype = jQuery.fn;
    if ( !noGlobal ) {
        window.jQuery = window.$ = jQuery;
    }
    return jQuery;
});
;
