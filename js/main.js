window.addEventListener("load",function(){
    
        // 1. 스크롤시 해더에 줄이 생긴다.
        const header = document.querySelector(".header");
        // console.log(header);
        
        window.addEventListener("scroll",function(){
            const scrollPositionY = window.scrollY;
            // console.log(scrollPositionY);
    
            if(scrollPositionY > 0){
                header.classList.add("active");
            }else{
                header.classList.remove("active");
            }
        });
    
    
        // 2. 해더안 메뉴바꾸기
        window.addEventListener("load",function(){
            const mobileBtn = this.document
        })
    
    });
    
    