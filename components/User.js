import Card from './UserCard';
import Follower from './UserFollower';

function User() {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 m-8 md:mx-auto max-w-7xl'>
      <Card />
      <Follower />
    </div>
  );
}

export default User;
