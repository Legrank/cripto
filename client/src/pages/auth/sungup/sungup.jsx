import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Button, FormComponent, TextField } from '../../../shared/ui'
import { signUp } from '../../../entities/auth/model/authSlice'

export function SungUp() {
    const dispatch = useDispatch()
    const handeleSubmit = async (data) => {
        const response = await dispatch(signUp(data)).unwrap()
        console.log('response', response)
    }
    return (
        <FormComponent
            validatorConfig={{}}
            onSubmit={handeleSubmit}
            className="px-20 h-full pt-32 flex flex-col justify-center"
        >
            <TextField name={'name'} label={'Имя'} className="w-80" />
            <TextField name={'email'} label={'Email'} className="w-80" />
            <TextField
                name={'password'}
                label={'Пароль'}
                className="w-80 mb-3"
            />
            <Button className="w-80">Зарегестрироватся</Button>
            <p>
                или <Link to={'/sungup'}> войдите</Link>
            </p>
        </FormComponent>
    )
}
