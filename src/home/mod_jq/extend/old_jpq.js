
/*eslint-disable*/
(function(root)  {
    console.log(root)
    let jQuery = function (selector, context) {
        return new jQuery.fn.init(selector, context);
    };

    jQuery.fn = jQuery.prototype = {
        init () {
        }
    };



    /**
     * 给任意普通对象扩展
     * 给实例对象扩展
     * */
    jQuery.extend = jQuery.fn.extend = function()  {

        let target = arguments[0] || {};
        let len = arguments.length;
        let option;
        let deep;
        // 这里的i 为什么是1， 因为我们期望用户传递的第一个参数是一个target, 我们要操作的对象是target之后的参数，所以下标是从1开始。
        let i = 1;

        if (typeof target === 'boolean') {
            deep = target;
            target = arguments[i] || {};
            i++;
        }

        if (typeof target !== 'object' && !isFunction(target)) {
            target = {};
        }
        // 如果参数长度等于默认长度，表示他是给实例对象扩展。目标对象就是this,那么为什么要i--, 如果是给原型对象扩展，那么我们需要从下标0开始遍历。
        if (i === len) {
            target = this;
            i--;
        }
        for (; i< len; i++) {
            if ((option = arguments[i]) !== null) {
                for (name in option) {
                    let src = target[name];
                    let copy = option[name];
                    let copyIsArray;
                    let clone;
                    if ( target === copy ) {
                        continue;
                    }
                    /**
                     * 如果是深拷贝，
                     * 拷贝的数据应该是一个引用类型，object, array, target[name]同样应该是一个引用类型。
                     * 如果target[name] 不是一个引用类型，是应该断开他的引用指针，重新赋值一个引用类型 [] || {}
                     */
                    if (deep
                        && copy
                        && ( jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                        if (copyIsArray) {
                            // 进入条件后，需要将他重置为false，
                            copyIsArray = false;
                            clone = src && Array.isArray( src ) ? src : [];
                        } else {
                            clone = src && jQuery.isPlainObject( src ) ? src : {};
                        }
                        target[name] = jQuery.extend(deep, clone, copy)
                    } else {
                        target[name] = option[name];
                    }
                }
            }
        }
        return target;
    };

    jQuery.extend({
        // 是否是一个普通的对象
        isPlainObject:function (obj) {
            return toString.call(obj) ===  '[object Object]';
            // obj为false 或者 obj不是一个包装对象
            // if (!obj || toString.call(obj) !==  '[object Object]') {
            //     return false;
            // }
            // let proto, Ctor;
            // // 获取obj的原型对象
            // proto = Object.getPrototypeOf(obj);
            // // 这里主要防止null,所以
            // if (!proto) {
            //     return true;
            // }
            // //
            // Ctor = {}.hasOwnProperty.call( proto, "constructor" ) && proto.constructor;
            // return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
        }

    })
    jQuery.prototype.init.prototype = jQuery.prototype;
    root.$ = root.jQuery  = jQuery;

})(window);