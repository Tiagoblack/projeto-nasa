import React, { Component } from 'react';

// eslint-disable-next-line
class ListNasa extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {dado, index, onClick} = this.props
        console.log(dado);
        return(
            <div onClick={onClick} key={index} className="container--dado">
            <div className="face">
              <div className="container">
                <h1 className="container--title">{dado.title}</h1>
                <span className="container--date">{dado.date}</span>
                <div className="container--img">
                  <img src={dado.hdurl} alt={dado.title} />
                </div>
              </div>
              <p className="container-desc">{dado.explanation}</p>
            </div>
          </div>

        );
    }
}

export default ListNasa;