(function (){
	'use strict';

	EmberContactManager.Contact = DS.Model.extend({
		firstName: DS.attr('string'),
		lastName: DS.attr('string'),
		title: DS.attr('string'),
		email: DS.attr('string'),
		avatar: DS.attr('string'),
		gender: DS.attr('string'),
		loadedDetails: DS.attr('boolean'),
		street: DS.attr('string'),
		city: DS.attr('string'),
		state: DS.attr('string'),
		zip: DS.attr('string'),
		phone: DS.attr('string'),
		cell: DS.attr('string'),
		SSN: DS.attr('string'),
	});
})();