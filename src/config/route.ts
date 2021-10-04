import HomePage from "../components/HomePage";
import List from "../components/List";
import IRoute from "../interfaces/route";

const routes: IRoute[] = [
    {
        path: "/",
        name: 'Home Page',
        exact: true,
        component: HomePage
    },
    {
        path: '/list/:id',
        name: 'My List',
        exact: true,
        component: List
    }
]

export default routes;

