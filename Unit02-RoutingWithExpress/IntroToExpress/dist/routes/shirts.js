'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _utils = require('../js/util/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {

	var shirts = [{
		"id": 1,
		"name": "Happy Shirt",
		"description": "Women Fine Jersey Short Sleeve",
		"price": 14.99,
		"image": "WomensShirt-blue",
		"gender": "W",
		"quantity": 0,
		"subtotal": 0,
		"graphic": "graphic12.svg",
		"font": "'Orbitron', sans-serif",
		"text": "happy little trees",
		"textColor": {
			"name": "white",
			"color": "#FFFFFF"
		},
		"shirtStyle": "WomensShirt",
		"shirtColor": {
			"name": "blue",
			"color": "#2674A8"
		},
		"graphicColor": {
			"name": "white",
			"color": "#FFFFFF"
		}
	}, {
		"id": 2,
		"name": "4 Coders",
		"description": "Men Fine Jersey Short Sleeve",
		"price": 14.99,
		"image": "MensShirt-red",
		"gender": "M",
		"quantity": 0,
		"subtotal": 0,
		"graphic": "graphic1.svg",
		"font": "'Montserrat', sans-serif",
		"text": "KEEP CALM AND CODE ON",
		"textColor": {
			"name": "green",
			"color": "#44A265"
		},
		"shirtStyle": "MensShirt",
		"shirtColor": {
			"name": "red",
			"color": "#A7386B"
		},
		"graphicColor": {
			"name": "white",
			"color": "#FFFFFF"
		}
	}, {
		"id": 3,
		"name": "Emoji Shirt",
		"description": "Women Fine Jersey Short Sleeve",
		"price": 15.99,
		"image": "WomensShirt-red",
		"gender": "W",
		"quantity": 0,
		"subtotal": 0,
		"graphic": "graphic14.svg",
		"font": "'Orbitron', sans-serif",
		"text": "",
		"textColor": {
			"name": "white",
			"color": "#FFFFFF"
		},
		"shirtStyle": "WomensShirt",
		"shirtColor": {
			"name": "red",
			"color": "#A7386B"
		},
		"graphicColor": {
			"name": "white",
			"color": "#FFFFFF"
		}
	}, {
		"id": 4,
		"name": "Falcon on black",
		"description": "Mens Fine Jersey Short Sleeve",
		"price": 19.99,
		"image": "MensShirt-black",
		"gender": "M",
		"quantity": 0,
		"subtotal": 0,
		"graphic": "graphic8.svg",
		"font": "'Orbitron', sans-serif",
		"text": "",
		"textColor": {
			"name": "white",
			"color": "#FFFFFF"
		},
		"shirtStyle": "MensShirt",
		"shirtColor": {
			"name": "black",
			"color": "#444444"
		},
		"graphicColor": {
			"name": "white",
			"color": "#FFFFFF"
		}
	}, {
		"id": 5,
		"name": "Falcon on white",
		"description": "Mens Fine Jersey Short Sleeve",
		"price": 19.99,
		"image": "MensShirt-white",
		"gender": "M",
		"quantity": 0,
		"subtotal": 0,
		"graphic": "graphic8.svg",
		"font": "'Orbitron', sans-serif",
		"text": "",
		"textColor": {
			"name": "white",
			"color": "#FFFFFF"
		},
		"shirtStyle": "MensShirt",
		"shirtColor": {
			"name": "white",
			"color": "#FFFFFF"
		},
		"graphicColor": {
			"name": "white",
			"color": "#FFFFFF"
		}
	}, {
		"id": 6,
		"name": "Office Space",
		"description": "Women Fine Jersey Short Sleeve",
		"price": 14.99,
		"image": "WomensShirt-white",
		"gender": "W",
		"quantity": 0,
		"subtotal": 0,
		"graphic": "graphic6.svg",
		"font": "'Orbitron', sans-serif",
		"text": "KUNG FU",
		"textColor": {
			"name": "white",
			"color": "#FFFFFF"
		},
		"shirtStyle": "WomensShirt",
		"shirtColor": {
			"name": "white",
			"color": "#FFFFFF"
		},
		"graphicColor": {
			"name": "white",
			"color": "#FFFFFF"
		}
	}, {
		"id": 7,
		"name": "Smile",
		"description": "Mens Fine Jersey Short Sleeve",
		"price": 15.99,
		"image": "MensShirt-green",
		"gender": "M",
		"quantity": 0,
		"subtotal": 0,
		"graphic": "graphic2.svg",
		"font": "'Orbitron', sans-serif",
		"text": "",
		"textColor": {
			"name": "white",
			"color": "#FFFFFF"
		},
		"shirtStyle": "MensShirt",
		"shirtColor": {
			"name": "green",
			"color": "#44A265"
		},
		"graphicColor": {
			"name": "white",
			"color": "#FFFFFF"
		}
	}, {
		"id": 8,
		"name": "Dabbing Skeleton",
		"description": "Mens Fine Jersey Short Sleeve",
		"price": 19.99,
		"image": "MensShirt-blue",
		"gender": "M",
		"quantity": 0,
		"subtotal": 0,
		"graphic": "graphic13.svg",
		"font": "'Orbitron', sans-serif",
		"text": "",
		"textColor": {
			"name": "white",
			"color": "#FFFFFF"
		},
		"shirtStyle": "MensShirt",
		"shirtColor": {
			"name": "blue",
			"color": "#2674A8"
		},
		"graphicColor": {
			"name": "white",
			"color": "#FFFFFF"
		}
	}];

	return (0, _utils.jsonWriter)(res, shirts);
});

exports.default = router;