var slideIndex5 = 0;
    showSlides5();

    function showSlides5() {
        var e;
        var slides5 = document.getElementsByClassName("slide5");
       
        for (e = 0; e < slides5.length; e++) {
            slides5[e].style.display = "none";
        }
        slideIndex5++;
        if (slideIndex5 > slides5.length) {
            slideIndex5 = 1
        }
        slides5[slideIndex5 - 1].style.display = "block";
    
        setTimeout(showSlides5, 2000); // 2초마다 이미지가 체인지됩니다
    }