import  React from "react";

 const useGeoLocation=()=>{
    const [location, setLocation] = React.useState({coordinates:{lat:"",lng:""}, loaded:false,});

const onSuccess =location=>{
    setLocation({loaded:true, coordinates:{lat:location.coords.latitude,lng:location.coords.longitude}})
}
const onError =(error)=> setLocation({loaded:true,error})
React.useEffect(()=>{
    if(!("geoLocation" in navigator))
    {   onError({error:{code:0,message:"Geolocation not supported"}})
        // setLocation(state =>({...state,loaded:true,error:{code:0,message:"Geolocation not supported"}}))
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError)
},[])

    return location

}

// export default useGeoLocation