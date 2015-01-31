var App = App || {};

App.FlightsView = Backbone.View.extend({
	events: {
		'click #flights_button': 'renderFlights'
	},

	renderCollection: function(data){
		this.$el.find('ul').html("");

		data.each(function(flight){
			var flightView = new App.FlightView({ model: flight })
			this.$el.find('ul').append(flightView.render().el);
		}, this);
	},

	render: function(){
		this.$el.html(JST['flights/app']());
		this.renderCollection(this.collection);
		return this;
	},

	renderFlights: function(event){
		event.preventDefault();
		$('#container').html(App.flightsView.render().el).fadeIn();
	}

});