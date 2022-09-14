import React, { Component } from 'react'
import Loading from './loading.gif'

const loading = () => {
    return (

        <div className="text-center">
           <img src={Loading} alt="loading" />
        </div>
    )
}
export default loading