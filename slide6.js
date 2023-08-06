var slideIndex6 = 0;
    showSlides6();

    function showSlides6() {
        var e;
        var slides6 = document.getElementsByClassName("slide6");
       
        for (e = 0; e < slides6.length; e++) {
            slides6[e].style.display = "none";
        }
        slideIndex6++;
        if (slideIndex6 > slides6.length) {
            slideIndex6 = 1
        }
        slides6[slideIndex6 - 1].style.display = "block";
    
        setTimeout(showSlides6, 2000); // 2초마다 이미지가 체인지됩니다
    }