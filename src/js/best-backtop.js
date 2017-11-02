/*!
 * JavaScript Components best-loading
 * @author : chenyangdamon
 * @email  : 645230634@qq.com
 * @github : https://github.com/chenyangdamon
 * @Date   : 2017-02-28 22:08:02
 */
;
(function(root, factory) {
	if (typeof define === "function" && define.amd) {
		// AMD模式
		define(["jquery"], function() {
			factory.apply(root, arguments)
		});
	} else {
		// 全局模式
		factory.call(root, root.$);
	}
})(window, function($) {

	/**
	 * [Backtop description]
	 */
	var Backtop = function() {
		/**
		 * 默认配置项
		 * @type {{scrollTop: number, speed: number, mode: string}}
		 */
		this.defaultOption = {
			container: "",
			threshold: 200,
			speed: 500,
			mode: "run"
		};
		this.init.apply(this, arguments);
	};

	/**
	 * [prototype description]
	 * @type {Object}
	 */
	Backtop.prototype = {
		/**
		 * [constructor description]
		 * @type {String}
		 */
		constructor: "Backtop",
		/**
		 * 初始化
		 * @param userOption
		 */
		init: function(userOption) {
			var _this = this;
			_this.option = $.extend({}, _this.defaultOption, userOption);
			_this.onLoad();
			_this.bindEvent();
		},
		/**
		 * 预加载
		 * [onLoad description]
		 * @return {[type]} [description]
		 */
		onLoad: function() {
			var _this = this;
			_this.$el = $("html,body");
			_this.$element = $(_this.option.container);
		},
		/**
		 * 注册事件
		 * [bindEvent description]
		 * @return {[type]} [description]
		 */
		bindEvent: function() {
			var _this = this;
			$(window).on("scroll", function() {
				console.log(_this.$element)
				var scrollTop = $(this).scrollTop();
				if (scrollTop > _this.option.threshold) {
					_this.$element.fadeIn();
				} else {
					_this.$element.fadeOut();
				}
			});
			_this.$element.on("click", $.proxy(_this.start, _this, _this.option.mode));
		},

		/**
		 * [start description]
		 * @param  {[type]} mode [description]
		 * @return {[type]}       [description]
		 */
		start: function(mode) {
			var _this = this;
			_this[mode || _this.option.mode]();
		},

		/**
		 * 一次性回到顶部
		 * [run description]
		 * @return {[type]} [description]
		 */
		run: function() {
			var _this = this;
			_this.$el.scrollTop(0);
		},

		/**
		 * 滑动上去
		 * [scroll description]
		 * @return {[type]} [description]
		 */
		scroll: function() {
			var _this = this;
			if ($(window).scrollTop() && !_this.$el.is(":animated")) {
				_this.$el.stop(true).animate({
					scrollTop: 0
				}, _this.option.speed);
			}
		}
	};
	/**
	 * [Backtop description]
	 * @type {[type]}
	 */
	this.Backtop = Backtop;
});