var App = App || {};

App.PlaneView = Backbone.View.extend({
	tagName: 'li',
	className: "plane",

	render: function(){
		this.$el.html(JST['planes/appPlanes'](this.model.toJSON()));
		return this;
	}


})