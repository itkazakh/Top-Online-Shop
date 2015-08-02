describe('Stock service', function(){
	var Stock
	var firstItem

	beforeEach(module('shop.services'));

	beforeEach(inject(function (_Stock_){
		Stock = _Stock_;
		firstItem = {
	        id: 0,
			name: "Almond Toe Court Shoes, Patent Black",
	        category: "Women's Footwear",
	        price: 99,
	        quantity: 5
	    };
	}))

	it('can get an instance of my factory', inject(function(Stock){
		expect(Stock).toBeDefined();
	}));

	it('has 13 items in stock', inject(function(Stock){
		expect(Stock.all().length).toEqual(13);
	}));

	it('can pull an item from the stock', inject(function(Stock){
	    expect(Stock.get(0).name).toEqual("Almond Toe Court Shoes, Patent Black")
	}));
});