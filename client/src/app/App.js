import React from 'react'
import { Footer, Header } from '../widgets'
import { Outlet } from 'react-router-dom'

function App() {
    return (
        <div className="App wrapper">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default App
