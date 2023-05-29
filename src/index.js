import React from 'react';
import ReactDOM from 'react-dom/client';
import { Gretting, UserCard } from "./Gretting";
import Product, { NavBar } from './Product';
import { Button } from "./Button";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <Button text='Click me' />
        <Button text='Pay' />
        <Button text='Go to'/>
        {/* <UserCard
            name="Jesus Salinas"
            amount={3000}
            married={true}
            points={[99, 3.33, 32.3]}
            address={{ street: "Emiliano Zapata 70", city: "Celaya" }}
            greet={function () { alert('Hello') }}
        /> 
        <UserCard
            name="Jesus Salinas"
            amount={3000}
            married={true}
            points={[99, 3.33, 32.3]}
            address={{ street: "Emiliano Zapata 70", city: "Celaya" }}
            greet={function () { alert('Hello') }}
        />
        */}

    </>
)