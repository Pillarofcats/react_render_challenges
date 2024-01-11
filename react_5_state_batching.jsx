import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

function App() {
  const [state, setState] = useState(0)
  console.log("App " + state)
  return (
    <div>
      <button onClick={() => {
        setState(count => count + 1)
        setState(count => count * 2)
      }}>click me</button>
    </div>
  )
}

(async () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App/>)

  userEvent.click(await screen.findByText('click me'))
})()

/* OUTPUT:

"App 0" // first render
"App 2" // second render

*/