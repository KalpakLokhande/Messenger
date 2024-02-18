import React, { useState } from "react";
import searchIcon from '../assets/Search.png'
import defaultUserDP from '../assets/defaultUser.png'

const Contacts = () => {

    const [filterBy, setFilterBy] = useState('messages')

    const handleFilter = (criteria) => {

        setFilterBy(criteria)

    }

    return (
        <div className="contacts">

            <div className="contactHeader">
                <h2>Your Chats</h2>
                <img src={searchIcon} alt="" />
            </div>

            <div className="filterType">
                <button onClick={() => handleFilter('messages')} style={{ backgroundColor: filterBy === 'messages' ? 'white' : 'transparent', color: filterBy === 'messages' ? 'royalblue' : '#001742' }}>Chats</button>
                <button onClick={() => handleFilter('contacts')} style={{ backgroundColor: filterBy === 'contacts' ? 'white' : 'transparent', color: filterBy === 'contacts' ? 'royalblue' : '#001742' }}>Contacts</button>
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
                <h5>Chats</h5>
                <ul className="list">
                    
                </ul>
            </div>

        </div>
    )

}

export default Contacts