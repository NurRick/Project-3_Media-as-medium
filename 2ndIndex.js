let bigArt = 
`<section class="aboutAuthor">
    <div class="aAdiv1">
        <div class="aAava">
            <img src="./assets/Arsen.jpg" />
        </div>
        <div class="aAinfo">
            <div class="aAname">
                <p id="author"></p>
            </div>
            <div class="aAotherInf">
                <div>
                    <p id="date"></p>
                </div>
                <div>
                    <p> · </p>
                </div>
                <div>
                    <p>12 min read</p>
                </div>
                <div>
                    <p> · </p>
                </div>
                <div>
                    <p id="topic"></p>
                </div>
            </div>
        </div>
    </div>
    <div class="aAlinks">
        <div>
            <a href="https://www.linkedin.com/feed/"> <img src="./assets/LinkedIn.png"/></a> 
        </div>
        <div>
            <a href="https://www.facebook.com/"> <img src="./assets/Facebook Circled.png"/></a>      
        </div>
        <div>
            <a href="https://twitter.com/"><img src="./assets/Twitter.png"/></a>
        </div>
    </div>
</section>
<section class="bigSection">
    <div>
        <h1 id="title">EARLY TEAM NEWS FOR READING TIE</h1>
    </div>
    <div>
        <p id="summary"></p>
    </div>
    <div>
        <img src="" alt="article_img"/> 
    </div>
    <div>
        <h1>READING'S TEAM NEWS</h1>
    </div>
    <div>
        <p>Erik ten Hag's side tackle Paul Ince's Championship outfit in the fourth round of the Emirates FA Cup, with the tie kicking off at 20:00 GMT on Saturday evening, to accommodate live coverage on ITV4.<br>
            With the game coming between the two legs of the Carabao Cup semi-final against Nottingham Forest, and United three goals to the good following the first assignment at The City Ground, it is another opportunity for the Reds to impress and continue fighting on all fronts.<br>
            Harry Maguire is available again after serving a one-match Carabao Cup ban in midweek. The skipper is an option to come into the back four, after Lisandro Martinez and Victor Lindelof were paired together against Forest, with both performing well.<br>
            Luke Shaw was absent due to illness, joining Diogo Dalot, Axel Tuanzebe, Donny van de Beek, Anthony Martial and Jadon Sancho on the sidelines.<br> 
            David De Gea kept goal at The City Ground, although Tom Heaton and Jack Butland are also contenders to get an outing in the cup competitions.<br>
            Facundo Pellistri produced another lively outing as substitute, with Ten Hag hinting the Uruguayan may come into his thoughts for the weekend. The winger has yet to make his first competitive start for the Reds.<br>
            The boss will explain on Friday if he is willing to shuffle his pack for the latest game in our packed schedule but Brandon Williams was on the bench last time out, and trained at Carrington on Thursday in front of our cameras, along with the likes of young midfielders Kobbie Mainoo and Zidane Iqbal.<br>
            Royals boss Ince has admitted his players have been flying in training, in a bid to get into the XI at Old Trafford.<br>
            Right-back Kelvin Abrefa should be available again but experienced striker Andy Carroll, the former England international, faces a race against time to be ready after hurting his ankle. It may transpire that he is not back leading the line until the start of next month. Sam Hutchinson (Achilles), Liam Moore (hamstring) and Naby Sarr (foot) have also been on the injured list, and Dejan Tetek is another absentee.<br>
            "We're always a threat from set-pieces," warned Ince. "Cup games are different, you raise your game 20 or 30 per cent and you're hoping every player who plays raises their standard. That's how you get giant-killings.<br>
            "I always felt this was a bit of a distraction. Our priority is to stay in this league and it has not been easy. Training has been great this week and everybody has been running about like they have never before, so choosing an XI won't be easy. Any performance will help us going into the Watford game [in the Championship]."<br>
        </p>
    </div>
    <div class="bsLastLine">
        <div class="bsLLlikes">
            <div>
                <img src="./assets/Heart.png"/>
            </div>
            <div>
                <p>180</p>
            </div>
            <div>
                <img src="./assets/Speech Bubble.png"/>
            </div>
            <div>
                <p>12</p>
            </div>
        </div>
        <div>
            <img src="./assets/Bookmark.png"/>
        </div>
    </div>
</section>`;

const bigArticle =document.getElementById("bigAricle");

async function fetchData() {
    try {
        const response = await fetch ('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=QkC0DyRG3Kn4NbfQHtgRIjYazOG55LXY');
        const data = await response.json();
        console.log(data.results);

        data.results.forEach((item) => {
            let newBigArt = bigArt.replace('id="author">',`id="author">${item.byline}`);
            newBigArt = newBigArt.replace('id="topic">', `id="topic">${item.section}`);
            newBigArt = newBigArt.replace('id="date">', `id="date">${item.published_date}`);
            newBigArt = newBigArt.replace('id="title">', `id="title">${item.title}`);
            newBigArt = newBigArt.replace('id="summary">', `id="summary">${item.abstract}`);
            newBigArt = newBigArt.replace('src=""', `src="${item.multimedia[0].url}"`);
        
            bigArticle.innerHTML += newBigArt;
        });

    } catch (error) {
        console.log(error);
    }
}

fetchData();