$(document).ready(function(){
    $('.error').hide();
    $('.success').hide();
})
$('#addProductBtn').on('click',function(){
    var product_sku = $('#pSku').val();
    var product_name = $('#pName').val();
    var product_price = $('#pPrice').val();
    var product_quantity = $('#pQuantity').val();
    if(product_sku = "" ||  product_name == "" || product_price =="" || product_quantity=="" ){
        $('.error').show().fadeOut(5000);
    }else{
        $('.success').show().fadeOut(5000);
    }
})