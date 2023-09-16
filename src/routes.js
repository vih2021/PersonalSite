import Home from './pages/Home.js';
import './css/Home.css'
import { Route, Routes as ReactRouter } from 'react-router-dom'

export default function Routes() {
    return (
        <ReactRouter>
            <Route path='/' element={ <Home /> } />
        </ReactRouter>
    )
}