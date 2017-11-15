/*global $*/
window.onload = function(){
    let box = document.getElementById("check");
    if(box.checked){
        $("#lookup").click(function(e){
            e.preventDefault();
            $.ajax({
                url:"world.php?all=true"
            }).done(function(response) {
                document.getElementById("result").innerHTML = response;
            });   
        });
    }else{
        $("#lookup").click(function(e){
            e.preventDefault();
            $.ajax({
                url:"world.php?country=" + $('#country').val()
            }).done(function(response) {
                document.getElementById("result").innerHTML = response;
            });
        });
    }
};