// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': ["error", 4, {"SwitchCase": 1}],
        'key-spacing': ["error", {"beforeColon": false, "afterColon": true}],
        'semi':'off',
        "no-extra-bind": 2,//禁止不必要的函数绑定
        "no-extra-semi": 2,//禁止多余的冒号
        "no-invalid-this": 2,//禁止无效的this，只能用在构造器，类，对象字面量
        "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数
        "eqeqeq": 2,//必须使用全等
        "one-var": 1,//连续声明
    }
}
