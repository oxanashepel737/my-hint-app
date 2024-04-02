import './App.css'
import Hint from "./components/Hint/Hint.tsx";

function App() {
  return (
      <>
          <div className='container'>
              <Hint text="I am a tooltip" direction='top'>
                  <button className="button">
                      Open Hint
                  </button>
              </Hint>
              <Hint text="I am a tooltip" direction='right'>
                  <button className="button">
                      Open Hint Right
                  </button>
              </Hint>
              <Hint text="I am a tooltip" direction='left'>
                  <button className="button">
                      Open Hint Left
                  </button>
              </Hint>
              <Hint text="I am a tooltip" direction='bottom'>
                  <button className="button">
                      Open Hint Bottom
                  </button>
              </Hint>
              <Hint text={<a href='https://next.privat24.ua/'>I am a link</a>}>
                  <button className="button">
                      Open Hint Link
                  </button>
              </Hint>
          </div>
          <br/>
          <Hint text="I am a tooltip" direction='left'>
              <button className="button">
                  Open Hint Left
              </button>
          </Hint>
      </>
  )
}

export default App
