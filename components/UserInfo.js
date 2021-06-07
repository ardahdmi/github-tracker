import { StateContext } from '../context/context';
import { useContext } from 'react';

import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';

function UserInfo() {
  const {
    state: { user },
  } = useContext(StateContext);

  const { public_repos, followers, following, public_gists } = user;
  const items = [
    {
      id: 1,
      icon: <GoRepo size={40} className='' />,
      label: 'repos',
      value: public_repos,
      color: 'pink',
    },
    {
      id: 2,
      icon: <FiUsers size={40} className='' />,
      label: 'followers',
      value: followers,
      color: 'blue',
    },
    {
      id: 3,
      icon: <FiUserPlus size={40} className='' />,
      label: 'following',
      value: following,
      color: 'yellow',
    },
    {
      id: 4,
      icon: <GoGist size={40} className='' />,
      label: 'gists',
      value: public_gists,
      color: 'red',
    },
  ];

  return (
    <section className='grid grid-cols-1 mx-4 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-4 md:gap-8 max-w-7xl lg:mx-auto my-4'>
      {items.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </section>
  );
}

const Item = ({ icon, value, label, color }) => {
  return (
    <article className='flex items-center bg-gray-100 justify-between rounded-md shadow-md pl-2 p-4 min-w-min'>
      <span className={`bg-${color}-300 rounded-full p-3 text-${color}-500`}>
        {icon}
      </span>
      <div className='flex flex-col items-end pr-4'>
        <h3 className='font-bold text-3xl'>{value}</h3>
        <p className='capitalize'>{label}</p>
      </div>
    </article>
  );
};

export default UserInfo;
