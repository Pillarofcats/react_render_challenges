import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

function A({ children }) {
  console.log('A')
  return children
}

function B() {
  console.log('B')
  return <C/>
}

function C() {
  console.log('C')
  return null
}

function D() {
  console.log('D')
  return null
}

function App() {
  const [state, setState] = useState(0)
  useEffect(() => {
    setState(state => state + 1)
  }, [])
  console.log('App')
  return (
    <div>
      <A><B/></A>
      <D/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

/* OUTPUT:

"App"   // first render
"A"     // first render
"B"     // first render
"C"     // first render
"D"     // first render
"App"   // second render after useEffect() => state changed in parent A
"A"     // forced second render (parent A, state changed)
"B"	// forced second render (parent A rerendered, so children rerender)
"C"	// forced second render (parent A rerendered, so children rerender)
"D"     // second render

*/