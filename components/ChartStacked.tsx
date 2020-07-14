import React, { useRef, FunctionComponent } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highcharts3d from 'highcharts/highcharts-3d';
import { GeneroIcon } from '../src/icons/Icons';

export interface School {
  anoLetivo: number
  matriculasEscolaDto: []
  matriculasEscolaPorEnsinoDto: []
  matriculasEscolaPorSexoDto:[]
  situacao: string
  totalGeral: number
  totalGeralFeminino: number
  totalGeralMasculino: number
  totalMatriculasEnsino:number
};
const Chartstacked: FunctionComponent<School> =  ({ 
  anoLetivo,
  matriculasEscolaDto,
  matriculasEscolaPorEnsinoDto,
  matriculasEscolaPorSexoDto,
  situacao,
  totalGeral,
  totalGeralFeminino,
  totalGeralMasculino,
  totalMatriculasEnsino
}) => {
  highcharts3d(Highcharts);
// console.log(  anoLetivo,
//   matriculasEscolaDto,
//   matriculasEscolaPorEnsinoDto,
//   matriculasEscolaPorSexoDto,
//   situacao,
//   totalGeral,
//   totalGeralFeminino,
//   totalGeralMasculino,
//   totalMatriculasEnsino)


    const chartRef: any = useRef()
    const highchartsOptions ={
      chart: {
        type: 'column'
    },

    title: {
        text: 'Total de alunos por escola'
    },

    xAxis: {
        categories: matriculasEscolaPorSexoDto.map((e) => (e.nomeEscola)),
        labels: {
            style: {
                fontSize: '10px',
                textTransform: 'capitalize'
            }
        }
    },

    yAxis: {

        min: 0,
        title: {
            text: 'Numero de alunos',
            skew3d: true
        },
        stackLabels: {
          enabled: true,
          style: {
              color: '#555555'
          }
      }
    },
    legend: {
      reversed: true
  },
  plotOptions: {
    series: {
        stacking: 'normal',
         dataLabels: {
                enabled: true
            }
      }
  },
  credits: {
    enabled: false
},
tooltip: { enabled: false },
    series: [{
      name: 'Meninos',
      pointPlacement: -0.2,
      data: matriculasEscolaPorSexoDto.map((e) => (e.totalSexoMasculino)),
      color: '#7095E1'
  }, {
      name: 'Meninas',
      pointPlacement: -0.2,
      data: matriculasEscolaPorSexoDto.map((e) => (e.totalSexoFeminino)),
      color: '#FF8800'
  }]
      };  
      return(<>
        x
        <HighchartsReact  containerProps={{ style: { height: "600px" } }} highcharts={Highcharts} options={highchartsOptions} ref={chartRef} />
        <GeneroIcon fillOpacity="0.1" style={{position:'absolute', top:10, right:10, width:'450px'}} />          
        </>)
    }

    
    export default Chartstacked