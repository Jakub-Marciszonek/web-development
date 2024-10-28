function CityInMap(){
    var City = document.getElementById("City").value;
    var Adress = document.getElementById("Adress").value;
    console.log(City, Adress)
    
    document.getElementById("map").src = "https://www.google.com/maps?q="+Adress+City+"&output=embed"
}
