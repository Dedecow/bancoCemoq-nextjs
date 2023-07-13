class Carro extends React.Component {
    render() {
      const { modelo, fabricante, numPortas = 4, cor, valor } = this.props;
  
      return (
        <div>
          <h1>Informações do Carro</h1>
          <ul>
            <li>Modelo do carro: {modelo}</li>
            <li>Fabricante: {fabricante}</li>
            <li>Número de portas: {numPortas}</li>
            <li>Cor do carro: {cor}</li>
            <li>Valor do carro: {valor}</li>
          </ul>
        </div>
      );
    }
  }
  
  export default Carro;
  