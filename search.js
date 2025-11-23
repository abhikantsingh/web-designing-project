function openTab() {
    var x = document.getElementById("myText").value;
    
       if (x=="protein"){
                window.open("portein.html", "_blank");
       }
       else if(x=="creatine"){
         window.open("creatinine.html", "_blank");
       }  
       else if(x=="contect"){
        window.open("contec.html", "_blank");
      }  
      
      else if(x=="dietchart"){
        window.open("dietchart.html", "_blank");
      }  
      else if(x=="home"){
        window.open("index.html", "_blank");
      }  

      else{
        window.open("about.html", "_blank");
      }
    
 }