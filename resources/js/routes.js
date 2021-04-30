import AllProduct from './components/AllProduct.vue';
import CreateProduct from './components/CreateProduct.vue';
import EditProduct from './components/EditProduct.vue';
import Login from "./auth/Login";
import Service from "./service/Service";
import Customer from "./customer/Customer";

export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllProduct
    },
    {
        name: 'create',
        path: '/create',
        component: CreateProduct
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditProduct
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'service',
        path: '/service',
        component: Service
    },
    {
        name: 'customer',
        path: '/customer',
        component: Customer
    },
    {
        name: 'signin',
        path: '/signin',
        component: () => import('./auth/Login')
    },
    {
        name: 'MainLayout',
        path: '/MainLayout',
        component: () => import('./layout/MainLayout')

    }
];
