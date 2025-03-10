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

    const container = document.querySelector('.cards-container');

    function cardCreator(headline, authorPhoto, authorName){
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
      img.src = authorPhoto;
      span.textContent = authorName;

      return cardContainer
    }

     axios.get('https://lambda-times-backend.herokuapp.com/articles')
     .then((response)=>{
       response.data.articles['bootstrap'].forEach((param)=>{
         const newCard = cardCreator(param.headline, param.authorPhoto, param.authorName)
         container.appendChild(newCard);
       })
       response.data.articles['javascript'].forEach((param)=>{
        const newCard = cardCreator(param.headline, param.authorPhoto, param.authorName)
        container.appendChild(newCard);
      })
      response.data.articles['jquery'].forEach((param)=>{
        const newCard = cardCreator(param.headline, param.authorPhoto, param.authorName)
        container.appendChild(newCard);
      })
      response.data.articles['node'].forEach((param)=>{
        const newCard = cardCreator(param.headline, param.authorPhoto, param.authorName)
        container.appendChild(newCard);
      })
      response.data.articles['technology'].forEach((param)=>{
        const newCard = cardCreator(param.headline, param.authorPhoto, param.authorName)
        container.appendChild(newCard);
      })
      // console.log(response.data);
     })

    

     
















































