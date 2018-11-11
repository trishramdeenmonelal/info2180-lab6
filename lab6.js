window.onload = function(){
    var searchb = document.getElementById("searchb");
    searchb.addEventListener("onclick", function(){
    var xml = new  XMLHttpRequest();
       xml.onreadystatechange = function(){
           if(xml.status === 200 && xml.readyState === 4 ){
               alert(xml.responseText);
           }else{
               alert("There's a problem with the request");
           }
       };
       xml.open("GET","request.php?q=definition",true);
       xml.send();
    });
    
    
}; 