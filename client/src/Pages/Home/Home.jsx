import React, { useEffect, useState } from 'react'
import Contacts from '../Components/Contacts'
import ChatArea from '../Components/ChatArea'
import AboutUser from '../Components/AboutUser'
import './Home.css'


const Home = () => {

    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')))
    const [activeChat, setActiveChat] = useState('')

    return (
        <div className='home'>

            <Contacts setActiveChat={setActiveChat} ></Contacts>
            <ChatArea activeChat={activeChat} ></ChatArea>
            <AboutUser></AboutUser>

        </div>
    )
}

export default Home
