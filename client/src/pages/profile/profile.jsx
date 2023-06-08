import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTopTotalsale } from '../../entities/user'
import { isLoggedInSelector } from '../../entities/auth/model/authSlice'

function Profile() {
    const dispatch = useDispatch()
    const isLoggen = useSelector(isLoggedInSelector())
    useEffect(() => {
        const test = async () => {
            dispatch(getTopTotalsale(isLoggen))
        }
        test()
    })
    return <div>dfgdf</div>
}

export default Profile
