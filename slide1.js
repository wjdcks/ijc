var slideIndex1 = 0;
    showSlides1();

    function showSlides1() {
        var i;
        var slides1 = document.getElementsByClassName("slide1");
       
        for (i = 0; i < slides1.length; i++) {
            slides1[i].style.display = "none";
        }
        slideIndex1++;
        if (slideIndex1 > slides1.length) {
            slideIndex1 = 1
        }
        slides1[slideIndex1 - 1].style.display = "block";
    
        setTimeout(showSlides1, 1000); // 2초마다 이미지가 체인지됩니다
    }