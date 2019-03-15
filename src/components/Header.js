import React, { Component } from 'react';


export default class Header extends Component {
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <div className="col-md-3">
                    <div className="card">
                         <img src={require(`../asserts/${this.props.imgUrl}`)} alt="img"/>
                        <div className="card-body">
                            <h5><strong>name:</strong>{this.props.name}</h5>
                            <p><strong>age:</strong>{this.props.age}</p>
                            <p><strong>email:</strong>{this.props.email}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}