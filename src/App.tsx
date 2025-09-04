import { useState } from 'react'
// @ts-ignore
import reactLogo from "./assets/react.svg"
// @ts-ignore
import viteLogo from "/vite.svg"
// @ts-ignore
import './App.css'

function App():any {
    const [count, setCount] = useState(0)

    return (
        <div>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="📚 LibraVault" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App
