window.addEventListener("load",function(){
    const NEWS_DATA_URL = "/apis/news.json"
    fetch(NEWS_DATA_URL)
    .then(function(response){
        // console.log("뉴스 : ",response)
        const result = response.json();
        return result;

    })
    .then(function(result){
        // console.log("뉴스결과 : ",result);
        let newsHtml = "";
        for(let i = 0; i < result.length; i++){
            const obj = result[i];
            const tag =
            `
            <a href="${obj.link}" class="thum">
                <div class="thum-img">
                    <img src="./images/${obj.imgpath}" alt="${obj.category}" />
                </div>
                <div class="thum-cate">
                    <img src="./images/icon/${obj.icon}" alt="${obj.category}" />
                    <span style="color : ${obj.txtcolor}">${obj.category}</span>
                </div>
                <h5 class="thum-title">${obj.title}</h5>
                <span class="thum-date">${obj.day}</span>
            </a>
            `;
            // console.log("뉴스 HTML : ",tag);
            newsHtml += tag;

        }
        
        const newNewsList = document.querySelector("#news-api");
        // console.log("새로운 뉴스 리스트 : ",newNewsList);
        newNewsList.innerHTML = newsHtml;
    })
    .catch(function(error){
        console.log(error);
    })


})