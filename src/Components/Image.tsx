import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { RootState} from '@Types';
// type RootState = import("../store/reducer").RootState;
import { AppState } from '../store/reducer';
import { useEffect } from 'react';
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

const Image: React.FC = () => {
    const dispatch = useDispatch();
    const cardNumber = useSelector((state: AppState) => (state.lastPlayedCard !== null) ? state.lastPlayedCard.number : null);
    const cardSuit = useSelector((state: AppState) => (state.lastPlayedCard !== null) ? state.lastPlayedCard.suit : null);
    const numberOfPlyedCards = useSelector((state: AppState) => (state.playedCards !== null) ? state.playedCards.length : null);
    const score = useSelector((state: AppState) => (state.score !== null) ? state.score : null);
    let source=one_bc;
    function lowerClicked(){
        dispatch({type:'GAMESTARTED'});
        if(cardNumber===1){
            if(cardSuit=='spades'){
                console.log(cardSuit);
                source= one_bs;
            }else if(cardSuit==='hearts'){
                source= one_rh;
            }else if(cardSuit==='diamonds'){
                source= one_rd;
            }else{
                source= one_bc;
            }
        }
    }

    return (
        <div>
            <img src={source} alt="alt house" height={500} width={300} />
            <img src={one_bc} alt="alt house" height={500} width={300} />
            <button onClick={lowerClicked}>Lower</button>
            <button>Higher</button>
        </div>
    );
}

export default Image;
