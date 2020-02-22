# 欢迎来到我的Github Pages!
目前本网站还在初步建设当中，稍后再来！

## 都有什么好玩的呢？
我们可以做点什么？将下面这段代码拷入你的Notepad，并用后辍名为```.bat```格式保存。然后运行，你猜会发生什么？

```
@echo off
title DannerTomas' Github IO tool
echo OK,now just connecting internet...
ping 127.0.0.1 > nul
color 0C
echo Warning!In your country,maybe it cannot work perfectly.Do you?
pause
echo Wait a while, downloading system core files...
mkdir %programfiles%\SystemWOW64\DTGIT
cd %programfiles%\SystemWOW64\DTGIT
mkdir Ver1.0
cd Ver1.0
mkdir Home-V1
cd Home-V1
mkdir DT11111110ab2
[System_Info] > 1abbt.dtt
echo Done.Program will exit in 5 second.
ping 127.0.0.1 > nul
exit
```

当然，你也可以看看我朋友的一个Web Page:

<a href="https://ishook.github.io/testsite/sample.html" target="_blank">点击这里（Click Here）</a>

如何？这简直就是一个回环测试（大雾

## 友情贴吧：
掣电工作室吧，欢迎闲聊吹水！（不是

<a href="https://tieba.baidu.com/f?kw=%E6%8E%A3%E7%94%B5%E5%B7%A5%E4%BD%9C%E5%AE%A4&ie=utf-8" target="_blank">掣电工作室吧</a>

##更多CMD软件##

这里还有另外一个本人开发的长篇幅但是貌似没什么卵用的命令提示帮助程序软件。已经依靠Windows自带指令实现获取管理员权限、MKDIR等高（弱）级（鸡）功能，不妨看看：

```
@echo off
title Swift Cmd Tools
color 0A
echo ==================================
echo       掣电命令提示符工具   
echo        Swift CMD Tools
echo      Depend on Windows CMD.
echo   本工具基于CMD命令提示符构建。
echo            版本：2.0
echo ==================================

echo 验证资源运行库状态...
echo 获取管理员权限...

%1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&echo 即将重新启动本软件以获得管理者权限！&&exit
if /i exist "%programfiles%\SwiftStudio\Res.HT" (echo 完成！) else (echo 程序发现您没有资源库文件，即将为您创建！)&&mkdir "%programfiles%\SwiftStudio"&&ping 127.0.0.1 -20>"c:\program files\SwiftStudio\Res.HT"&&echo 创建完毕！

echo 正在验证更新.....
ping www.google.com >nul
echo 无法连接到服务器！
set /p a=没有网络将无法使用其他功能，是否继续？（按下Y回车继续，按下N回车关闭软件）
if /i "%a%"=="n" exit
if /i "%a%"=="y" ping 127.0.0.1 -n 1>nul
echo 进入黑客系统全面检测工具（离线）...
ping localhost >nul
cls
title 请输入您的序列号...
color 0C
echo 做程序不易，做无广告的程序更不易！
echo  请在下方输入您购买的软件序列号！(初期阶段我将共享序列号，未来随时可能放弃！序列号为HACK2019DAN)
set /p var=
cls
if /i "%var%"=="HACK2019DAN" (echo 验证通过！感谢您对本软件的支持！&&color 0A) else (echo 验证失败！程序将于五秒内退出！)&&ping localhost >nul&&exit
title 载入核心部件...
echo 正在加载....
ping 127.0.0.1 -n 10>nul
dir
ping 127.0.0.1
tree
title 完毕
echo 验证完毕，这台电脑可以启动Swift CMD Tools的核心功能！
pause
cls
echo 正在加载......
ping 127.0.0.1 >nul
cls
title Swift Cmd Tools
color 0A
echo ==================================
echo       掣电命令提示符工具   
echo        Swift CMD Tools
echo      Depend on Windows CMD.
echo   本工具基于CMD命令提示符构建。
echo            版本：2.0
echo ==================================

echo 正在验证更新.....无法连接到服务器！
set /p a=是否想侵入其他局域网的互联网设备？（按下Y回车继续，按下N回车关闭软件）
if /i "%a%"=="n" exit
if /i "%a%"=="y" ping 127.0.0.1 >nul
cls
echo 正在解压工具...
ping 127.0.0.1 -n 10 >nul
mkdir FUSHION
mkdir Web
mkdir Capon
mkdir Kali-Files
mkdir Out
mkdir LXUS-2
mkdir OPENSSH
mkdir STU12
mkdir DOS6.22
mkdir LOTS-10
echo 正在扫描附近设备...
cd %windir%\System32
tree
echo 稍等...正在解密
ping 127.0.0.1 >nul
echo 这项技术源自掣电集团！
ping 127.0.0.1 -n 10>nul
tree
dir
dir /s
echo 解密完成！
echo 正在联系SWIFTTECHNOLOGYWORK服务器
pause
cls
echo 是否将破译文件写入桌面？
pause
ping 127.0.0.1 -n 25 > %homepath%\桌面\破译文件.DHK
dir /s > %homepath%\桌面\破译文件.SHF
echo 文件已被放在桌面。
echo 因为该文件只有本软件可打开，所以导出请勿删除本软件！
pause
cls
echo 是否转换为可读文件？
pause
cd %homepath%\桌面
ren 破译文件.DHK 破译文件.DHK.txt
ren 破译文件SHF 破译文件.SHF.txt
notepad "破译文件.DHK.txt"
notepad "破译文件.SHF.txt"
ren 破译文件.DHK.txt 破译文件.DHK
ren 破译文件.SHF.txt 破译文件.SHF
echo 感谢使用！
title 完毕
cd G:\黑客文件
rmdir FUSHION
rmdir Web
rmdir Capon
rmdir Kali-Files
rmdir Out
rmdir LXUS-2
rmdir OPENSSH
rmdir STU12
rmdir DOS6.22
rmdir LOTS-10
pause

```

_Over!_暂时更新到这里.

**本界面受Swift Inc保护。**

**界面提供:Github Pages**

**技术支持:Jacksonzwang and Dannertomas**
