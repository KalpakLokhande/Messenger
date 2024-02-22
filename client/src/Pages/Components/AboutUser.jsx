import React from 'react'
import defaultUser from '../assets/defaultUser.png'

const AboutUser = () => {
    return (
        <div className='about' >
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0px' }}>
                <img src={defaultUser} alt="" style={{ marginBottom: '20px' }} />
                <h2> Name </h2>
                <h4>"My Favourite word is trying"</h4>
            </div>
        </div>
    )
}

export default AboutUser
