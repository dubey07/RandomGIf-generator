
import { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

const Tag = ()=>{

    const[tag, setTag] = useState('');

    const{gif, loading, fetchData} = useGif(tag);

    // const[gif,setGif] = useState("");
    // const[loading,setLoading] = useState(false);
    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);
    // }
    // useEffect(()=>{
    //     fetchData();
       
    // },[])

    // function changeHandler(){
    //    fetchData();
        
    // }
    return(
        <div className="w-1/2 bg-[#434242]  rounded-lg border flex flex-col items-center gap-y-5 mb-[30px]">
            <h1 className="mt-[20px] text-3xl underline uppercase font-medium text-white">Random {tag} Gifs</h1>

            {
                loading ? (<Spinner/>) : ( <img src={gif} alt="" width="450"/>)
            }

            <input type="text" className="w-10/12 bg-black text-white text-lg py-2 rounded-lg mb-[20px] text-center" 
            onChange={(event)=> setTag(event.target.value)}  value={tag}/>
           
            <button className="w-8/12 bg-[#5089C6] text-lg py-1 rounded-lg font-medium mb-[20px]" onClick={()=> fetchData(tag)}>
            Generate</button>

        </div>
    )
}

export default Tag;