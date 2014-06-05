node-channeladvisor
-------------------

This is a wrapper around the ChannelAdvisor SOAP API.

While it is pretty simple to use the `soap` module to make SOAP calls to
ChannelAdvisor, there is a lot of boilerplate for setting up each call which
this project aims to eliminate.

example
-------

```js
var ChannelAdvisor = require('channeladvisor');

var ca = new ChannelAdvisor({
  developerKey : process.env.CHANNEL_ADVISOR_DEV_KEY
  , password : process.env.CHANNEL_ADVISOR_DEV_PASSWORD
});

ca.AdminService.GetAuthorizationList(function (err, data) {
  console.log(arguments);
});
```

install
-------

```bash
npm install channeladvisor
```

api
---

The complete documentaion of ChannelAdvisor's SOAP API is available at the
[ChannelAdvisor Developer Network](http://developer.channeladvisor.com/display/cadn/ChannelAdvisor+Developer+Network). 

This module exposes each service as a child object of a `ChannelAdvisor`
instance. The current Services implemented are:

* AdminService
* CartService
* FulfillmentService
* InventoryService
* ListingService
* MarketplaceAdService
* OrderService
* ShippingService
* StoreService

Each Service object contains methods for each operation that is described in 
the ChannelAdvisor Developer Network documentation. The methods are named
exactly as they appear in the documentation. For Example:

* AdminService
  * .GetAuthorizationList
  * .RequestAccess
  * .Ping

Each method takes an optional `args` object and a required callback function.
Example:

```js
ca.AdminService.RequestAccess({ localID : 9999999}, function (err, result) {
  console.log(arguments);
});
```

If the operation does not require any arguments then you may just specify the
callback function. Example:

```js
ca.InventoryService.Ping(function (err, data) {
  console.log(arguments);
});
```

notes
-----

I am not in any way affiliated with ChannelAdvisor other than being a customer.
ChannelAdvisor is a registered trademark of ChannelAdvisor Corporation. I have
used `channeladvisor` as the name of this module in good faith to help other
developers find obvious solutions.

license
-------

MIT

