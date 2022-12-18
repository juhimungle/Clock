
setInterval(() =>{
    let hour = document.getElementById("hours");
    let minute = document.getElementById("minutes");
    let second = document.getElementById("seconds");
    let ampm = document.getElementById("ampm");

    let hh = document.getElementById("hh");
    let mm = document.getElementById("mm");
    let ss = document.getElementById("ss");

    let hr_dot = document.querySelector('.hr_dot');
    let min_dot = document.querySelector('.min_dot');
    let sec_dot = document.querySelector('.sec_dot');


    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? "PM" : "AM";

    // convert 24hr to 12hr
    if (h > 12) {
        h = h - 12;
    }

    //add zero before single number

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;



    hour.innerHTML = h + "<br> <span> Hours </span>";
    minute.innerHTML = m + "<br> <span> Minutes </span>";
    second.innerHTML = s + "<br> <span> Seconds </span>";
    ampm.innerHTML = am;

    

    hh.style.strokeDashoffset = 440 - (440 * h) / 12; //for  12 hrs
    mm.style.strokeDashoffset = 440 - (440 * m) / 60; // 60 min
    ss.style.strokeDashoffset = 440 - (440 * s) / 60; // 60 sec

    hr_dot.style.transform = `rotate(${h * 30}deg)`; // 360/12 = 30
    min_dot.style.transform = `rotate(${m * 6}deg)`; // 360/60 = 6
    sec_dot.style.transform = `rotate(${s * 6}deg)`; // 360/60 = 6


    // background image 
    let bg;
    if( h <= 4 && am == "AM" ) {
        bg = `url("midnight.jpg")`;
     }
    else if( h <= 6 && am == "AM" ) {
        bg = `url("sunset.webp")`;
     }
    else if( h <= 8 && am == "AM" ) {
        bg = `url("mor.webp")`;
     }
    else if( h <= 11 && am =="AM" ) {
        bg = `url("morning.jpg")`;
     }
    // else if( h = 12 && am == "PM" ) {
    //     bg = `url("afternoon.jpg")`;
    //  }
    
    else if( h <= 5 && am == "PM" ) {
        bg = `url("afternoon.jpg")`;
     }
    else if( h <= 6 && am == "PM" ) {
        bg = `url("evening.jpg")`;
     }
    else if( h <= 11 && am == "PM" ) {
        bg = `url("night.jpg")`;
     }
     else if( h = 12 && am == "AM" ) {
        bg = `url("night.jpg")`;
     }
    else{
         bg = `url("bg.jpg")`;
    }
   
    
    const body = document.querySelector("body");
    body.style.background = `${bg} center/cover`;



var now = new Date();
// document.write(now);
var dname = now.getDay(),
    mo =  now.getMonth(),
    dnum =  now.getDate(),
    yr =  now.getFullYear();

var month = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var ids = ["dayname", "month", "daynum", "year"];

var values = [week[dname], month[mo], dnum, yr];

for(var i = 0; i < ids.length; i++){
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

})