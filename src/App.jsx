import { useState } from 'react'
import viteLogo from '/vite.svg'

function App() {

  return (
    <>
      <div className='main-page'>
        <h1>repotation</h1>

        <section className='card search-bar'>
          <input className={""} placeholder={"Enter GitHub URL or Repo Name"} />
          <button>Search</button>
        </section>

        <section className='card'>
          <div className='git-stats'>
            <div className='git-left'>
              <img src={viteLogo}/>
            </div>
            <div className='git-right'>
              Hello world
            </div>
          </div>
        </section>

      </div>
      
    </>
  )
}

export default App
