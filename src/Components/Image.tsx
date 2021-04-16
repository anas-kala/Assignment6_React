import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { RootState} from '@Types';
// type RootState = import("../store/reducer").RootState;
import {AppState} from '../store/reducer';
import state from '../store/reducer';
import one_bc from '../playingCards/black clubs/1bc.png';
import two_bc from '../playingCards/black clubs/2bc.png';
import three_bc from '../playingCards/black cClubs/3bc.png';
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
import two_rd from '../playingCards/red spades/2rd.png';
import three_rd from '../playingCards/red spades/3rd.png';
import four_rd from '../playingCards/red spades/4rd.png';
import five_rd from '../playingCards/red spades/5rd.png';
import six_rd from '../playingCards/red spades/6rd.png';
import seven_rd from '../playingCards/red spades/7rd.png';
import eight_rd from '../playingCards/red spades/8rd.png';
import nine_rd from '../playingCards/red spades/9rd.png';
import ten_rd from '../playingCards/red spades/10rd.png';

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

const Image: React.FC = () => {
    const dispatch = useDispatch();
    const cardNumber=useSelector((state: AppState)=>(state.lastPlayedCard!==null)?state.lastPlayedCard.number:null);
    const cardSuit=useSelector((state:AppState)=>(state.lastPlayedCard!==null)?state.lastPlayedCard.suit:null);
    return (
        <>
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <div>
                <img src={nine_rh} alt="alt house" height={500} width={300} />
                <p>{cardNumber} and {cardSuit}</p>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <button onClick={() => dispatch({ type: 'GAMESTARTED' })}>Start Game</button>
            {/* <div>
                <button onClick={() => dispatch({ type: 'LOWERCLICKED' })}>Lower</button>
                <button onClick={() => dispatch({ type: 'HIGHERCLICKED' })}>Higher</button>
            </div> */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>Score: </p>
        </>
    )
}

export default Image;