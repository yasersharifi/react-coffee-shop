import { createBrowserRouter, Link } from "react-router-dom"
import App from "../App";
import TheAbout from "../components/TheAbout";
import TheService from '../components/TheService';
import TheMenu from '../components/TheMenu';
import TheContact from '../components/TheContact';
import TheTestimonial from '../components/TheTestimonial';
import TheReservation from '../components/TheReservation';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />

    },
    {
        path: 'about',
        element: <TheAbout />
    },
    {
        path: 'service',
        element: <TheService />
    },
    {
        path: 'menu',
        element: <TheMenu />
    },
    {
        path: 'contact',
        element: <TheContact />
    },
    {
        path: 'reservation',
        element: <TheReservation />
    },
    {
        path: 'testimonial',
        element: <TheTestimonial />
    }
])

export default routes;