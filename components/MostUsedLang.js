import { StateContext } from '../context/context';
import { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';

function MostUsedLang() {
  const {
    state: { repos },
  } = useContext(StateContext);
  const repoLangs = repos
    .map((repo) => repo.language)
    .reduce((acc, cur) => {
      if (!cur) return acc;
      acc[cur] === undefined ? (acc[cur] = 1) : acc[cur]++;
      return acc;
    }, {});

  const data = {
    labels: Object.keys(repoLangs),
    datasets: [
      {
        label: 'Count',
        data: Object.values(repoLangs),
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
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Most Used Programming Languages',
        font: {
          size: 22,
        },
      },
    },
  };

  return (
    <article className='bg-gray-200 max-w-7xl sm:m-4  p-4  shadow-md rounded-lg'>
      <Doughnut data={data} options={options} />
    </article>
  );
}

export default MostUsedLang;
