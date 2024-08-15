import { Ordbog } from './components/Ordbog/Ordbog'
import { Copyright } from './components/Copyright/Copyright'
import './App.scss'

function App() {

  return (
    <>
      <h1>SEO Ordbog</h1>
      <div className="container">
        <Ordbog />
      </div>
      <Copyright />
    </>
  )
}

export default App