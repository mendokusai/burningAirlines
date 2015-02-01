var App = App || {};

App.FlightsView = Backbone.View.extend({
	events: {
		'click #flights_button': 'renderFlights',
		'click #search_flights': 'showSearch',
		'click #back_to_flights': 'reShowFlights',
		'click #submit_f_search': 'submitSearch',
		'click #add_flights': 'addFlightForm',
		'click #submit_flight': 'addFlight'
		
	},

	defaults: {
		flight_number: "OMG 666",
		date: 2015-02-13
	},

	addFlight: function(){
		var new_origin, new_destination, new_date, flight_number;
		new_origin = this.$el.find('#new_origin').val();
		new_destination = this.$el.find('#new_destination').val();
		new_date = this.$el.find('#new_date').val();
		new_flight = this.$el.find('#flight_number').val();
		this.collection.create({
			flight_number: new_flight,
			origin: new_origin,
			destination: new_destination,
			date: new_date
		});
		$('#add_flight_form').fadeOut();
		this.collection.fetch();
		$('#container').html(App.flightsView.render().el).fadeIn();

	},

	addFlightForm: function(){
		this.$el.html(JST['flights/add_flight']());
	},

	showSearch: function(){
		// $('#search_flights').hide();
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
		// destination = this.$el.find('#destination').val();
		origin = this.$el.find('#origin').val();
		// date = this.$el.find('#date').val();
		if (origin === ""){
			$('#results').html('<h5>Search Results didn\'t match your request. Please Try again!</h5>');
		} else {
			$('#results').html(this.renderCollection(this.collection.filterBySearch(origin)));
		};

	}

});