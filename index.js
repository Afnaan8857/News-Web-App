
//    --- Nav bar edits START ---
let toggle_icon = document.getElementById('toggle-icon');
let toggle_items = document.getElementsByClassName('tg-menu');


let api_url = 'https://newsapi.org/v2/everything?q=tesla&from=2023-07-19&sortBy=publishedAt&apiKey=49a92e824e5841b7ac81b9f51cfa32f6';

async function fetchnews() {
    let response = await fetch(api_url);
    let data = await response.json();

    console.log(data.articles)
    binddata(data.articles);
}

let binddata = article => {
    let content = document.getElementById('main-content');
    let big_card = document.getElementById('big-card');
    let medium_card = document.getElementById('medium-card');
    let small_card = document.getElementById('small-card');
    content.innerHTML = '';
    let big_data = article.splice(0, 6);
    let medium_data = article.splice(7, 20);
    let small_data = article.splice(25, 50)
    console.log(big_data);
    big_data.forEach(article => {

   console.log(article)
     
        let div = document.createElement('div');
        content.appendChild(div);

        div.innerHTML =`<div class="big-card card" id="big-card">
        <a href=${article.url
        }>
          <img src=${article.urlToImage} alt="">
          <div class="heading">${article.title}</div>
  
          <p>
            ${article.description}
          </p>
        </a>
      </div>`
    });

}

fetchnews();