var ChannelAdvisor = require('./');
var assert = require('assert');

var api = ChannelAdvisor({
	developerKey : process.env.CHANNEL_ADVISOR_DEVELOPER_KEY
	, password : process.env.CHANNEL_ADVISOR_PASSWORD
});

var pending = 0;
var completed = 0;
var services = [
	'AdminService'
	, 'CartService'
	, 'FulfillmentService'
	, 'InventoryService'
	, 'ListingService'
	, 'MarketplaceAdService'
	, 'OrderService'
	, 'ShippingService'
	, 'StoreService'
];

services.forEach(function (service) {
	pending += 1;
	api[service].Ping(function (err, data) {
		pending -= 1;
		completed +=1;

		console.log(service, err, data);

		assert.equal(err, null, 'Error should be null');
		assert.deepEqual(data, { Status: 'Success', MessageCode: 0, ResultData: 'OK' }, 'Response data not OK');

		if (pending === 0) {
			assert.equal(completed, services.length, 'Not all tests finished');

			console.log('Done');
		}
	});
});
