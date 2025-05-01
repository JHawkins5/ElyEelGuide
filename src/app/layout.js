'use client';
import { Providers } from './providers';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.png" />
            </head>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}