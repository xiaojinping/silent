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



方式1：
运行cmd
```script
mongod  启动服务
```


### 连接数据库
成功开启服务后，再打开一个cmd
```
mongo // 连接服务
show dbs // 查看数据库 默认可能会有2-3个数据库，admin local config
db.version() // 查看版本号
```
