var App = App || {};

App.FlightView = Backbone.View.extend({
	tagName: 'tr',
	className: 'flight',

	events: {
		'dblclick .flight': 'showFlight'
	},

	showFlight: function(){
		console.log(this.model.toJSON());
	},

	render: function(){
		this.$el.html(JST['flights/appFlights'](this.model.toJSON()));
		return this;
	}

});