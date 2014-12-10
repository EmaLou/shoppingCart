$(document).ready(function () {
    $(".apple .quantity").on("change", Calculator.totalApplePrice);
    $(".orange .quantity").on("change", Calculator.totalOrangePrice);
    $(".banana .quantity").on("change", Calculator.totalBananaPrice);
});

var Calculator = {
    totalApplePrice: function (name) {
        var name = "apple";
        Calculator.calculate(name);
    },

    totalOrangePrice: function () {
        var name = "orange";
        Calculator.calculate(name);
    },

    totalBananaPrice: function () {
        var name = "banana";
        Calculator.calculate(name);
    },

    calculate: function (name) {
        var quantity = $("." + name + " .quantity").val();
        var price = $("." + name + " .price").text();

        var totalPrice = number * price;

        $("." + name + " .totalPrice").text(totalPrice);
    }
}