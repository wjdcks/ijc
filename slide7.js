var slideIndex7 = 0;
    showSlides7();

    function showSlides7() {
        var e;
        var slides7 = document.getElementsByClassName("slide7");
       
        for (e = 0; e < slides7.length; e++) {
            slides7[e].style.display = "none";
        }
        slideIndex7++;
        if (slideIndex7 > slides7.length) {
            slideIndex7 = 1
        }
        slides7[slideIndex7 - 1].style.display = "block";
    
        setTimeout(showSlides7, 2000); // 2초마다 이미지가 체인지됩니다
    }