import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

const resource = (() => {
  let data = null
  let status = 'pending'
  let fetcher = null
  return {
    get() {
      if (status === 'ready') {
        return data
      }
      if (status === 'pending') {
        fetcher = new Promise((resolve, reject) => {
          setTimeout(() => {
            data = 1
            status = 'ready'
            resolve()
          }, 100)
        })
        status = 'fetching'
      }

      throw fetcher
    }
  }
})()

function A() {
  console.log('A1')
  const data = resource.get()
  console.log('A2')
  return <p>{data}</p>
}

function B() {
  console.log('B')
  return null
}

function Fallback() {
  console.log('fallback')
  return null
}

function App() {
  console.log('App')
  return <div>
    <Suspense fallback={<Fallback/>}>
      <A/>
      <B/>
    </Suspense>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

/* OUTPUT:

"App"		//First render
"A1"		//First Render (Resource.get() throwed, break out of A())
"B"		//First Render
"fallback"	//Component A failed, so fallback component renders
"A1"		//Suspense component attempts to rerender after fallback, Suspense component rerender
"A2"		//Suspense component rerender
"B"		//Suspense component rerender

*/