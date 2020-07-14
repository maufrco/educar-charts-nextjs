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
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
          spacingTop: 0,
          spacingBottom: 0,
          spacingLeft: 0,
          spacingRight: 0,
          options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
        },
        credits: {
            enabled: false
        },
        tooltip: { enabled: false },
        legend:{
          itemStyle: {
            color: '#666666',
            fontSize: '18px'
          },
          itemMarginRight: 15,
          itemMarginLeft: 10,
          verticalAlign: "bottom",
          symbolHeight: 16,
          symbolWidth: 16,
          symbolRadius: 8
        },
        title: {
            text: `Total: <strong>${totalGeralFeminino+totalGeralMasculino} alunos </strong>`,
            verticalAlign: "bottom",
            style: {
              fontSize: 32,
              color: '#666666',
              fontFamily: '\'Roboto\', sans-serif',
          }
        },
        plotOptions: {
          series: {enableMouseTracking: false},
          pie: {
            showInLegend: true,
            enabled: true,
            depth: 35,
            dataLabels: {
                  useHTML: true,
                  enabled: true,
                  connectorColor: '#999999',
                  formatter: function () {
                      return `<center style="font-size:28px; color:${this.point.color}">${this.point.y}<br>${this.point.name}</center>`;
                  }
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
      return(<>
        <GeneroIcon fillOpacity="0.1" style={{position:'absolute', bottom:10, left:10, width:'450px'}} />          
        <HighchartsReact  containerProps={{ style: { height: "600px" } }} highcharts={Highcharts} options={highchartsOptions} ref={chartRef} />
        </>)
    }

    
    export default Chartpie