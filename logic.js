console.log('Toofaan Express News');
const apiKey = '010c282573f04ca99f38fe37a2d2f355';
const countryIsoCode = 'in';
const newsSection = document.getElementById('newsSection');

let xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${countryIsoCode}&apiKey=${apiKey}`, true);

xhr.onload = setTimeout(function () {
    if (xhr.status === 200) {
        let jsonData = JSON.parse(xhr.responseText);
        console.log(jsonData);
        let articles = jsonData['articles'];
        let html = '';

        for (news in articles) {
            if (articles[news].urlToImage == null) {
                articles[news].urlToImage = 'newsImg.jpg';
            }
            if (articles[news].title == null) {
                articles[news].title = 'Breaking News Trending Today';
            }
            if (articles[news].description == null) {
                articles[news].description = 'Click At Read More To Read About Full Article';
            }
            if (articles[news].author == null) {
                articles[news].author = 'Unknown';
            }

            html += `<div class="col-lg-6 col-md-6 col-12">
                <div class="card h-100">
                    <img src="${articles[news].urlToImage}" class="card-img-top" alt="News Image">
                    <div class="card-body">
                        <h5 class="card-title">${articles[news].title}</h5>
                        <p class="card-text">${articles[news].description}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-left text-muted">Author:&nbsp;${articles[news].author}</small>
                        <div class="my-2 text-end">
                            <a href="${articles[news].url}" target="_blank" class="btn btn-primary">Read More
                                <span class="iconify-inline" data-icon="akar-icons:arrow-right"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>`;
        }
        newsSection.innerHTML = html;
    } else {
        console.log('server error');
    }
}, 1500);

xhr.send();
