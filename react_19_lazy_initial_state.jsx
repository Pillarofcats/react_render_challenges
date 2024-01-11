import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

function App() {
  const [state1, setState1] = useState(1);

  const [state2] = useState(() => {
    console.log(2);
    return 2;
  });

  console.log(state1);

  useEffect(() => {
    setState1(3);
  }, []);

  return null;
}

ReactDOM.render(<App/>, document.getElementById('root'))

/* OUTPUT:

2	//First render
1	//First render
3	//Second render

*/