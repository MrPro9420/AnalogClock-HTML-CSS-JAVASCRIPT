
setInterval(() => {
   var d = new Date();
  var htime = d.getHours();
  var mtime = d.getMinutes();
  var stime = d.getSeconds();
  var hdeg = 30*htime + mtime/2;
  var  mdeg = 6*mtime;
  var sdeg = 6*stime;

   hour.style.transform = `rotate(${hdeg}deg)`;
   minute.style.transform = `rotate(${mdeg}deg)`;
   second.style.transform = `rotate(${sdeg}deg)`;
 
   

}, 1000);

