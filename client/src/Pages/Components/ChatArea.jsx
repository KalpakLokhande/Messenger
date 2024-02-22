import React from 'react'
import Message from './Message'
import ChatHeader from './ChatHeader'
import MessageInput from './MessageInput'

const ChatArea = () => {
    return (
        <div className='chatArea'>
            <ChatHeader></ChatHeader>
            <div className='chats'>
                {/* <Message></Message> */}
            </div>
           <MessageInput></MessageInput>
        </div>
    )
}

export default ChatArea
