import React, { useEffect, useState } from 'react'
import Contacts from '../Components/Contacts'
import ChatArea from '../Components/ChatArea'
import notif from '../assets/bell.png'
import AboutUser from '../Components/AboutUser'
import './Home.css'

const Home = () => {

    return (
        <div className='home'>
            <Contacts></Contacts>
            <ChatArea></ChatArea>
            <AboutUser></AboutUser>
        </div>
    )
}

export default Home
