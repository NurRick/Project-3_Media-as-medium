
const articlesFromAPI = [
    {
        id: 0,
        authorPhoto: "./assets/Arsen.jpg",
        author: "Arsen Baiseupov",
        topic: "Team news",
        date: "Thursday 26 January 2023",
        title: "EARLY TEAM NEWS FOR READING TIE",
        summary:
            "Manchester United are back in domestic cup action this weekend, when taking on Reading at Old Trafford.",
        readingTime: "12 min read",
        src: "./assets/Erik_.png",
    },
    {
        id: 1,
        authorPhoto: "./assets/Ereke.jpg",
        author: "Yerkebulan Omar",
        topic: "Team news",
        date: "Thursday 26 January 2023",
        title: "THE CELEBRATION THAT`S SWEEPING WORLD SPORT",
        summary:
            "The dazzling form Manchester United forward Marcus Rashford is currently experiencing under Erik ten Hag is no secret.",
        readingTime: "12 min read",
        src: "./assets/Marcus_.png",

    },
    {
        id: 2,
        authorPhoto: "./assets/Damir.jpg",
        author: "Damir Shayakhmet",
        topic: "United Now",
        date: "Thursday 25 January 2023",
        title: "DE GEA STOP UP FOR SAVE OF THE MONTH",
        summary:
            "David De Gea was at full stretch against Crystal Palace when keeping out a goalbound effort by Odsonne Edouard in our recent 1-1 draw.",
        readingTime: "12 min read",
        src: "./assets/David_.png",
    },
];

let article = 
`<section class="firstContent">
    <div class="firstContentText">
        <div class="fcIntroduse">
            <div class="fcIntAva" >
                <img src="id=authorPhoto" alt="authorPhoto_img"/>
            </div>
            <div class="fcIntHead">
                <h5 id="author"></h5>
                <h5 class="opacity">in</h5>
                <h5 id="topic"></h5>
                <h5  class="opacity" id="date"></h5>
            </div> 
        </div>
        <div>
            <a href="Project3_page2.html"> <h1 class="fcTitle" id="title"></h1> </a> 
        </div>
        <div class="fcCont">
            <p id="summary"></p>
        </div>
        <div class="fcLastLine">
            <div class="fcLastLine1">
                <div class="fcLastLineButton">
                    <button>Read more</button>
                </div>
                <div>
                    <p class="opacity" id="readingTime"></p>
                </div>
                <div>
                    <p> · </p>
                </div>
                <div>
                    <p class="opacity">Selected for you</p>
                </div>
            </div>
            <div class="fcLastLineGB">
                <div>
                    <img src="./assets/LinkedIn.png"/>
                </div>
                <div>
                    <img src="./assets/Facebook Circled.png"/>
                </div>
                <div>
                    <img src="./assets/Twitter.png"/>
                </div>
            </div>
        </div>
    </div>
    <div class="firstContentImg">
        <img class="fCI" src="" alt="article_img"/>
    </div>
</section>`;

const articles =document.getElementById("articles");

articlesFromAPI.forEach((item) => {
    let newArticle = article.replace('src="id=authorPhoto"', `src="${item.authorPhoto}"`);
    newArticle = newArticle.replace(
        'id="author">',
        `id="author">${item.author}`);
    newArticle = newArticle.replace(
        'id="topic">', 
        `id="topic">${item.topic}`);
    newArticle = newArticle.replace('id="date">', `id="date">${item.date}`);
    newArticle = newArticle.replace('id="title">', `id="title">${item.title}`);
    newArticle = newArticle.replace('id="summary">', `id="summary">${item.summary}`);
    newArticle = newArticle.replace('id="readingTime">', `id="readingTime">${item.readingTime}`);
    newArticle = newArticle.replace('src=""', `src="${item.src}"`);
    


    articles.innerHTML += newArticle;
});