window.addEventListener("load",function(){
    // MockData
    // {imgUrl : "경로" , desc : "설명문"}
    // [{},{},{}]


    // api 주소 : json 위치
    const LOGO_DATA_URL = "/apis/logodata.json"
    // api를 통한 데이터 불러오기
    // ---- request : 리퀘스트
    // api를 통해 불러들여진 결과물
    // ---- response :리스판스 
    fetch(LOGO_DATA_URL)
    .then(function(response){
        // console.log(response);
        const result = response.json();
        // console.log(result);
        return result;
    })
    .then(function(result){
        // 1. json 뜯기
        // console.log(result);
        // 2. 반복해서 html 태그를 생성
        let logoHtml = "";
        for(let i = 0; i < 9; i++){
            const obj = result[i];
            const data = `<div class="swiper-slide">
                <a href="#"><img src="./images/etc/${obj.imgUrl}" alt ="${obj.desc}"/> </a>
              </div>`;
            logoHtml += data;
        }
        // console.log(logoHtml);
        // 3. 생성된 html을 원하는 곳에 배치
            const headerLogoTag = document.querySelector(".header-logo-motion .swiper-wrapper");
            // console.log(headerLogoTag);
            headerLogoTag.innerHTML = logoHtml;


        // 4. swiper 생성 및 실행
        const headerLogo = new Swiper(".header-logo-motion",{
            loop : true,
            autoplay : {
                delay : 1500,
                disableOnInteration : false
            },
            effect: "fade",
            fadeEffect: {
                crossFade: true
              }
        });
        headerLogo.autoplay.stop();

        headerLogoTag.addEventListener("mouseenter",function(){
            headerLogo.autoplay.start();
        });
        headerLogoTag.addEventListener("mouseleave",function(){
            headerLogo.autoplay.stop();
            headerLogo.slideToLoop(0);
        });

    })
    .catch(function(error){
        console.log(error);
    });



    // const logoData;

})