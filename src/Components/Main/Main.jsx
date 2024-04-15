import s from './Main.module.css'
import {Card} from '../Card/Card'
import {data} from  '../../data/data'
import { useState } from 'react';
export const Main = () =>{
    const [emoji, setEmoji] = useState('');

    return(
      
        <main className={s.main}>
        <div className="container">
            <div className={s.input}>
                <input onChange={(e)=>setEmoji(e.target.value.toLowerCase())} type="text" className={s.mainInput} placeholder="Placeholder"/>
           
               {/* {console.log(emoji)} */}
            </div>
           
            <div className={s.cards}>
            {/* <Card title={emoji.title} symbol={emoji.symbol} keywords={emoji.keywords} /> */}

            {data
            .filter(value=>emoji.split(' ').every(el=>value.title.toLowerCase().includes(el)|| value.keywords.toLowerCase().includes(el) ))
            .map((el) => (<Card title={el.title} symbol={el.symbol} keywords={el.keywords} />))}                  
                   
            </div>
            
        </div>
    </main>
    )

};