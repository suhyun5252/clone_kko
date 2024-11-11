window.addEventListener("load",function(){
    const MAIN_DATA_URL = "/apis/main.json";

    fetch(MAIN_DATA_URL)
    .then(function(response){
        // console.log(response);
        const result = response.json();
        return result ;

    })
    .then(function(result){
        // console.log(result);

        let htmlVisual = "";
        for(let i = 0; i<result.length; i++){
            const obj = result[i];
            const visualData =
            `
             <div class="swiper-slide">
                  <a href="${obj.url}">
                    <img src="./images/${obj.pic}" alt="배너이미지" />
                    <h2 class="tit">${obj.title}</h2>
                  </a>
                </div>
            `;
            htmlVisual += visualData;
            // console.log(htmlVisual);
        }
        const visualSlideList = document.querySelector(".visual-slide .swiper-wrapper");
        // console.log(visualSlideList);

        visualSlideList.innerHTML = htmlVisual;

        const visualSlideSW = new Swiper(".visual-slide",{
            loop:true,
            pagination:{
                el: ".visual-slide .swiper-pagination",
                clickable : true
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
              },
              speed : 600
        });
    
    
        // 마우스 오버시 멈춤 나가면 다시 오토플레이
        /* 
        * mouseover와  mouseenter의 차이
        mouseover : div와 그 자식 요소에 마우스를 올려도 이벤트가 발생.
        mouseenter : div에만 마우스를 올려야 이벤트가 발생.
    
        *mouseout와 mouseleave의 차이
        mouseout: 요소와 그 자식 요소를 벗어나면 이벤트 발생.
        mouseleave: 요소 자체를 벗어날 때만 이벤트 발생 (자식 요소는 무시).
         */
    
        const visualSlide = this.document.querySelector(".visual-slide");
        // console.log(visualSlide);
        visualSlide.addEventListener("mouseenter",function(){
            // console.log("인")
            visualSlideSW.autoplay.stop();
    
        });
        visualSlide.addEventListener("mouseleave",function(){
            // console.log("아웃")
            visualSlideSW.autoplay.start();
        });




    })
    .catch(function(error){
        console.log(error)
    })
    
    
    
    


})