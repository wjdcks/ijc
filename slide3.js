var slideIndex3 = 0;
    showSlides3();

    function showSlides3() {
        var w;
        var slides3 = document.getElementsByClassName("slide3");
       
        for (w = 0; w < slides3.length; w++) {
            slides3[w].style.display = "none";
        }
        slideIndex3++;
        if (slideIndex3 > slides3.length) {
            slideIndex3 = 1
        }
        slides3[slideIndex3 - 1].style.display = "block";
    
        setTimeout(showSlides3, 2000); // 2초마다 이미지가 체인지됩니다
    }