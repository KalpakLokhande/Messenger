import React from 'react'
import Message from './Message'
import ChatHeader from './ChatHeader'
import MessageInput from './MessageInput'

const ChatArea = (props) => {

    

    return (
        <div className='chatArea'>
            {props.activeChat === '' ? 
            <h1>Select A Chat </h1> : 
            <>
             <ChatHeader></ChatHeader>
            <div className='chats'>
                {/* <Message></Message> */}
            </div>
           <MessageInput></MessageInput>
            </>
            }
           
        </div>
    )
}

export default ChatArea
