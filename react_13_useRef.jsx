import React, { useRef, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

function App() {
  const ref = useRef(null)
  const [state, setState] = useState(1)

  useEffect(() => {
    setState(2)
  }, [])

  console.log(ref.current?.textContent)

  return <div>
    <div ref={state === 1 ? ref : null}>1</div>
    <div ref={state === 2 ? ref : null}>2</div>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

/* OUTPUT:

undefined	//first render value of textContent is undefined
"1"		//Refs keep values through rerenders, so "1"

*/