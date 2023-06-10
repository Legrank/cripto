import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isLoggedInSelector } from '../../auth'
import { fetchUserById, selectUserById } from '../model/userSlice'

export const useUser = (userId) => {
    const auth = useSelector(isLoggedInSelector())
    const dispatch = useDispatch()
    const user = useSelector((state) => selectUserById(state, userId))
    useEffect(() => {
        if (!user && userId) {
            dispatch(fetchUserById({ userId, auth }))
        }
    }, [user, userId])
    return user
}
