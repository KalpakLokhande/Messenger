import React, { useEffect, useState } from "react";
import searchIcon from '../assets/Search.png'
import defaultUserDP from '../assets/defaultUser.png'
import addFriend from '../assets/invite.png'
import removeFriend from '../assets/block-user.png'
import axios from 'axios'

const Contacts = (props) => {

    const [filterBy, setFilterBy] = useState('messages')
    const [contacts, setContacts] = useState([])
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')))
    const handleFilter = (criteria) => {

        setFilterBy(criteria)

    }

    const handleRemoveFriend = async (e, toRemove) => {

        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:3001/removeFriend', { remover: user._id, removed: toRemove })
            sessionStorage.setItem('user', JSON.stringify(response.data))
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }

    }


    const handleAddFriend = async (e, toAdd) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3001/addFriend', { adder: user._id, added: toAdd })
            sessionStorage.setItem('user', JSON.stringify(response.data))

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {

        const fetchAllUsers = async () => {

            try {

                const response = await axios.get('http://localhost:3001/getAllUsers')

                setContacts(response.data)
                // renderContacts(response.data)

            } catch (error) {
                console.log(error)
            }

        }

        fetchAllUsers()

    }, [])



    return (
        <div className="contacts">

            <div className="contactHeader">
                <h2>Your Chats</h2>
                <img src={searchIcon} alt="" />
            </div>

            <div className="filterType">
                <button onClick={() => handleFilter('messages')} style={{ backgroundColor: filterBy === 'messages' ? 'white' : 'transparent', color: filterBy === 'messages' ? 'royalblue' : '#001742' }}>Chats</button>
                <button onClick={() => handleFilter('contacts')} style={{ backgroundColor: filterBy === 'contacts' ? 'white' : 'transparent', color: filterBy === 'contacts' ? 'royalblue' : '#001742' }}>Discover</button>
            </div>

            <select className="sortType">
                <option>Recent</option>
                <option>Groups</option>
                <option>Favourites</option>
            </select>

            <div className="favorites" >
                <h5>Favorites</h5>
                <ul className="favList">
                </ul>
            </div>

            <div className="mainList" >
                <h5>{filterBy === 'messages' ? 'Conversations' : 'Contacts'}</h5>
                <ul className="list">
                    {filterBy === 'messages' ?

                        user.friends.map(friend => {

                            return (
                                <li key={friend._id} onClick={() => props.setActiveChat(friend)} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: '10px', marginLeft: '10px', cursor: 'pointer' }}>
                                    <img src={friend.displayPicture ? `http://localhost:3001/${friend.displayPicture}` : defaultUserDP} style={{ objectFit: 'cover', width: '45px', height: '45px', borderRadius: '50%' }} ></img>
                                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                        <h4> {friend.userName} </h4>
                                        <p>Last Message</p>
                                    </div>
                                </li>
                            )

                        }) : contacts.map((contact) => {

                            if (contact._id === user._id) return
                            if (!contact.displayPicture) return

                            return (
                                <li key={contact._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '30px', borderBottom: '1px solid gray', margin: '0px 10px' }} >
                                    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: '15px', marginLeft: '10px' }} >
                                        <img src={contact.displayPicture ? `http://localhost:3001/${contact.displayPicture}` : defaultUserDP} style={{ objectFit: 'cover', width: '45px', height: '45px', borderRadius: '50%' }} ></img>
                                        <h4> {contact.userName} </h4>
                                    </div>
                                    {user.friends.some(friend => friend._id === contact._id) ?
                                        <img style={{ width: '20px', height: '20px' }} onClick={(e) => { handleRemoveFriend(e, contact._id) }} src={removeFriend} ></img> : <img onClick={(e) => { handleAddFriend(e, contact._id) }} style={{ width: '20px', height: '20px' }} src={addFriend} ></img>
                                    }
                                </li>
                            )


                        })


                    }
                </ul>

            </div>

        </div>
    )

}

export default Contacts