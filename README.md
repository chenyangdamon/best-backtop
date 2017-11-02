# What is best-backtop ?
This is a backtop component that focuses on the PC side of web applications. It's simple, compact, lightweight, efficient, and portable. Helps reduce the amount of development effort.
# Dependence 
- jquery.1.11.x
# Installation

## script
```html
// import jquery.js
<script type="text/javascript" src="js/jquery.js"></script>
// import best-backtop.js
<script type="text/javascript" src="js/best-backtop.js"></script>
```
# Useage
index.js
```html
<script type="text/javascript">
$(function(){
  
  // instantiation backtop
  var backtop=new Backtop(options);
  
  // start
  backtop.start();

});
</script>
```
# Constructor
## Options
|key|description|default|options|
|:---|---|---|---|
| `container`|Container for carrying components.|`""`|`String`|
| `threshold`|Trigger threshold.|`200`|`Number`|
| `speed`|Speed of movement.|`500`|`Number`|
| `mode`|Movement mode.|`run`|`String`|

## methods
#### start()
start the backtop component
```html
backtop.start();
```

