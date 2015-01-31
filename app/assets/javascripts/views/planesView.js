var App = App || {};

App.PlanesView = Backbone.View.extend({
	events: {
		'click #planes_button': 'renderPlanes',
		'click #add_plane': 'renderForm',
		'click #submit_plane': 'addPlane',
		'click #cancel_form': 'cancelForm',
		'dblclick .plane': 'showPlane'
	},

	showPlane: function(){
		console.log(this.$el.find('.p_name').html());
		$('#flight_list').fadeOut(200);
		this.$el.html(JST['planes/plane_form']());
	},

	cancelForm: function(event){
		event.preventDefault();
		this.$el.find('form').fadeOut();
		$('#flight_list').fadeIn();

	},

	addPlane: function(event){
		event.preventDefault();
		this.collection.create({
			columns: this.$el.find('input.columns').val(),
			name: this.$el.find('.name').val(),
			rows: this.$el.find('.rows').val(),
			
		});
		this.$el.find('form').fadeOut();
		this.render();
		$('#flight_list').fadeIn();
	},

	renderForm: function(){
		$('#flight_list').fadeOut(200);
		$('#flight_form').fadeIn().html(JST['planes/plane_form']());
	},

	renderPlanes: function(event){
		event.preventDefault();
		$("#container").html(App.planesView.render().el).fadeIn();
		
	},

	renderCollection: function(data){
		this.$el.find('tbody').html("");

		data.each(function(plane){
			var planeView = new App.PlaneView({ model: plane })
			this.$el.find('tbody').append(planeView.render().el);
		}, this);
	},

	render: function(){
		this.$el.html(JST['planes/app']());
		this.renderCollection(this.collection);
		return this;
	}  
});