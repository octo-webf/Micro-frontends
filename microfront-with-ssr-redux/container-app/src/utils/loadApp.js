export default function loadApp(element) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      element.innerHTML = xmlHttp.responseText;
      [].forEach.call(element.querySelectorAll("script"), function (
        nonExecutableScript
      ) {
        var script = document.createElement("script");
        //console.log(nonExecutableScript);

        if (nonExecutableScript.innerHTML === "") {
          script.setAttribute("src", nonExecutableScript.src);
        } else {
          script.innerHTML = nonExecutableScript.innerHTML;
        }
        script.setAttribute("type", "text/javascript");
        element.appendChild(script);
        nonExecutableScript.parentNode.removeChild(nonExecutableScript);
      });
    }
  };
  xmlHttp.open("GET", element.dataset.url, true);
  xmlHttp.send(null);
}
