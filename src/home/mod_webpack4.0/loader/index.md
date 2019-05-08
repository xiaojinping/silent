# loader 加载器的使用

具体使用方法可以去官网看。


## 我在使用css加载器的时候，根据官网的配，css貌似没有效果， 尝试使用use: 'style-loader!css-loader',直接报错

 官方示例代码


```javascript
module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  }
};
```

说明： 我在一个js中引用了css, 结果发现css没起作用，也没报错

webpack 运行结果如下

```html
bundle1.js   1.87 KiB       0  [emitted]  bundle1
bundle2.js  950 bytes       1  [emitted]  bundle2
Entrypoint bundle1 = bundle1.js
Entrypoint bundle2 = bundle2.js
[0] ./src/js/main.js 49 bytes {0} [built]
[1] ./src/css/common.css 249 bytes {0} [built]
[3] ./src/js/main2.js 18 bytes {1} [built]
    + 1 hidden module

```

仔细研究，发现webpack官网在这块写的不够仔细，或者是翻译的时候出现了错误，原因不细究他了。


正确的解读是这样的，

use注册的时候，需要是一个 数组，并且必须使用loader的方式注册 style-loader css-loader， 在3.0版本中，好像并不需要这样，可以通过字符串的方式注册



```js
module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
}
```

如果只有一个加载器也可以不要use这层结构，直接loader

```js
 {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: vueLoaderConfig
  },
```

## 加载器列表

file-loader




