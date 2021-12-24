import React, { useState, useReducer, useContext } from 'react';
import ReactDOM from 'react-dom';
import { useEffect } from 'react/cjs/react.development';
import Game from './tictactoe';

const GameContext = React.createContext();

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}


const initState = {
  player: 'X',
  winner: 'None',
  board: [['', '', ''], ['', '', ''], ['', '', '']]
}

function reducer(state, action) {
  switch(action.type) {
    case 'reset':
      return {
        player: 'X',
        winner: 'None',
        board: [['', '', ''], ['', '', ''], ['', '', '']]
      };
    case 'takeTurn':
      const { row, col, checkWinner } = action.payload;

      // update board and check if there are any winners
      state.board[row][col] = state.player;
      const winner = checkWinner(state.board);

      if (winner) {
        return {
          ...state,
          board: state.board,
          winner: state.player,
          player: state.player === 'X' ? 'O' : 'X'
        }
      } else {
        return {
          ...state,
          board: state.board,
          player: state.player === 'X' ? 'O' : 'X'
        }
      }
    default:
      return state;
  }
}

function Square({ move, row, col }) {

  const { takeTurn } = useContext(GameContext);

  return (
    <div
      onClick={() => takeTurn(row, col)}
      className="square"
      style={squareStyle}>
      <span> { move } </span>
    </div>
  );
}

function Board() {

  const [state, dispatch] = useReducer(reducer, initState);

  function takeTurn(row, col) {
    // if that space on the board is not taken yet and there's no winner
    if (!state.board[row][col] && state.winner === 'None') {
      dispatch({ type: 'takeTurn', payload: { row, col, checkWinner }});
    }
  }

  function checkWinner(board) {
    // check row 
    for (let row=0; row < 3; row++) {
      if (board[row][0] !== '' && board[row][0] ===  board[row][1] &&  board[row][1] ===  board[row][2]) {
        return true;
      }
    }

    // check column
    for (let col=0; col < 3; col++) {
      if (board[0][col] !== '' && board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
        return true;
      };
    }

    // check diagonals
    return (board[0][0] !== '' && board[0][0] === board[1][1] &&  board[1][1] === board[2][2])
            || (board[0][2] !== '' && board[0][2] === board[1][1] &&  board[1][1] === board[2][0])

  }

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{state.player}</span></div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>{state.winner}</span></div>
      <button style={buttonStyle} onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <div style={boardStyle}>
          {
            state.board.map((row, rowIdx) => {
              return (
                <div key={rowIdx} className='board-row' style={rowStyle}>
                  {
                    row.map((col, colIdx) => {
                      return (
                        <GameContext.Provider value={{ takeTurn }} key={`${rowIdx} - ${colIdx}`}>
                          <Square move={state.board[rowIdx][colIdx]} row={rowIdx} col={colIdx} />
                        </GameContext.Provider>
                      )
                    })
                  }
                </div>
              )
            })
          }
      </div>
    </div>
  );
}

class TicTacToe extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

export default TicTacToe;