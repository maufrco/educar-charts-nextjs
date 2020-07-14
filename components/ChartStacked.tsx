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
        type: 'bar',
    },

    title: {
        text: 'Total de alunos por escola'
    },

    xAxis: {
        categories: matriculasEscolaPorSexoDto.map((e) => (e.nomeEscola)),
        labels: {
            style: {
                fontSize: '14px'
            }
        }
    },

    yAxis: {

        min: 0,
        title: {
            text: 'Numero de alunos'
        },
        stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
              color:  'gray'
          }
      }
    },

    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
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
    series: [{
      name: 'Meninos',
      pointPlacement: -0.2,
      data: matriculasEscolaPorSexoDto.map((e) => (e.totalSexoMasculino)),
  }, {
      name: 'Meninas',
      pointPlacement: -0.2,
      data: matriculasEscolaPorSexoDto.map((e) => (e.totalSexoFeminino)),
  }]
      };  
      return(<>
        <GeneroIcon fillOpacity="0.1" style={{position:'absolute', top:10, right:10, width:'450px'}} />   
        <HighchartsReact  containerProps={{ style: { height: "600px" } }} highcharts={Highcharts} options={highchartsOptions} ref={chartRef} />
        </>)
    }

    
    export default Chartstacked