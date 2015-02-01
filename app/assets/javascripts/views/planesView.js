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
		console.log("Plane Name:", this.$el.find('#id.p_name').html());
		$('#flight_list').fadeOut(200);
		this.$el.html(JST['planes/plane_form']());
	},

	cancelForm: function(){
		this.$el.find('form').fadeOut();
		renderForm();

	},

	addPlane: function(){
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

	renderPlanes: function(){
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
	},

	createTable: function() {
 
    var tableElem, rowElem, colElem;

    var a = this.$el.find('.rows').val();
    var b = this.$el.find('.columns').val();
   

   if (a == "" || b == "") {
     alert("Please enter some numeric value");
   } else {
     tableElem = document.createElement('table');

     for (var i = 0; i < a; i++) {
       rowElem = document.createElement('tr');

       for (var j = 0; j < b; j++) {
         colElem = document.createElement('td');
         colElem.appendChild(document.createTextNode(j + 1)); //to print cell number
         rowElem.appendChild(colElem);
       }

       tableElem.appendChild(rowElem);
     }

     document.body.appendChild(tableElem);


   }
 }
});