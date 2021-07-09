$(document).ready(function(){

    var searchId = window.location.search.split("=")[1];
    var currentObj = null;



    function createProductImages(url, pos) {
        var image = document.createElement('img');
        image.src = url

        if(pos === 0) {
            image.classList.add("active-image");
        }

        image.onclick = function() {
            $('#preview-images img').removeClass("active-image")
            image.classList.add("active-image");
            $('#product-preview').attr('src', url);
        }

        return image;
    }
    
    $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product/'+searchId,function(response){
        $('#product-preview').attr("src",response.preview);
        $('#product-title').html(response.name);
        $('#product-brand').html(response.brand);
        $('#description').html(response.description);
        $('#price').html(response.price);

        for(var i=0;i<response.photos.length;i++){
            $('#preview-images').append(createProductImages(response.photos[i],i))
        }
    })








})