window.onload = function(){
    var searchb= document.getElementById("searchb");
    var search= document.getElementById("searchinput");
    var res= document.getElementById("result");
    
    // searchb.addEventListener("click", function(){
        //var searchB = document.getElementById("searchb");
    
    searchb.addEventListener("click", function(){
        var xhttp = new  XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(xhttp.readyState === 4 && xhttp.status === 200){
                //alert(xhttp.responseText);
               //res.innerHTML = xhttp.responseText;
               res.innerHTML= "<h3>Result</h3>"+ xhttp.responseText;
           }
       };
       //xhttp.open("GET","request.php?q="+"definition",true);
      // xhttp.open("GET","request.php?q="+"definition",true);
       xhttp.open("GET","request.php?q="+search.value,true);
       xhttp.send();
    });
    // };
    var searchall = document.getElementById("searchall");
    searchall.addEventListener("click",function(){
        var xhttp = new  XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(xhttp.readyState === 4 && xhttp.status === 200){
                var output = "<ol>";
               var text = xhttp.responseXML;
               var term = text.getElementByTagName("definition");
               for(var i = 0; i<term.length;i++){
                   output+="<li><h3>"+term[i].getAttribute("name")+"</h3><p>"+term[i].childNodes[0].nodeValue+"</p><p> -"+ term[i].getAttribute("author")+"</p></li>";
               }
               output=output + "</ol>";
               res.innerHTML ="<h2>Result</h2>"+output;
            }
        };
        xhttp.open("GET","request.php?q=&all=true",true);
        xhttp.send();
    });
};