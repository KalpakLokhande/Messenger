import React, { useEffect, useState } from 'react'
import Contacts from './Components/Contacts'
import ChatArea from './Components/ChatArea'
import defaultUser from '../Pages/assets/defaultUser.png'
import notif from '../Pages/assets/bell.png'

const Home = () => {

    return (
        <div className='home'>
            <Contacts></Contacts>
            <ChatArea></ChatArea>
            <div className='about' >
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0px' }}>
                    <img src={defaultUser} alt="" style={{ marginBottom: '20px' }} />
                    <h2> Name </h2>
                    <h4>"My Favourite word is trying"</h4>
                </div>
            </div>
        </div>
    )
}

export default Home
