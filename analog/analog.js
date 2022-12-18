const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(()=> {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

})


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