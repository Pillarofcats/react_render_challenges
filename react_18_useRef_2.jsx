import React, { useRef, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'

function App() {
  const ref = useRef(false)

  useLayoutEffect(() => {
    console.log(1)
    ref.current = true
  })

  return <button
    autoFocus
    onFocus={() => {
      console.log(!!ref.current)
    }}
    >
    button
  </button>
}

ReactDOM.render(<App/>, document.getElementById('root'))

/* OUTPUT:

false	//First render from autoFocus
1	//autoFocus -> onFocus() will trigger DOM to rerender triggering useLayoutEffect()

*/