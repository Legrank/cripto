import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    Button,
    FormComponent,
    SpinnerLoader,
    TextField,
    UploadImg,
} from '../../shared/ui'
import { useNft, nftUpdate } from '../../entities/nft'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateItem() {
    const { nftId } = useParams()
    const nft = useNft(nftId)
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const dispatch = useDispatch()
    const handleSubmit = async (data) => {
        const datatransfer = new FormData()
        for (const item in data) {
            datatransfer.append(item, data[item])
        }
        try {
            await dispatch(nftUpdate(datatransfer)).unwrap()
            navigate('../')
        } catch (e) {
            setError({
                bgImg: 'При создании коллекции произошла ошибка. Попробуйте позже.',
            })
        }
    }
    return (
        <>
            <h2>Изменение NFT</h2>
            {nft ? (
                <FormComponent
                    onSubmit={handleSubmit}
                    validatorConfig={{}}
                    newError={error}
                    className="w-96"
                    defaultData={nft}
                >
                    <TextField name="name" label="Название"></TextField>
                    <TextField name="description" label="Описание"></TextField>
                    <TextField name="price" label="Цена"></TextField>
                    <UploadImg name="imgUrl" label="Выбирите фаил" />
                    <Button>Изменить</Button>
                </FormComponent>
            ) : (
                <SpinnerLoader />
            )}
        </>
    )
}

export default UpdateItem
