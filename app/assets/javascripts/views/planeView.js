var App = App || {};

App.PlaneView = Backbone.View.extend({
	tagName: 'li',

	render: function(){
		this.$el.html(JST['appPlanes'](this.model.toJSON()));
		return this;
	}

	
})