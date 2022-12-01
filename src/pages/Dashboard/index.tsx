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
  ArcElement
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Radar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

export const dataDoughnut = {
  labels: ['Feminino', 'Masculino'],
  datasets: [
    {
      label: '# gênero',
      data: [12, 19],
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)'
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
      data: [12, 19, 13, 15, 12, 13],
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

export const optionsRadar = {
  plugins: {
    title: {
      display: true,
      text: 'Vagas por função',
    },
  },
  scales: {
    r: {
        angleLines: {
            display: false
        },
        suggestedMin: 0,
        suggestedMax: 20
    }
  }
}

export const optionsDoughnut = {
  plugins: {
    title: {
      display: true,
      text: 'Candidatos por gênero',
    },
  },
}


export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Vagas criadas x Fechadas por posição',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Fechadas',
      data: labels.map( () => Math.random() * 100),
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Abertas',
      data: labels.map( () => Math.random() * 100),
      backgroundColor: 'rgb(255, 99, 132)',
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
                                  <div>
                                      <h2>459</h2>
                                      <h6>Vagas criadas</h6>

                                  </div>                               
                                </div>

                                <div className={styles.divValores}>
                                    <h2>120</h2>
                                    <h6>Vagas em aberto</h6>
                                </div>

                                <div className={styles.divValores}>
                                    <h2>87%</h2>
                                    <h6>Eficácia</h6>
                                </div>

                                <div className={styles.divValores}>
                                    <h2>58 dias</h2>    
                                    <h6>Tempo médio</h6>
                                </div>
                            </div>

                            <div id="chart" className={styles.secondDiv}>
                                <div className={styles.barChart}>
                                    <Bar options={options} data={data} />
                                </div>
                                <div className={styles.radarChart}>
                                    <Radar options={optionsRadar} data={dataRadar} />
                                </div>
                                <div className={styles.doughnutChart}>
                                    <Doughnut options={optionsDoughnut} data={dataDoughnut} />
                                </div>
                            </div>

                </Container>
            </Main>
        </>
    )
}