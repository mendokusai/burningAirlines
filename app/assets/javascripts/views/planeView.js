var App = App || {};

App.PlaneView = Backbone.View.extend({
	tagName: 'tr',
	className: "plane",

	render: function(){
		this.$el.html(JST['planes/appPlanes'](this.model.toJSON()));
		return this;
	}


})