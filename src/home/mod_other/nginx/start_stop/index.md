
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