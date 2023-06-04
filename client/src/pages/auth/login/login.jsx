import React from 'react'
import { Link } from 'react-router-dom'
import { Button, FormComponent, TextField } from '../../../shared/ui'

export function Login() {
    const handeleSubmit = (e) => {
        console.log('e', e)
    }
    return (
        <FormComponent
            validatorConfig={{}}
            onSubmit={handeleSubmit}
            className="px-20 h-full pt-32 flex flex-col justify-center"
        >
            <TextField name={'name'} label={'name'} className="w-80" />
            <TextField name={'ttyr'} label={'email'} className="w-80 mb-3" />
            <Button className="w-80">Войти</Button>
            <p>
                или <Link to={'/sungup'}> зарегистрируйтесь</Link>
            </p>
        </FormComponent>
    )
}
