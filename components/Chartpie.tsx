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


console.log(  anoLetivo,
  matriculasEscolaDto,
  matriculasEscolaPorEnsinoDto,
  matriculasEscolaPorSexoDto,
  situacao,
  totalGeral,
  totalGeralFeminino,
  totalGeralMasculino,
  totalMatriculasEnsino)


    const chartRef: any = useRef()
    const highchartsOptions ={
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
          margin: [0, 0, 0, 0],
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
            text: `Total ${totalGeralFeminino+totalGeralMasculino}`
        },
        plotOptions: {
          series: {
            enableMouseTracking: false
        },
          pie: {
            size:'90%',
            height: '90%',
            dataLabels: {
                style: {
                    fontSize: 45,
                    fontFamily: '\'Roboto\', sans-serif',
                    fontWeight: 10,
                },
              format: '<b>{point.name}</b><br>{point.y:.f}',
            },
          },
        },
        series: [
          {
            name: "",
            showInLegend: false,
            colorByPoint: true,
            borderColor: null,
            slicedOffset: 4,
            data: [
                { name: 'MENINOS', y: totalGeralMasculino, color: '#7095E1', sliced: true },
                { name: 'MENINAS', y: totalGeralFeminino, color: '#FF8800'},
            ],
          },
        ],
      };  
      return <HighchartsReact  containerProps={{ style: { height: "550px" } }} highcharts={Highcharts} options={highchartsOptions} ref={chartRef} />
    }

    
    export default Chartpie