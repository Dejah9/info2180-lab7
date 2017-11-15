/*global $*/
window.onload = function(){
    let box = document.getElementById("check");
   
    $("#lookup").click(function(e){
        e.preventDefault();
        let url = "world.php?";
        if($("#check").is(":checked")){
            url+="all=true";
        }
        else{
            url += "country="+ $('#country').val();
        }

        $.ajax({
            url:url
        }).done(function(response) {
            document.getElementById("result").innerHTML = response;
        });   
    });
};
