$(document).ready(function(){

    function cards(productList){
        var card = document.createElement("div");
        // card.id = [i]+1;
        card.className = "card";
        var imgWrap = document.createElement("div")
        var img = document.createElement("img");
        img.className = "img-clth";
        img.src = productList.preview;
        var details = document.createElement("div");
        details.className = "details"
        var heading = document.createElement("h3");
        heading.className = "heading";
        heading.innerHTML = productList.name;
        var brand = document.createElement("h4");
        brand.className = "brand";
        brand.innerHTML = productList.brand;
        var price = document.createElement("h5");
        price.className = "price";
        price.innerHTML = productList.price;
        imgWrap.appendChild(img);
        card.appendChild(imgWrap);
        details.appendChild(heading);
        details.appendChild(brand);
        details.appendChild(price);
        card.appendChild(details);
        console.log(card);
    }
    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product",function(response){
        for(var i=0;i<response.length;i++){
            console.log(cards(response[i].productList))
        }
    })

})