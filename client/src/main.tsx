import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/Home.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './components/Cart/Cart.tsx';
import CrudMenu from './components/CrudMenu/CrudMenu.tsx';
import Remover from './components/Remover/Remover.tsx';
import Cadastrar from './components/Adicionar/Cadastrar.tsx';
import Atualizar from './components/Atualizar/Atualizar.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/crud-menu",
    element: <CrudMenu/>
  },
  {
    path:"/cadastrar",
    element: <Cadastrar/>
  },
  {
    path: "/atualizar",
    element: <Atualizar/>
  },
  {
    path: "/remover",
    element: <Remover/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
