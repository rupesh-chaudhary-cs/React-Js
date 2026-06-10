import { useEffect, useState } from "react";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import PostLists from "./PostLists";
import Input from "./Input";
const Weatherdata = ({initialPost,addPost,cityVal}) => {
    let[error,setError]=useState(false);
    let [fetching, setFetching] = useState(false);
    useEffect(() => {

        if(!cityVal){
                    return;
        }
        setError(false);
        setFetching(true)
        fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${cityVal}&count=1`
        )
            .then((res) => res.json())
            .then(data=>{
                
                console.log(data)
                if (!data.results || data.results.length===0) {
                   setError(true);
                   setFetching(false);
                   return;
                }

                let name=data.results[0].name
                let latitude=data.results[0].latitude
                let longitude=data.results[0].longitude
                fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
                    .then((res)=>res.json())
                    .then(data2=>{
                        console.log(data2)
                        let temperature=data2.current_weather.temperature;
                        addPost(name,temperature)
                        setFetching(false)
                    })
                
            })
        return () => {
            console.log("data is cleaning up");
        };
    }, [cityVal]);

    return <>
       {!cityVal && <h1>Enter a City</h1> }
       {cityVal && fetching && <Loader></Loader>}
       {cityVal && error && <h1>City not Found ,Enter the correct once!</h1>}
       {cityVal && !error && !fetching && initialPost.length > 0 &&<PostLists initialPost={initialPost}></PostLists>}
    </> 

    
};

export default Weatherdata;
