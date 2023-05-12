function downloadFile() {
    var fileName = 'Jara Rodriguez - CV.docx';
    var filePath = './' + fileName;
    var link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.click();
}


let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}

function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}