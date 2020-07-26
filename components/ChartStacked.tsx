import React, { useRef, FunctionComponent } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highcharts3d from 'highcharts/highcharts-3d';
import { GeneroIcon } from '../src/icons/Icons';

export interface SchoolPerGenre {
  matriculasEscolaPorSexoDto:[]
};
const Chartstacked: FunctionComponent<SchoolPerGenre> =  ({ 
  matriculasEscolaPorSexoDto
}) => {
  highcharts3d(Highcharts);

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
                fontSize: '12px',
                color: '#000000',
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
        <HighchartsReact  containerProps={{ style: { height: "600px" } }} highcharts={Highcharts} options={highchartsOptions} ref={chartRef} />
        <GeneroIcon fillOpacity="0.1" style={{position:'absolute', top:10, right:10, width:'450px'}} />          
        </>)
    }

    
    export default Chartstacked