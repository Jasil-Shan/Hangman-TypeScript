import Home from "./Pages/Home/Home"
import backgroundImage from "./assets/Designer.jpg"
import './App.css'

function App() {
  return (
    <div
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <Home />
  </div>
  )
}

export default App
