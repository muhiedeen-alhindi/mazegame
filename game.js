 
window.onload=function(){
    var start = document.getElementById('start');
    var end = document.getElementById('end');
    var boundaries = document.getElementsByClassName('boundary');
    var status = document.getElementById('status');
    console.log(end)
 
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
 
 

 

 console.log(boundaries.length)

 
 
 
  
 
};

 
 

 
 

 