import {React,useState} from 'react'
import './App.css';
import { useWindowSize } from '@react-hook/window-size';
import Confetti from 'react-confetti';

function App() {
  const[result, setResult] = useState('')
  const [player ,setPlayer]=useState('X');
  const[click, setClick] = useState(0)
  const[game, setGame] = useState(true)

const disableClick=(id)=>{
  document.getElementById(id).style.pointerEvents='none'
}

// // winner logic
const checkWinner=()=>{
  const values=[]
  for(let i=1;i<=9;i++){
    values[i]=document.getElementById(`cell${i}`).innerHTML
  }
  if(player==values[1] && player==values[2] && player==values[3]){
    setResult(player+" is a Winner")
    document.getElementById('cell1').className='winner';
    document.getElementById('cell2').className='winner';
    document.getElementById('cell3').className='winner';
    handleCelebrate()
    setGame(false)
  }
  else if(player==values[4] && player==values[5] && player==values[6]){
    setResult(player+" is a Winner")
    document.getElementById('cell4').className='winner';
    document.getElementById('cell5').className='winner';
    document.getElementById('cell6').className='winner';
    handleCelebrate()
    setGame(false)
  }
  else if(player==values[7] && player==values[8] && player==values[9]){
    setResult(player+" is a Winner")
    document.getElementById('cell7').className='winner';
    document.getElementById('cell8').className='winner';
    document.getElementById('cell9').className='winner';
    handleCelebrate()
    setGame(false)
  }
  else if(player==values[1] && player==values[5] && player==values[9]){
    setResult(player+" is a Winner")
    document.getElementById('cell1').className='winner';
    document.getElementById('cell5').className='winner';
    document.getElementById('cell9').className='winner';
    handleCelebrate()
    setGame(false)
  }
  else if(player==values[3] && player==values[5] && player==values[7]){
    setResult(player+" is a Winner")
    document.getElementById('cell3').className='winner';
    document.getElementById('cell5').className='winner';
    document.getElementById('cell7').className='winner';
    handleCelebrate()
    setGame(false)
  }
  else if(player==values[1] && player==values[4] && player==values[7]){
    setResult(player+" is a Winner")
    document.getElementById('cell1').className='winner';
    document.getElementById('cell4').className='winner';
    document.getElementById('cell7').className='winner';
    handleCelebrate()
    setGame(false)
  }
  else if(player==values[2] && player==values[5] && player==values[8]){
    setResult(player+" is a Winner")
    document.getElementById('cell2').className='winner';
    document.getElementById('cell5').className='winner';
    document.getElementById('cell8').className='winner';
    handleCelebrate()
    setGame(false)
  }
  else if(player==values[3] && player==values[6] && player==values[9]){
    setResult(player+" is a Winner")
    document.getElementById('cell3').className='winner';
    document.getElementById('cell6').className='winner';
    document.getElementById('cell9').className='winner';
    handleCelebrate()
    setGame(false)
  }
  else if(click>=8){
    setResult('😂Game Drawn🔁')
    document.getElementById('cell1').className='matchdrawn'
    document.getElementById('cell2').className='matchdrawn'
    document.getElementById('cell3').className='matchdrawn'
    document.getElementById('cell4').className='matchdrawn'
    document.getElementById('cell5').className='matchdrawn'
    document.getElementById('cell6').className='matchdrawn'
    document.getElementById('cell7').className='matchdrawn'
    document.getElementById('cell8').className='matchdrawn'
    document.getElementById('cell9').className='matchdrawn'
  }
}

// celebration bust effect
const [showConfetti, setShowConfetti] = useState(false);
const [width, height] = useWindowSize();

const handleCelebrate = () => {
  setShowConfetti(true);
  setTimeout(() => setShowConfetti(false), 120000); // stop after 3 sec
};

  const ClickHandler=(cell)=>{
    if(game){
      document.getElementById(cell).style.fontSize=2+"rem";
      document.getElementById(cell).innerHTML=player
      setClick(click+1)
      disableClick(cell)
      checkWinner()
    }
    if(player=='O')
      setPlayer('X')
    else
    setPlayer('O')
  }
  return (
    <div className='main'>
      <h1 className='heading'>Tic-Tac-Toe</h1>
      <div className='container'>
        <div  id='cell1'  onClick={()=>{ClickHandler('cell1')}}   className='cell'></div>
        <div  id='cell2'  onClick={()=>{ClickHandler('cell2')}}   className='cell'></div>
        <div  id='cell3'  onClick={()=>{ClickHandler('cell3')}}   className='cell'></div>
        <div  id='cell4'  onClick={()=>{ClickHandler('cell4')}}   className='cell'></div>
        <div  id='cell5'  onClick={()=>{ClickHandler('cell5')}}   className='cell'></div>
        <div  id='cell6'  onClick={()=>{ClickHandler('cell6')}}   className='cell'></div>
        <div  id='cell7'  onClick={()=>{ClickHandler('cell7')}}   className='cell'></div>
        <div  id='cell8'  onClick={()=>{ClickHandler('cell8')}}   className='cell'></div>
        <div  id='cell9'  onClick={()=>{ClickHandler('cell9')}}   className='cell'></div>
      </div>
      {showConfetti && <Confetti width={width} height={height} />}
      <h2 id='res'>{result}</h2>
      <button className='btn' onClick={()=>{window.location.href="/"}}><strong>Restart</strong></button>
    </div>
  )
}

export default App
