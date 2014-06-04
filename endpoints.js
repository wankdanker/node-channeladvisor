function generateMethodObject(prefix, methodNames) {
	var methods = {};

	methodNames.forEach(function (methodName) {
		methods[methodName] =  prefix + '.' + methodName;
	});

	return methods;
}

module.exports = {
	AdminService : {
		wsdl : "https://api.channeladvisor.com/ChannelAdvisorAPI/v7/AdminService.asmx?WSDL"
		, url : "https://api.channeladvisor.com/ChannelAdvisorAPI/v7/AdminService.asmx"
		, methods : generateMethodObject(
			'AdminService.AdminServiceSoap'
			, [
				'GetAuthorizationList'
				, 'RequestAccess'
				, 'Ping'
			]
		)
	}
	, CartService : {
		wsdl : "https://api.channeladvisor.com/ChannelAdvisorAPI/v7/CartService.asmx?WSDL"
		, url : "https://api.channeladvisor.com/ChannelAdvisorAPI/v7/CartService.asmx"
		, methods : generateMethodObject(
			'CartService.CartServiceSoap'
			, [
				, 'CreateCart'
				, 'GetCart'
				, 'DeleteCart'
				, 'ModifyCart'
				, 'Ping'
			]
		)
	}
	, FulfillmentService : {
		wsdl : "https://api.channeladvisor.com/ChannelAdvisorAPI/V7/FulfillmentService.asmx?WSDL"
		, url : "https://api.channeladvisor.com/ChannelAdvisorAPI/V7/FulfillmentService.asmx"
		, methods : generateMethodObject(
			'FulfillmentService.FulfillmentServiceSoap'
			, [
				'CreateOrderFulfillments'
				, 'GetOrderFulfillmentDetailList'
				, 'MoveFulfillmentItems'
				, 'Ping'
				, 'UpdateOrderFulfillments'
			]
		)

	}
	, InventoryService : {
		wsdl : "https://api.channeladvisor.com/ChannelAdvisorAPI/v7/InventoryService.asmx?WSDL"
		, url : "https://api.channeladvisor.com/ChannelAdvisorAPI/v7/InventoryService.asmx"
		, methods : generateMethodObject(
			'InventoryService.InventoryServiceSoap'
			, [
				'AddUpsellRelationship'
				, 'AssignLabelListToInventoryItemList'
				, 'DeleteInventoryItem'
				, 'DeleteUpsellRelationship'
				, 'DoesSkuExist'
				, 'DoesSkuExistList'
				, 'GetClassificationConfigurationInformation'
				, 'GetDistributionCenterList'
				, 'GetFilteredInventoryItemList'
				, 'GetFilteredSkuList'
				, 'GetInventoryItemAttributeList'
				, 'GetInventoryItemList'
				, 'GetInventoryItemQuantityInfo'
				, 'GetInventoryItemStoreInfo'
				, 'GetInventoryItemImageList'
				, 'GetInventoryItemShippingInfo'
				, 'GetInventoryItemVariationInfo'
				, 'GetInventoryQuantity'
				, 'GetInventoryQuantityList'
				, 'GetUpsellRelationship'
				, 'Ping'
				, 'RemoveLabelListFromInventoryItemList'
				, 'SynchInventoryItem'
				, 'SynchInventoryItemList'
				, 'UpdateInventoryItemQuantityAndPrice'
				, 'UpdateInventoryItemQuantityAndPriceList'
			]
		)
	}
	, ListingService : {
		wsdl : "https://api.channeladvisor.com/ChannelAdvisorAPI/v7/ListingService.asmx?WSDL"
		, url : "https://api.channeladvisor.com/ChannelAdvisorAPI/v7/ListingService.asmx"
		, methods : generateMethodObject(
			'ListingService.ListingServiceSoap'
			, [
				'Ping'
				, 'WithdrawListings'
			]
		)		
	}
	, MarketplaceAdService : {
		wsdl : "https://api.channeladvisor.com/ChannelAdvisorAPI/v7/MarketplaceAdService.asmx?WSDL"
		, url : "https://api.channeladvisor.com/ChannelAdvisorAPI/v7/MarketplaceAdService.asmx"
		, methods : generateMethodObject(
			'MarketplaceAdService.MarketplaceAdServiceSoap'
			, [
				'AddMarketplaceAd'
				, 'AddMarketplaceAdForSkuList'
				, 'DeleteMarketplaceAd'
				, 'Ping'
			]
		)
	}
	, OrderService : {
		wsdl : "https://api.channeladvisor.com/ChannelAdvisorAPI/v7/OrderService.asmx?WSDL"
		, url : "https://api.channeladvisor.com/ChannelAdvisorAPI/v7/OrderService.asmx"
		, methods : generateMethodObject(
			'OrderService.OrderServiceSoap'
			, [
				'GetOrderList'
				, 'GetOrderRefundHistory'
				, 'Ping'
				, 'OrderMerge'
				, 'OrderSplit'
				, 'SubmitOrder'
				, 'SubmitOrderRefund'
				, 'SetOrdersExportStatus'
				, 'SetSellerOrderID'
				, 'SetSellerOrderItemIDList'
				, 'UpdateOrderList'
			]
		)
	}
	, ShippingService : {
		wsdl : "https://api.channeladvisor.com/ChannelAdvisorAPI/v7/ShippingService.asmx?WSDL"
		, url : "https://api.channeladvisor.com/ChannelAdvisorAPI/v7/ShippingService.asmx"
		, methods : generateMethodObject(
			'ShippingService.ShippingServiceSoap'
			, [
				'Ping'
				, 'GetOrderShipmentHistoryList'
				, 'GetShippingRateList'
				, 'GetShippingCarrierList'
				, 'SubmitOrderShipmentList'
			]
		)
	}
	, StoreService : {
		wsdl : "https://api.channeladvisor.com/ChannelAdvisorAPI/v6/StoreService.asmx?WSDL"
		, url : "https://api.channeladvisor.com/ChannelAdvisorAPI/v6/StoreService.asmx"
		, methods : generateMethodObject(
			'StoreService.StoreServiceSoap'
			, [
				'Ping'
				, 'GetSearchAnalysisStats'
			]
		)
	}
};


