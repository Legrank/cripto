import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, FormComponent, TextField, UploadImg } from '../../shared/ui'
import { collectionCreate } from '../../entities/collection'
import { useNavigate } from 'react-router-dom'

function CreateCollection() {
    const [error, setError] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async (data) => {
        const datatransfer = new FormData()
        for (const item in data) {
            datatransfer.append(item, data[item])
        }
        try {
            const collection = await dispatch(
                collectionCreate(datatransfer)
            ).unwrap()
            navigate(`../${collection.id}`)
        } catch (e) {
            setError({
                bgImg: 'При создании коллекции произошла ошибка. Попробуйте позже.',
            })
        }
    }
    const validatorConfig = {
        name: {
            isRequired: {
                message: 'Введите название',
            },
        },
    }
    return (
        <FormComponent
            onSubmit={handleSubmit}
            resetForm={true}
            newError={error}
            validatorConfig={validatorConfig}
        >
            <TextField label="Название коллекции" name="name" />
            <UploadImg
                label="Выбирите изображение для коллекции"
                name="bgImg"
            ></UploadImg>
            <Button> Создать</Button>
        </FormComponent>
    )
}

export default CreateCollection
