import React from 'react'
import { useDispatch } from 'react-redux'

import { logout } from '../features/userSlice'

export const Logout = () => {

    const dispatch = useDispatch()

    const handleLogout = (e) => {
        e.preventDefault()

        dispatch(logout())
    }

  return (
    <div className='logout'>
        <h1>Wellcome <span className='user_name'>Pravesh</span>
        </h1>{"  "}
        <button className='logout_btn' onClick={(e) => handleLogout(e)}>Logout</button>
    </div>
  )
}
