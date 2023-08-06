var slideIndex4 = 0;
    showSlides4();

    function showSlides4() {
        var q;
        var slides4 = document.getElementsByClassName("slide4");
       
        for (q = 0; q < slides4.length; q++) {
            slides4[q].style.display = "none";
        }
        slideIndex4++;
        if (slideIndex4 > slides4.length) {
            slideIndex4 = 1
        }
        slides4[slideIndex4 - 1].style.display = "block";
    
        setTimeout(showSlides4, 2000); // 2초마다 이미지가 체인지됩니다
    }