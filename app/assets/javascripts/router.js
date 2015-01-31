var App = App || {};

App.Router = Backbone.Router.extend({
	routes: {
		'' : 'planes'
	},

	planes: function(){
		var planesCollection = new App.Planes();
		planesCollection.fetch().then(function(){
			App.planesView = new App.PlanesView({ collection: planesCollection });
			$("#planes_button").on("click", App.planesView.renderPlanes);
			$('#add_plane').on('click', App.planesView.renderForm);
			$('#submit_plane').on('click', App.planesView.addPlane);
			$('#cancel_form').on('click', App.planesView.cancelForm);
			$('.plane').on('dblclick', App.planesView.showPlane);
		});
	}
})
App.router = new App.Router();