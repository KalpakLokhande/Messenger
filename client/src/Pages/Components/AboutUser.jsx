import React from 'react'
import defaultUser from '../assets/defaultUser.png'

const AboutUser = () => {

    const user = JSON.parse(sessionStorage.getItem('user'))

    return (
        <div className='about' >
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0px' }}>
                <img src={ user.displayPicture !== '' ? `data:image/jpg;base64,${user.displayPicture}` : defaultUser} alt="" style={{ marginBottom: '20px' , borderRadius:'50%', objectFit:'cover'}} />
                <h2> Name </h2>
                <h4>"My Favourite word is trying"</h4>
            </div>
        </div>
    )
}

export default AboutUser
