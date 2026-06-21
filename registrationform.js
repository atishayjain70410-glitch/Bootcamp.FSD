function displayName(){
    document.getElementById("showName").innerHTML =
    document.getElementById("name").value;
}

function displayGender(){
    document.getElementById("showGender").innerHTML =
    document.getElementById("gender").value;
}

function displayEmail(){
    document.getElementById("showEmail").innerHTML =
    document.getElementById("email").value;
}

function displayMobile(){
    document.getElementById("showMobile").innerHTML =
    document.getElementById("mobile").value;
}

function resetForm(){
    document.getElementById("name").value="";
    document.getElementById("gender").selectedIndex=0;
    document.getElementById("email").value="";
    document.getElementById("mobile").value="";
}

function resetDisplay(){
    document.getElementById("showName").innerHTML="NAME";
    document.getElementById("showGender").innerHTML="GENDER";
    document.getElementById("showEmail").innerHTML="EMAIL";
    document.getElementById("showMobile").innerHTML="MOBILE";
}