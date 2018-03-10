//Vars for Items

var start = document.getElementById("start");
var eyeOpen = document.getElementById("bigEye");
var eyeClose = document.getElementById("eyeBlink");
var smallEyes = document.getElementById("smallEye");
var smallClosed = document.getElementById("smallClosed");
var pumpkinOn = document.getElementById("pumpkin");
var pumpkinOff = document.getElementById("pumpkinOff");
var drip = document.getElementById("deadRip");
var ciao = document.getElementById("ciao");
var moon = document.getElementById("bigMoon");
var witch = document.getElementById("witch");
var house = document.getElementById("theHouse");
var switchL = document.getElementById("switchLight");
var candleU = document.getElementById("candleWingUp");
var candleD = document.getElementById("candleWingDown");
var candle = document.getElementById("candle");
var fireOff =  document.getElementById("fireOff");
var fireOn =  document.getElementById("fireOn");
var owl = document.getElementById("owl");
var tree = document.getElementById("tree");
var treeWind = document.getElementById("treeWind");
var Fri = document.getElementById("YellowFri");
var BF = document.getElementById("FridayTBlack");
var aliceCat = document.getElementById("aliceCat");
var ghost = document.getElementById("ghostSpooky");
var bat = document.getElementById("batKing");
var miniBats = document.getElementById("miniBats");
var miniBatsFlap = document.getElementById("miniBatsFlap");
var BatFlap = document.getElementById("BatFlap");
var bow = document.getElementById("bow");
var mySpider = document.getElementById("mySpider");
var myNet = document.getElementById("myNet");
var myLadyBug = document.getElementById("myLadyBug");
var heart = document.getElementById("heart");
var bonus = document.getElementById("bonus");
var nyanbg = document.getElementById("nyanbg");
var background = document.getElementById("background");
var nyny = document.getElementById("nyny");
var bgAudio = new Audio('audio/TrickOrTreat.mp3');

//Vars for Facts
var factOne = document.getElementById("factOne");
var factTwo = document.getElementById("factTwo");
var factThree = document.getElementById("factThree");
var factFour = document.getElementById("factFour");
var factFive = document.getElementById("factFive");
var factSix = document.getElementById("factSix");
var factSeven = document.getElementById("factSeven");
var factEight = document.getElementById("factEight");
var factNine = document.getElementById("factNine");
var factTen = document.getElementById("factTen");



document.getElementById("display").style.backgroundImage = ("SVGS/skull.png");

//Bow - FirstPage Animation
bow.addEventListener("click", function() {
    
function slidePage() {
  var page = document.getElementById("pg1");   
  var pos = 0;
  var id = setInterval(frame, 2);
  function frame() {
    if (pos == 2000) {
      clearInterval(pg1);
    } else {
      pos++; 
       
      page.style.right= pos + 'px'; 
    }
  }
}
   
    
slidePage(); 
    
// my backup css animation Slide first page******   document.getElementById("pg1").style.webkitAnimationName = "leaveScreen";
//   
//  document.getElementById("pg1").style.webkitAnimationName = "leaveScreen";
    
    
    bgAudio.play();
    bgAudio.volume = 0.2;
    
});



// Hello World Animation
    
mySpider.addEventListener("click", function() {
if(heart.style.display == "none"){
        heart.style.display = "block";
        
     }  else {
       heart.style.display = "none";
   }    

});


//Start button, Eyes Animation and Fact One



start.addEventListener("click", function(){
    
    function blinkIt(){
        
        eyeOpen.style.display = "block";
        setTimeout(function() {
            eyeOpen.style.display = "none";
    
        }, 1300);
    }
        
    setInterval(blinkIt, 1500);
    
 eyeOpen.addEventListener("click", function(){
    fact.style.display = "block";
    smallEyes.style.display = "block";
    smallClosed.style.display = "block";
    factOne.style.display = "block";
    
    
     function blinkSmall(){
        
       smallEyes.style.display = "block";
        setTimeout(function() {
            smallEyes.style.display = "none";
        }, 1300);
    }
        
    setInterval(blinkSmall, 1500);
    
    smallEyes.addEventListener("click", function(){
    factOne.style.display = "none";
});
    
});
  
});


//Pumpkin Animation and Fact Two

pumpkinOn.addEventListener("mouseenter", function(){
    pumpkinOff.style.display = "block";
    factTwo.style.display = "block";
});

pumpkinOff.addEventListener("mouseleave", function(){
    pumpkinOff.style.display = "none";
    factTwo.style.display = "none";
});


//Cat Animation and Fact Three

cat.addEventListener("click", function(){
    cat.style.display = "none";
    wiredCat.style.display = "block";
    factThree.style.display = "block";
    
});

 
wiredCat.addEventListener("click", function(){
     
      cat.style.display = "block";  
      wiredCat.style.display = "none";
      factThree.style.display = "none";
 
    });


//RIP Animation and Fact Four

drip.addEventListener("click", function(){
    
    
    if(ciao.style.display == "none"){
        ciao.style.display = "block"; 
        factFour.style.display = "block";
        
    } else {
        ciao.style.display = "none";
        factFour.style.display = "none";
    }
});


// Moon Animation and Fact Five

moon.addEventListener("click", function(){
    
    
    function fly(){
witch.style.left = "100%";
    
setTimeout(function(){
   witch.style.left = "100%";
}, 50); 
    }
    setInterval(fly, 200);
    
    if (factFive.style.display == "none") {
        factFive.style.display = "block";
    } else {
    factFive.style.display = "none";
    }
    
    var laughAudio = new Audio('audio/witchLaugh.mp3');
    laughAudio.play();
    laughAudio.volume = 0.2;
});



//Bat Animation and Fact Six

batFlap.addEventListener("click", function(){
      

    
    if (miniBats.style.opacity == 0 && miniBatsFlap.style.opacity == 0) {
        factSix.style.display = "block";
        miniBats.style.opacity = 1;
        miniBatsFlap.style.opacity = 1;
        
    } else{
        factSix.style.display = "none";
        miniBats.style.opacity = 0;
        miniBatsFlap.style.opacity = 0;
    }

    
});


     function batWings(){
          
        batFlap.style.display = "none";
        batKing.style.display = "block";   
            
        setTimeout(function() {
    
         batFlap.style.display = "block";
         batKing.style.display = "none" ; 
    
        }, 130);
    }
        
    setInterval(batWings, 300);



     function miniBatWings(){
          
        miniBatsFlap.style.display = "none";
        miniBats.style.display = "block";   
            
        setTimeout(function() {
    
         miniBatsFlap.style.display = "block";
         miniBats.style.display = "none" ; 
    
        }, 130);
    }
        
    setInterval(miniBatWings, 300);

//House Animation and Fact Seven

house.addEventListener("click", function(){
    
    if (factSeven.style.display == "none") {
        factSeven.style.display = "block";
    } else{
        factSeven.style.display = "none";
    };
  
    
       function MakeItBig(){
           
        house.setAttribute("transform", "scale(1.5)");
         
            
    setTimeout(function() {
        
        house.setAttribute("transform", "scale(1)");
        

        
        }, 200);
   };
        
    setInterval(MakeItBig, 100); 
    
  
   var knockAudio = new Audio('audio/knock.mp3');
   knockAudio.play();
    knockAudio.volume = 0.5;
    
 
});


//Lights Animation and Fact Eight  
    
switchL.addEventListener("click", function(){
    
    if (switchOn.style.display == "none"){
        switchOn.style.display = "block";
        factEight.style.display = "block";
    } else{
        switchOn.style.display = "none";
        factEight.style.display = "none";
        }
});

//Candle Animation and Fact Nien

candle.addEventListener("click", function(){
    
    if (fireOn.style.display == "none") {
        factNien.style.display = "none";
        fireOn.style.display = "block";
        fireOff.style.display == "none";
        
    } else{
        factNien.style.display = "block";
        fireOn.style.display = "none";
        fireOff.style.display = "block";
    }
       
 
});


//Owl Animation and Fact Ten

owl.addEventListener("click", function(){
    if(factTen.style.display == "block"){
        factTen.style.display = "none"
    } else {
       factTen.style.display = "block" 
    
   var owlAudio = new Audio('audio/owlaudio.mp3');

    owlAudio.play();
    owlAudio.volume = 0.2;
    }
});



//5 Animations w/o facts **********

//Candle Wings Animation - 1

     function fly(){
          
        candleU.style.display = "none";
        candleD.style.display = "block";   
            
        setTimeout(function() {
    
         candleU.style.display = "block";
        candleD.style.display = "none" ; 
    
        }, 100);
    }
        
    setInterval(fly, 300);

//Tree Animation - 2
  
tree.addEventListener("mouseenter", function(){
    treeWind.style.display = "block";
    wind.style.display = "block";
    tree.style.display = "none";
});

treeWind.addEventListener("mouseleave", function(){
    treeWind.style.display = "none";
    wind.style.display = "none";
    tree.style.display = "block";
});


//Friday 13 - 3

Fri.addEventListener("mouseenter", function(){
    
    BF.style.display = "block";  
    
});

BF.addEventListener("mouseleave", function(){
    BF.style.display = "none"; 

});

// ghost animation -4 
    function appear(){
          
        ghost.style.display = "none";
            
        setTimeout(function() {
            ghost.style.display = "block";
        }, 2000);
    }
        
    setInterval(appear, 25000);

//aliceCat Animation - 5

    function meow(){
          
        
        aliceCat.style.display = "none";   
            
        setTimeout(function() {
            aliceCat.style.display = "block"; 
        }, 3000);
    }
        
    setInterval(meow, 15000);



//Happy Halloween title and make it rain candy - 6
//linked doc- candy.js




//Bonus Animation

var nyanAudio = new Audio('audio/nyan.mp3');
nyanAudio.volume = 0.2;

bonus.addEventListener("click", function(){
    
    if(background.style.display == "block"){
        nyanbg.style.display = "block";
        background.style.display = "none";
        bgAudio.muted = true;
        nyanAudio.play();
    
    } else {
        background.style.display = "block"
        nyanbg.style.display = "none";
        bgAudio.muted = false;
        nyanAudio.pause();
    }
    
    
    
    
       function nyanFly(){
           
nyny.style.left = "100%";
    
setTimeout(function(){
   nyny.style.left = "100%";
}, 50); 
    }
    setInterval(nyanFly, 200);
    
});
