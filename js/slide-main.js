// window.addEventListener("load",function(){
//     const MAIN_DATA_URL = "/apis/main.json";

//     fetch(MAIN_DATA_URL)
//     .then(function(response){
//         // console.log(response);
//         const result = response.json();
//         return result ;

//     })
//     .then(function(result){
//         // console.log(result);

//         let htmlVisual = "";
//         // 변경 : 4라는 숫자를 result.length 즉 길이(4)로 바뀌었다.
//         // 변경 : pc에서는 4개 mb에서는 오른쪽 카드가 포함하여 5개가 되도록 문제 해결
//         for(let i = 0; i<result.length; i++){
//             const obj = result[i];
//             const visualData =
//             `
//              <div class="swiper-slide" data-pc="${obj.pc}" data-mb="${obj.mb}">
//                   <a href="${obj.url}">
//                     <img src="./images/${obj.pic}" alt="배너이미지" />
//                     <h2 class="tit">${obj.title}</h2>
//                   </a>
//                 </div>
//             `;
//             htmlVisual += visualData;
//             // console.log(htmlVisual);
//         }
//         const visualSlideList = document.querySelector(".visual-slide .swiper-wrapper");
//         // console.log(visualSlideList);

//         visualSlideList.innerHTML = htmlVisual;


//         // 추가 : 현재 pc화면인지 mb화면인지 구분
//         // 현재 어떠한 상태인지 저장을 먼저 해야한다.
//         // c추가 : 우리는 document.querySeleter 로
//         // .visual-slider
//         let windowState ="PC";
//         window.addEventListener("resize",function(){
//             // 윈도우 너비 제기
//             const windowWidth = window.innerWidth;
//             // console.log(windowWidth);

//             // 조건에 따라 버전 확인
//             if(windowWidth > 1024){
//                 if(windowState != "PC"){
//                     windowState = "PC";
//                     console.log("PC 버전")
//                 }

//             }else{
//                 if(windowState != "MB"){
//                     windowState = "MB";
//                     console.log("MB 버전");
//                 }

//             }
//             console.log(windowState)
//         })












//         const visualSlideSW = new Swiper(".visual-slide",{
//             loop:true,
//             pagination:{
//                 el: ".visual-slide .swiper-pagination",
//                 clickable : true
//             },
//             autoplay: {
//                 delay: 2500,
//                 disableOnInteraction: false
//               },
//               speed : 600
//         });
    
    
//         // 마우스 오버시 멈춤 나가면 다시 오토플레이
//         /* 
//         * mouseover와  mouseenter의 차이
//         mouseover : div와 그 자식 요소에 마우스를 올려도 이벤트가 발생.
//         mouseenter : div에만 마우스를 올려야 이벤트가 발생.
    
//         *mouseout와 mouseleave의 차이
//         mouseout: 요소와 그 자식 요소를 벗어나면 이벤트 발생.
//         mouseleave: 요소 자체를 벗어날 때만 이벤트 발생 (자식 요소는 무시).
//          */
    
//         const visualSlide = this.document.querySelector(".visual-slide");
//         // console.log(visualSlide);
//         visualSlide.addEventListener("mouseenter",function(){
//             // console.log("인")
//             visualSlideSW.autoplay.stop();
    
//         });
//         visualSlide.addEventListener("mouseleave",function(){
//             // console.log("아웃")
//             visualSlideSW.autoplay.start();
//         });




//     })
//     .catch(function(error){
//         console.log(error)
//     })
    
    
    
    


// })





window.addEventListener("load", function () {
    const MAIN_DATA_URL = "/apis/main.json";
    fetch(MAIN_DATA_URL)
      .then(function (response) {
        const result = response.json();
        return result;
      })
      .then(function (result) {
        let htmlVisual = "";
        // 변경 : 4 라는 숫자를 result.length 즉 길이(5)로 바꿨다.
        for (let i = 0; i < result.length; i++) {
          // 각 세부 html 글자 만들기
          // 변경 : 지금의 내용은 문법이 아닙니다.
          // 변경 : 지금 변경되는 내용은 프로그래머가 생각을 표현하고 문제 해결시도
          const tag = `
          <div class="swiper-slide" data-pc="${result[i].pc}" data-mb="${result[i].mb}">
              <a href="${result[i].url}">
                <img src="./images/${result[i].pic}" alt="${result[i].title}" />
                <!-- 추가 부분 -->
                <div class="title">${result[i].title}</div>
              </a>
            </div>
          `;
  
          // console.log(tag);
          // 모든 html 글자 하나로 합치기
          htmlVisual += tag;
        }
        //   console.log(htmlNews);
        // html 출력하기
        const visualTag = document.querySelector(".visual-slide .swiper-wrapper");
        // console.log(cardTag);
  
        visualTag.innerHTML = htmlVisual;
  
        const slideList = document.querySelectorAll(".visual-slide .swiper-wrapper .swiper-slide");
        // console.log("innerHtml 이후 ", slideList);

        slideList.forEach(function(item){
            console.log(item)
        });
  
        // 추가  : 현재 PC 화면인지 아니지를 먼저 구분합니다.
        // 추가 : 현재 어떤 상태인지를 먼저 저장해 둡니다.
        // 추가 : 우리는 document.querySelect 로
        // .visual-slide .swiper-wrapper .swiper-slide 를 찾을 수 있을까요?
  
        let windowState = "PC";
        // 윈도우 너비 파악
        const windowWidth = window.innerWidth;
        // 조건에 따라서 버전 확인
        if (windowWidth > 1024) {
          if (windowState != "PC") {
            windowState = "PC";
            console.log("PC 버전");
          }
        } else {
          if (windowState != "MB") {
            windowState = "MB";
            console.log("MB 버전");
          }
        }
        console.log(windowState);
  
        window.addEventListener("resize", function () {
          // 윈도우 너비 파악
          const windowWidth = window.innerWidth;
          // 조건에 따라서 버전 확인
          if (windowWidth > 1024) {
            if (windowState != "PC") {
              windowState = "PC";
              console.log("PC 버전");
            }
          } else {
            if (windowState != "MB") {
              windowState = "MB";
              console.log("MB 버전");
            }
          }
        });
  
        const visualSlideSW = new Swiper(".visual-slide", {
          loop: true,
          pagination: {
            el: ".visual-slide .swiper-pagination",
            clickable: true,
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          speed: 1000,
        });
        // 개발자 추가 작업 : 마우스 가 Enter 가 되면 (마우스 걸치면)
        const visaulSide = document.querySelector(".visual-slide");
        // console.log(visaulSide);
  
        visaulSide.addEventListener("mouseenter", function () {
          // console.log("오버");
          visualSlideSW.autoplay.stop();
        });
  
        visaulSide.addEventListener("mouseleave", function () {
          // console.log("아웃");
          visualSlideSW.autoplay.start();
        });
      })
      .catch(function () {});
  });
  
