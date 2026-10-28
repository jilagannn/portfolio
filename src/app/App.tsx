import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Home } from '../components/pages/Home';

export const App = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route 
                    path="/home"
                    element={<Home />}
                />
            </Route>
        </Routes>
    )
}