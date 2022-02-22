document.addEventListener('DOMContentLoaded', () => {

    //card option
    const cardArray = [
    {
        name: 'lazenby',
        img: 'img/lazenby.jpg'
    },
    {
        name: 'lazenby',
        img: 'img/lazenby.jpg'
    },
    {
        name: 'brosnan',
        img: 'img/brosnan.jpg'
    },     
    {
        name: 'brosnan',
        img: 'img/brosnan.jpg'
    },   
    {
        name: 'moore',
        img: 'img/moore.jpg'
    },     
    {
        name: 'moore',
        img: 'img/moore.jpg'
    },   
    {
        name: 'connery',
        img: 'img/connery.jpg'
    },     
    {
        name: 'connery',
        img: 'img/connery.jpg'
    },   
    {
        name: 'dalton',
        img: 'img/dalton.jpg'
    },     
    {
        name: 'dalton',
        img: 'img/dalton.jpg'
    },  
    {
        name: 'craig',
        img: 'img/craig.jpg'
    },    
    {
        name: 'craig',
        img: 'img/craig.jpg'
    }
]  
   
    cardArray.sort(() => 0.5 - Math.random())


    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    
// create the board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'img/007.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
       grid.appendChild(card)
    }
}

// check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'img/white.jpg')
        cards[optionTwoId].setAttribute('src', 'img/white.jpg')
        cardsWon.push(cardsChosen)
    }else {
        cards[optionOneId].setAttribute('src', 'img/007.jpg')
        cards[optionTwoId].setAttribute('src', 'img/007.jpg')
        alert('No this is not the one')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Misson accomplished!'
    }
}



// flip the card
function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}



createBoard()







})
