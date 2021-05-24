function getPrintTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  return   h + ":" + m + ":" + s;
}

function getPrintTimeFromSeconds(timeInSeconds) {
  var h = Math.floor(timeInSeconds / 3600);
  var m =  Math.floor((timeInSeconds % 3600) / 60)
  var s = (timeInSeconds % 3600) % 60;
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

function getNextInterval(start,interval)
{
  var sinceStart = (getDayTimeInSeconds() - start)
  return start + (sinceStart - (sinceStart % interval)) + interval
}