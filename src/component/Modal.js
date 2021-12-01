
import React, { Component } from 'react';
// eslint-disable-next-line
class Modal extends Component{
    constructor(props){
        super(props)
    }

    render(){

        const {object, onClick} = this.props;
            console.log(object)
        return(
            <div onClick={onClick} className="modal_container">
                <div className="moda_content">
                    <h4 className="modal_content--title">
                        {object.title}
                    </h4>

                    <div className="modal_content--date">
                        {object.date}
                    </div>
                    
                    <div className="modal_body">
                        <div className="modal_content_img">
                            <img src={object.url}/>                    
                        </div>
                        <div className="modal_content_desc">
                            {object.explanation}
                        </div>
                    </div>      
                </div>
            </div>
        );
    }
}

export default Modal