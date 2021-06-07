import { StateContext } from '../context/context';
import { useContext } from 'react';
import { Pie } from 'react-chartjs-2';

function MostPopularLang() {
  const {
    state: { repos },
  } = useContext(StateContext);
  const popularLangs = repos
    .map((repo) => {
      return { lang: repo.language, stars: repo.stargazers_count };
    })
    .reduce((acc, cur) => {
      if (!cur.lang) return acc;
      acc[cur.lang] === undefined
        ? (acc[cur.lang] = 0)
        : (acc[cur.lang] = acc[cur.lang] + Number(cur.stars));
      return acc;
    }, {});

  const data = {
    labels: Object.keys(popularLangs),
    datasets: [
      {
        label: 'Count',
        data: Object.values(popularLangs),
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
        text: 'Most Popular Languages',
        font: {
          size: 22,
        },
      },
    },
  };

  return (
    <article className='bg-gray-200 max-w-7xl sm:m-4 shadow-md rounded-lg'>
      <Pie data={data} options={options} />
    </article>
  );
}

export default MostPopularLang;
