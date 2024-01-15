import React from "react";
import "../css/global.css";
import StoreProvider from "./StoreProvider";

type CHI = {
    children: React.ReactNode
};

export default function RootLayout({ children }: CHI) {
    return (
        <StoreProvider>
            <html lang="en">
                <body>
                    {children}
                </body>
            </html>
        </StoreProvider>
    );
};


