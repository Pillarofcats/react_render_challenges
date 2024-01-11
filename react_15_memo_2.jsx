import React, { memo, useState } from 'react'
import ReactDOM from 'react-dom'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

function _B() {
  console.log('B')
  return null
}

const B = memo(_B)

function _A({ children }) {
  console.log('A')
  return children
}

const A = memo(_A)

function App() {
  const [count, setCount] = useState(0)
  return <div>
    <button onClick={
      () => setCount(count => count + 1)
    }>
      click me
    </button>
    <A><B/></A>
  </div>
}

ReactDOM.render(<App/>, document.getElementById('root'))

userEvent.click(screen.getByText('click me'))

/* OUTPUT:

"A"	//First render
"B"	//First render
"A"	//State change, "A" has props, second render, "B" has no props and memoed so no rerender for "B"

*/