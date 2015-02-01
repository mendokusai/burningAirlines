var App = App || {};

App.PlaneView = Backbone.View.extend({
	tagName: 'tr',
	className: "plane",

	events: {
		'dblclick .plane': 'viewPlane'
	},

	viewPlane: function(){
		console.log(this.$el.find('.p_name').val());
		console.log("I'm on a plane");
	},

	render: function(){
		this.$el.html(JST['planes/appPlanes'](this.model.toJSON()));
		return this;
	}


})