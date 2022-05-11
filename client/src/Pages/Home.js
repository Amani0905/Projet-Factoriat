import React from 'react'
import Numbers from '../Components/Numbers'
import PartenersTechnoriat from '../Components/PartenersTechnoriat'
import JournalT from '../Components/JournalT'
import HomeOne from '../Components/HomeOne'


const Home = () => {
  return (
    <div>
        <HomeOne/>
        <Numbers/>
    <JournalT/>
    <PartenersTechnoriat/>
    
    </div>
  )
}

export default Home