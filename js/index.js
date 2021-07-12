console.log("This Site is made By - Ashutosh Kumar");
console.log("Github Profile :- https://www.github.com/ashutosh-kumar-2020");


// Initialize the news api parameters
let source = 'bbc-news';
let apiKey = 'decaefec24b6434aa7c72002a9203baa';
let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

// Grab the news container
let newsAccordion = document.querySelector("#headlines");

// Create an ajax get request
const xhr = new XMLHttpRequest();
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
xhr.open('GET', `${url}`, true);


// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {

            let sec_news = `<div class="media border p-3">
            <div class="home-article-img">
            <img src="${element['urlToImage']}" alt="News"
                class="mr-3 mt-3" style="width: 290px;">
                </div>
            <div class="media-body">
                <h4>${element['title']}</h4>
                <p>${element['content']}</p>
                <a href="${element['url']}"><button class="btn btn-primary btn-sm">Read More</button></a>
            </div>
        </div>
    </div>`;


            newsHtml += sec_news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured");
    }
}

xhr.send();




