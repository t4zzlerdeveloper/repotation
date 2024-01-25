import { useEffect, useState } from 'react'
import repoLogo from '/repotation.png'
import axios from 'axios';

import back from './assets/back.jpg'

function App() {

  const [url,setURL] = useState("");
  const [stats,setStats] = useState([]);

  function search(url){

    if(url.startsWith("https://github.com/")){
      const gitPath = url.replace("https://github.com/","");
      if(gitPath.split('/')[1]){
        const fullRepo = gitPath;
        const username = fullRepo.split('/')[0];
        const repoName = fullRepo.split('/')[1];
        console.log("\n------------------")
        console.log("fullRepo: " + fullRepo);
        console.log("username: " + username);
        console.log("repoName: " + repoName);
      }
      else{
        const username = gitPath.replace("/","");
        console.log("\n------------------")
        console.log("username: " + username);
        fetchUser(username);
      }

    }
    else{
      alert("Invalid GitHub URL")
    }
  }

  function fetchUser(username){
    axios.get("https://api.github.com/users/" + username)
    .then((res)=>{
      setStats(res.data)
    })
    .catch(()=>{
      //setStats([]);
    })
  }

  return (
    <>
      <div className='main-page' style={{ backgroundImage: 'url(' + back + ')', backgroundSize: 'cover' }}>
        <img src={repoLogo} className='logo'/>

        <section className='card search-bar'>
          <input className={""} placeholder={"Enter GitHub URL or Repo Name"} value={url} onChange={(e)=>{setURL(e.target.value)}} />
          <button onClick={()=>{search(url)}}>Search</button>
        </section>

        <section className='card'>
          {
            stats.length === 0 ? <>Loading...</>:
            <div className='git-stats'>
            <div className='git-left'>
              <img src={stats.avatar_url}/>
            </div>
            <div className='git-right'>
              <h1>{stats.login}</h1>
              <p>{stats.bio}</p>
            </div>
          </div>
          }
        </section>

      </div>
      
    </>
  )
}

export default App
