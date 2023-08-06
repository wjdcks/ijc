var slideIndex2 = 0;
    showSlides2();

    function showSlides2() {
        var z;
        var slides2 = document.getElementsByClassName("slide2");
       
        for (z = 0; z < slides2.length; z++) {
            slides2[z].style.display = "none";
        }
        slideIndex2++;
        if (slideIndex2 > slides2.length) {
            slideIndex2 = 1
        }
        slides2[slideIndex2 - 1].style.display = "block";
    
        setTimeout(showSlides2, 2000); // 2초마다 이미지가 체인지됩니다
    }