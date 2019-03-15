import React, { Component } from 'react';
import Axios from 'axios'


export default class Sample extends Component {
    constructor() {
        super();
        this.state = {    
            "data":[
                {
                  imgUrl:"img-1.jpg",
                  name:"chenna",
                  email:"chenna.ip@gmail.com",
                  age:22
                },
                {
                    imgUrl:"img-2.jpg",
                    name:"venkat",
                    email:"vekat.ip@gmail.com",
                    age:25
                  },
                  {
                    imgUrl:"img-3.jpg",
                    name:"yuva",
                    email:"yuva.ip@gmail.com",
                    age:24
                  },
                  {
                    imgUrl:"img-4.jpg",
                    name:"vamsi",
                    email:"vamsi.ip@gmail.com",
                    age:24
                  },
            ]  
             }
    }

    cards = () => {
        Axios.post('https://myprofile-7d260.firebaseio.com/data.json',this.state.data).then(res => {
            console.log(res, "restaurants")
        })
            .catch(err => {
                console.log(err)
            })
    }


    render() {
        return (
            <div>
                <button type="button" onClick={this.cards}>click me</button>
            </div>
        )
    }
}