/*
 * @Author: chenyang_pc
 * @Date:   2017-10-28 22:08:02
 * @Last Modified by:   chenyang_pc
 * @Last Modified time: 2017-11-02 14:56:46
 */

$(function() {

	console.log(Backtop)

	// 实例化Backtop组件
	var backtop1 = new Backtop({
		container:".b1",
		mode:"run"
	});
	// 实例化Backtop组件
	var backtop2 = new Backtop({
		container:".b2",
		mode:"scroll"
	});

	$(".b1").click(function() {
		backtop1.start();
	});

	$(".b2").click(function() {
		backtop2.start();
	});

});