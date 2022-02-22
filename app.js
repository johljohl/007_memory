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
        name: 'blofeld',
        img: 'img/blofeld.jpg'
    },    
    {
        name: 'blofeld',
        img: 'img/blofeld.jpg'
    }
]  
    
    const grid = document.querySelector('.grid')
    
// create the board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'img/007.jpg')
        card.setAttribute('data-id', i)
       // card.addEventListener('click', flipcard)
       grid.appendChild(card)
    }
}

createBoard()







})
