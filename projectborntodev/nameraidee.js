
function claoday(){
    var weight = parseInt(document.getElementById("weight").value);
    var age = parseInt(document.getElementById("age").value);
    var high = parseInt(document.getElementById("high").value);
    var sex = document.getElementById("sex").value;

    if(sex == 1){
        var clao = 66 + (13.7*weight)+(5*high)-(6.8*age);
    }
    else if (sex == 2){
        var clao = 665 + (9.6 * weight) + (1.8*high)-(4.7*age);
    }
    document.getElementById("cla").innerHTML = "แคลอรี่ที่ควรได้รับต่อวันคือ " + clao;
}