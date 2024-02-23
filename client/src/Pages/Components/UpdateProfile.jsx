import React, { useState } from 'react'
import defaultUser from '../assets/defaultUser.png'
import { useNavigate } from 'react-router-dom'
import bg from '../assets/bg.jpg'
import axios from 'axios'

const UpdateProfile = () => {

    const user = JSON.parse(sessionStorage.getItem('user'))
    const navigate = useNavigate()
    const [file, setFile] = useState(null)

    const handleSubmit = async () => {

        try {

            const formData = new FormData()
            formData.append('image', file)
            formData.append('userID', user._id)
            const response = await axios.post('http://localhost:3001/uploadProfile', formData, {
                'Content-Type': 'multipart/form-data'
            })

            console.log(response.data)
            sessionStorage.setItem('user', JSON.stringify(response.data))
            navigate('/home')

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', width: '100%', height: '100%' }}>
            <img src={bg} style={{ position: 'absolute', width: '100%', height: '100%' }} ></img>
            <div style={{ width: '100%', height: '100%', position: 'absolute', background: 'rgba(1,1,1,0.5)' }} ></div>
            <div style={{ zIndex: '1', display: 'flex', flexDirection: 'column', width: '50%', height: '50%', gap: '20px', justifyContent: 'center', alignItems: 'center', borderRadius: '20px', background: 'rgba(1,1,1,0.8)' }} >
                <input id='updateDP' type='file' onChange={(e) => { setFile(e.target.files[0]) }} style={{ display: 'none' }} ></input>
                <h3 style={{color:'aqua'}}>Make Sure People Recognize You!</h3>
                <label htmlFor='updateDP' >
                    <img src={file !== null ? URL.createObjectURL(file) : defaultUser} style={{objectFit:'cover', width: '120px', height: '120px', borderRadius: '50%', border: 'none' }} ></img>
                </label>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px' }} >
                    <button onClick={() => { navigate('/home') }} style={{ padding: '6px 12px', borderRadius: '20px', border: 'none' }} >Skip </button>
                    <button onClick={() => { handleSubmit() }} style={{ padding: '6px 12px', borderRadius: '20px', border: 'none' }}> Upload</button>
                </div>

            </div>
        </div>
    )
}

export default UpdateProfile
