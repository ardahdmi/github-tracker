import { MdSearch } from 'react-icons/md';
import { useContext, useState } from 'react';
import { StateContext } from '../context/context';
import { DispatchContext } from '../context/context';

function SearchUser() {
  const {
    rateLimit,
    state: { error, searchGithubUser, isLoading },
  } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const [user, setUser] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      const userData = await searchGithubUser(user);
      dispatch({ type: 'SEARCH_USER', payload: userData });
    }
    setUser('');
  };
  return (
    <section className=' flex flex-wrap items-center p-4  justify-between'>
      {error.show && <h1>{error.msg}</h1>}
      <form
        onSubmit={handleSubmit}
        className='relative flex items-center w-full sm:w-9/12 mx-auto bg-gray-200 rounded-md shadow-md overflow-hidden'>
        <div className=' flex justify-between w-7/12 p-4 rounded-lg'>
          <MdSearch size={32} className='text-gray-600 ' />
          <input
            type='text'
            placeholder='enter github user'
            className=' bg-transparent placeholder-gray-600 w-full ml-6 outline-none sm:text-2xl'
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          {!isLoading && (
            <button
              type='submit'
              className='absolute sm:inset-y-0 sm:right-0 px-6 py-3 bg-gray-600 hover:bg-gray-700 transition shadow-lg text-white font-semibold'>
              Search
            </button>
          )}
        </div>
      </form>
      <h3 className='block mt-8 md:mt-0 mx-auto p-4 text-white font-bold bg-red-300 rounded-md shadow-md'>
        Requests: {rateLimit} / 60
      </h3>
    </section>
  );
}

export default SearchUser;
