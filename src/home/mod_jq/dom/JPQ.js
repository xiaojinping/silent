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
        return new jQuery.fn.init(selector, context, rootjQuery);
    };

    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,
        length: 0,
        ready: function (fn) {
            document.addEventListener("DOMContentLoaded", jQuery.ready );
            console.log( document.addEventListener)
            if( jQuery.isReady ) {
                fn.call( document, jQuery );
            }else{
                jQuery.readyList.push(fn);
            }
        }
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
        // 检测是不是一个普通的对象
        isPlainObject: function (obj) {
            return toString.call(obj) === '[object Object]';
        },

        isFunction (obj) {
            return typeof obj === 'function';
        },

        // results is for internal usage only
        /**
         * 如果arr存在，并且arr存在length属性，则执行第一个
         */
        markArray: function (arr, result) {
            var ret = result || [];
            // jQ里面，这里用的是一个iaArrayLike的方法来判断，其实他就是判断了一下他是不是一个数组，有没有长度。
            if (arr && arr.length) {
                return jQuery.merge(ret, arr)
            }else {
                push.call( ret, arr );
            }
            return ret;
        },

        /**
         * 数组合并，
         * 例1： arg1 = [1,2,3], arg2 = [4,5,6];
         * 例2： arg1 = [1,2,3], arg2 = ["0": 4, '1': 5];
         *
         */
        merge: function (arg1, arg2) {
            var i = arg1.length;

            // 防止他是一个字符串。
            var l = +arg2.length;
            var j = 0;
            for (; j<l; j++) {
                arg1[i++] = arg2[j];
            }
            return arg1
        },
        /**
         * jQuery里面，这里很复杂，这里面的代码，牵扯很多，为了防止回流，document.createDocumentFragment
         * 我这里重点不是为了说明parseHTML,简单的写了下，一笔而过
         */
        parseHTML: function( data, context ){
            if( !data || typeof data !== "string" ) {
                return null;
            }
            var elem = context.createElement('div');
            elem.innerHTML = data;
            return elem.childNodes;   //createElement(<div>)
        },
        /**
         * @param ｛object,array｝ obj  目标源
         * @param {function} callback 回调，
         * @param {array} args 自定义回调函数参数。
         */
        each: function (obj, callback, args) {
            var length = this.isPlainObject(obj);
            var i = 0;
            var key, value;

            if (args && args.length) {
                key = args[0];
                value = args[1];
            }
            if (length !== undefined) {
                for (i in obj) {
                    callback.call( obj[ i ], key || i, value || obj[ i ] );
                }
            }else  {
                for (;i < length; i++) {
                    callback.call( obj[ i ], key || i, value || obj[ i ] )
                }
            }

        }
    });
    jQuery.extend({
        /**
         * 需要检测dom是否加载完毕
         * @param selector
         */
        isReady: false,
        readyList: [],
        ready: function () {
            console.log('extend ready1')
            jQuery.isReady = true;
            //jQuery.each(readyList);
            jQuery.each( jQuery.readyList, function( i, fn ){
                this.call( document );
            });

            jQuery.readyList = null;
        }


    });


    /**
     * jQuery.fn.init的实现  Initialize a jQuery object
     *
     */

    // A central reference to the root jQuery(document)
    var rootjQuery,

        // A simple way to check for HTML strings
        // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
        // Strict HTML recognition (#11290: must start with <)
        // Shortcut simple #id case for speed
        /**
         * ?: 表示匹配但是不捕获，
         * 比较(X)和(?:X)，前者是捕获分组，后者不捕获，区别在于正则表达式匹配输入字符串之后所获得的匹配的（数）组当中没有(?:X)匹配的部分；
         * ?:\s 结果中不会出现空白字符
         * 例如：
         * str = '  <div>你好</div>'
         * 通过exec匹配的时候， 第一项为匹配的文本，即这个字符串本身(str)，第二个则是去掉空白符的字符串了。
         * <[\w\W]+>)[^>]* 表示第一个字符是‘<’，后面可以是任意字符，‘>’这个字符后面不能再跟任意 ‘>’
         * 整个正则的意思就是要么是一个html的模板，要么是一个单独的id选择器（不包含空格）
         */
        rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;

    var init;

    init = jQuery.fn.init = function (selector, context, root) {
        var match, elem;

        // 如果没有传递选择器，则返回 this, 即jQuery的实例对象。例如： $(""), $(null), $(undefined), $(false)
        if (!selector) {
            return this;
        }

        // Method init() accepts an alternate rootjQuery
        // so migrate can support jQuery.sub (gh-2101)
        // 大意为如果有根节点则取根节点，没有传根节点，则取最顶端的rootJQuery(undefined)
        root = root || rootjQuery;


        /**
         * 如果是一个html模板，则将这个模板放到一个match数组中，
         * 否则就表示传入的是一个选择器（id,class,tag);通过exec，生成一个match的数组。
         */
        if (typeof selector === 'string') {
            if (selector[0] === '<' &&
                selector[selector.lenght - 1] === '>' &&
                selector.length >= 3) {
                // 这里主要是将一个html放到了一个数组里，为什么要这么设置，前后两个null表示什么意思 。
                match = [null, selector, null];
            }else {
                // exec	检索字符串中指定的值。返回找到的值，并确定其位置。

                match = rquickExpr.exec(selector);
            }
        } else if ( selector.nodeType) {
            this.context = this[0] = selector;
            this.length = 1;
            return this;
        } else if (jQuery.isFunction(selector)) {
            console.log(root.ready);
            root.ready(selector);
        }

        if ( match && (match[1] || !context) ) {
            if (match[1]) {
                // 这里实际上就是将创建的html，转换成数组，存储下来。
                elem = jQuery.parseHTML(selector, context && content.nodeType ? content : document);
                elem = jQuery.merge(this, elem);
                return this;
            }else {
                // 这里值得注意的是；如果是话。需要将查询到的结果交给jquery, 但是jquery是一个jq对象，所以需要在原型上面给他一个length属性。
                elem = document.getElementById(match[2]);  //box
                if( elem, elem.nodeType ) {
                    this.length = 1;
                    this[0] = elem;
                }
                elem.context = document;
                elem.selector = selector;
                return this;
            }
        }
    }
    init.prototype = jQuery.fn;
    rootjQuery = jQuery( document );
    if ( !noGlobal ) {
        window.jQuery = window.$ = jQuery;
    }
    return jQuery;
});
;
