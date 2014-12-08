# Retail clothing Shop

The retailer sells six different categories of clothes: women’s footwear, men’s footwear, women’s casualwear, men’s casualwear, women’s formalwear and man’s formalwear.

The page that you develop should display all of the available products, as well as a shopping cart to which they can be added.

There are also discount vouchers available that can be redeemed. 

The discount vouchers are as follows:
- £5.00 off your order
- £10.00 off when you spend over £50.00
- £15.00 off when you have bought at least one footwear item and spent over £75.00

The prioritised list of user stories is as follows:

1. As a User I can view the products and their category, price and availability information.
1. As a User I can add a product to my shopping cart.
2. As a User I can remove a product from my shopping cart.
3. As a User I can view the total price for the products in my shopping cart.
4. As a User I can apply a voucher to my shopping cart.
5. As a User I can view the total price for the products in my shopping cart with discounts applied.
6. As a User I am alerted when I apply an invalid voucher to my shopping cart.
7. As a User I am unable to Out of Stock products to the shopping cart.

### How to run the website

This project is based en nodeJs, to be able to use it you **must** have nodeJs installed. [Go to the website for more information](http://nodejs.org/).
 
```
> git clone https://github.com/byverdu/clothRetailerShop.git 

> cd clothRetailerShop/

> npm install && bower install

> npm start

```
Visit [http://127.0.0.1:3000](http://127.0.0.1:3000/)


### How to run the tests

```
# unit tests

> npm run karma

# e2e tests

> cd test/
> protractor protractor-conf.js
```

### Folder Structure

```
retailShop
	app/
		components/        # bower packages
		css/               # where sccs files are compiled
		img/               # images folder
		js/
			app.js           # file loads angular modules
			controller,js    # angular controllers
			serice.js        # angular services
	bin/                 # starts node server
	node_modules/        # node dependencies
	routes/						   # node controller
	test/
		e2e/               # e2e tests files
		unit/              # unit tests files
		karma.conf.js      # karma configuration
		protractor-conf.js # protractor configuration
	views/							 # jade files, angular html tags


### Technologies used

##### Testing Tools

1. Mocha and Chai
2. Karma and Protractor

##### Front End Tools

1. Angular
1. Bootstrap
1. ui.Bootstrap


### How the website is build.

The reason that I am using nodeJs as a server is because I can get benefit of tools like jade, sass, grunt so I can automate all that processes and focus in other duties. NodeJs only plays a roll as a server.

I have split my time to work 50% in unit tests and the other 50% in e2e tests.

The app is based in AngularJs. The data that the app is using comes from a Service that is shared between controllers. 

There is 3 main controllers:

ClothCtrl   -> responsible to add items and control the stock.
CartCtrl    -> responsible to remove items, the total price and the discounts.
TooltipCtrl -> responsible to show tooltips for the discounts values.


### Actual state 

All the user stories are implemented but some of them need to be improved. 

For example: 

1. I should separate the discounts methods to his own controller and not being mixing things.
2. I am using tooltips and disabled buttons to let the user know which discounts can be applied, this could be done with alerts instead.
3. How I am tracking the stock.
4. Spend more hours in the website design, so far I can say that uses a fluid layout.




















