import React, { useEffect, useState } from 'react'
import Axios from 'axios';


const Joke = () => {
  const [getJoke, setJoke] = useState("")

  const showJoke = () => {
    Axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
      setJoke(res.data.value)
    })
  }
  useEffect(() =>{
    showJoke();
  }, [])

  return (
    <div>
      <button onClick={showJoke}>View Random Chuck Norris</button>
      <p>{getJoke}</p>

    </div>
  )
}

export default Joke
