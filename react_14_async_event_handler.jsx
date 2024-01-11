import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

function App() {
  const [state, setState] = useState(0)
  const increment = () => {
    setTimeout(() => {
      setState(state + 1)
    }, 0)
  }
  console.log(state)
  return <div>
    <button onClick={increment}>click me</button>
  </div>
}

ReactDOM.render(<App/>, document.getElementById('root'))

// click the button twice
userEvent.click(screen.getByText('click me'))
userEvent.click(screen.getByText('click me'))

/* OUTPUT:

0	//First render
1	//First click, stateChange from first render, stale state from closure setTimeout() state = 1
1	//Second click, stateChange from first render, stale state from closure setTimeout() state = 1

*/