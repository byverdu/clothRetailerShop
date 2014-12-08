/*global angular*/
'use strict';

var shopServices = angular.module('shopServices',[]);
	
	shopServices.factory('ClothService',function(){
			return {

				sharedCart: [],	

				cloth: [

					{
						name:'Almond Toe Court Shoes, Patent Black',
						category:'Women’s Footwear',
						price: 99.00,
						stock: 5,
						image: '/img/img0.jpg'
					},
					{
						name:'Suede Shoes, Blue' ,
						category:'Women’s Footwear',
						price: 42.00,
						stock: 4,
						image: '/img/img1.jpg'
					},
					{
						name:'Leather Driver Saddle Loafers, Tan' ,
						category:'Men’s Footwear',
						price: 34.00,
						stock: 12,
						image: '/img/img2.jpg'
					},
					{
						name:'Flip Flops, Red' ,
						category:'Men’s Footwear',
						price: 19.00,
						stock: 6,
						image: '/img/img3.jpg'
					},
					{
						name:'Flip Flops, Blue' ,
						category:'Men’s Footwear',
						price: 19.00,
						stock: 0,
						image: '/img/img4.jpg'
					},
					{
						name:'Gold Button Cardigan, Black' ,
						category:'Women’s Casualwear',
						price: 167.00,
						stock: 6,
						image: '/img/img5.jpg'
					},
					{
						name:'Cotton Shorts, Medium Red' ,
						category:'Women’s Casualwear',
						price: 30.00,
						stock: 5,
						image: '/img/img6.jpg'
					},
					{
						name:'Fine Stripe Short Sleeve Shirt, Grey' ,
						category:'Men’s Casualwear',
						price: 49.00,
						stock: 9,
						image: '/img/img7.jpg'
					},
					{
						name:'Fine Stripe Short Sleeve Shirt, Green' ,
						category:'Men’s Casualwear',
						price: 39.00,
						stock: 3,
						image: '/img/img8.jpg'
					},
					{
						name:'Sharkskin Waistcoat,Charcoal' ,
						category:'Men’s Formalwear',
						price: 75.00,
						stock: 2,
						image: '/img/img9.jpg'
					},
					{
						name:'Lightweight Patch Pocket Blazer, Deer' ,
						category:'Men’s Formalwear',
						price: 175.50,
						stock: 1,
						image: '/img/img10.jpg'
					},
					{
						name:'Bird Print Dress, Black' ,
						category:'Women’s Formalwear',
						price: 270.00,
						stock: 10,
						image: '/img/img11.jpg'
					},
					{
						name:'Mid Twist Cut-Out Dress,Pink' ,
						category:'Women’s Formalwear',
						price: 540.00,
						stock: 5,
						image: '/img/img12.jpg'
					}
			]
		};
	});

	