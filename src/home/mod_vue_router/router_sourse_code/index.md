# 部分源码阅读


### $router.go 方法


从源代码可以看出，history 与 hash 模式，$router.go 实际上就是 window.history.go 方法  abstract模式，没有用过，所以不讨论他。

```javascript
VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};
VueRouter.prototype.back = function back () {
    this.go(-1);
};
VueRouter.prototype.forward = function forward () {
    this.go(1);
};
HashHistory.prototype.go = function go (n) {
    window.history.go(n);
};
HTML5History.prototype.go = function go (n) {
    window.history.go(n);
};
```


###  VueRouter 内部构造

从其内部看。 this.history 是根据 路由模式来的。


```javascript
var VueRouter = function VueRouter (options) {
    if ( options === void 0 ) options = {};
    this.app = null;
    this.apps = [];
    this.options = options;
    this.beforeHooks = [];
    this.resolveHooks = [];
    this.afterHooks = [];
    this.matcher = createMatcher(options.routes || [], this);
    var mode = options.mode || 'hash';
    this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
    if (this.fallback) {
        mode = 'hash';
    }
    if (!inBrowser) {
        mode = 'abstract';
    }
    this.mode = mode;
    // 检测路由模式  正常情况下不会进入 default ; mode 的默认值是 hash
    switch (mode) {
        case 'history':
            this.history = new HTML5History(this, options.base);
            break;
        case 'hash':
            this.history = new HashHistory(this, options.base, this.fallback);
            break
        case 'abstract':
            this.history = new AbstractHistory(this, options.base);
            break;
        default:
            {
                assert(false, ("invalid mode: " + mode));
            }
    }
};
```



