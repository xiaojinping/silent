# 重定向

重定向就是重新指向一个路由，常用于指向一个默认子页面

redirect 指向的是一个完整的路径，如果重定向到一个子路径，比如说需要将一个路由默认指向其第一个子路由，如果该子路由并不是一个根路径，那么其形式应该是 父路径/子路径。


# 别名
别名就是给已有的路由，再起一个名字，就像我们给别人起外号一样。

别名请不要用在path为’/’中，如下代码的别名是不起作用的。

```javascript
{
  path: '/', // 很多项目中，这样是链接到首页，
  component: Home,
  alias: '/home_alias'
}
```



 ≖ /‿\ ≖


以下是我直接从github复制的官方说明文档 .md
---

 ≖ /‿\ ≖ 请自行翻译或者移步官网
 ***


# Redirect und Alias

### Redirect (Umleitung)

Ein Redirect bedeutet, dass, wenn der Nutzer `/a` besucht, die URL mit `/b` ersetzt wird und auch die Komponente der Route zu `/b` rendert. Das kann in der `routes`-Konfiguration folgendermaßen eingestellt werden:


``` js
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: '/b' }
  ]
})
```

Der Redirect kann auch auf eine benannten Route angewandt werden:

``` js
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: { name: 'foo' }}
  ]
})
```

Oder auch mit einer Funktion für dynamische Redirects:

``` js
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: to => {
      // Die Funktion erhält die Ziel-Route als Argument
      // und gibt den Umleitungsort/-pfad hier aus.
    }}
  ]
})
```

Für erweiterte Anwendungsmöglichkeiten siehe auch dieses [Beispiel](https://github.com/vuejs/vue-router/blob/dev/examples/redirect/app.js).

### Alias

Ein Redirect bedeutet: Wenn wir die URL `/a` besuchen, wird die URL mit `/b` ersetzt und dann mit der Route für `/b` gematched. Aber was ist dann ein *Alias*?

Ein Alias von `/a` als `/b` bedeutet, dass die URL `/b` bleibt, wenn diese besucht wird, jedoch die Komponente von `/a` gerendert wird.

Dieses kann man in der Router-Konfiguration folgendermaßen definieren:

``` js
const router = new VueRouter({
  routes: [
    { path: '/a', component: A, alias: '/b' }
  ]
})
```

Ein Alias biete die Möglichkeit, eine bestimmte UI-Struktur einer beliebigen URL zuzuordnen, anstatt von der verschachtelten Struktur der Konfiguration eingeschränkt zu werden.

Für die erweiterte Anwendung siehe folgendes [Beispiel](https://github.com/vuejs/vue-router/blob/dev/examples/route-alias/app.js).

