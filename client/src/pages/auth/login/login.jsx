import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button, FormComponent, TextField } from '../../../shared/ui'
import { useDispatch } from 'react-redux'
import { login } from '../../../entities/auth/model/authSlice'

export function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const redirect = location.state
        ? location.state.referrer.pathname
        : '/profile'
    const handleSubmit = async (data) => {
        await dispatch(login(data)).unwrap()
        navigate(redirect, { replace: true })
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
                type="password"
                className="w-80 mb-3"
            />
            <Button className="w-80">Войти</Button>
            <p>
                или <Link to={'/sungup'}> зарегистрируйтесь</Link>
            </p>
        </FormComponent>
    )
}
