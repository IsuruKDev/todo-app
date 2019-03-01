import React from 'react'


const CheckboxItem = (props)=>{
    return(
            <li>
                <input type="checkbox" id={props.detail.id} checked={props.detail.checked} />
                <label>{props.detail.value}</label>
            </li>
               
    )
}

export default CheckboxItem