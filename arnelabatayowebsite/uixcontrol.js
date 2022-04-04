let navbarweb = document.querySelector('.navbar-web');
let navbtn = document.querySelector('.navbarbtn');
let locaopen = document.querySelector('.locaopen');
let scheduleinfo = document.querySelector('.scheduleinfo');
let locationinfo = document.querySelector('.locationinfo');
let roominfo = document.querySelector('.roominfo');
let schedbtn = document.querySelector('.schedbtn');
let infobtn = document.querySelector('.infobtn');
let gglmps = document.querySelector('.gglmps');
let scheduleinfo2 = document.querySelector('.scheduleinfo2');
let locationinfo2 = document.querySelector('.locationinfo2');
let roominfo2 = document.querySelector('.roominfo2');
let schedbtn2 = document.querySelector('.schedbtn2');
let infobtn2 = document.querySelector('.infobtn2');
let gglmps2 = document.querySelector('.gglmps2');
let scheduleinfo3 = document.querySelector('.scheduleinfo3');
let locationinfo3 = document.querySelector('.locationinfo3');
let schedbtn3 = document.querySelector('.schedbtn3');
let infobtn3 = document.querySelector('.infobtn3');
let gglmps3 = document.querySelector('.gglmps3');
let cardleftarea = document.querySelector('.cardleftarea');
let areapgright = document.querySelector('.areapgright');
let sections = document.querySelector('section');
let body = document.querySelector('body');
let screenloader = document.querySelector('.screenloader');

function scrolltoaboutpg(){
    if(window.innerWidth > 1158 && window.innerWidth < 1180){
       window.scrollTo({
           top: 1147,
           behavior: "smooth"
       }); 
    }
    else if(window.innerWidth > 1180){
        window.scrollTo({
            top: 1147,
            behavior: "smooth"
        }); 
    }
    else if(window.innerWidth < 1158 && window.innerWidth > 800){
        window.scrollTo({
            top: 1094,
            behavior: "smooth"
        }); 
    }
    else if(window.innerWidth < 800 && window.innerWidth > 700){
        window.scrollTo({
            top: 1038,
            behavior: "smooth"
        }); 
    }
}

function loadttms(){
    chonghuafeinfolink()
    chonghuamaninfolink2()
    document.getElementById("chongmandaue").classList.add('parthidden');
    document.getElementById("virtualclinic").classList.add('parthidden');
    setTimeout(function(){
        screenloader.classList.add('faded');
    },500);
    setTimeout(function(){
        screenloader.classList.remove('faded');
        screenloader.classList.add('loaded');
        sections.classList.add('loaded');
        body.classList.add('loaded');
    }, 1000);
}

function openchman(){
    if(window.innerWidth <= 1169){
        document.getElementById("chongmandaue").classList.remove('parthidden');
        document.getElementById("chongmandaue").classList.add('partshown');
        document.getElementById("virtualclinic").classList.remove('partshown');
        document.getElementById("virtualclinic").classList.add('parthidden');
        document.getElementById("chongmedicalarts").classList.remove('partshown');
        document.getElementById("chongmedicalarts").classList.add('parthidden');
        cardleftarea.classList.add('parthidden');
        areapgright.classList.add('expand');
    }
    else{
        document.getElementById("chongmandaue").classList.remove('parthidden');
        document.getElementById("chongmedicalarts").classList.add('parthidden');
        document.getElementById("virtualclinic").classList.add('parthidden');
    }
}

function openvircl(){
    chonghuamaninfolink3();
    if(window.innerWidth <= 1169){
        document.getElementById("virtualclinic").classList.remove('parthidden');
        document.getElementById("virtualclinic").classList.add('partshown');
        document.getElementById("chongmandaue").classList.remove('partshown');
        document.getElementById("chongmandaue").classList.add('parthidden');
        document.getElementById("chongmedicalarts").classList.remove('partshown');
        document.getElementById("chongmedicalarts").classList.add('parthidden');
        cardleftarea.classList.add('parthidden');
        areapgright.classList.add('expand');
    }
    else{
        document.getElementById("virtualclinic").classList.remove('parthidden');
        document.getElementById("chongmedicalarts").classList.add('parthidden');
        document.getElementById("chongmandaue").classList.add('parthidden');
    }
}

function gobklist2(){
    if(window.innerWidth <= 1169){
        cardleftarea.classList.remove('parthidden');
        document.getElementById("chongmandaue").classList.add('parthidden');
        document.getElementById("chongmandaue").classList.remove('partshown');
        areapgright.classList.remove('expand');
    }
}

function gobklist3(){
    if(window.innerWidth <= 1169){
        cardleftarea.classList.remove('parthidden');
        document.getElementById("virtualclinic").classList.add('parthidden');
        document.getElementById("virtualclinic").classList.remove('partshown');
        areapgright.classList.remove('expand');
    }
}

function openchmedi(){
    if(window.innerWidth <= 1169){
        document.getElementById("chongmandaue").classList.add('parthidden');
        document.getElementById("chongmedicalarts").classList.add('partshown');
        document.getElementById("virtualclinic").classList.remove('partshown');
        document.getElementById("virtualclinic").classList.add('parthidden');
        document.getElementById("chongmandaue").classList.remove('partshown');
        document.getElementById("chongmedicalarts").classList.remove('parthidden');
        cardleftarea.classList.add('parthidden');
        areapgright.classList.add('expand');
    }
    else{
        document.getElementById("chongmandaue").classList.add('parthidden');
        document.getElementById("chongmedicalarts").classList.remove('parthidden');
        document.getElementById("virtualclinic").classList.add('parthidden');
    }
}

function gobklist(){
    if(window.innerWidth <= 1169){
        cardleftarea.classList.remove('parthidden');
        document.getElementById("chongmedicalarts").classList.remove('partshown');
        document.getElementById("chongmedicalarts").classList.add('parthidden');
        areapgright.classList.remove('expand');
    }
}

function togglenavbar(){
    navbarweb.classList.toggle('active');
    navbtn.classList.toggle('active');
}
function chonghuafeschedlink(){
    locationinfo.classList.add('parthidden');
    roominfo.classList.add('parthidden');
    scheduleinfo.classList.remove('parthidden');
    infobtn.classList.remove('active');
    schedbtn.classList.add('active');
    gglmps.classList.add('parthidden');
}
function chonghuafeinfolink(){
    locationinfo.classList.remove('parthidden');
    roominfo.classList.remove('parthidden');
    scheduleinfo.classList.add('parthidden');
    infobtn.classList.add('active');
    schedbtn.classList.remove('active');
    gglmps.classList.remove('parthidden');
}
function chonghuamanschedlink2(){
    locationinfo2.classList.add('parthidden');
    roominfo2.classList.add('parthidden');
    scheduleinfo2.classList.remove('parthidden');
    infobtn2.classList.remove('active');
    schedbtn2.classList.add('active');
    gglmps2.classList.add('parthidden');
}
function chonghuamaninfolink2(){
    locationinfo2.classList.remove('parthidden');
    roominfo2.classList.remove('parthidden');
    scheduleinfo2.classList.add('parthidden');
    infobtn2.classList.add('active');
    schedbtn2.classList.remove('active');
    gglmps2.classList.remove('parthidden');
}
function chonghuamanschedlink3(){
    locationinfo3.classList.add('parthidden');
    scheduleinfo3.classList.remove('parthidden');
    infobtn3.classList.remove('active');
    schedbtn3.classList.add('active');
    gglmps3.classList.add('parthidden');
}
function chonghuamaninfolink3(){
    locationinfo3.classList.remove('parthidden');
    scheduleinfo3.classList.add('parthidden');
    infobtn3.classList.add('active');
    schedbtn3.classList.remove('active');
    gglmps3.classList.add('parthidden');
}