function getPrintTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  return   h + ":" + m + ":" + s;
}

function getDayTimeInSeconds() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    return   (h * 3600) + (m * 60) + + s;
  }

function checkTime(i) {
  if (i < 10) {i = "0" + i}; 
  return i;
}

function convertTimeToSeconds(h, m)
{
    return (h * 3600) + (m * 60)
}