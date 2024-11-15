import { Navigate } from "react-router-dom";
import Dashboard from "pages/Dashboard";
import ListProduct from "pages/products/List";
import CreateProduct from "pages/products/product-create";
const authProtectedRoutes = [
    { path: "/dashboard", component: <Dashboard /> },
    { path: "/products/List", component: <ListProduct /> },
    { path: "/products/product-create", component: <CreateProduct /> },


];

const publicRoutes = [
    {}
];

export { authProtectedRoutes, publicRoutes };
