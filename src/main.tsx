import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// @ts-ignore
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from '../router.tsx';
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <>
            <RouterProvider router={router} />
            <Toaster position="top-right" reverseOrder={false} />
        </>
    </StrictMode>
);
