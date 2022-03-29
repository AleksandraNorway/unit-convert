 
 function calC() {
   
    let number = document.getElementById('nam').value


    let lenghth = number * 3.28084
    let feet = number / 3.28084
    
    document.getElementById("user-input").textContent = number;
    document.getElementById("lenghth-result").textContent = lenghth.toFixed(3) ;
    document.getElementById("feet-result-2").textContent = number;
    document.getElementById("user-input-2").textContent = feet.toFixed(3);

    let gallons = number * 0.264172
    let liters = number * 3.785412
    document.getElementById("user-input-3").textContent = number;
    document.getElementById("liters-result").textContent = number;
    document.getElementById("gallons-result").textContent = gallons.toFixed(3) ;
    document.getElementById("user-input-4").textContent = liters.toFixed(3) ;

    let pound = number * 2.2
    let kilos = number * 0.45359237
    document.getElementById("user-input-5").textContent = number;
    document.getElementById("user-input-6").textContent = number;
    document.getElementById("pounds-result").textContent = pound.toFixed(3) ;
    document.getElementById("kilos-result").textContent = kilos.toFixed(3) ;

     
    }
    var icon = document.getElementById("icon");
icon.onclick = function()   {
   
    document.body.classList.toggle("dar-theme");
    if(document.body.classList.contains("dar-theme")){
        icon.src = "./moon.png";
        document.getElementById("span-icon").innerHTML = "Dark mode"
    } else  {
        icon.src = "./light-mode.webp";
        document.getElementById("span-icon").innerHTML = "Light mode"
    }
}
 
 
 
 
 
 
 



