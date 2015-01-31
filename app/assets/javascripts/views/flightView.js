var App = App || {};

App.FlightView = Backbone.View.extend({
	tagName: 'li',
	className: 'flight',

	render: function(){
		this.$el.html(JST['flights/appFlights'](this.model.toJSON()));
		return this;
	}

});