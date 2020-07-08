
function CheckError(response: Response) {
    if (response.ok) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  }
  
export const getJson = (): Promise<any> =>
  fetch('http://3.236.124.244/jab/api/grafico/graficoTotalMatriculasSexo/null/null/null/null/CURSANDO')
  .then(CheckError);