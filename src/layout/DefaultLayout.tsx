import React, { PropsWithChildren } from "react";
import Head from 'next/head'
import { usePathname } from 'next/navigation'

import Header from "~/layout/component/Header";
import Footer from "~/layout/component/Footer";
import Search from "~/components/Search";
const DefaultLayout = ({ children }: PropsWithChildren) => {
        const pathname = usePathname()
        return (
                <>
                        <Header path={pathname} />
                        <main className="w-full">
                                {
                                        pathname === "/" ? <Search /> : ""
                                }
                                {children}
                        </main>
                        <Footer />
                </>
        );
};
export default DefaultLayout;