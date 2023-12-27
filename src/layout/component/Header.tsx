'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';

const Header = ({ path }: any) => {

        return (
                <div className="w-full bg-white sticky top-0 z-[40] shadow-sm">
                        <div className="container">
                                <Navbar fluid rounded>
                                        <Navbar.Brand as={Link} href="https://flowbite-react.com">
                                                <img src="/itourgo-logo.png" className="mr-3 h-16 sm:h-12" alt="Flowbite React Logo" />
                                        </Navbar.Brand>
                                        <Navbar.Toggle />
                                        <Navbar.Collapse>
                                                <Navbar.Link href="#" active>
                                                        Trang chủ
                                                </Navbar.Link>
                                                <Navbar.Link as={Link} href="#">
                                                        Về chúng tôi
                                                </Navbar.Link>
                                                <Navbar.Link href="#">Dịch vụ</Navbar.Link>
                                                <Navbar.Link href="#">Liên hệ</Navbar.Link>
                                        </Navbar.Collapse>
                                </Navbar>
                        </div>
                </div >
        )
}
export default Header;