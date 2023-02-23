import { Header } from './sections/header'

export default function Layout({ children }) {
    return (
    <div className='bg-slate-100 text-gray-700 font-ds scroll-smooth antialiased'>
        <Header />
        <main className='relative overflow-hidden'>
            {children}
        </main>
    </div>
    );
  }