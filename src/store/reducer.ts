import { PayloadAction } from '@reduxjs/toolkit'
class CardGame {
    suit: String = "";
    number: number = 0;
    played: boolean = false;
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

    instaitiateCards() {
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

    playCards(array: CardGame[]) {
        let rand = Math.floor((Math.random() * (array.length - 1)));  // returns number [0-9] for indexes
        let card = array[rand];
        array.splice(rand, 1);
        return card;
    }
}

let obj = new CardGame();

const initState = {
    cars: obj.instaitiateCards(),
    score: 0
}

const reducer = (state = initState, action: PayloadAction<number>) => {
    switch (action.type) {
        // case 'NEWMESSAGE': return {
        //     ...state,
        //     counter: state.messages.length,
        // }
        // case 'SUBMITFORM': return {
        //     ...state,
        //     messages: [...state.messages, new Message(action.sub, action.bod)]
        // }
        // case 'SETMESSAGEREAD': return {
        //     ...state,
        //     messages: state.messages.map(
        //         (content, i) => i === action.ind ? { ...content, readMsg: true }
        //             : content)
        // }
        // case 'SHOWFORM': return {
        //     ...state,
        //     displayForm: state.displayForm = true,
        //     displayMessages: state.displayMessages = false
        // }
        // case 'SHOWMESSAGES': return {
        //     ...state,
        //     displayForm: state.displayForm = false,
        //     displayMessages: state.displayMessages = true
        // }
        // default: return state;
    }
};
export default reducer;