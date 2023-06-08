import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Button, FormComponent, TextField } from '../../../shared/ui'
import { signUp } from '../../../entities/auth/model/authSlice'

const validatorConfig = {
    email: {
        isRequired: {
            message: 'Электронная почта обязательна для заполнения',
        },
        isEmail: {
            message: 'Email введен некорректно',
        },
    },
    name: {
        isRequired: {
            message: 'Имя обязательно для заполнения',
        },
        min: {
            message: 'Имя должено состоять минимум из 3 символов',
            value: 3,
        },
    },
    password: {
        isRequired: {
            message: 'Пароль обязателен для заполнения',
        },
        isCapitalSymbol: {
            message: 'Пароль должен содержать хотя бы одну заглавную букву',
        },
        isContainDigit: {
            message: 'Пароль должен содержать хотя бы одно число',
        },
        min: {
            message: 'Пароль должен состоять минимум из 8 символов',
            value: 8,
        },
    },
}

export function SingUp() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handeleSubmit = async (data) => {
        try {
            await dispatch(signUp(data)).unwrap()
            navigate('/', { replace: true })
        } catch (error) {
            console.log('response', error)
        }
    }
    return (
        <FormComponent
            validatorConfig={validatorConfig}
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
                или <Link to={'/login'}> войдите</Link>
            </p>
        </FormComponent>
    )
}
