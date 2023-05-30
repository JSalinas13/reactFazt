import React from 'react';
import ReactDOM from 'react-dom/client';
import { Gretting, UserCard } from "./Gretting";
import Product, { NavBar } from './Product';
import { Button } from "./Button";
import { TaskCard } from './Task';
import { Saludar } from './Saludar'

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <>
        <TaskCard ready={true} />
        {/* <Saludar /> */}
        <Button text='Saludar' />

        <form onSubmit={(e) => {
            e.preventDefault()
            alert('Enviado');
        }}>
            <h1>Registro de usuario</h1>
            <button>Send</button>
        </form >
    </>
)