

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

