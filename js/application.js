



//CHANGE BETWEEN LAYOUTS
const cbutton = document.getElementById("clbutton");
cbutton.onclick = ChangeLayout;
let val = true;

function ChangeLayout(){
    const form_con = document.getElementById('form');
    const m = document.getElementById('minutes');
    const h = document.getElementById('hours');
    
    if(val){
        m.style.width = "490px"
        h.style.width = "490px"
        form_con.setAttribute("style", "flex-flow: column wrap; height: auto;");
    }
    else{
        m.style.width = "230px"
        h.style.width = "230px"
        form_con.setAttribute("style", "flex-flow: row wrap; height: 60px;");   
    }
    val = !val;
}

//CHANGE BETWEEN LAYOUTS

//CALCULATE ANGLE
const sbutton = document.getElementById("sibutton");
const badRequestElement = document.getElementById("brq");

sbutton.addEventListener('click',() =>{
    badRequestElement.setAttribute("style", "display: none;");
    const hoursValue = document.getElementById("hours").value;
    const minutesValue = document.getElementById("minutes").value;
    let totalAngle;
    const totalAngleObj = new Clock (hoursValue, minutesValue);
    totalAngle = totalAngleObj.calculateAngle()

    if(!totalAngle){
        badRequestElement.setAttribute("style", "display: flex;");
    }
    else{
        document.getElementById("p").innerHTML = `<span>At <span class="green">${hoursValue}</span> <span class="green">Hours</span> with <span class="green">${minutesValue}</span> <span class="green">Minutes</span> there is an angle of: </span>`;
        document.getElementById("angle").innerHTML = `${totalAngle}º`;     
    }
    totalAngle = 0.0;   
});

class Clock{
    constructor(hour, minutes){
        this.hour = parseFloat(hour);
        this.minutes = parseFloat(minutes);
    }
    calculateAngle(){
        if(this.hour > 0 && this.hour < 13 && this.minutes < 60){
            const hourAngle = (0.5 * (this.hour * 60 + this.minutes));
            const minutesAngle = (6 * this.minutes);
            return Math.abs((hourAngle - minutesAngle));
        }
            return false;
    }
}

/*
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

        document.getElementById("p").innerHTML = `<span>At ${h_num} <span class="green">Hours</span> with ${m_num} <span class="green">Minutes</span> there is an angle of: </span>`;
        
        fangle = FinalAngle(h_num, m_num);

        document.getElementById("angle").innerHTML = fangle + 'º';
  
    }
    else{
        badreq.setAttribute("style", "display: flex;");
           
    }
}

function FinalAngle(h, m){
    h = (0.5 * (hour * 60 + minutes)) ; 
    m = (6 * m);; 
    return Math.abs(h - m);
}
*/