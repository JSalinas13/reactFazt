import React from 'react';
import ReactDOM from 'react-dom/client';
import { Gretting, UserCard } from "./Gretting";
import Product, { NavBar } from './Product';
import { Button } from "./Button";
import { TaskCard } from './Task';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <TaskCard ready = {true} />
    </>
)