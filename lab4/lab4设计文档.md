LAB 4 设计文档
==========

主页截图如下：

![image text](https://raw.githubusercontent.com/DamiDdd/SOFT130002_lab/master/lab4/res_img/1.png)

本次lab要求我们在pj1的基础上增加一个主页图片轮播的功能。可以滑动查看（默认自动滚播）三张网页头图。

根据bootstrap的文档，他提供了名为carousel的轮播的组件。通过carousel-indicatorsz设定轮播顺序，通过carousel-innerh设定好轮播图片内容（样式可调），通过carousel-controlr调出控制组件（左右箭头）。关于框体的设定存放在carousel中，如自动轮播时间间隔，div位置等。

![image text](https://raw.githubusercontent.com/DamiDdd/SOFT130002_lab/master/lab4/res_img/code.png)

将上述代码完成替换后，预先的静态网页头图被更换为动态的轮播组件。

页面的其他部分，包括隐藏的页脚、回到顶部按钮、下拉菜单导航栏等功能均按照原先设计完成。

在实现过程中，发现原先名为nav的divg功能实现异常，原来是手写的css和bootstrap中css样式冲突，补充了一些没有设定的属性后恢复正常。
