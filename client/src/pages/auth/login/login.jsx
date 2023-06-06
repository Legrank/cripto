import React from 'react'
import { Link } from 'react-router-dom'
import { Button, FormComponent, TextField } from '../../../shared/ui'
import { useDispatch } from 'react-redux'
import { login } from '../../../entities/auth/model/authSlice'

import httpService from '../../../shared/api/http.service'

export function Login() {
    const dispatch = useDispatch()
    const handleSubmit = async (data) => {
        const response = await dispatch(login(data)).unwrap()
        console.log('response', response)
    }
    const handleClick = async () => {
        const data = await httpService.post('/api/collection', { test: 123 })
        console.log('data', data)
    }
    return (
        <FormComponent
            validatorConfig={{}}
            onSubmit={handleSubmit}
            className="px-20 h-full pt-32 flex flex-col justify-center"
        >
            <TextField name={'email'} label={'email'} className="w-80" />
            <TextField
                name={'password'}
                label={'пароль'}
                className="w-80 mb-3"
            />
            <Button className="w-80">Войти</Button>
            <Button className="w-80" type="button" onClick={handleClick}>
                Приватный роут
            </Button>
            <p>
                или <Link to={'/sungup'}> зарегистрируйтесь</Link>
            </p>
        </FormComponent>
    )
}
