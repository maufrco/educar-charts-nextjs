import React, { useRef, FunctionComponent } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

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
const Chartpie: FunctionComponent<School> =  ({ 
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
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
          spacingTop: 0,
          spacingBottom: 0,
          spacingLeft: 0,
          spacingRight: 0   
        },
        credits: {
            enabled: false
        },
        tooltip: { enabled: false },
        title: {
            text: situacao,
            style: {
              fontSize: 45,
              fontFamily: '\'Roboto\', sans-serif',
          }
        },
        subtitle: {
          text: `Total ${totalGeralFeminino+totalGeralMasculino}`,
          style: {
            fontSize: 45,
            fontFamily: '\'Roboto\', sans-serif',
        }
      },
        plotOptions: {
          series: {enableMouseTracking: false},
          pie: {
            showInLegend: true,
            enabled: true,
            dataLabels: {
                style: {
                    fontSize: 45,
                    fontFamily: '\'Roboto\', sans-serif',
                },
              format: '<b>{point.name}</b><br>{point.y:.f}',
            },
          },
        },
        series: [
          {
            name: "",
            colorByPoint: true,
            borderColor: null,
            slicedOffset: 4,
            data: [
                { name: 'MENINOS', y: totalGeralMasculino, color: '#7095E1'},
                { name: 'MENINAS', y: totalGeralFeminino, color: '#FF8800'},
            ],
          },
        ],
      };  
      return <HighchartsReact  containerProps={{ style: { height: "550px" } }} highcharts={Highcharts} options={highchartsOptions} ref={chartRef} />
    }

    
    export default Chartpie