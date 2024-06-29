// $(document).ready(function(){
//     // Example function to update the cart count
//     function updateCartCount(count) {
//         $('.icon .badge').text(count);
//     }

//     // Example usage: Update the cart count to 5
//     updateCartCount(5);
// });
$(document).ready(function() {
    $('.nav-link').on('click', function() {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });

    const products = [
        { image: './picture/product-1.jpg', title: 'White Shirt',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '$15.00' },
        { image: './picture/product-2.jpg', title: 'Blue Jeans',description:'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: '$40.00' },
        { image: './picture/product-3.jpg', title: 'Red Dress',description:'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius', price: '$50.00' },
        { image: './picture/product-4.jpg', title: 'Green Hat',description:'nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.', price: '$10.00' }
      ];

      // Iterate over the product data and create cards
      products.forEach(function(product) {
        $('#product-list').append(
          '<div class="col-md-3">' +
            '<div class="card">' +
              '<img src="' + product.image + '" class="card-img-top" alt="' + product.title + '">' +
              '<div class="card-body">' +
                '<h6 class="card-title">' + product.title + '</h6>' +
                '<p class="card-description">' + product.description + '</p>' +
                '<h5 class="card-text"><b>' + product.price + '</b></h5>' +
                '<div class="button">' +
                  '<button class="btn-buy">More details</button>' +
                  '<div class="icon-buy">'+
                    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/></svg>'+
                  '</div>'+
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>'
        );
      });
});