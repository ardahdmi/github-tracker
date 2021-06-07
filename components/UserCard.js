import { StateContext } from '../context/context';
import { useContext } from 'react';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
function UserCard() {
  const {
    state: { user },
  } = useContext(StateContext);
  const {
    avatar_url,
    html_url,
    name,
    company,
    bio,
    blog,
    location,
    twitter_username,
  } = user;
  return (
    <div className='flex flex-col relative bg-gray-200 rounded-lg shadow-md overflow-hidden'>
      <span className='absolute -inset-1 font-bold text-white text-center bg-red-600 h-8 pt-1.5'>
        User
      </span>
      <header className='flex items-center justify-between p-6'>
        <div className='flex items-center justify-start pt-4'>
          <img
            src={avatar_url}
            alt={name}
            className='w-20 h-20 rounded-full shadow-md'
          />
          <div className='px-2 sm:px-4 md:px-6'>
            <h4 className='font-bold'>{name}</h4>
            <p className='text-gray-500 font-normal text-sm'>
              @{twitter_username}
            </p>
          </div>
        </div>
        <a
          href={html_url}
          className='px-6 py-4 bg-gray-600 text-white rounded-xl shadow-lg hover:bg-gray-800'>
          Follow
        </a>
      </header>
      <p className='p-4 font-bold'>{bio}</p>
      <div className=' p-4 space-y-4'>
        <div className='flex items-center space-x-2'>
          <MdBusiness
            size={32}
            style={{ color: 'white' }}
            className='bg-red-400 p-1 rounded-full shadow-lg'
          />
          <p className='font-semibold'>{company}</p>
        </div>
        <div className='flex items-center space-x-2'>
          <MdLocationOn
            size={32}
            style={{ color: 'white' }}
            className='bg-blue-400 p-1 rounded-full shadow-lg'
          />
          <p className='font-semibold'>{location}</p>
        </div>
        <div className='flex items-center space-x-2'>
          <MdLink
            size={32}
            style={{ color: 'white' }}
            className='bg-yellow-400 p-1 rounded-full shadow-lg'
          />

          <a
            className='text-blue-600 font-semibold underline'
            href={`https://${blog}`}>
            {blog}
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
