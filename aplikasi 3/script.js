$(document).ready(function () {
    var total = 0;

    // Fungsi untuk menambahkan produk ke daftar
    $("button").click(function () {
        var productName = $("#productName").val();
        var quantity = parseInt($("#quantity").val());
        var price = parseInt($("#price").val());
        var amount = quantity * price;

        $("#productList").append("<li class='list-group-item'>" + productName + " - " + quantity + " x " + price + " = Rp " + amount + "</li>");

        total += amount;
        $("#totalAmount").text("Total: Rp " + total);
    });

    // Fungsi untuk membersihkan formulir setelah menambahkan produk
    $("button").click(function () {
        $("#productName").val("");
        $("#quantity").val("");
        $("#price").val("");
    });
});