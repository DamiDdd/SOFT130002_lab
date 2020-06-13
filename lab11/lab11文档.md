# Lab11  
曲俊杰 16307110125

## exercise1

getLoginForm用于获取表单内容

PHP主逻辑部分用于验证登陆状态和设置Cookie（及其失效时长），调整具体情形下的显示内容

validLogin用于验证登录信息和数据库中存储的内容是否匹配

最后部分的login内容设置主框体下应当显示的内容

## exercise2

功能同上

## Cookie v.s. Session

Cookie机制实际上是对话跟踪，一个用户的所有请求操作都应该属于同一个对话，Cookie就是一小段文本信息，是向浏览器颁发的通行证，可以记录一些访问信息、设置有效期，具有不可跨域名性。

Session是通过检查服务器上的客户端状态来确认身份，增加了服务器的储存压力。


1.Cookie数据存放在客户的浏览器上，Session数据放在服务器上.

2.Cookie并不安全，可以被获取分析，有Cookie欺骗的策略（网络爬虫等）

3.设置Cookie时间可以使Cookie过期。但是使用session-destory（），我们将会销毁会话。

4.生命周期不同，Cookie的生命周期是预先设置好的；Session只是取决于关闭IE的关闭时间。
