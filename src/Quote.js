import React,{useEffect,useState} from 'react'
import axios from 'axios';
const Quote = () => {
    const [quote, setquote] = useState(null);
    const [Author, setAuthor] = useState(null);
    useEffect(() => {
        const fetchQuote = async () => {
            try {
              const response = await axios.get('https://api.quotable.io/random');
              setquote(response.data.content);
              setAuthor(response.data.author);
            } catch (error) {
              console.error('Error fetching the quote', error);
            }
          };
    fetchQuote();
    }, [])
    
  return (
    <div className='bg-red-200'>Quote-{quote} <br/>--By {Author}</div>
  )
}

export default Quote