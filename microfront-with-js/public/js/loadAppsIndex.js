function loadPage(element) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      element.innerHTML = xmlHttp.response;
      [].forEach.call(element.querySelectorAll("script"), function (
        nonExecutableScript
      ) {
        var script = document.createElement("script");
        console.log(nonExecutableScript);
        if (nonExecutableScript.innerHTML === "") {
          script.setAttribute("src", nonExecutableScript.src);
          if (nonExecutableScript.type !== "") {
            script.setAttribute("type", nonExecutableScript.type);
          }
          if (nonExecutableScript.defer) {
            script.defer = true;
          }
          if (nonExecutableScript.noModule) {
            script.noModule = true;
          }
        } else {
          script.innerHTML = nonExecutableScript.innerHTML;
        }
        element.appendChild(script);
        console.log(script);
        nonExecutableScript.parentNode.removeChild(nonExecutableScript);
      });
    }
  };
  xmlHttp.open("GET", element.dataset.url, true);
  xmlHttp.send(null);
}
document.querySelectorAll(".load-app").forEach(loadPage);
