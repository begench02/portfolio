import { AboutPage } from "pages/AboutPage/AboutPage";
import { HomePage } from "pages/HomePage/HomePage";

const home = '/home';
const about = '/about';
const portfolio = '/portfolio';
const contacts = '/contacts';
const blog = '/blog';

export const routes = [
    {
        path: home,
        Component: HomePage
    },
    {
        path: about,
        Component: AboutPage
    },
    {
        path: portfolio,
        Component: HomePage
    },
    {
        path: contacts,
        Component: HomePage
    },
    {
        path: blog,
        Component: HomePage
    }
];