import React, { Component } from 'react';


import nasa from '../screen/nasa.png';

// eslint-disable-next-line
class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            data:'',
         
         

        }
      }

      handleClick = (event)=>{
        this.props.hendleDateNasa(event.target.value);
      }
   
    render(){

      const {handleDateNasa} = this.props
            return(
              <>
            <header>
            <div className="header-container">
              <nav className="header-menu">
                <img src={nasa}  alt="logo da nasa"/>
              </nav>
              <div className="container-menu">
                <a
                  className="header-home"
                  onClick={() => { this.setState({mostrarPesquisa: false }) }}
                >Home</a>
                <input type="date" className="input--date" onChange={this.handleClick}/>
              </div>
            </div>
          </header>
          </>


        )
    }

}


export default Header;