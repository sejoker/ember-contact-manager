(function (){
	'use strict';
	EmberContactManager.IndexRoute = Ember.Route.extend({
		model: function(){
			var contact = this.store.createRecord('contact', {
				firstName: 'Eugene',
				lastName: 'Safronov',
				title: 'mr',
				email: 'sejoker@gmail.com',
				gender: 'male',
				avatar: 'http://api.randomuser.me/0.3/portraits/men/50.jpg'
			}),
				contacts = [];

			contact.save();
			contacts.push(contact);
			
			return contacts;
		}
	});	
})();
