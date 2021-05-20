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
    alert(amount + "::" + behind)
  var notify = new Notification("WATER", {
    body: "You need to drink " + amount + "oz of water. \n You are " + behind + "oz behind.",
    icon: "https://www.kepanoegg.com/images/puertoheadbob.gif",
  });
}

javascript: (function () {
    var lotElement = null;
    var spans = document.getElementsByTagName("span");
    var spansList = Array.prototype.slice.call(spans);
    spansList.forEach(function(element){if(element.innerText == "Lot:"){lotElement = element}});
    alert(lotElement.parentNode.childNodes[2].innerText);
})();
