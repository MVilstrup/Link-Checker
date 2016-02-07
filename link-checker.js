function getReq() {
    var req = false;
    if(window.XMLHttpRequest) {
        try {
            req = new XMLHttpRequest();
        } catch(e) {
            req = false;
        }
    } else if(window.ActiveXObject) {
        try {
            req = new ActiveXObject("Microsoft.XMLHTTP");
        } catch(e) {
            req = false;
        }
    }
    if (! req) {
        alert("Your browser does not support XMLHttpRequest.");
    }
    return req;
}

var links = document.getElementsByTagName("a");
for (var i=0; i < links.length; i++){
  var req = getReq();
  try {
    req.open("GET", links[i].href, false);
    req.send("");
  } catch (e) {
    success = false;
    // error_msg = "Error: " + e;
  }
  console.log(links[i].text + ": " + req.status);
}
