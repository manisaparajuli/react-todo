import React, { useEffect, useState } from 'react'
import Axios from 'axios';


const Joke = () => {
  const [getJoke, setJoke] = useState("")

  useEffect(() =>{
    Axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
      setJoke(res.data.value)
    })
  }, [])

  return (
    <div>
      <button>Get Random Chuck Norris</button>
      <p>{getJoke}</p>
      
    </div>
  )
}

export default Joke
