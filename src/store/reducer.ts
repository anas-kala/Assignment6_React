import { PayloadAction } from '@reduxjs/toolkit';
class CardGame {
    suit: String = "";
    number: number = 0;
    played: boolean = false;
    playedCards: Array<CardGame> = new Array<CardGame>();
    constructor(suit?: String, number?: number) {
        if (number !== undefined) {
            if (suit === 'spades' || suit === 'hearts' || suit === 'diamonds' || suit === 'clubs') {
                if (number < 11 && number > 0) {
                    this.suit = suit;
                    this.number = number;
                    this.played = false;
                }
            }
        }
    }

    public instaitiateCards() {
        var suits = ['spades', 'hearts', 'diamonds', 'clubs'];
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var cards: Array<CardGame> = new Array<CardGame>();
        for (var i = 0; i < suits.length; i++) {
            for (var j = 0; j < numbers.length; j++) {
                let obj = new CardGame(suits[i], numbers[j]);
                cards.push(obj);
            }
        }
        return cards;
    }

    public playCards(array: Array<CardGame>) {
        let rand = Math.floor((Math.random() * (array.length - 1)));  // returns number [0-9] for indexes
        let card = array[rand];
        this.playedCards.push(card);
        array.splice(rand, 1);
        return array;
    }
}

let obj = new CardGame();

const initState = {
    cards: obj.instaitiateCards(),
    lastPlayedCard: null,
    playedCards: null,
    score: 0,
    showGameBoard: false,
    showStartButton:true

}

const reducer = (state = initState, action: PayloadAction<number>) => {
    switch (action.type) {
        case 'STARTCLICKED': return{
            ...state,
            showGameBoard: true,
            showStartButton:false
        }
        case 'GAMESTARTED': return {
            ...state,
            cards: obj.playCards(state.cards),
            playedCards: obj.playedCards,
            lastPlayedCard: obj.playedCards[obj.playedCards.length - 1],
            score: 0,    //state.score + 1
        }
        case 'LOWERCLICKED': return {
            ...state,
            cards: obj.playCards(state.cards),
            playedCards: state.playedCards,
            lastPlayedCard: obj.playedCards[obj.playedCards.length-1],
            score:0   
        }
        // case 'HIGHERCLICKED': return {
        //     ...state,
        //     cards: obj.playCards(state.cards),
        //     playedCards: obj.playedCards,
        //     lastPlayedCard: obj.playedCards[obj.playedCards.length-1],
        //     score:0   

        // }
        default: return state;
    }
};
export type AppState = ReturnType<typeof reducer>
export default reducer;