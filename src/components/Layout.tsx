import {Outlet} from "react-router-dom"
import Homepage from "./Homepage";

const Layout = (): any => {
    return (
        <div className='h-screen'>
            <div className='fixed top-0 left-0 right-0 z-50'>
                <Homepage/>
            </div>
            <main className='pt-16 h-full overflow-y-auto'>
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout
