import { StateContext } from '../context/context';
import { useContext } from 'react';
import { Bar } from 'react-chartjs-2';

function MostStarredRepos({ colSpan }) {
  const {
    state: { repos },
  } = useContext(StateContext);
  let stars = repos.reduce((tot, cur) => {
    const { stargazers_count, name } = cur;
    tot[stargazers_count] = { value: name, stars: stargazers_count };
    return tot;
  }, {});
  // stars = Object.values(stars).slice(-5).reverse();
  let repoName = Object.values(stars).slice(-5).reverse();
  repoName = repoName.map((repo) => repo.value);

  stars = Object.keys(stars).slice(-5).reverse();

  const data = {
    labels: repoName,
    datasets: [
      {
        label: '# of Votes',
        data: stars,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: {
          align: 'center',
          padding: 2,
          maxRotation: 10,
        },
      },
    },
  };

  return (
    <article
      className={`bg-gray-200 max-w-7xl sm:m-4 shadow-md rounded-lg col-span-1 sm:col-span-${colSpan}`}>
      <Bar data={data} options={options} />
    </article>
  );
}

export default MostStarredRepos;
