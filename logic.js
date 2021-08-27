console.log('Toofaan Express News');
const apiKey = '010c282573f04ca99f38fe37a2d2f355';
const countryIsoCode = 'in';
const newsSection = document.getElementById('newsSection');
const preloaderWrap = document.getElementById('preloaderWrap');
const trendingHeader = document.getElementById('trendingHeader');

let xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${countryIsoCode}&apiKey=${apiKey}`, true);


xhr.onload = function () {
    setTimeout(function () {
        preloaderWrap.classList.add('visually-hidden');
    }, 1000);
    if (xhr.status === 200) {
        trendingHeader.classList.remove('visually-hidden');
        let jsonData = JSON.parse(xhr.responseText);
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

            html += `<div class="col-lg-4 col-md-6 col-12">
                <div class="card h-100">
                    <img src="${articles[news].urlToImage}" class="card-img-top" alt="News Image">
                    <div class="card-body">
                        <h5 class="card-title">${articles[news].title}</h5>
                        <p class="card-text">${articles[news].description}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-left text-muted">Author:&nbsp;${articles[news].author}</small>
                        <div class="my-2 text-end">
                            <a href="${articles[news].url}" target="_blank" class="btn btn-outline-dark">Read More
                                <span class="iconify-inline" data-icon="akar-icons:arrow-right"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>`;
        }
        newsSection.innerHTML = html ;
    } else {
        console.log('server error');
        html = `            <div class="container position-absolute top-50 start-50 translate-middle col-lg-4 col-md-6 col-sm-10 mb-5">
                <div class="card bg-light border-0">
                    <img src="error.png" id="errorImg" class="card-image-top image-fluid" alt="Error Image">
                    <div class="card-body text-center">
                        <h5 class="card-title">Oops, Something gone wrong !</h5>
                        <div class="card-text lead">
                            Check Your Internet Connection<br>
                            OR it may be a server error<br>
                            You can <a class="text-primary" href="index.html"><b>reload</b></a> the page and try again.
                        </div>
                    </div>
                </div>
            </div>`;
        newsSection.innerHTML = html;
    }
}

xhr.send();
