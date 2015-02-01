var App = App || {};

App.Router = Backbone.Router.extend({
	routes: {
		'flights' : 'flights',
		'airplanes' : 'planes',
	},

	openPage: function(url) {
    this.navigate(url, { trigger: true });
  },

	planes: function(){
		 App.router.navigate("/airplanes", { trigger: true });
		var planesCollection = new App.Planes();
		planesCollection.fetch().then(function(){
			App.planesView = new App.PlanesView({ collection: planesCollection });
			$("#planes_button").on("click", App.planesView.renderPlanes);
			$('#add_plane').on('click', App.planesView.renderForm);
			$('#submit_plane').on('click', App.planesView.addPlane);
			$('#cancel_form').on('click', App.planesView.cancelForm);
			$('.plane').on('dblclick', App.planesView.showPlane);
		});
	},
	flights: function(){
		App.router.navigate("/flights", { trigger: true });
		var flightsCollection = new App.Flights();
		flightsCollection.fetch().then(function(){
			App.flightsView = new App.FlightsView({ collection: flightsCollection });
			$("#flights_button").on("click", App.flightsView.renderFlights);
			$('.flight').on('dblclick', App.flightsView.showFlight);
			$('#back_to_flights').on('click', App.flightsView.reShowFlights);
		});
	}
})
App.router = new App.Router();

$('a').on('click', function(event){
	event.preventDefault();
	var href = $(this).attr('href');
  App.router.openPage(href);
});