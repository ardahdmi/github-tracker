import MostUsedLang from './MostUsedLang';
import MostPopularLang from './MostPopularLang';
import MostStarredRepos from './MostStarredRepos';
import MostForkedRepos from './MostForkedRepos';

function Repos() {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 max-w-7xl mx-auto space-y-4'>
      <MostUsedLang />
      <MostPopularLang />
      <MostStarredRepos colSpan={2} />
      <MostForkedRepos colSpan={2} />
    </section>
  );
}

export default Repos;
