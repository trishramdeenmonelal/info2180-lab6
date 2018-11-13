window.onload = function(){
    let searchinput = document.getElementById("searchinput");//inputsearch
    let res = document.getElementById("result");//result
    let search =  document.getElementById("searchb");//searchbutton
   search.addEventListener("click", function(){
    let searchA =  document.getElementById("searchb"); //searchbutton
    let searchAll =  document.getElementById("searchAll"); //seachALL
   searchA.addEventListener("click", function(){
       let xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function(){
           if(xhttp.readyState === 4 && xhttp.status === 200){

       xhttp.open("GET","request.php?q="+searchinput.value,true);
       xhttp.send();
    });
    searchAll.addEventListener("click", function(){
       var xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function(){
           if(xhttp.readyState === 4 && xhttp.status === 200){
               var output = "<ol>";
               var text = xhttp.responseText;
               var terms = text.getElementsByTagName("definition");
               for(var i = 0; i<terms.length;i++){
                   output+="<li><h3>"+terms[i].getAttribute("name")+"</h3><p>"+terms[i].childNodes[0].nodeValue+
                   "</p><p> -"+terms[i].getAttribute("author")+"</p></li>";
               }
               output+="</ol>";
               res.innerHTML ="<h2>Result</h2>"+output;
           }
       };
       xhttp.open("GET","request.php?q=&all=true",true);
       xhttp.send();
    });
};