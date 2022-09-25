/* 
git 第一天
代码托管

版本控制软件:用来记录文件的变化(新增文件、修改文件、删除文件等等操作；用于团队协作)

分类： 本地 - 集中化 - 分布式 (比较主流 代表性的工具)

集中化 - SVN 缺点 依赖网络(只记录变化的部分，可以节省磁盘空间)
分布式 - Git 优点 在没有网络的状况下也可以本地提交(不仅仅是记录变化的部分，把原来的也拷贝了一份 相对来说比较消耗磁盘空间)


特点 git 所有的操作近乎都是在本地运行的(速度会很快)

三个区域： (工作区：就是现在处理的地方)  暂存区(刚刚已经把某个功能已经完善了) 仓库(将所有的更改全部放到总仓库里面保存 store)

三个状态 已修改状态 modified  已暂存状态 staged  已提交状态 committed

流程 对文件进行修改 -> 需要进行暂存 ->  总的提交 (本地提交 提交到仓库)

git --version 输出为版本号 即为成功

git bash  windows + R  shift + 鼠标右键->prowershell

// 配置用户和邮箱

git config --global user.name "你的姓名和用户"
git config --global user.email "你的邮箱"

git config useer.name
git config useer.eamil

C:user\用户\.gitconfig

cd 要进入的文件夹路径
ls 列出当前路径下面的所有的文件和文件夹 

查看全局所有配置项 : git cofig --list --global

获取帮助信息 git config -h

cls clear清除

git 仓库 的获取方式
   1： 可以将本地的某个文件夹转换层git仓库
   2： 可以直接从远程服务器克隆(拷贝)一份下来   
  
   
新建的工程名称不要是中文 名称中间不要有空格等特殊字符

文件所处的状态
   1 未被跟踪  untracked(当前文件还没有被 git所管理)
   2 未修改 unmodified 
   3 已修改 modified
   4 已暂存 staged



   git status 查看文件状态   git status -s

   跟踪新文件 git add 你要跟踪的文件的名称(可以用 tab 键 快速 补齐路径)
  提交更新文件git commit -m "此次提交的记录信息"(-m后面的提交信息不能丢)
  对已经添加到暂存区的文件 又进行了修改 再次查看文件状态 依然属于已修改状态 需要再次添加到暂存区-> git add 文件名称


  git add 命令的作用  (git add . 添加了所有文件)
  1 将未被跟踪的文件 添加到暂存区
  2 将已经处于跟踪的文件又做了修改的情况下 再次添加到暂存区
  3 将冲突的文件解决完之后  需要再次将文件状态表示为已解决 添加到暂存区
  git push -u orgin master 第一次提交才需要
  后续提交 git push 即可
  
  

   
*/