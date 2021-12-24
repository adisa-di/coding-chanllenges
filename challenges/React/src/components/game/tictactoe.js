import React from 'react';

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

class Square extends React.Component {

  constructor(props) {
    super(props);

    this.onSquareClick = this.onSquareClick.bind(this);
  }

  // pass back the square's information to the parent's component
  onSquareClick() {
    const { row, col } = this.props;
    this.props.onSquareClick(row, col);
  }

  render() {
    const { move } = this.props;
    return (
      <div
        onClick={this.onSquareClick}
        className="square"
        style={squareStyle}>
        <span>{ move } </span>
      </div>
    );
  }
}

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      board: ['', '', '', '', '', '', '', '', ''],
      player: 'X', 
      winner: 'None'
    }

    this.getSquares = this.getSquares.bind(this);
    this.onSquareClick = this.onSquareClick.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
  }

  onSquareClick(row, col) {
    const position = (row * 3) + col;
    if (!this.state.board[position]) {

      // check if there's a winner
      const updatedBoard = this.state.board;
      updatedBoard[position] = this.state.player;
      const isWinner = this.checkWinner(updatedBoard)

      this.setState((prevState) => {
        prevState.board[position] = this.state.player;
        return {
          board: prevState.board,
          player: prevState.player === "X" ? "O" : "X",
          winner: isWinner ? prevState.player : "None",
        }
      })
    }
  }

  getSquares(row) {
    const { board } = this.state;
    return (
       <div className="board-row" style={rowStyle} key={row}>
          {
            Array(3).fill(0).map((_, col) => {
              const position = (row * 3) + col;
              return (
                 <Square 
                    key={col} 
                    row={row}
                    col={col}
                    move={board[position]}
                    onSquareClick={this.onSquareClick} />
              )
            })
          }
       </div>
    )
  }

  resetGame() {
    this.setState({
      board: ['', '', '', '', '', '', '', '', ''],
      player: 'X', 
      winner: 'None'
    })
  }

  checkWinner(board) {
    function check(idx0, idx1, idx2) {
      if (board[idx0] === '') return false;
      return board[idx0] === board[idx1] && board[idx1] === board[idx2]
    }

    return check(0, 1, 2)
            || check(3, 4, 5)
            || check(6, 7, 8)
            || check(0, 3, 6)
            || check(1, 4, 7)
            || check(2, 5, 8)
            || check(0, 4, 8)
            || check(2, 4, 6)
  }


  render() {
    return (
      <div style={containerStyle} className="gameBoard">
        <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{this.state.player}</span></div>
        <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>{this.state.winner}</span></div>
        <button style={buttonStyle} onClick={this.resetGame}>Reset</button>
        <div style={boardStyle}>
          {
            Array(3).fill(0).map((_, row) => {
              return this.getSquares(row);
            })
          } 
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
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

export default Game;