import styles from './styles.module.scss'
import { Container } from "../../components/Container";
import { Main } from '../../components/Main';
import { Header } from '../../components/Header';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  ArcElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Radar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

export const dataDoughnut = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
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

export const dataRadar = {
  labels: ['Front-End', 'Back-End', 'QA', 'Tester', 'B.I', 'DBA'],
  datasets: [
    {
      label: '# vagas abertas',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  ArcElement, 
  Tooltip, 
  Legend
);

export const options = {
  responsive: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => [1, 2, 3, 4, 5, 6, 7]),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => [1, 2, 3, 4, 5, 6, 7]),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


export function Dashboard(): JSX.Element {

    return (
        <>
            <Header />
            <Main>
                <Container id="dashboard-page" scrollable>

                            <div className={styles.firstDiv}>
                                <div className={styles.divValores}>
                                    <h4>Primeiro</h4>
                                    <h3>Primeiro</h3>
                                </div>

                                <div className={styles.divValores}>
                                    <h4>Segundo</h4>
                                    <h3>Segundo</h3>
                                </div>

                                <div className={styles.divValores}>
                                    <h4>Terceiro</h4>
                                    <h3>Terceiro</h3>
                                </div>

                                <div className={styles.divValores}>
                                    <h4>Quarto</h4>
                                    <h3>Quarto</h3>    
                                </div>
                            </div>

                            <div id="chart" className={styles.secondDiv}>
                                <div className={styles.barChart}>
                                    {/* <Bar options={options} data={data} /> */}
                                </div>
                                <div className={styles.radarChart}>
                                    {/* <Radar data={dataRadar} /> */}
                                </div>
                            </div>

                </Container>
            </Main>
        </>
    )
}