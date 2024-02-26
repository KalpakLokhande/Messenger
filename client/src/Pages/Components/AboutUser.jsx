import React, { useEffect, useState } from 'react'
import defaultUser from '../assets/defaultUser.png'
import axios from 'axios'
import logout from '../assets/logout.png'
import { useNavigate } from 'react-router-dom'

const AboutUser = () => {

    const user = JSON.parse(sessionStorage.getItem('user'))
    const navigate = useNavigate()

    const logOut = () => {

        sessionStorage.clear()
        navigate('/')

    }
    
    // useEffect(() => {

    //     const fetchDP = async () => {
    //         try {

    //             const response = await axios.get(`http://localhost:3001/getImage/${user.displayPicture}`)
    //             setUserDP(response.data)

    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }

    //     if (user.displayPicture) {

    //         fetchDP()

    //     }
    // }, [])
    return (
        <div className='about' >
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0px' }}>
                <img src={user.displayPicture ? `http://localhost:3001/${user.displayPicture}` : defaultUser} alt="" style={{ border: '2px solid yellowGreen', marginBottom: '20px', borderRadius: '50%', objectFit: 'cover' }} />
                <h2> {user.userName} </h2>
                <h4>"My Favourite word is trying"</h4>
            </div>
            <div onClick={() => logOut()} style={{ cursor: 'pointer', display: 'flex', gridRow: '3', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
                <h4>Logout</h4>
                <img src={logout} style={{ width: '20px', height: '20px' }} ></img>
            </div>
        </div>
    )
}

export default AboutUser
