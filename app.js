(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
function downloadFile() {
    var fileUrl = "C:/Users/anand/Desktop/testdata/file.pdf"; // Replace with the URL or server-side script that generates the file to download
    var fileName = "test.pdf"; // Replace with the desired name for the downloaded file
    var xhr = new XMLHttpRequest();
    xhr.open("GET", fileUrl, true);
    xhr.responseType = "blob";
    xhr.onload = function() {
      if (xhr.status === 200) {
        var blob = new Blob([xhr.response], { type: "application/pdf" });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    };
    xhr.send();
  }
