import Link from 'next/link';
import { titleFont } from '@/config/fonts';
import { IoLogoWhatsapp } from 'react-icons/io5';

export const TopMenu = () => {

    return (
        <nav className='flex my-3 px-5 justify-between  items-center w-full'>
            <div>
                <Link href="/">
                    <span className={`${titleFont.className} antialiased font-bold`}>Citas</span>
                </Link>
            </div>

            {/* <div className='hidden sm:block'>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href="/categoria/lotes">Lotes</Link>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href="/categoria/departamentos">Departamentos</Link>
            </div> */}

            <Link
                href={`http://wa.me/51977878631?text=${encodeURIComponent('Hola, quiero más información sobre la página de citas')}`}
                target="_blank"
                className='flex items-center'
            >
                <IoLogoWhatsapp className='w-5 h-5' />
            </Link>
        </nav>
    )
}
