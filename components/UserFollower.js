import { StateContext } from '../context/context';
import { useContext } from 'react';

function UserFollower() {
  const {
    state: { followers },
  } = useContext(StateContext);

  return (
    <div className='bg-gray-200 max-h-96 relative overflow-hidden rounded-lg shadow-md pt-10'>
      <span className='absolute -inset-1 font-bold text-white text-center bg-blue-600 h-8 pt-1.5'>
        Followers
      </span>
      {followers.map((follower, index) => {
        const { avatar_url: img, html_url, login } = follower;
        return (
          <article
            key={index}
            className='flex items-center px-4 py-2.5 space-x-4'>
            <img src={img} alt={login} className='h-10 w-10 rounded-full' />
            <div>
              <p className='font-bold'>{login}</p>
              <a className='text-sm text-gray-700' href=''>
                {html_url}
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default UserFollower;
