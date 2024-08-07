import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {ProductsContextProvider} from "./context/products/ProductContext";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter basename='/vite-gh-pages/'>
            <ProductsContextProvider>
                <App/>
            </ProductsContextProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
