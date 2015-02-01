var App = App || {};

App.FlightsView = Backbone.View.extend({
	events: {
		'click #flights_button': 'renderFlights',
		'click #search_flights': 'showSearch',
		'click #back_to_flights': 'reShowFlights',
		'click #submit_f_search': 'submitSearch'
	},

	showSearch: function(){
		$('#search_flights').hide();
		this.$el.html(JST['flights/flight_search']());
	},

	renderCollection: function(data){
		this.$el.find('tbody').html("");

		data.each(function(flight){
			var flightView = new App.FlightView({ model: flight })
			this.$el.find('tbody').append(flightView.render().el);
		}, this);
	},

	render: function(){
		this.$el.html(JST['flights/app']());
		this.renderCollection(this.collection);
		return this;
	},
	reShowFlights: function(){
		$('#container').fadeOut();
		$('#container').html(App.flightsView.render().el).fadeIn();
	},

	renderFlights: function(){
		$('#container').html(App.flightsView.render().el).fadeIn();
	},

	submitSearch: function(){
		var destination, origin, date;
		destination = this.$el.find('#destination').val();
		origin = this.$el.find('#origin').val();
		date = this.$el.find('#date').val();
		console.log("Origin: ", origin, "Destination: ", destination, "Date: ", date);
	}

});