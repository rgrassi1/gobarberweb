import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../store/actions/auth';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import schema from './validation/schema';
import { Form, Input } from '@rocketseat/unform';

export default function SignIn(props) {    
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));
    }
    
    return ( 
        <Fragment>
            <img src={logo} alt="Gobarber"/>
            <Form schema={schema} onSubmit={handleSubmit} noValidate>
                <Input name="email" type="email" placeholder="Seu e-mail" autoComplete="off" autoFocus="on" autoCorrect="off"/>
                <Input name="password" type="password" placeholder="Sua senha secreta" autoComplete="off" />

                <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
                <Link to='/register'>Criar conta gratuita</Link>
            </Form>
        </Fragment>
    )
}