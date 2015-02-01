var App = App || {};

App.Flights = Backbone.Collection.extend({
	url: '/flights',
	model: App.Flight,

	filterBySearch: function(origin){
		var matchedFlights = this.filter(function(flight){
			return flight.attributes.origin.indexOf(origin) !== -1;
		});
		return new App.Flights(matchedFlights);
	}


});