import React from 'react';
import "./styles.css";

export default function card(props) {
  return (
    <div className='card-div'>
      <img src={props.ad} className="imgs"/>
      <table className='texts'>
        <tr><td className='name'>
            {props.name}
        </td>
        <td className='about'>
            {props.about}
        </td>
        </tr>
        
      </table>
    </div>
  )
}
