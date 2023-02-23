 
window.onload=function(){
    var start = document.getElementById('start');
    var end = document.getElementById('end');
    var boundaries = document.getElementsByClassName('boundary');
    var status = document.getElementById('status');
     


    var score = document.getElementsByClassName('boundary example');
    
  
  var newelement=document.createElement("h3")

  newelement.textContent = 'Score='+0;
  score[0].appendChild(newelement);
newelement.style.marginTop="-1px"
 
start.addEventListener("mouseover", function() {
    start.style.backgroundColor = "red";
    status.innerHTML="start the game"
    
});
 
start.addEventListener("mouseout", function() {
   start.style.backgroundColor = "white";
    status.innerHTML="continue without touching the walls"
 
});


end.addEventListener("mouseover", function() {
    end.style.backgroundColor = "red";
    status.innerHTML="you win"
    
});


 end.addEventListener("mouseout", function() {
    end.style.backgroundColor = "white";
    status.innerHTML="you win"
 
});
 
  let length=boundaries.length
for (let i = 0; i < length; i += 1){
    boundaries[i].addEventListener("mouseover",function(){
        status.innerHTML="lost"

     boundaries[i].style.backgroundColor = "red"; 

    });
    boundaries[i].addEventListener("mouseout",function(){
        status.innerHTML="tryagain"

     boundaries[i].style.backgroundColor = "white"; 
     

    });

};
   
 

 
};

 
 

 
 

   