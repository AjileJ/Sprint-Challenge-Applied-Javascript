// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// axios.get('http://fakeserver.com/data')
//     .then( response => {
        // Remember response is an object, response.data is an array.
    //     response.data.forEach( item => {
    //         let button = buttonCreator(item);
    //         parent.appendChild(button);
    //     })
    // })
    // .catch( error => {
    //     console.log("Error:", err);
    // })

axios.get("https://lambda-times-backend.herokuapp.com/articles")
  .then(function (response) {
    console.log(response.data.articles);
})
.catch(function (error){
  console.log(error);
})

    function cardCreator(item) {
      const card = document.createElement('div');
      const headline = document.createElement('div');
      const author = document.createElement('div');
      const imgContainer = document.createElement('div');
      const imgSrc = document.createElement('img');
      const authorName = document.createElement('span');
  
      card.classList.add('card');
      headline.classList.add('headline');
      author.classList.add('author');
      imgContainer.classList.add('img-container');
      
      headline.textContent = `${headline}`;
      imgSrc.src = `${authorPhoto}`;
      authorName.textContent = `${authorName}`;
  
      const cardsContainer = document.querySelector('cards-container');
      card.appendChild(headline);
      card.appendChild(author);
      author.appendChild(imgContainer);
      imgContainer.appendChild(imgSrc);
      author.appendChild(authorName);
  
      cardsContainer.appendChild(card);
      console.log(card);

      response.data.forEach( item => {
        let card = cardCreator(item);
        cardsContainer.appendChild(card);
    })
})
.catch( error => {
    console.log("Error:", err);
})
}


