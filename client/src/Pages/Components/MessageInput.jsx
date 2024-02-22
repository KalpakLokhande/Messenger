import React from 'react'
import bold from '../assets/bold.png'
import italics from '../assets/italic.png'
import copy from '../assets/copy.png'
import gallery from '../assets/gallery.png'
import star from '../assets/star.png'
import location from '../assets/location.png'
import attach from '../assets/attached.png'
import voice from '../assets/microphone.png'

const MessageInput = () => {
  return (
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
  )
}

export default MessageInput
