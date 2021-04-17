import './App.css';
import Image from './Components/Image';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../src/store/reducer'

const BUTTON = styled.button`
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
    margin-top: 600px;
`;

function App(): React.ReactNode {
  const dispatch=useDispatch();
  const displayingGameBoard=useSelector((state:AppState)=>(state.showGameBoard!==null)?state.showGameBoard:null);
  const displayiingButton=useSelector((state:AppState)=>(state.showStartButton!==null)?state.showStartButton:null);

  // const a=useSelector<Boolean>(state=>state.showGameBoard);
  // showStartButton

  return (
    <div className="App">
      {displayingGameBoard && <Image />}
      {displayiingButton && <BUTTON onClick={()=> dispatch({type:'STARTCLICKED'})}>Start Game</BUTTON>}
    </div>
  );
}

export default App;



// function Heading(): React.ReactNode{
//   return <h1>my website heading</h1>
// }

// is equal to

// const OtherHeading:React.FC =()=> <h1>my website heading</h1>