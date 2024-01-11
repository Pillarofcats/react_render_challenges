import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

function A({ children }) {
  console.log('A')
  const [state, setState] = useState(0)
  useEffect(() => {
    setState(state => state + 1)
  }, [])
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

/* Here even on state change of `A` parent component, child components will not re-render. When the parent state
   changes, parent component re-renders. But it still has the same children prop it got last time, 
   so React doesn’t visit that subtree. And as a result, child component doesn’t re-render.
  
  
  Thus there are two ways to 
  prevent child components from re-rendering.
    - wrapping them in `memeo`
    - passing them as `children` prop
 */

/* OUTPUT:

"App"   // first render
"A"     // first render
"B"     // first render
"C"     // first render
"D"     // first render
"A"     // forced second render (state changed in A )

*/
