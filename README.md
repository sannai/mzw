<h1>模仿卖座网</h1>
<p>
    为什么要模仿卖座网？ 在买电影票时无意中发现这应用，看见结构比较清晰就动手写了，顺便加强react熟练度
</p>
<h1>技术栈</h1>
<p>react+redux+react-router+webpack</p>
<h1>项目运行</h1>
<p>git clone https://github.com/sannai/mzw.git</p>
<p>cd film</p>
<p>npm install</p>

<h1>功能</h1>
<ul>
    <li>实时获取地址</li>
    <li>轮播图</li>
    <li>左侧菜单，正常切换</li>
    <li>redux完整示范</li>
    <li>通过proxy代理返回接口数据</li>
    <li>flex自适应</li>
    <li>数据懒加载</li>
    <li>详情介绍</li>
    <li>css-modules</li>
</ul>
<h1>总结</h1>
<p>这项目遇到比较特别的问题，就是使用百度地图api。</p>
<p>BMap一直获取不到</p>
<p> 解决办法有2： </p>
<p> 1.给BMap绑定到window 2.通过webpack输出对象中的externals属性实现require的访问</p>
<p>详情看http://www.cnblogs.com/softidea/p/6946779.html </p>
