### 下载mongodb
去到mongodb的官网下载对应版本

### 开始安装
下载好之后，直接安装。
安装过程中，有可能长时间卡住不动，自行百度。
安装完成后，需要在安装目录的要目录建立一个data/db的目录。
```script
mkdir data
cd data
mkdir db
```

### 设置环境变量
找到安装目录，复制下来，
计算机右击 -> 属性 -> 高级系统设置 -> 将用户变量的 PATH 值改为复制的路径（mongodb的路径）;
如果不设置环境变量，那么，每次调试的时候，就必须去到这个安装目录下执行命令。比较麻烦。


### 启动 mongodb

建议阅读 http://www.runoob.com/mongodb/mongodb-connections.html

我这里简单介绍下。

方式1：
运行cmd
```script
mongod 连接服务
```

方式2：
如何连接远程数据库:
```
mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
```
例1：

```script
mongodb://admin:123456@localhost/ // 解读 ： username === admin , password === 123456, host === localhost, 端口默认
```

例2：
```script
mongodb://localhost // 解读，所有的都是默认。
```

### 查看数据库
成功开启服务后，再打开一个cmd
```
show dbs // 查看数据库 默认可能会有2-3个数据库，admin local config
```