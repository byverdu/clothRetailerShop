'use strict';

angular.module('shopServices',[])
	.factory('ClothService',function(){
			return {

				sharedCart: [],	

				cloth: [

					{
						name:'Almond Toe Court Shoes, Patent Black',
						category:'Women’s Footwear',
						price: '99.00',
						stock: 5
					},
					{
						name:'Suede Shoes, Blue' ,
						category:'Women’s Footwear',
						price: '42.00',
						stock: 4
					},
					{
						name:'Leather Driver Saddle Loafers, Tan' ,
						category:'Men’s Footwear',
						price: '34.00',
						stock: 12
					},
					{
						name:'Flip Flops, Red' ,
						category:'Men’s Footwear',
						price: '19.00',
						stock: 6
					},
					{
						name:'Flip Flops, Blue' ,
						category:'Men’s Footwear',
						price: '19.00',
						stock: 0
					},
					{
						name:'Gold Button Cardigan, Black' ,
						category:'Women’s Casualwear',
						price: '167.00',
						stock: 6
					},
					{
						name:'Cotton Shorts, Medium Red' ,
						category:'Women’s Casualwear',
						price: '30.00',
						stock: 5
					},
					{
						name:'Fine Stripe Short Sleeve Shirt, Grey' ,
						category:'Men’s Casualwear',
						price: '49.00',
						stock: 9
					},
					{
						name:'Fine Stripe Short Sleeve Shirt, Green' ,
						category:'Men’s Casualwear',
						price: '39.00',
						stock: 3
					},
					{
						name:'Sharkskin Waistcoat,Charcoal' ,
						category:'Men’s Formalwear',
						price: '75.00',
						stock: 2
					},
					{
						name:'Lightweight Patch Pocket Blazer, Deer' ,
						category:'Men’s Formalwear',
						price: '175.50',
						stock: 1
					},
					{
						name:'Bird Print Dress, Black' ,
						category:'Women’s Formalwear',
						price: '270.00',
						stock: 10
					},
					{
						name:'Mid Twist Cut-Out Dress,Pink' ,
						category:'Women’s Formalwear',
						price: '540.00',
						stock: 5
					}
			]
		};
	});

	