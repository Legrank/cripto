import React from 'react'
import { useSelector } from 'react-redux'
import { useUser } from '../../entities/user'
import { getUserIdSelector } from '../../entities/auth/model/authSlice'

function Profile() {
    const userId = useSelector(getUserIdSelector())
    const user = useUser(userId)
    return (
        <div>
            <p>Имя {user?.name}</p>
            <p>Email {user?.email}</p>
            <p>Всего продал {user?.totalsale}</p>
            <p>Баланс {user?.balance}</p>
        </div>
    )
}

export default Profile
