import axios from "axios"

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

  const card = document.createElement('div')
  const headline = document.createElement('div')
  const author = document.createElement('div')
  const imgCont = document.createElement('div')
  const authImg = document.createElement('img')
  const cardSpan = document.createElement('span')

  card.classList.add("card")
  headline.classList.add("headline")
  author.classList.add("author")
  imgCont.classList.add("img-container")

  headline.textContent = `${article.headline}`
  authImg.setAttribute('src', article.authorPhoto)
  cardSpan.textContent = `By ${article.authorName}`

  card.appendChild(headline)
  card.appendChild(author)
  author.appendChild(imgCont)
  imgCont.appendChild(authImg)
  author.appendChild(cardSpan)

  function printEventListener(event){
    console.log(event);
    console.log(`${article.headline}`)
  }

  card.addEventListener('click', printEventListener)

  return card
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


  axios.get("https://lambda-times-api.herokuapp.com/articles")
    .then(res => {
      console.log(res.data.articles)

      

      let javascript = res.data.articles.javascript
      let bootstrap = res.data.articles.bootstrap
      let technology = res.data.articles.technology
      let jquery = res.data.articles.jquery
      let node = res.data.articles.node

      

      javascript.forEach((article) => {
        document.querySelector(selector).appendChild(Card(article))
      })

      bootstrap.forEach((article) => {
        document.querySelector(selector).appendChild(Card(article))
      })

      technology.forEach((article) => {
        document.querySelector(selector).appendChild(Card(article))
      })

      jquery.forEach((article) => {
        document.querySelector(selector).appendChild(Card(article))
      })

      node.forEach((article) => {
        document.querySelector(selector).appendChild(Card(article))
      })
      
    })
    .catch(err => {
      console.log("ERROR!!")
    })
    .finally("COMPLETE")

 

}

export { Card, cardAppender }
