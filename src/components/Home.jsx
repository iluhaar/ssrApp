import React from 'react'
import '../App.css'

const Home = (props) => {

    return ( 
        <div>
            <h1>Henlo my {props.name}</h1>
        <div>
        <p>
            This page is rendered on server
        </p>
        </div>
        </div>
    )
}

export default Home;