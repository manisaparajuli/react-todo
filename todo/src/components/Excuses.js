import Axios from 'axios';
import React, { useEffect, useState } from 'react'

function Excuses() {
  const[excuses, setExcuses] = useState("")

  const showExcuses =() => {
    Axios.get("https://excuser-three.vercel.app/v1/excuse/unbelievable/").then((res) => {
      setExcuses(res.data[0].excuse)
    })
  }

  useEffect(() => {
    showExcuses()
  }, [])
  return (
    <div>
      <button onClick={showExcuses}>Don't do anything, Get random excuses </button>
      <p>{excuses}</p>
    </div>
  )
}

export default Excuses