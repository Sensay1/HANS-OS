function getTime() {
    //Finner tiden
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    h = checkTime(h);
    //Sjekker om klokken må oppdateres
    var verdi = document.getElementById("clock").textContent;
    var delt = verdi.split(":");
    if (m != delt[1]) {
        document.getElementById("clock").textContent = h + ':' + m;
        alarm();
    }
    //Sjekker hvert 3dje sekund
    var t = setInterval(getTime, 3000);
}

function checkTime(i) {
if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
return i;
}

function alarm() {
    //sjekker om alarmen er på og om klokka er lik alarmklokka
    var verdi = document.getElementById("vekkeTid").textContent;
    var vekking = verdi.substr(0, 5)
    var bell = verdi.substr(5, verdi.length - 1)
    var tid = document.getElementById("clock").textContent;
    
    if ((vekking == tid) && (bell == '🔔')) {
        //Kode for vekking
        document.getElementById("info").textContent = "ALARM!";
    }
}

function påav() {
    //deler opp i stringen i tid og bjelle
    var verdi = document.getElementById("vekkeTid").textContent;
    var delt = verdi.split("");
    var tall = verdi.substr(0, 5)
    var bell = verdi.substr(5, delt.length - 1)//bjellen tar opp felre plasser enn 1
    //endrer bjellen
    if(bell == "🔔") {
        document.getElementById("vekkeTid").textContent = tall + '🔕'; 
    }
    else if (bell == "🔕") {
        document.getElementById("vekkeTid").textContent = tall + '🔔'; 
    }
    else {
        document.getElementById("vekkeTid").textContent = "Error, bell hverken lik 🔕 eller 🔔"; 
    }
}
//kode for endring av vekketid DONT TOUCH! is works! :)
function tid(i) {
    //finner ut om jeg skal øke eller minske klokkeverdien og med hvor mye:
    var verdi = document.getElementById("vekkeTid").textContent;
    var delt = verdi.split("");
    var bell = verdi.substr(5, delt.length - 1)
    var tegn = Math.sign(i)
    var selector = (tegn * i -1)
    delt[selector] = Number(delt[selector]) + tegn;
    //if helvete:
    if(selector == 0){
        if(delt[selector] == -1){
            delt[selector] = 2;
        }
        else if(delt[selector] == 3){
            delt[selector] = 0;
        }
        if (delt[1] > 3 && delt[0] == 2){
            delt[1] = '3';
        }
    }
    else if(selector == 1){
        if(delt[0]==2){
            if(delt[selector] == -1){
                delt[selector] = 3;
            }
            else if(delt[selector] == 4){
                delt[selector] = 0;
            }  
        }
        else{
            if(delt[selector] == -1){
                delt[selector] = 9;
            }
            else if(delt[selector] == 10){
                delt[selector] = 0;
            }            
        }
    }    
    else if(selector == 3){
        if(delt[selector] == -1){
            delt[selector] = 5;
        }
        else if(delt[selector] == 6){
            delt[selector] = 0;
        }
    }    
    else if(selector == 4){
        if(delt[selector] == -1){
            delt[selector] = 9;
        }
        else if(delt[selector] == 10){
            delt[selector] = 0;
        }
    }
    
    var nytall = delt[0] + delt[1] + ':' + delt[3] + delt[4];
    document.getElementById("vekkeTid").textContent = nytall + bell; 
}