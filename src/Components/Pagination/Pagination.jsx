import React from "react"
import s from './Pagination.module.css'
import {data} from  '../../data/data'

export const Pagination = ({currentEmojies, paginate}) =>{

 const cardNumbers=[];

 const totalPages = Math.ceil(data.length / 100);
 console.log(totalPages);
 for(let i=1; i<=totalPages; i++){
   cardNumbers.push(i);
 }

    return( 
       <div> 
            <div className={s.pagin}>
            {cardNumbers.map((number) => <button onClick={paginate} className={s.paginBtn}>{number} </button>)}
                      
        
            </div>
        </div>);
    };
