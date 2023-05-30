import React from 'react';
import ReactDOM from 'react-dom/client';
import { Gretting, UserCard } from "./Gretting";
import Product, { NavBar } from './Product';
import { Button } from "./Button";
import { TaskCard } from './Task';
import { Saludar } from './Saludar'
import { Posts } from './Posts';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <>
        <Posts />
    </>
)