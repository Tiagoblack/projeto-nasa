import { Component } from 'react';
import './App.css';


import Modal from './component/Modal';
import Header from './component/header';
import SearchNasa from '../src/component/SearchNasa';
import ListNasa from '../src/component/ListNasa';
import api from './api';



// eslint-disable-next-line
class App extends Component {
  state = {
    dados: [],
    mostrarPesquisa: 'nosearch',
    mostrarModal:false,
    object:{},
    estado:{},
  }
  async componentDidMount() {
    const res = await api.getData()
    this.setState({ dados: res });
  }

  dateFecth = async(event)=>{
    let  res = await api.getDate(event) 
    this.setState({ 
      estado: res, 
      mostrarPesquisa: 'search',
    });
  }               


   handleClickModal  (obj){
    this.setState({object:obj, mostrarModal:true}); 

}
 

  render() {
    const { dados,  mostrarPesquisa, estado, mostrarModal, object } = this.state;
    return (
      <div className="App">
          <Header  hendleDateNasa={(e)=>this.dateFecth(e)}/>
        <section>
          <div className="container--geral">
            {mostrarPesquisa === 'nosearch' && dados.map((dado, index, array)=>(
                <ListNasa onClick={()=>this.handleClickModal(array[index])} dado={dado}/>
            ))}
          </div>
          {mostrarPesquisa === 'search' && <SearchNasa estado={estado} /> }
        </section>
        {mostrarModal &&
         <Modal 
         object={object} 
          onClick={()=>this.setState({mostrarModal:false})}
         />}
      </div >
    )

  }
}

export default App;

/*











*/