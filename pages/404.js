import { MdError } from 'react-icons/md';
import Link from 'next/link';
export default function Error404() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-red-200'>
      <div className='flex relative flex-row items-center  text-red-500 font-bold rounded-lg border-2 border-red-500 shadow-lg p-10'>
        <MdError size={40} />
        <p className='text-2xl ml-2'>Page not found</p>
      </div>
      <Link href='/'>
        <a className='text-white mt-5 px-10 py-5 bg-blue-300 rounded-lg shadow-lg font-bold'>
          Go back
        </a>
      </Link>
    </div>
  );
}
