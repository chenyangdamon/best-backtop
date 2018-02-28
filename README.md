# best-backtop 是什么?
应用于web开发的回到顶部组件
# 演示
[Demo](https://chenyangdamon.github.io/best-backtop/dist/)
# 依赖 
- jquery
# 安装
## script
```html
// import jquery.js
<script type="text/javascript" src="js/jquery.js"></script>
// import best-backtop.js
<script type="text/javascript" src="js/best-backtop.js"></script>
```
# 使用
index.js
```html
<script type="text/javascript">
$(function(){
  
  // 实例化Backtop
  var backtop=new Backtop(options);
  
  // 开始运动
  backtop.start();

});
</script>
```
# 结构
## 配置项
|属性|说明|默认值|字段类型|
|:---|---|---|---|
| `container`|触发事件的DOM.|`""`|`String`|
| `threshold`|触发距离.|`200`|`Number`|
| `speed`|滑动速度.|`500`|`Number`|
| `mode`|运动模式.|`run`|`String`|

## 方法
#### start()
开始运动
```html
backtop.start();
```

