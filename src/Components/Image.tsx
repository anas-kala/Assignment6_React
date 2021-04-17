import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { AppState } from '../store/reducer';
import { useEffect } from 'react';
import state from '../store/reducer';
import one_bc from '../playingCards/black clubs/1bc.png';
import two_bc from '../playingCards/black clubs/2bc.png';
import three_bc from '../playingCards/black clubs/3bc.png';
import four_bc from '../playingCards/black clubs/4bc.png';
import five_bc from '../playingCards/black clubs/5bc.png';
import six_bc from '../playingCards/black clubs/6bc.png';
import seven_bc from '../playingCards/black clubs/7bc.png';
import eight_bc from '../playingCards/black clubs/8bc.png';
import nine_bc from '../playingCards/black clubs/9bc.png';
import ten_bc from '../playingCards/black clubs/10bc.png';

import one_bs from '../playingCards/black spades/1bs.png';
import two_bs from '../playingCards/black spades/2bs.png';
import three_bs from '../playingCards/black spades/3bs.png';
import four_bs from '../playingCards/black spades/4bs.png';
import five_bs from '../playingCards/black spades/5bs.png';
import six_bs from '../playingCards/black spades/6bs.png';
import seven_bs from '../playingCards/black spades/7bs.png';
import eight_bs from '../playingCards/black spades/8bs.png';
import nine_bs from '../playingCards/black spades/9bs.png';
import ten_bs from '../playingCards/black spades/10bs.png';

import one_rd from '../playingCards/red diamonds/1rd.png';
import two_rd from '../playingCards/red diamonds/2rd.png';
import three_rd from '../playingCards/red diamonds/3rd.png';
import four_rd from '../playingCards/red diamonds/4rd.png';
import five_rd from '../playingCards/red diamonds/5rd.png';
import six_rd from '../playingCards/red diamonds/6rd.png';
import seven_rd from '../playingCards/red diamonds/7rd.png';
import eight_rd from '../playingCards/red diamonds/8rd.png';
import nine_rd from '../playingCards/red diamonds/9rd.png';
import ten_rd from '../playingCards/red diamonds/10rd.png';

import one_rh from '../playingCards/red hearts/1rh.png';
import two_rh from '../playingCards/red hearts/2rh.png';
import three_rh from '../playingCards/red hearts/3rh.png';
import four_rh from '../playingCards/red hearts/4rh.png';
import five_rh from '../playingCards/red hearts/5rh.png';
import six_rh from '../playingCards/red hearts/6rh.png';
import seven_rh from '../playingCards/red hearts/7rh.png';
import eight_rh from '../playingCards/red hearts/8rh.png';
import nine_rh from '../playingCards/red hearts/9rh.png';
import ten_rh from '../playingCards/red hearts/10rh.png';

const BUTTON=styled.button`
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    text-emphasis-color: red;
    margin: 15px;
`;

const Image: React.FC = () => {
    const [source, setSource] = useState(one_bc);
    const dispatch = useDispatch();
    const cardNumber = useSelector((state: AppState) => (state.lastPlayedCard !== null) ? state.lastPlayedCard.number : null);
    const cardSuit = useSelector((state: AppState) => (state.lastPlayedCard !== null) ? state.lastPlayedCard.suit : null);
    const numberOfPlyedCards = useSelector((state: AppState) => (state.playedCards !== null) ? state.playedCards.length : null);
    const score = useSelector((state: AppState) => (state.score !== null) ? state.score : null);
    // const lastPlayedCard=useSelector((state:AppState)=>(state.lastPlayedCard!=null?state.lastPlayedCard:null));

    function lowerClicked() {
        dispatch({ type: 'GAMESTARTED' });
        
        if (cardNumber === 1) {
            if (cardSuit == 'spades') {
                setSource(one_bs);
            } else if (cardSuit === 'hearts') {
                setSource(one_rh);
            } else if (cardSuit === 'diamonds') {
                setSource(one_rd);
            } else {
                setSource(one_bc);
            }
        } else if (cardNumber === 2) {
            if (cardSuit == 'spades') {
                setSource(two_bs);
            } else if (cardSuit === 'hearts') {
                setSource(two_rh);
            } else if (cardSuit === 'diamonds') {
                setSource(two_rd);
            } else {
                setSource(two_bc);
            }
        } else if (cardNumber === 3) {
            if (cardSuit == 'spades') {
                setSource(three_bs);
            } else if (cardSuit === 'hearts') {
                setSource(three_rh);
            } else if (cardSuit === 'diamonds') {
                setSource(three_rd);
            } else {
                setSource(three_bc);
            }
        } else if (cardNumber === 4) {
            if (cardSuit == 'spades') {
                setSource(four_bs);
            } else if (cardSuit === 'hearts') {
                setSource(four_rh);
            } else if (cardSuit === 'diamonds') {
                setSource(four_rd);
            } else {
                setSource(four_bc);
            }
        } else if (cardNumber === 5) {
            if (cardSuit == 'spades') {
                setSource(five_bs);
            } else if (cardSuit === 'hearts') {
                setSource(five_rh);
            } else if (cardSuit === 'diamonds') {
                setSource(five_rd);
            } else {
                setSource(five_bc);
            }
        } else if (cardNumber === 6) {
            if (cardSuit == 'spades') {
                setSource(six_bs);
            } else if (cardSuit === 'hearts') {
                setSource(six_rh);
            } else if (cardSuit === 'diamonds') {
                setSource(six_rd);
            } else {
                setSource(six_bc);
            }
        } else if (cardNumber === 7) {
            if (cardSuit == 'spades') {
                setSource(seven_bs);
            } else if (cardSuit === 'hearts') {
                setSource(seven_rh);
            } else if (cardSuit === 'diamonds') {
                setSource(seven_rd);
            } else {
                setSource(seven_bc);
            }
        } else if (cardNumber === 8) {
            if (cardSuit == 'spades') {
                setSource(eight_bs);
            } else if (cardSuit === 'hearts') {
                setSource(eight_rh);
            } else if (cardSuit === 'diamonds') {
                setSource(eight_rd);
            } else {
                setSource(eight_bc);
            }
        } else if (cardNumber === 9) {
            if (cardSuit == 'spades') {
                setSource(nine_bs);
            } else if (cardSuit === 'hearts') {
                setSource(nine_rh);
            } else if (cardSuit === 'diamonds') {
                setSource(nine_rd);
            } else {
                setSource(nine_bc);
            }
        } else {
            if (cardSuit == 'spades') {
                setSource(ten_bs);
            } else if (cardSuit === 'hearts') {
                setSource(ten_rh);
            } else if (cardSuit === 'diamonds') {
                setSource(ten_rd);
            } else {
                setSource(ten_bc);
            }
        }
    }

    return (
        <div>
            <img src={source} alt="alt house" height={500} width={300} />
            <p>card number: {cardNumber}</p>
            <p>card suit: {cardSuit} </p>
            <p>number of played cards: {numberOfPlyedCards}</p>
            <p>score: {score}</p>
            {/* <p>last played card: {lastPlayedCard}</p> */}
            <div>
                <BUTTON onClick={lowerClicked}>Lower</BUTTON>
                <BUTTON>Higher</BUTTON>
            </div>
        </div>
    );
}

export default Image;
