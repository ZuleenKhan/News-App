import React from 'react'
import './News.css'

function News({news}){

  return (
    
    <div className="news-card">
      <ul> 
      <li><img src={news.urlToImage} alt={news.title}/> </li>
      <li>  <h2>{news.title}</h2></li>
      <li><p>{news.description}</p> </li>
      <li className='li-four'>
         <div>
         <button onClick={()=> {window.open(news.url);}  }>Read More
         </button>
         </div>
         </li>

      </ul>
      </div>
  );
}

export default News