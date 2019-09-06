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

    const container = document.querySelector('.cards-container');

    function cardCreator(headline, imgUrl, authorName){
      const cardContainer = document.createElement('div');
      const headLine = document.createElement('div');
      const author = document.createElement('div');
      const imgContainer = document.createElement('div');
      const img = document.createElement('img');
      const span = document.createElement('span');

      cardContainer.classList.add('card');
      headLine.classList.add('headline');
      author.classList.add('author');
      imgContainer.classList.add('img-container');

      cardContainer.appendChild(headLine);
      cardContainer.appendChild(author);
      author.appendChild(imgContainer);
      imgContainer.appendChild(img);
      author.appendChild(span);

      headLine.textContent = headline;
      img.src = imgUrl;
      span.textContent = authorName;

      return cardContainer
    }

     axios.get('https://lambda-times-backend.herokuapp.com/articles')
     .then((response)=>{
       response.data.articles['javascript'].forEach((article)=>{
         const newCard = cardCreator(article.headline, article.authorPhoto, article.authorName)
         container.appendChild(newCard);
       })
       response.data.articles['bootstrap'].forEach((article)=>{
        const newCard = cardCreator(article.headline, article.authorPhoto, article.authorName)
        container.appendChild(newCard);
      })
      response.data.articles['technology'].forEach((article)=>{
        const newCard = cardCreator(article.headline, article.authorPhoto, article.authorName)
        container.appendChild(newCard);
      })
      response.data.articles['jquery'].forEach((article)=>{
        const newCard = cardCreator(article.headline, article.authorPhoto, article.authorName)
        container.appendChild(newCard);
      })
      response.data.articles['node'].forEach((article)=>{
        const newCard = cardCreator(article.headline, article.authorPhoto, article.authorName)
        container.appendChild(newCard);
      })
      console.log(response.data);
     })

    

     
















































