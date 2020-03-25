
var cbutton = document.getElementById("clbutton");
cbutton.onclick = ChangeLayout;
var val = true;

function ChangeLayout(){
    var form_con = document.getElementById('form');
    var m = document.getElementById('minutes');
    var h = document.getElementById('hours');
    

    if(val == true){
        m.style.width = "100%"
        h.style.width = "100%"
        form_con.setAttribute("style", "flex-flow: column wrap; height: auto;");
        val = false;
    }
    else if(val == false){
        m.style.width = "230px"
        h.style.width = "230px"
        form_con.setAttribute("style", "flex-flow: row wrap; height: 60px;");
        val = true;
    }




    
}