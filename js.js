$(document).ready(function() {
    var itemsInCart = 0;
    var cart = [];
  
    $('.addToCartBtn').click(function() {
      var productName = $(this).data('product-name');
      var productPrice = $(this).data('product-price');
  
      // přidání produktu do košíku
      cart.push({ name: productName, price: productPrice });
  
      // aktualizace počtu položek v košíku
      itemsInCart++;
      $('#cartBtn .badge').text(itemsInCart);
    });
  });
  