/* @refresh reload */
import { render } from 'solid-js/web'
import { Route, Router, Routes, } from '@solidjs/router';

import './index.css'
import Home from './pages/home/Home';

const root = document.getElementById('root')

render(() =>
    <Router>
        <Routes>
            <Route path="/" component={Home} />
        </Routes>
    </Router>
    , root)
