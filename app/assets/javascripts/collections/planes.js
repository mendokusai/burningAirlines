var App = App || {};

App.Planes = Backbone.Collection.extend({
	url: '/airplanes',
	model: App.Plane
});