 var allproduct= document.querySelectorAll(".imggg")
 var div=document.querySelector(".div1")
 var btn=document.querySelector(".buton")
 let totalPriceDiv = document.querySelector(".totalPriceDiv")

 var totalprice=0

allproduct.forEach(function(item)
{

  item.onclick = function()
  {

    div.innerHTML  += item.title + "--"
    totalprice +=    +(item.getAttribute("price"))


    if(div.innerHTML !=" ")
    {
        btn.style.display = "block"
        
   
    }
  }

})


btn.onclick= function(){
totalPriceDiv.innerHTML= totalprice
}










