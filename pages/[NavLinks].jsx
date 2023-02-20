import { useRouter } from 'next/router';
import Link from 'next/link';

export default function menuItem() {
    const menus = useRouter();
    const name = menus.query.NavLinks
    return (
        <div className='flex flex-col justify-center items-center gap-10 py-44 '>
            <span className='text-3xl'> {name} Page</span>
            <span className='text-blue-700 text-2xl'><Link href={"/"}>Back Home</Link></span>
        </div>
    );
}

