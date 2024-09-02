import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomePage, OrderPage } from "@/pages";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/order" element={<OrderPage />} />
            </Routes>
        </BrowserRouter>
    )
}
