import {Outlet} from "react-router-dom"

const Layout = (): any => {
    return (
        <div className='h-screen'>
            <main className='h-full overflow-y-auto'>
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout
