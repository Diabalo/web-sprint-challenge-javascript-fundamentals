const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  
    
    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgContainerDiv = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorNameSpan = document.createElement('span');
  
    
    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainerDiv.classList.add('img-container');
  
    
    headlineDiv.textContent = article.headline;
    authorImg.src = article.authorPhoto;
    authorNameSpan.textContent = `By ${article.authorName}`;
  
    
    cardDiv.addEventListener('click', () => {
      console.log(article.headline);
    });
  
    
    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgContainerDiv);
    imgContainerDiv.appendChild(authorImg);
    authorDiv.appendChild(authorNameSpan);
  
    
    return cardDiv;
  
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

    
    fetch('http://localhost:5001/api/articles')
    .then(response => response.json())
    .then(data => {
      
      const articles = Object.values(data.articles).flat();

      
      const container = document.querySelector(selector);

      
      articles.forEach(article => {
        const card = Card(article);
        container.appendChild(card);
      });
    })
    .catch(error => console.log(error));






  
}

export { Card, cardAppender }
