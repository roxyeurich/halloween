var dispDiv = document.getElementById("display");


function makeItRain(){
    
  var candy = document.createElement("img");
    var mleft = Math.round(Math.random()*100);
    var mdim = Math.round(Math.random()*40)+10;
    
    candy.src = "SVGS/candy1.svg";
    candy.className = "candies";
    candy.style.left = mleft+"%";
    candy.style.height = mdim+"px";
    candy.style.width = mdim+"px";
    
    dispDiv.appendChild(candy);
    
    if(mdim > 40){
        candy.style.transition = "top 6s";
    }else if (mdim > 30){
        candy.style.transition = "top 7s";
    } else if (mdim > 20){
        candy.style.transition = "top 9s";
    }else {
        candy.style.transition = "top 10s";
    }
    
    setTimeout(function(){
        candy.style.top = "110%";
        
        setTimeout (function(){
            dispDiv.removeChild(candy);
        },10000);
    },10); 
    
}

function makeItRainTwice(){
    
  var candy = document.createElement("img");
    var mleft = Math.round(Math.random()*100);
    var mdim = Math.round(Math.random()*40)+10;
    
    candy.src = "SVGS/candy2.svg";
    candy.className = "candies";
    candy.style.left = mleft+"%";
    candy.style.height = mdim+"px";
    candy.style.width = mdim+"px";
    
    dispDiv.appendChild(candy);
    
    if(mdim > 40){
        candy.style.transition = "top 6s";
    }else if (mdim > 30){
        candy.style.transition = "top 7s";
    } else if (mdim > 20){
        candy.style.transition = "top 9s";
    }else {
        candy.style.transition = "top 10s";
    }
    
    setTimeout(function(){
        candy.style.top = "110%";
        
        setTimeout (function(){
            dispDiv.removeChild(candy);
        },10000);
    },10); 
    
}

function makeItRainTrice(){
    
  var candy = document.createElement("img");
    var mleft = Math.round(Math.random()*100);
    var mdim = Math.round(Math.random()*40)+10;
    
    candy.src = "SVGS/candy3.svg";
    candy.className = "candies";
    candy.style.left = mleft+"%";
    candy.style.height = mdim+"px";
    candy.style.width = mdim+"px";
    
    dispDiv.appendChild(candy);
    
    if(mdim > 40){
        candy.style.transition = "top 6s";
    }else if (mdim > 30){
        candy.style.transition = "top 7s";
    } else if (mdim > 20){
        candy.style.transition = "top 9s";
    }else {
        candy.style.transition = "top 10s";
    }
    
    setTimeout(function(){
        candy.style.top = "110%";
        
        setTimeout (function(){
            dispDiv.removeChild(candy);
        },10000);
    },10); 
    
}

function makeItRainFour(){
    
  var candy = document.createElement("img");
    var mleft = Math.round(Math.random()*100);
    var mdim = Math.round(Math.random()*40)+10;
    
    candy.src = "SVGS/candy4.svg";
    candy.className = "candies";
    candy.style.left = mleft+"%";
    candy.style.height = mdim+"px";
    candy.style.width = mdim+"px";
    
    dispDiv.appendChild(candy);
    
    if(mdim > 40){
        candy.style.transition = "top 6s";
    }else if (mdim > 30){
        candy.style.transition = "top 7s";
    } else if (mdim > 20){
        candy.style.transition = "top 9s";
    }else {
        candy.style.transition = "top 10s";
    }
    
    setTimeout(function(){
        candy.style.top = "110%";
        
        setTimeout (function(){
            dispDiv.removeChild(candy);
        },10000);
    },10); 
    
}

function notEnoughCandy(){
    makeItRain();
    makeItRainTwice();
    makeItRainTrice();
    makeItRainFour();
    makeItRain();
    makeItRainTwice();
    makeItRainTrice();
    makeItRainFour();
}


var timer = null;
document.getElementById("happy").addEventListener("click", function() {
    
// document.getElementById("candy1") .style.top = "100%";
//    document.getElementById("candy2") .style.top = "100%";

 timer = setInterval(notEnoughCandy, 300);   
 

notEnoughCandy();
    
});


document.getElementById("background").addEventListener("click", function(){
    clearInterval(timer);
});


//document.getElementById("freq").addEventListener("change", function(){
//    clearInterval(timer);
//    var mnum = document.getElementById("freq").value;
//    mnum = parseInt(mnum) * 100;
//    var spd = 1100 - mnum;
//    timer = setInterval(notEnoughCandy, mnum, spd);
//});
