import axios from "axios";
import react, { useEffect, useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";


const Random = ()=>{

    // const[gif,setGif] = useState("");
    // const[loading,setLoading] = useState(false);

    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);
    // }
    // useEffect(()=>{
    //     fetchData();
    // },[])

    const {gif, loading, fetchData} = useGif();
    
    return(
        <div className="w-1/2 bg-[#434242]  rounded-lg border flex flex-col items-center gap-y-5">
            <h1 className="mt-[20px] text-3xl underline uppercase font-medium text-white">A Random Gifs</h1>

            {
                loading ? (<Spinner/>) : ( <img src={gif} alt="" width="450"/>)
            }
           
            <button className="w-8/12 bg-[#5089C6] text-lg py-1 rounded-lg font-medium mb-[20px]" 
            onClick={()=> fetchData()}>
            Generate</button>

        </div>
    )
}

export default Random;