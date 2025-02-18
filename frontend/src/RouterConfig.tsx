import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import App from './pages/App.tsx'
import New from './pages/New.tsx'


export const RouterConfig: React.FC = () => {
  return (
    <BrowserRouter>
        <ChakraProvider value={defaultSystem}>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='new' element={<New />} />
            </Routes>
        </ChakraProvider>
    </BrowserRouter>
  )
}