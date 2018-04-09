# Pet Memories

For this challenge, you'll be making a basic Memory Game!

There is a grid of randomly arranged pairs. The end goal is to have each "Cell" start hidden, and reveal temporarily when you select it.
When you have revealed a "Pair" of cells with the same value, you have found a match, and that pair should stay revealed for the rest of the game.
If you reveal 2 Cells that are NOT a match, they should flip back to being hidden.
The Game is won when ALL pairs have been matched.

## Setup

After cloning this repo

```sh
yarn
yarn start
```

and then go to [`http://localhost:3000`](http://localhost:3000).

This is what your starting place looks like:

![Base case](./public/images/memory-game.png)

## Your starting place

Our journey begins in `client/components/App.jsx`. Here are its contents:

```jsx
import React from 'react'
import Board from './Board'

const App = props => {
  return (
    <div className="section">
      <h1 className="has-text-centered title is-1">Pet Memory Game</h1>
      <Board width={props.width / 2} />
    </div>
  )
}

export default App
```

The `App` component is implemented as a stateless functional component. The `props` are defined in `client/index.js` if you're curious. We use the width of the window to center the Board in the browser. This component renders the Board component, which is slightly more complex.


The Javascript code below can be found in client/createBoard.js, you shouldn't have to interact with this code, it is simply used to randomise a 2d Array to use as your Game Board.

```js
function shuffle(array) {
    let counter = array.length;

    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;

        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

const createCell = (value) => ({
  value
})

const createBoard = (size) => {
  var values = [
    'Mouse', 'Mouse',
    'Rabbit', 'Rabbit',
    'Guinea Pig', 'Guinea Pig',
    'Dog', 'Dog',
    'Cat', 'Cat',
    'Rat', 'Rat',
    'Parrot', 'Parrot',
    'Duck', 'Duck'
  ]
  values = shuffle(values)

  return Array(size).fill(0).map(
    () => Array(size).fill(0).map(
      () => createCell(values.pop())
    )
  )
}

```

The code for Board.jsx will look like

```jsx

import React from 'react'
import Cell from './Cell'

import createBoard from '../createBoard'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: createBoard(4),
      width: props.width
    }
  }
  render() {
    const board = this.state.board
    const rowHeight = this.state.width / board.length

    return <div
      style={{width: this.state.width, height: this.state.width}}
      className="column board has-text-centered"
    >
      {board.map(function(row) {
        //render a ROW (of cells) on the Board
        return <div className="row columns" style={{height: rowHeight}} >
          {row.map(function(cell) {
            //render each Cell within a ROW, using the Cell.jsx component
            return <Cell cell={cell} />
          })}
        </div>
      })}
    </div>
  }
}

export default Board

```

This is a **Stateful** Component. The board Array is stored within the Board Component's **State**. There are many solutions to this challenge, and you can solve the game with Board.jsx being the only **Stateful Component**.

Finally, the Cell.jsx Component is a **Functional Component**, simply rendering the Value of a given **Cell Object** (from within the board 2d array) on to the screen within a square. The starting code looks like

``` jsx
import React from 'react'

const Cell = (props) => {

  return <div className="cell column">
    {props.cell.value}
  </div>
}

export default Cell

```


## The requirements

* All cells should **start** hidden, and be **revealed** upon a click event

* When a user has selected 2 Cells to reveal, your App must find whether the pair are a **match** or not. A Match will stay revealed, a non-match will be hidden again.

* When all pairs are revealed, the user is informed that they have won, and may restart the Game.


## Some things to consider

When the 2nd Cell is revealed and found to not be a match, you will want to inform the user that they didn't find a match. It would also be sensible to try and give the user several seconds to see their mismatched picks (on a timeOut), or allow the user to confirm (with a button) when they are ready to try again.

How do you know which Cells are being **temporarily** revealed? How do you know which cells are **permanently** revealed?

Do you store or information in the **cell** objects, or seperately within the Board.jsx Components **state**?

## Resources

If you don't already have it installed, you should install the React DevTools browser extension ([Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/) and [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)). This will add a tab in Developer Tools that will allow you to explore the [virtual DOM](http://tonyfreed.com/blog/what_is_virtual_dom) used by React.

And some more:

* [React Component](https://facebook.github.io/react/docs/reusable-components.html#es6-classes)
* [React Component API](https://facebook.github.io/react/docs/component-api.html)
* [How State Works](https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html#how-state-works)
* [React's `setState`](https://facebook.github.io/react/docs/component-api.html#setstate)
* [React Event Handling](https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html#a-simple-example)
* [`ReactDOM.render`](https://facebook.github.io/react/docs/top-level-api.html#reactdom.render)
* [React TestUtils](https://facebook.github.io/react/docs/test-utils.html)
