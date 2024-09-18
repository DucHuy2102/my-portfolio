import { Hero_Component, Navbar_Component, Projects_Component } from './components/exportComponent';

export default function App() {
    return (
        <div className='relative h-full overflow-y-auto antialiased'>
            <div className='fixed inset-0 bg-fixed bg-cover bg-center bg-img'></div>
            <div className='relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto'>
                <Hero_Component />
                <Navbar_Component />
                <Projects_Component />
            </div>
        </div>
    );
}
