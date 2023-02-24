 
window.onload=function(){
    var start = document.getElementById('start');
    var end = document.getElementById('end');
    var boundaries = document.getElementsByClassName('boundary');
    var status = document.getElementById('status');
    var z =0;



 var score = document.getElementsByClassName('boundary example');
    
  
  var newelement=document.createElement("h3")

  newelement.innerHTML = 'Score='+0;
  score[0].appendChild(newelement);  
newelement.style.marginTop="-1px"
 
start.addEventListener("mouseover", function() {
     
    status.innerHTML="start the game"
    
});
 
start.addEventListener("mouseout", function() {
    
    status.innerHTML="continue without touching the walls"
    
});

 start.addEventListener("click",function(){
   z
 })
end.addEventListener("mouseover", function() {
    end.style.backgroundColor = "red";
    status.innerHTML="you win"
    
});


 end.addEventListener("mouseout", function() {
    end.style.backgroundColor = "white";
    status.innerHTML="you win"
    
         z+=1;
        score[0].innerHTML =z ;          
 
});
 
  var length=boundaries.length
for (let i = 0; i < length; i += 1){
    boundaries[i].addEventListener("mouseover",function(){
        status.innerHTML="lost"
      for (let j=0;j<length-1;j++) {
        boundaries[j].style.backgroundColor = "red"; 
      }  
     });
};
   
   start.addEventListener("click",function(){
    for (let i=0;i<length;i++){
        boundaries[i].style.backgroundColor="white"
        for (let j=0;j<length;j++){
            boundaries[j].style.backgroundColor="white"
        }
    }
    
   }
   )
    
  
 
};

 
 

 
 

   