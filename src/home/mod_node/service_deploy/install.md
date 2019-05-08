### 在服务器上安装node

本地环境上，我们可以下载node安装，但是如果要把node部署在服务器上，原理上类似，不过，方法有所不同。

#### 一：使用二进制文件安装
1.1 ssh 远程登录 ,执行下命的命令
```script
wget https://nodejs.org/dist/v6.9.5/node-v6.9.5-linux-x64.tar.xz
```
通过上术命令，安装的是6.9.5版本的node,建议安装高级版本，因为更高级的版本对es6有更好的支持。例如:

```script
wget https://nodejs.org/dist/v11.10.1/node-v11.10.1-linux-x64.tar.xz
```

1.2 解压文件

```script
tar xvf node-v11.10.1-linux-x64.tar.xz
```

1.3 创建软连接, 将版本号改成对应版本

```script
ln -s /root/node-v6.9.5-linux-x64/bin/node /usr/local/bin/node
ln -s /root/node-v6.9.5-linux-x64/bin/npm /usr/local/bin/npm
```

1.4 查看node版本

```
node -v
npm -v
```

<br />

#### 二：使用nvm安装

直接使用git将源码克隆到本地的~/.nvm目录下，并检查最新版本。
```script
yum install git
git clone https://github.com/cnpm/nvm.git ~/.nvm && cd ~/.nvm && git checkout `git describe --abbrev=0 --tags`
```

激活NVM。
```script
echo ". ~/.nvm/nvm.sh" >> /etc/profile
source /etc/profile
```

列出Node.js的所有版本
```script
nvm list-remote
```

安装多个Node.js版本。可以选择安装多个，也可以只安装一个
```script
nvm install v6.9.5
nvm install v11.10.1
```

运行 nvm ls 查看已安装Node.js版本
```script
nvm ls
```

运行结果如下：
```script

->       system
stable -> 11.10 (-> v11.10.1) (default)

```
运行 nvm use 版本号 切换Node.js版本至所需要的版本。提前是已经安装了这个版本。
```
nvm use v11.10.1
```

<br />

#### 三：使用apt-get安装

```script
sudo apt-get update // 更新apt-get
sudo apt-get install nodejs // 安装 node

```



