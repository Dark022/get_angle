//CHANGE BETWEEN LAYOUTS
var cbutton = document.getElementById("clbutton");
cbutton.onclick = ChangeLayout;
var val = true;

function ChangeLayout(){
    var form_con = document.getElementById('form');
    var m = document.getElementById('minutes');
    var h = document.getElementById('hours');
    

    if(val == true){
        m.style.width = "490px"
        h.style.width = "490px"
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

//CHANGE BETWEEN LAYOUTS

//CALCULATE ANGLE
var sbutton = document.getElementById("sibutton");
sbutton.onclick = CalculateAngle;

function CalculateAngle(){


    var h_num = parseFloat(document.getElementById("hours").value);
    var m_num = parseFloat(document.getElementById("minutes").value);
    var badreq = document.getElementById("brq");
    var fangle = 0.0;
    
    var gh = h_num;
    var gm = m_num;

    badreq.setAttribute("style", "display: none;");
    if(h_num > 0 && h_num < 13 && m_num < 60){

        document.getElementById("p").innerHTML = '<span>At ' + gh + ' <span class="green">Hours</span> with ' + gm + ' <span class="green">Minutes</span> there is an angle of: </span>';
        
        fangle = FinalAngle(h_num, m_num);

        document.getElementById("angle").innerHTML = fangle + 'º';
  
    }
    else{
        badreq.setAttribute("style", "display: flex;");
           
    }
}

function FinalAngle(h, m){
    h = (0.5 * (h * 60 + m)); 
    m = (6 * m); 
    return Math.abs(h - m);
}