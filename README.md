


让 Hexo 在生成完毕后自动部署网站，两个命令的作用是相同的。

$ hexo generate --deploy
$ hexo deploy --generate

上面两个命令可以简写为
$ hexo g -d
$ hexo d -g


上传配置
  repository: ssh://git@github.com/jungang/jungang.github.io.git