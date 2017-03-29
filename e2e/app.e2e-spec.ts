import { browser, element, by } from 'protractor';

describe('NgForum E2E Tests', function () {

	let expectedMsg = 'User Form';

	beforeEach(function () {
		browser.get('');
	});

	it('should display: ' + expectedMsg, function () {
		expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
	});

});
