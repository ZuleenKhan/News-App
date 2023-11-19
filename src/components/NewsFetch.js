import React from 'react'
import {useRef, useState, useEffect} from 'react' ; 
import News from './News';
import './NewsFetch.css' 

function NewsFetch() {
   
   const apiKey = 'fab62bf50c814bb89b30a3e932635945' ;
   const [newsList,setNewsList] = useState([]) ; 
   const [error, setError] = useState() ; 
   const [query,setQuery] = useState('tesla') ; 
   const queryInputRef = useRef(null) ;
   const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2023-11-3&sortBy=publishedAt&apiKey=${apiKey}`; 

    useEffect(()=>{
        fetchData() ; 
   },[query]) ; 
    
   async function fetchData()  {
     try{
      const response = await fetch(apiUrl) ;
      const jsonData = await response.json() ; 
      setNewsList(jsonData.articles);
      console.log(newsList);

     }catch(e){
       setError(e) ;  
     }
     
    }
    
    if(error) console.log("error") ; 
  
    function handleSubmit(event){
      event.preventDefault() ; 
      const queryValue = queryInputRef.current.value ; 
      setQuery(queryValue) ;  
  }

  return (

    <div style={{position:'relative', }}>
      <div className="navbar" style={{position:'sticky', top:'0', left:'0',zIndex:'2', display:'flex', backgroundColor: 'black'
                , boxShadow: 'auto 5px 5px grey'
          }}>
       <p style={{color:'white', fontSize: '2em', marginRight:'400px'}}><b>NEWS</b></p>
      <form onSubmit={handleSubmit} style={{
          padding: '20px', 
          display:'flex',
          justifyContent : 'center', 
          alignItems: 'center',
          marginLeft: '80px',
          width: '30%'
       }}>

        <input type="text" placeholder="Search..." ref={queryInputRef} style={{padding:'10px', width:'100%',borderRadius:'35px', border:'none'}}></input>
        <input onClick={handleSubmit} type="submit" value="Search" style={{padding:'10px', borderRadius: '20px'}}></input>
       
      </form>
      </div>
    <div className="body-container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3,30%)',
        justifyContent:'space-around', 
        rowGap:'35px' ,
        marginTop:'40px'
       }}>
      {
      newsList.map(news => {
            return <News news={news}/>
        })}
        </div>
    </div>
  )
      
}

export default NewsFetch ; 