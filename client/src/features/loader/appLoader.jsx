import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

function AppLoader({ children }) {
    const dispatch = useDispatch()
    useEffect(() => {}, [])
    // if (usersStatusLoading) return 'Загрузка'
    return children
}

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
}

export default AppLoader
