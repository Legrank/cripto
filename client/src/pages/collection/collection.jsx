import React from 'react'
import { Button } from '../../shared/ui'
import { Link } from 'react-router-dom'

function Collection() {
    return (
        <div>
            <Button>
                <Link to="create">Создать</Link>
            </Button>
        </div>
    )
}

export default Collection
