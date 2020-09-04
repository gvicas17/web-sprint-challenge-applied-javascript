// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


axios.get('https://lambda-times-api.herokuapp.com/articles')
.then (response => {
    console.log(response.data.articles)
    const articleData1 = (response.data.articles.bootstrap)
    const articleData2 = (response.data.articles.javascript)
    const articleData3 = (response.data.articles.jquery)
    const articleData4 = (response.data.articles.node)
    const articleData5 = (response.data.articles.technology)


    const objectInfo1 = Object.values(articleData1)
    const objectInfo2 = Object.values(articleData2)
    const objectInfo3 = Object.values(articleData3)
    const objectInfo4= Object.values(articleData4)
    const objectInfo5 = Object.values(articleData5)
    
    objectInfo1.forEach(info =>{
        cardEntryPoint.appendChild(articleCardCreator(info))
    })
    objectInfo2.forEach(info =>{
        cardEntryPoint.appendChild(articleCardCreator(info))
    })
    objectInfo3.forEach(info =>{
        cardEntryPoint.appendChild(articleCardCreator(info))
    })
    objectInfo4.forEach(info =>{
        cardEntryPoint.appendChild(articleCardCreator(info))
    })
    objectInfo5.forEach(info =>{
        cardEntryPoint.appendChild(articleCardCreator(info))
    })
})
.catch (error => {
    console.log ('data not recieved', error)
})


function articleCardCreator (articleObj){
    const cardContainer = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const authorsName = document.createElement('span')

    cardContainer.classList.add('.card')
    headline.classList.add('.headline')
    author.classList.add('.author')
    imgContainer.classList.add('.img-container')

    headline.textContent = articleObj.headline
    img.src = articleObj.authorPhoto
    authorsName.textContent = articleObj.authorName

    cardContainer.appendChild(headline)
    cardContainer.appendChild(author)
    author.appendChild(imgContainer)
    author.appendChild(authorsName)
    imgContainer.appendChild(img)

    return cardContainer
}
const cardEntryPoint = document.querySelector('.cards-container')