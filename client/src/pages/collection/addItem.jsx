import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, FormComponent, TextField, UploadImg } from '../../shared/ui'
import { nftCreate } from '../../entities/nft'
import { useNavigate, useParams } from 'react-router-dom'

function AddItem() {
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const dispatch = useDispatch()
    const { collection } = useParams()
    const handleSubmit = async (data) => {
        const datatransfer = new FormData()
        for (const item in data) {
            datatransfer.append(item, data[item])
        }
        datatransfer.append('collectionNft', collection)
        try {
            await dispatch(nftCreate(datatransfer)).unwrap()
            navigate('../')
        } catch (e) {
            setError({
                bgImg: 'При создании коллекции произошла ошибка. Попробуйте позже.',
            })
        }
    }
    return (
        <>
            <h2>Создание NFT</h2>
            <FormComponent
                onSubmit={handleSubmit}
                validatorConfig={{}}
                newError={error}
                className="w-96"
            >
                <TextField name="name" label="Название"></TextField>
                <TextField name="description" label="Описание"></TextField>
                <TextField name="price" label="Цена"></TextField>
                <UploadImg name="imgUrl" label="Выбирите фаил" />
                <Button>Создать</Button>
            </FormComponent>
        </>
    )
}

export default AddItem
