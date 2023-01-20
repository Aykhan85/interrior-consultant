import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import { useState } from "react"
function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="container">
      <Header toggle={toggle} setToggle={setToggle} />

      <main>
        <Main />
      </main>
      <Footer />
    </div>
  )
}

export default App
