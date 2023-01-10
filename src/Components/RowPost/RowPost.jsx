import React,{useEffect} from 'react'
import './RowPost.css'
import axios from '../../axios';
import { API_KEY,imageUrl,baseUrl } from "../../constatns/constants";
import { useState } from 'react';
import Youtube, { YouTubeProps } from 'react-youtube';



function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState('');
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            console.log(response.data);
            setMovies(response.data.results)
            
        }).catch((error)=>{
            alert(error)
        })
    }, []);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const handleMovie=(id)=>{
        axios.get( `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data,'my response');
            if(response.data.length!=0){

                setUrlId(response.data.results[0])
            }
        })
      }
  return (
    <div className='row'>
        <h2 className="title">{props.title}</h2>
        <div className='posters'>
            {
                movies.map((obj)=>{    
                    return (
                        <div >
                            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall? 'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                      
                        </div>

                    )
                })
            }
            
        </div>
        
            { urlId &&  <Youtube opts={opts} videoId={urlId.key}/> }
        
       
    </div>
  )
}

export default RowPost