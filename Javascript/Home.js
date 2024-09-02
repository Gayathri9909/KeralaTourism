function Bigimg(img) {
    img.style.transform = "scale(1.1)"; 
    img.style.transition = "transform 0.3s ease"; 
}

function normal(img) {
    img.style.transform = "scale(1)"; 
}

document.addEventListener('DOMContentLoaded', function() {
  
    var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');
    var img3 = document.getElementById('img3');
    var img4 = document.getElementById('img4');
    var img5 = document.getElementById('img5');
    var img6 = document.getElementById('img6');
    var img7 = document.getElementById('img7');
    var img8 = document.getElementById('img8');

    img1.addEventListener('click', function() {
        window.location.href = "https://maps.app.goo.gl/kq89mJD6ucCJpt2J8";
    });

    img2.addEventListener('click', function() {
        window.location.href = "https://maps.app.goo.gl/V7UfxESeyGsHumBcA";
    });

    img3.addEventListener('click', function() {
        window.location.href = "https://maps.app.goo.gl/6W7mYY9k9twDGShW8";
    });

    img4.addEventListener('click', function() {
        window.location.href = "https://maps.app.goo.gl/AHWRccbLyqnyvp257";
    });

    img5.addEventListener('click', function() {
        window.location.href = "https://maps.app.goo.gl/A1h8AF1VcNFYjj786";
    });

    img6.addEventListener('click', function() {
        window.location.href = "https://maps.app.goo.gl/PD9CBoi414D8suBy6";
    });

    img7.addEventListener('click', function() {
        window.location.href = "https://maps.app.goo.gl/oX8tiHdGDNwHWn6K9";
    });

    img8.addEventListener('click', function() {
        window.location.href ="https://maps.app.goo.gl/R9XEVMpw6TSMA3vJ7";
    });
});
