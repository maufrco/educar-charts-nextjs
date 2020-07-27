import React, { useRef, FunctionComponent } from 'react'
import Highcharts, { Options } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highcharts3d from 'highcharts/highcharts-3d';
import { GeneroIcon } from '../src/icons/Icons';

export interface SchoolPerGenre {
  matriculasEscolaPorSexoDto:[],
  titulo?:string
};
const Chartstacked: FunctionComponent<SchoolPerGenre> =  ({ 
  matriculasEscolaPorSexoDto, titulo
}) => {
    highcharts3d(Highcharts);
    

    const serieMasc = matriculasEscolaPorSexoDto.map((e:{totalSexoMasculino:number}) => (e.totalSexoMasculino))
    const serieFem = matriculasEscolaPorSexoDto.map((e:{totalSexoFeminino:number}) => (e.totalSexoFeminino))
    
    const chartRef: any = useRef()
    const highchartsOptions:Options = {
      chart: {
        type: 'bar',
        spacingRight:20
    },
    title: {
        text: titulo ? titulo : ('ALUNOS CURSANDO POR ESCOLA'),
        verticalAlign:"bottom",
            style: {
              fontSize: '32px',
              color: '#666666',
              fontFamily: '\'Roboto\', sans-serif',
          }
    },
    xAxis: {
        categories: matriculasEscolaPorSexoDto.map((e:{nomeEscola:string}) => (e.nomeEscola)),
        labels: {
            style: {
                fontSize: '16px',
                color: '#555555',
                fontWeight: 'bold',
            }
        }
    },
    yAxis: {
        title: {
            text: '',
        },
        labels:{
            enabled:false
         },
        showEmpty: false,
        stackLabels: {
          enabled: true,
          style: {
              color: '#666666',
              fontSize: '22px',
              backgroundColor:'#000000'
          }
      }
    },
    legend: {
      reversed: true,
      symbolHeight: 16,
      symbolWidth: 16,
      symbolRadius: 8,
      verticalAlign:'top',
      itemStyle:{
        color: '#666666',
        fontSize: '18px'
      }
  },
  plotOptions: {
    series: {
        stacking: 'percent',
         dataLabels: {
                enabled: true,
                nullFormat: false,

                allowOverlap:false,
                style:{
                    fontSize: '24px'
                }
            }
      }
  },
  credits: {
     enabled: false
},
tooltip: { enabled: false },
series: [{
      type: 'bar',
      name: 'MENINOS',
      pointPlacement: -0.2,
      data: serieMasc,
      color: '#7095E1'
  }, {
      type: 'bar',
      name: 'MENINAS',
      pointPlacement: -0.2,
      data: serieFem,
      color: '#FF8800'
  }]
      };  
      return(<>
        <HighchartsReact  containerProps={{ style: { height: "600px" } }} highcharts={Highcharts} options={highchartsOptions} ref={chartRef} />
        <GeneroIcon fillOpacity="0.1" style={{position:'absolute', top:10, right:10, width:'450px'}} />          
        </>)
    }
export default Chartstacked