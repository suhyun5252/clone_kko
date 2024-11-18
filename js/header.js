// jQuery의 목적 2가지
// html 및 css 제어
// 외부데이터 연동
// 이미지가 다 로드되었는지는 관여 안함
// jQuery(); = $();

// html과 css가 화면에 보일 준비가 끝나면
// image, font, mp3, mp4 는 로딩 체크를 못함.
// window.addEventListener("DOMContentLoaded",function(){}) 와 같음
// $(document).ready(function(){});
$(document).ready(function(){
    var header = $(".header");
    // 2. 스크롤 체크하기
    $(window).on("scroll",function(){
        var scrollPositionY = $(window).scrollTop();
        if(scrollPositionY>0){
            header.addClass("active");
        }else{
            header.removeClass("active");
        }
    });
});
// 이미지 바꾸기 및 메뉴 펼침
$(document).ready(function () {
    var mobileButton = $("#mb-menu-bt");
    var mobileButtonImage = $("#mb-menu-bt img");
    var openIcon = "./images/icon/icon-hbr.png";
    var closeIcon = "./images/icon/icon-close.png";
    var mobileMenuBg = $(".bg-mb-menu");
    var mobileMenu = $(".mb-menu");
  
    mobileButton.on("click", function () {
      var imageSrc = mobileButtonImage.attr("src");
      if (imageSrc == openIcon) {
        mobileButtonImage.attr("src", closeIcon);
        mobileMenuBg.addClass("bg-mb-menu-active");
        mobileMenu.addClass("mb-menu-active");
      } else {
        mobileButtonImage.attr("src", openIcon);
        mobileMenuBg.removeClass("bg-mb-menu-active");
        mobileMenu.removeClass("mb-menu-active");
      }
    });
  
    $(window).on("resize", function () {
      var windowWidth = $(window).width();
      if (windowWidth > 1024) {
        mobileButtonImage.attr("src", openIcon);
        mobileMenuBg.removeClass("bg-mb-menu-active");
        mobileMenu.removeClass("mb-menu-active");
      }
    });
  });


// -----------------------------바닐라 스크립트 ---------------------//
// 협업에서는 소스 컨벤션 중요
window.addEventListener("load",function(){
    //   console.log("load 완료")
    // 1. 보관함을 만들고 
    // 2. 라벨을 붙여 주겠다.
    // 3. 라벨이 붙은 보관함에 재료를 담겠다.
    // 4. 그리고 제어하겠다.
    
    const searchBtn = document.querySelector('#search');
    // console.log(searchBtn);
    /* 
        1. 사용자가 스크롤바로 화면 아래로 이동시
        2. header 클래스에 하단에 라인을 생성
        3. 사용자가 스크롤바로 화면 최상단으로 이동시
        4. header 클래스에 하단에 라인 제거
    */
    
        // 1. header를 보감함에 담는다.
        const header = document.querySelector(".header");
        // console.log(header);
    
        // 2. 스크롤 체크하기
        window.addEventListener("scroll",function(){
            const scrollPositionY = window.scrollY;
            // console.log(scrollPositionY);
    
            // 3. header에 css 추가하기
            if(scrollPositionY>0){
                header.classList.add("active");
            }else{
                header.classList.remove("active");
            }
       
        
        });
    
    
    });
    
    
    
    // 아이콘바꾸기 메뉴펼침
    
    window.addEventListener("load",function(){
        /*
            * 아이콘 이미지 바꾸기
                - <img src="경로" alt=""> 경로를 수정 : html 글자수정 
                - 클릭시 이미지 바꾸기(토글)
         */
    
        // 1. 버튼 역할하는 ID 찾기
        const mobileBtn = document.querySelector("#mb-menu-btn");
        // console.log(mobileBtn);
    
        // 2. 버튼 안에 있는 이미지를 찾기
        const mobileBtnImg = document.querySelector("#mb-menu-btn img");
        // console.log(mobileBtnImg);
    
        // 3. 버튼 안에 있는 이미지의 src는 무엇일까?
        // getAttribute 속성값 찾을때 사용
        // const srcString = mobileBtnImg.getAttribute("src")
        // console.log(srcString);
    
    
    
        // 모바일 메뉴 관련 내용을 찾아서 이름을 주고 보관하자
        // 1. 모바일 배경
        const mobileMenuBg  = document.querySelector(".bg-mb-menu");
        // console.log(mobileMenuBg);
        // 2. 모바일 메뉴
        const mobileMenu = document.querySelector(".mb-menu")
        // console.log(mobileMenu);
    
    
    
    
    
        // 4. 버튼 클릭 처리
        const openIcon = "./images/icon/icon-hbr.png";
        const closeIcon = "./images/icon/icon-close.png";
        
        mobileBtn.addEventListener("click", function () {
            // img의 src에 담겨진 글자를 수정
            const imgSrc = mobileBtnImg.getAttribute("src");
            // console.log(imgSrc);
    
            if(imgSrc == openIcon){
                // 이미지 src를 교체
                mobileBtnImg.setAttribute("src",closeIcon);
                mobileMenuBg.classList.add("bg-mb-menu-active");
                mobileMenu.classList.add("mb-menu-active");
            }else{
                mobileBtnImg.setAttribute("src",openIcon);
                mobileMenuBg.classList.remove("bg-mb-menu-active");
                mobileMenu.classList.remove("mb-menu-active");
            }
            
        });

        mobileMenuBg.addEventListener("click",function(){
            mobileBtnImg.setAttribute("src",openIcon);
            mobileMenuBg.classList.remove("bg-mb-menu-active");
            mobileMenu.classList.remove("mb-menu-active");
        })
    
    
    
    
    
    
        
        // 반응형 테스트
        // pc 버젼 , 모바일 버젼 모두 초기화
        window.addEventListener("resize",function(){
            // 웹브라우저의 넓이를 체크한다.
            const windowWidth = window.innerWidth;
            // console.log(windowWidth);
            // css 코드에 반응형 작동이 1024px부터 작동하니깐
            if(windowWidth > 1024){
                // 모바일 버튼을 원래대로 되돌린다.
                mobileBtnImg.setAttribute("src",openIcon);
                mobileMenuBg.classList.remove("bg-mb-menu-active")
                mobileMenu.classList.remove("mb-menu-active")
            }else{}
        });
    });
    
    
    
    