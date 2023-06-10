import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { getTopSeller, fetchTopTotalsale } from '../../entities/user'

function TotalSaleUserRaiting({ Card }) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTopTotalsale())
    })
    const topSeller = useSelector(getTopSeller())
    const renderSeller = topSeller.length ? topSeller : new Array(4).fill(false)
    return (
        <div className="flex flex-wrap">
            {renderSeller.map((user, i) => (
                <Card key={i} position={i % 2 ? 'right' : 'left'} user={user} />
            ))}
        </div>
    )
}

TotalSaleUserRaiting.propTypes = {
    Card: PropTypes.elementType,
}

export default TotalSaleUserRaiting
