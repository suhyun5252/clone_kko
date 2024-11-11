window.addEventListener("load",function(){
    const CARD_DATA_URL = "/apis/cards.json";
    fetch(CARD_DATA_URL)
    .then(function(response){
        // console.log("카드",response);
        const result = response.json();
        return result;
    })
    .then(function(result){
        // console.log("카드결과",result);
        let cardHtml = "";
        for(let i=0;i<5;i++){
            const obj = result[i];
            const cardTag = 
            `
            <div class="swiper-slide">
                <a href="${obj.link}" class="card-wrap">
                    <div class="card-img">
                    <img src="./images/${obj.imgpath}" alt="${obj.cardname}"/>
                    </div>
                    <div class="card-info">
                    <h5 class="card-cate">${obj.cardname}</h5>
                    <span class="card-count">${obj.cardno}</span>
                    </div>
                </a>
              </div>
            `;
            // console.log("카드 HTML :", cardTag);
            cardHtml += cardTag;
        };
        const cardList = document.querySelector(".list-card");
        // console.log(cardList);
        cardList.innerHTML = cardHtml;

        const mbCardList = document.querySelector(".mb-card-slide-wrap .swiper-wrapper");
        // console.log("모바일 카드 리스트 : " ,mbCardList);
        mbCardList.innerHTML = cardHtml;

        const cardSlide = new Swiper(".mb-card-slide-wrap",{
            slidesPerView: 4,
            spaceBetween: 20,
            loop :true
        });
    })
    .catch(function(error){
        console.log(error)
    })




   

})