import React, { useState } from 'react';


const Data = ({value ,addToDisplay})=>{

    const [value,Setvalue] =useState('')
    addToDisplay(value)
    return(
        <Text>Hello</Text>
    )
}

export default Data