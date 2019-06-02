import React from 'react';
import { render } from 'react-dom';
import HelloWorld from './HelloWorld.jsx';
import MainNavbar from './MainNavbar.jsx'

render(
    <div>
        <MainNavbar />
        <HelloWorld />
    </div>,
	document.getElementById('app')
);