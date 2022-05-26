$('#deal').click(function () {
    dealCard(randomCard());
});

var cardsInDeck = new Array();
var numberOfCardsInDeck = document.getElementById('userCardValue').value;
var timeInterval = document.getElementById('userTimeValue').value;
cardsInDeck = [
    "10_of_clubs","10_of_diamonds","10_of_hearts","10_of_spades","2_of_clubs","2_of_diamonds","2_of_hearts","2_of_spades","3_of_clubs","3_of_diamonds","3_of_hearts","3_of_spades","4_of_clubs",
    "4_of_diamonds","4_of_hearts","4_of_spades","5_of_clubs","5_of_diamonds","5_of_hearts","5_of_spades","6_of_clubs","6_of_diamonds","6_of_hearts","6_of_spades","7_of_clubs","7_of_diamonds","7_of_hearts",
    "7_of_spades","8_of_clubs","8_of_diamonds","8_of_hearts","8_of_spades","9_of_clubs","9_of_diamonds","9_of_hearts","9_of_spades","ace_of_clubs","ace_of_diamonds","ace_of_hearts","ace_of_spades","ace_of_spades2",
    "black_joker","filenames.txt","jack_of_clubs","jack_of_clubs2","jack_of_diamonds","jack_of_diamonds2","jack_of_hearts","jack_of_hearts2","jack_of_spades","jack_of_spades2","king_of_clubs","king_of_clubs2",
    "king_of_diamonds","king_of_diamonds2","king_of_hearts","king_of_hearts2","king_of_spades","king_of_spades2","queen_of_clubs","queen_of_clubs2","queen_of_diamonds","queen_of_diamonds2","queen_of_hearts",
    "queen_of_hearts2","queen_of_spades","queen_of_spades2","red_joker"
]


function getUserValue() {
    numberOfCardsInDeck = document.getElementById('userCardValue').value;
    timeInterval = document.getElementById('userTimeValue').value;
    console.log(timeInterval);
    document.getElementById('userValueText').innerHTML = numberOfCardsInDeck;
}


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

function dealCard(i) {
    shuffle(cardsInDeck); // shuffle cards in deck
    getUserValue();
    cardHolderContainer = document.getElementById('cardHolderContainer'); // card holder container element
    
    cardHolderContainer.innerHTML = '<div class="box main-card-holder" style="border: none;"><div class="item" id="item" draggable="true"></div></div><br><br>'; // reset cards every time button is hit

    for (let i = 0; i < numberOfCardsInDeck; i++) {
        cardHolderContainer.innerHTML += '<div class="box ' + cardsInDeck[i] + '"><div class="cardImageContainer" style="background-image: url(images/cards/'+cardsInDeck[i] + '.png);"></div></div>'; // add cards in array
    }

    if (numberOfCardsInDeck == 0) return false;
    var img = document.createElement("img");
    img.src = "../images/cards/" + cardsInDeck[i] + ".png";
    img.className = "cardImage";
    img.setAttribute('draggable', true);

    document.getElementById('item').style.backgroundImage = 'url(' + img.src + ')';
    document.getElementById('item').className = 'item ' + cardsInDeck[i];
    document.getElementsByClassName(cardsInDeck[i])[1].className += " card-success";

    $(function () {
        $('.cardImageContainer').fadeIn('slow', function () {
          $(this).delay(timeInterval*1000).fadeOut('slow');
        });
        $('.item').slideUp( 300 ).delay( timeInterval*1000+1000 ).fadeIn( 400 );
      });

    startDrag();
}

function randomCard() {
   return Math.floor(Math.random() * numberOfCardsInDeck);  
}

function startDrag() {
    const item = document.querySelector('.item');

    item.addEventListener('dragstart', dragStart);

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
            e.target.classList.add('hide');
        }, 0);
    }

    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('dragenter', dragEnter)
        box.addEventListener('dragover', dragOver);
        box.addEventListener('dragleave', dragLeave);
        box.addEventListener('drop', drop);
    });

    function dragEnter(e) {
        e.preventDefault();
        e.target.classList.add('drag-over');
    }

    function dragOver(e) {
        e.preventDefault();
        e.target.classList.add('drag-over');
    }

    function dragLeave(e) {
        e.target.classList.remove('drag-over');
    }

    function drop(e) {
        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);
        e.target.appendChild(draggable);

        draggable.classList.remove('hide');
        $(function () {
            $('.cardImageContainer').fadeIn('slow');
            $('.box').addClass('drag-over')
            $('.item').hide();
        });
    }
}