function checkNotificationPermissions() {
  if (Notification.permission == "default") {
    Notification.requestPermission();
  }

  if (Notification.permission == "granted") {
    return true;
  }
  return false;
}

function waterNotice(amount, behind) {
    var realBehind = 0;
    if(behind > 0){realBehind = behind;}
  var notify = new Notification("WATER", {
    body: "You need to drink " + amount + "oz of water. \n You are " + realBehind + "oz behind.",
    icon: "https://www.kepanoegg.com/images/puertoheadbob.gif",
  });
}