window.onload = function(){
    var searchb= document.getElementById("searchb");
    var search= document.getElementById("search");
    var res= document.getElementById("result");
    searchb.addEventListener("click", function(){
       let xhttp = new  XMLHttpRequest();
       xhttp.onreadystatechange = function(){
           if(xhttp.readyState === 4 && xhttp.status === 200){
               //alert(xhttp.responseText);
               res.innerHTML = xhttp.responseText;
           }
       };
      // xhttp.open("GET","request.php?q="+"definition",true);
       xhttp.open("GET","request.php?q="+search.value,true);
       xhttp.send();
    });
}; 
