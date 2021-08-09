import React, { HTMLAttributes } from 'react';
import { Header, Footer } from '../components';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Layout: React.FC<Props> = (props: { children: React.ReactNode }) => {
    const { children } = props;

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Layout;