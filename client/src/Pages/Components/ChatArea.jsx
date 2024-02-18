import React from 'react'
import userDP from '../assets/defaultUser.png'
import call from '../assets/call.png'
import videocall from '../assets/videoCall.png'
import bold from '../assets/bold.png'
import italics from '../assets/italic.png'
import copy from '../assets/copy.png'
import gallery from '../assets/gallery.png'
import star from '../assets/star.png'
import location from '../assets/location.png'
import attach from '../assets/attached.png'
import voice from '../assets/microphone.png'
import Message from './Message'




const ChatArea = () => {
    return (
        <div className='chatArea'>
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
            <div className='chats'>
                {/* <Message></Message> */}
            </div>
            <div className='messageInput' >
                <input type="text" placeholder='Type a Message' />
                <div className='textDecor'>
                    <div style={{ display: 'flex', gap: '14px' }}>
                        <img src={italics} alt="" />
                        <img src={bold} alt="" />
                        <img src={copy} alt="" />
                        <img src={gallery} alt="" />
                        <img src={star} alt="" />
                        <img src={location} alt="" />
                    </div>
                    <div style={{ display: 'flex', gap: '14px', alignItems:'center', justifyContent:'center' }}>
                        <img src={attach} alt="" />
                        <img src={voice} alt="" />
                        <button> Send </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatArea
