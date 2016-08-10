import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('todo');
	},
	actions: {
		displayTodos: function() {
			this.transitionTo('todos');
		} 
	}
});
