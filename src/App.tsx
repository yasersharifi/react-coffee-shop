import { useState } from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {
        [
          'primary',
          'danger',
          'warning',
          'info',
          'success',
          'secondary',
          'light',
          'dark'
        ].map((variant: string) => {
          return <><Button variant={`outline-${variant}`}>{ variant.charAt(0).toUpperCase() + variant.slice(1) }</Button>{' '}</>
        })
      }
    </div>
  )
}

export default App
