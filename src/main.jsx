import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'; 
import { Toaster } from 'sonner';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import { router } from './Contants/Routers.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
   <Toaster richColors visibleToasts={1} position='bottom-center' />
  </StrictMode>,
);