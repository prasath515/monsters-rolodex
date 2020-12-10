import React from "react";

import './card-list.stylr.css';

import { Card } from '../card/card.component'

// export const CardList = props => (

//     <div className='card-list' >
//         {
//             props.monsters.map(monster => (
//                 <Card key={monster.id} monster={monster} />
//             ))
//         }
//     </div>
// );

export const CardList = props => {
    var m = props.monsters;
    return (
        <div className='card-list' >
            {
                m.map(monster => (
                    <Card key={monster.id} profileSet= {props.profSet} monster={monster} />
                ))
            }
        </div>
    )
};