import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Blog';
import Home from '../Home';
import Root from '../Root';
import Statistics from '../Statistics';
import About from '../About';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: 'statistics', element: <Statistics /> },
            { path: '/blog', element: <Blog /> },
            { path: '/about', element: <About /> }
        ]

    }
])

export default router;
