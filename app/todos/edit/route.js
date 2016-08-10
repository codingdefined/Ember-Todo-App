import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.findRecord('todo', params.id);
	},
	actions: {
		displayTodos: function() {
			this.transitionTo('todos');
		} 
	}

});
