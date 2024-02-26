import React from 'react'
import userDP from '../assets/defaultUser.png'
import call from '../assets/call.png'
import videocall from '../assets/videoCall.png'

const ChatHeader = (props) => {

    console.log(props)

    return (
        <div className='receiver' >
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <img src={props.activeChat.displayPicture === '' ? userDP : `http://localhost:3001/${props.activeChat.displayPicture}`} alt="" className='dp' style={{borderRadius:'50%', objectFit:'cover', border:'1px solid yellowGreen'}} />
                <h2>{props.activeChat.userName}</h2>
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
