import { Header } from './sections/header'

export default function Layout({ children }) {
    return (
        < >
            <Header />
            <main className='bg-slate-100 text-gray-700 font-ds antialiased overflow-hidden'>
                {children}
            </main>
        </ >
    );
  }