(function() {
    
    var app = angular.module("gemStore", ["store-directives"]);

    app.controller("StoreController",["$http", function($http){

        var store = this;
        store.products = [];

        $http.get('products/store-products.json')
            .success(function (data) {

                store.products = data;
            });
    }]);

    app.filter("color", function () {

        return function (hex) {

            var color = new W3Color(hex);
            return color.toName();
        };
    });

    //app.controller('ReviewController', function() {
    //    this.review = {};
    //
    //    this.addReview = function(product) {
    //        product.reviews.push(this.review);
    //
    //        this.review = {};
    //    };
    //});
})();
