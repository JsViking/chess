import React, { useState, useEffect } from 'react'
import { Board } from './models/board'
import './App.css'
import BoardComponent from './components/BoardComponent'

const App = () => {
  const [board, setBoard] = useState(new Board())

  function restart () {
    const newBoard = new Board()
    newBoard.initCells()
    setBoard(newBoard)
  }

  useEffect(() => {
    restart()
  }, [])
  return (
    <div className='app'>
      <BoardComponent board={board} setBoard={setBoard}/>
    </div>
  )
}

export default App
