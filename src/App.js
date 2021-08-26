import { Component } from 'react';
import './App.css';
import nasa from './screen/nasa.png';




class App extends Component {

  state = {
    dados: [],
    data: '',
    mostrarPesquisa: false,
    estado: ''
  }
  componentDidMount() {
    this.Req();
  }





  Req = async () => {
    const url = `api_key=unct9EBsqvh1ZnGAUyyqNcBcjNd5wC8cBs7UESTV`;
    const date = await fetch(`https://api.nasa.gov/planetary/apod?${url}&count=100`);
    const [dados] = await Promise.all([date])
    const endereço = await dados.json()
    this.setState({ dados: endereço });


  }



  render() {
    const { dados, data, mostrarPesquisa, estado } = this.state;
    console.log(dados);
    Object.values(dados)

    return (
      <div className="App">
        <header>
          <div className="header-container">
            <nav className="header-menu">
              <img src={nasa} />
            </nav>
            <div className="container-menu">
              <a
                className="header-home"
                onClick={() => { this.setState({ mostrarPesquisa: false }) }}
              >Home</a>
              <input type="date" className="input--date" onChange={async (event) => {
                this.setState({ data: event.target.value });
                const url = `api_key=unct9EBsqvh1ZnGAUyyqNcBcjNd5wC8cBs7UESTV`;
                const getApi = await fetch(`https://api.nasa.gov/planetary/apod?${url}&date=${data}`);

                if (getApi.status === 200) {
                  const endereço = await getApi.json();
                  this.setState({ estado: endereço, mostrarPesquisa: true });
                } else {
                  alert('Não exite essa data');
                }
              }} />
            </div>
          </div>
        </header>
        <section>
          <div className="container--geral">
            {mostrarPesquisa === false ? dados.map((dado, index) => (
              <div key={index} className="container--dado">
                <div className="face">
                  <div className="container">
                    <h1 className="container--title">{dado.title}</h1>
                    <span className="container--date">{dado.date}</span>
                    <div className="container--img">
                      <img src={dado.url} alt={dado.title} />
                    </div>
                  </div>
                  <p className="container-desc">{dado.explanation}</p>
                </div>
              </div>
            )) : ''}
            <section>
              {mostrarPesquisa === true ?
                <div className="container--dado">
                  <div className="face">
                    <div className="container">
                      <h1 className="container--title">{estado.title}</h1>
                      <span className="container--date">{estado.date}</span>
                      <div className="container--img">
                        <img src={estado.url} alt={dados.title} />
                      </div>
                    </div>
                    <p className="container-desc">{estado.explanation}</p>
                  </div>
                </div>
                : ''}
            </section>
          </div>
        </section>
      </div >
    )

  }
}

export default App;

/*











*/