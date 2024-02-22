import React from 'react'
import userDP from '../assets/defaultUser.png'
import call from '../assets/call.png'
import videocall from '../assets/videoCall.png'

const ChatHeader = () => {
    return (
        <div className='receiver' >
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <img src={userDP} alt="" className='dp' />
                <h2>Name</h2>
            </div>
            <div className='icons'>
                <div style={{ width: '50px', height: '50px', background: '#dfdfdf', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={call} alt="" />
                </div>
                <div style={{ width: '50px', height: '50px', background: '#dfdfdf', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={videocall} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ChatHeader
