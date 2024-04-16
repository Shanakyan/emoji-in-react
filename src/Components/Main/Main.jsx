import s from './Main.module.css'
import {Card} from '../Card/Card'
import {data} from  '../../data/data'
import { useState, useEffect } from 'react';
import { Pagination } from '../Pagination/Pagination';



import ReactPaginate from 'react-paginate';

export const Main = () =>{
    const [emoji, setEmoji] = useState('');

    const [currentEmoji, setCurrentEmoji]=useState(1)
    const [filteredEmoji, setFilteredEmoji]=useState([]);
    const [emojiPerPage, setemojiPerPage] = useState(15);

    const paginate = () => {
        setCurrentEmoji(currentEmoji);
    };

    
    useEffect(()=>{
                const filteredEmoji=data.filter(value=>value.title.toLowerCase().includes(emoji)|| value.keywords.toLowerCase().includes(emoji) );
                setFilteredEmoji(filteredEmoji);
                setCurrentEmoji(1);
            },[emoji,emojiPerPage]);
    
            const lastEmoji= currentEmoji * emojiPerPage;
            const firstEmoji = lastEmoji - emojiPerPage;
            const currentEmojies = filteredEmoji.slice(firstEmoji, lastEmoji);

    return(
      
        <main className={s.main}>
            

        <div className="container"> 
    
            <div className={s.input}>        
           
                <input onChange={(e)=>setEmoji(e.target.value.toLowerCase())} type="text" className={s.mainInput} placeholder="Placeholder"/>
            <Pagination currentEmojies={currentEmojies} paginate={paginate}/>
            </div>
           
            <div className={s.cards}>
            {/* {data
            .filter((value=>value.title.toLowerCase().includes(emoji)|| value.keywords.toLowerCase().includes(emoji) ))
            .map((el) => (<Card title={el.title} symbol={el.symbol} keywords={el.keywords} />))}                   */}

                   {currentEmojies.map((el, index) =>
                            (<Card title={el.title} symbol={el.symbol} keywords={el.keywords} />))
                        }
                     
            </div>
               
        </div>
    </main>
    )

};