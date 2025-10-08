import { useState } from 'react'
import CardDisplay from './components/CardDisplay';
import LeftButton from './components/LeftButton';
import RightButton from './components/RightButton';
import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  // const updateCount = () => setCount(count + 1);
  // const resetCount = () => setCount(count - count);

  const [rightButtonPressed, setRightButtonPressed] = useState(0);

  const [leftButtonId, setLeftButtonId] = useState("LeftButton1");
  const [rightButtonId, setRightButtonId] = useState("RightButton1");

  const [cardIndex, setCardIndex] = useState(0);

  // const changeLeftButtonId = () => setLeftButtonId("LeftButton2");

  const rightButtonPressedCount = () => setRightButtonPressed(rightButtonPressed + 1);

  const [imgCaption, setImgCaption] = useState("Press the button below to get started!");
  const [imgDisplay, setImgDisplay] = useState("");

  const leftButtonDisplay = () => setLeftButtonId("LeftButton2"); 

  return (
    <>
      <h1>War Thunder Trivia</h1>
      {/* <p>{count}</p>
      <button onClick={updateCount}>Click to Add 1</button>
      <button onClick={resetCount}>Click to Reset Count</button> */}
      <CardDisplay CardIndex="CardDisplay" word={imgCaption}/>
      <p>{rightButtonPressed}</p>
      <div id="buttons">
        <LeftButton idChoice={leftButtonId}/>
        <RightButton action={leftButtonDisplay} clickFunction={rightButtonPressedCount} idChoice={rightButtonId}/>
      </div>
    </>
  );
};

export default App
