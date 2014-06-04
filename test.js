var ChannelAdvisor = require('./');

var api = new ChannelAdvisor({
	developerKey : process.env.CHANNEL_ADVISOR_DEVELOPER_KEY
	, password : process.env.CHANNEL_ADVISOR_PASSWORD
});

[
	'AdminService'
	, 'CartService'
	, 'FulfillmentService'
	, 'InventoryService'
	, 'ListingService'
	, 'MarketplaceAdService'
	, 'OrderService'
	, 'ShippingService'
	, 'StoreService'
].forEach(function (service) {
	api[service].Ping(function (err, data) {
		console.log(service, err, data);
	});
});
