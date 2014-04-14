(function (){
	'use strict';

	EmberContactManager.User = DS.Model.extend({
		firstName: DS.attr('string'),
		signedIn: DS.attr('boolean'),
		token: DS.attr('string'),
		createNew: DS.attr('boolean'),
		errorMessage: DS.attr('string')
	});
})();