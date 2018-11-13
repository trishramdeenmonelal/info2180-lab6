window.onload = function(){
    var search= document.getElementById("searchb");
    var searchinput= document.getElementById("search"); 
    var searchall= document.getElementById("searchall");
    var res= document.getElementById("result");
    search.addEventListener("click", function(){
       let xhttp = new  XMLHttpRequest();
       xhttp.onreadystatechange = function(){
           if(xhttp.readyState === 4 && xhttp.status === 200){
               //alert(xhttp.responseText);
               res.innerHTML = xhttp.responseText;
           }
       };
      // xhttp.open("GET","request.php?q="+"definition",true);
       xhttp.open("GET","request.php?q="+searchinput.value,true);
       xhttp.send();
    });
}; 