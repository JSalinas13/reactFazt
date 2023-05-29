import React from 'react';
import ReactDOM from 'react-dom/client';
import { Gretting, UserCard } from "./Gretting";
import Product, { NavBar } from './Product';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <Gretting title="Hola 1" />
        <Gretting title="Hola 2" />
        <Gretting title="Hola 3" />
        <Gretting title="Hola 4" />
        <Gretting title="Hola 5" />

    </>
)