'use client'

import { usePathname } from "next/navigation";
import HeaderBottom from "./HeaderBottom"
import HeaderTop from "./HeaderTop"

const Header = () => {

    const point = 10;

    const pathname = usePathname();

    return (
        <header className='main_header'>
            {pathname === '/' || pathname === '/couponPage'
                    ?
                    <div>
                        <HeaderTop />
                        <HeaderBottom />
                    </div>
                    : <HeaderTop />}
            
            
        </header>
    )
}

export default Header