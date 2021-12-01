import React, { Component } from 'react'

// eslint-disable-next-line
class SearchNasa extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { estado} = this.props;
        return(
        <section className="date_container">
            <div className="date_content">
                <h3 className="date_title">{estado.title}</h3>
                <p className="date_date">{estado.date}</p>
                <div className="date_img">
                    <img src={estado.url}/>
                </div>
                <p className="date_desc">{estado.explanation.length > 500?
                 estado.explanation.replace(estado.explanation.slice(500, estado.explanation.length), '...')
                :null}</p>
            </div>
        </section>
        );
    }
}

export default SearchNasa;