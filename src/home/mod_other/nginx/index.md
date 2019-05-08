# nginx 部署

<br />

## 安装nginx的前置准备


准备一个服务器，推荐选择阿里云ECS



```html
yum -y install gcc gcc-c++ autoconf pcre-devel make automake
yum -y install wget httpd-tools vim
```

yum -y install gcc gcc-c++ autoconf pcre pcre-devel make automake

yum -y install wget httpd-tools vim

1.就把gcc当成c语言编译器, g++当成c++语言编译器用就是了.(知乎)

2.wget是一个从网络上自动下载文件的自由工具, 可以在用户退出系统的之后在后台继续执行, 直到下载任务完成.(百度百科)

<br />

## 安装 nginx

查看一下yum是否已经存在, 有哪些版本。
```html
yum list | grep nginx
```

结果如下:
```script
[root@jp1024 ~]# yum list | grep nginx
nginx.x86_64                            1:1.14.2-1.el7_4.ngx           @nginx
collectd-nginx.x86_64                   5.8.1-1.el7                    epel
munin-nginx.noarch                      2.0.45-1.el7                   epel
nextcloud-nginx.noarch                  10.0.4-2.el7                   epel
nginx-all-modules.noarch                1:1.12.2-2.el7                 epel
nginx-debug.x86_64                      1:1.8.0-1.el7.ngx              nginx
nginx-debuginfo.x86_64                  1:1.14.2-1.el7_4.ngx           nginx
nginx-filesystem.noarch                 1:1.12.2-2.el7                 epel
nginx-mod-http-geoip.x86_64             1:1.12.2-2.el7                 epel
nginx-mod-http-image-filter.x86_64      1:1.12.2-2.el7                 epel
nginx-mod-http-perl.x86_64              1:1.12.2-2.el7                 epel
nginx-mod-http-xslt-filter.x86_64       1:1.12.2-2.el7                 epel
nginx-mod-mail.x86_64                   1:1.12.2-2.el7                 epel
nginx-mod-stream.x86_64                 1:1.12.2-2.el7                 epel
owncloud-nginx.noarch                   9.1.5-1.el7                    epel
pcp-pmda-nginx.x86_64                   4.1.0-5.el7_6                  updates
python2-certbot-nginx.noarch            0.30.2-1.el7                   epel

```

从运行上可以看到，版本号只支持到1.12， 但是在官网上有更高的版本，我想使用更高版本，如何处理。

运行以下代码，可以创建一个nginx.repo的文件，并且可以在控制台进行编辑
```script
vim /etc/yum.repos.d/nginx.repo
```

编辑内容如下：

```script
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/OS/OSRELEASE/$basearch/

######   baseurl 需要根据服务器操作系统和版本号来写。
######   需要修改一下对应的操作系统和版本号，因为我的是centos和7的版本，所以改为这样。
######    baseurl=http://nginx.org/packages/centos/7/$basearch/

gpgcheck=0
enabled=1
```


开始安装

```script
yum install nginx
```

检测版本号

```script
nginx -v
```


## 在服务器上开启 http 80 端口。

以阿里云为例说明，在阿里云控制台上 安全组里开启 端口。过程不过多述说。

<br />

## nginx 文件解读

<br />

### 查看Nginx的安装目录

在使用yum安装完Nginx后，需要知道系统中多了那些文件，它们都安装到了那里。可以使用下面的命令进行查看：

```html
rpm -ql nginx
```

rpm 是linux的rpm包管理工具，-q 代表询问模式，-l 代表返回列表，这样我们就可以找到nginx的所有安装位置了。

<br />

### nginx.conf文件解读

nginx.conf 文件是Nginx总配置文件，在我们搭建服务器时经常调整的文件。

进入etc/nginx目录下，然后用vim进行打开

```html
cd /etc/nginx
vim nginx.conf
```

下面是文件的详细注释，我几乎把每一句都进行了注释，你可以根据你的需要来进行配置。

```script
#运行用户，默认即是nginx，可以不进行设置
user  nginx;
#Nginx进程，一般设置为和CPU核数一样
worker_processes  1;
#错误日志存放目录
error_log  /var/log/nginx/error.log warn;
#进程pid存放位置
pid        /var/run/nginx.pid;
events {
    worker_connections  1024; # 单个后台进程的最大并发数
}
http {
    include       /etc/nginx/mime.types;   #文件扩展名与类型映射表
    default_type  application/octet-stream;  #默认文件类型
    #设置日志模式
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
    access_log  /var/log/nginx/access.log  main;   #nginx访问日志存放位置
    sendfile        on;   #开启高效传输模式
    #tcp_nopush     on;    #减少网络报文段的数量
    keepalive_timeout  65;  #保持连接的时间，也叫超时时间
    #gzip  on;  #开启gzip压缩
    include /etc/nginx/conf.d/*.conf; #包含的子配置项位置和文件
```

default.conf 配置项讲解 我们看到最后有一个子文件的配置项，那我们打开这个include子文件配置项看一下里边都有些什么内容。

进入conf.d目录，然后使用vim default.conf进行查看。


```script
server {
    listen       80;   #配置监听端口
    server_name  localhost;  //配置域名
    #charset koi8-r;
    #access_log  /var/log/nginx/host.access.log  main;
    location / {
        root   /usr/share/nginx/html;     #服务默认启动目录
        index  index.html index.htm;    #默认访问文件
    }
    #error_page  404              /404.html;   # 配置404页面
    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;   #错误状态码的显示页面，配置后需要重启
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}
    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}
    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}
```

<br />

## nginx 启动与停止, 查询

<br />

### 查询nginx服务的运行状况

```script
ps aux | grep ngin
```

<br />

### 启动nginx服务
1: nginx直接启动 低于7.4版本不能用这种方法
```script
nginx
```

2：使用systemctl命令启动

```script
systemctl start nginx.service
```

<br />

### 停止nginx服务

1 立即停止 这种方法比较强硬，无论进程是否在工作，都直接停止进程。
```script
nginx -s stop
```
2 从容停止服务 这种方法较stop相比就比较温和一些了，需要进程完成当前工作后再停止
```script
nginx -s quit
```

3 systemctl 停止
```script
systemctl stop nginx.service
```

4 killall 杀死进程 这种方法也是比较野蛮的，我们直接杀死进程，但是在上面使用没有效果时，我们用这种方法还是比较好的。
```script
killall nginx
```

<br />

###  重启Nginx服务

```script
systemctl restart nginx.service
```

<br />

### 重新载入配置文件

在重新编写或者修改Nginx的配置文件后，都需要作一下重新载入，这时候可以用Nginx给的命令

```script
nginx -s reload
```