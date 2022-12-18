import { useState } from 'react'

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
          return <><button>{ variant.charAt(0).toUpperCase() + variant.slice(1) }</button>{' '}</>
        })
      }
    </div>
  )
}

export default App
