var slideIndex8 = 0;
    showSlides8();

    function showSlides8() {
        var e;
        var slides8 = document.getElementsByClassName("slide8");
       
        for (e = 0; e < slides8.length; e++) {
            slides8[e].style.display = "none";
        }
        slideIndex8++;
        if (slideIndex8 > slides8.length) {
            slideIndex8 = 1
        }
        slides8[slideIndex8 - 1].style.display = "block";
    
        setTimeout(showSlides8, 2000); // 2초마다 이미지가 체인지됩니다
    }