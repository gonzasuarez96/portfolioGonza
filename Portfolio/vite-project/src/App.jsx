import NavBar from "./Components/NavBar"
import styles from './Assets/App/styles.module.scss'
import MainPage from './Pages/Main/index'
import About from "./Pages/About"

function App() {
  return (
    <main className={styles.main}>
    <NavBar />
    <MainPage />
    <About />

    </main>
  )
}

export default App
