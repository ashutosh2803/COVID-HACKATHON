import React from 'react';
import { GoogleMap, LoadScript,Marker,InfoWindow } from '@react-google-maps/api';
import styles from  '../src/Styles/hospitalNearby.module.css'
import data from "../data/data.json";
import { FiHome } from "react-icons/fi";
import { useRouter } from 'next/router';

const hospitalNearby=()=>{
    const router = useRouter();
    const [ selected, setSelected ] = React.useState({});  
    const [hover, setHover] = React.useState(false)

    const handleMouseOver=(e)=>{
        
    }
    const onSelect = item => {
        setSelected(item);
    }
    const mapStyles = {        
        height: "90vh",
        width: "600px"};

    const defaultCenter = {
        lat: 19.8762, lng: 75.3433
        }
    const locations = [
        {
            // name: "My Location 1",
            location: { 
            lat: 19.8762, lng: 75.3433
            },
            
        },
        {
            name: "Bembde Hospital for Plastic, Cosmetic, Burns & Hand Surgery",
            img:"https://lh5.googleusercontent.com/p/AF1QipPjdN98c8MHVyQ6bD-4V1s0QlA4RO8KG1dA_pXR=w408-h397-k-no",
            location: { 
            lat: 19.849878345782134, lng: 75.33496856689453
            },
            // 19.854772321846017
        },{
            // name: "My Location 3",
            location: { 
            // lat: 19.849878345782134, lng: 75.35771369934082
        }                        
        },{
            // name: "My Location 4",
            location: { 
            lat: 19.849878345782134, lng: 75.35771369934082}                        
        },{
            // name: "My Location 5",
            location: { 
            lat: 19.859404330045162, lng: 75.33625602722168}                        
        },{
            // name: "My Location 6",
            location: { 
            lat: 19.865620130014456, lng: 75.34775733947754}                        
        },{location:{ "lat": 19.8713513660366, "lng": 75.32930374145508 }}
        ,{location:{ "lat": 19.88136035171138, "lng": 75.3471565246582 }}
        ,{location:{ "lat": 19.85246172006361, "lng": 75.32432556152344 }},
        {location:{ "lat": 19.903797553779718, "lng": 75.3416633605957 }},
        {location:{ "lat": 19.8713513660366, "lng": 75.32930374145508 }},
        {location:{ "lat": 19.867961082431837, "lng": 75.35050392150879 }},
        {location:{ "lat": 19.86650808155144, "lng": 75.33681392669678 }}
    ]

    return(
        
    <div className={styles.container} >
        
        <div>

        <button className={styles.homeBtn} onClick={() => router.push('http://localhost:3002')}><FiHome size="34px" /></button>
        <LoadScript googleMapsApiKey='AIzaSyACsMHxH-_rrljrAKwNJG4fU5TOxn7V-Nw'>        
         
         <GoogleMap
           mapContainerStyle={mapStyles}
           zoom={13}
           center={defaultCenter}
           defaultClickableIcons={false}
           >             
             {
                 data.map(item => {
               return (
                   <Marker key={item.name} position={item.location}  onMouseOver={()=>setHover(!hover)} onClick={(e) => onSelect(item)}/>
               )
             })
          }
             {
                 selected.location && 
                 (
                     <InfoWindow
                     position={selected.location}
                     clickable={true}
                     onCloseClick={() => setSelected({})}
                     options={{ closeBoxURL: ``, enableEventPropagation: true }}
                     >
               <div className={styles.infoWindow}>
                    <p style={{fontWeight:"bold"}}>{selected.title}
                    </p>
                    <br/>
                    <img width="100px" src={selected.img_url}/>

                    <span className={styles.wards}>
                    <h3>
                        Oxygen Supply
                        <br/>
                         <p style={selected.oxygen_supply==="low"?{backgroundColor:"red"}:selected.oxygen_supply=="medium"?
                             {backgroundColor:"orange"}:{backgroundColor:"green"}}>
                            {selected.oxygen_supply}
                        </p>
                    </h3>
                    <h3>Vaccine Availability <p>{selected.vaccine}</p></h3>               
                </span>
               </div>
               
             </InfoWindow>
             )
          }
             </ GoogleMap>
      </LoadScript>
      </div>
        <div style={{display:"flex",flexDirection:"column",marginLeft:"200px",overflow: "scroll"}}>
            <style jsx global>
                    {
                        `.item_card{
                            padding: "5px";overflow: "scroll"
                        }`
                    }
            </style>
            {
                data.map((item, i) => (<div className={styles.itemCard} > 
                
                <span className={styles.imgContainer}>
                    <img  width="100%" height="250px" src={item.img_url}/>
                </span>

                <span className={styles.heading} >
                    <h2>{item.title} &nbsp;&nbsp; {item.distance}</h2>
                    <p>{item.address}</p>
                </span>
                <span className={styles.wards}>
                    <h3>Private Ward <p>{item.private_ward}</p></h3>
                    <h3>General Ward <p>{item.general_ward}</p></h3>
                </span>
                <span className={styles.wards}>
                    <h3>Oxygen Supply <p style={item.oxygen_supply==="low"?{backgroundColor:"red"}:item.oxygen_supply=="medium"?
                    {backgroundColor:"orange"}:{backgroundColor:"green"}}>{item.oxygen_supply}</p></h3>
                    <h3>Vaccine Availability <p>{item.vaccine}</p></h3>               
                </span>
                </div>))
            }

        </div>
    </div>)
}
export default hospitalNearby


       {/* <div style={{display:"flex",flexDirection:"column", width:"100%",height:"70vh",padding:"5px",paddingTop:"0px",overflow:"scroll"}}>

            <ul style={{display:"flex",flexDirection:"column",justifyContent:"center",border: "1px solid red", listStyle:"none", width:"90%",padding:"2%"}}>
           
            {data.map((item,indx) =>(<li style={{border: "1px solid black",paddingBottom: "20px",padding:"5px",margin:"10px"}} key={item.id}>

                    <span>
                        <img width="150px" height="150px"src={item.img_url}alt={item.title}/>
                    </span>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <span style={{marginLeft:"20px"}}>
                        <h2>{item.title}</h2>
                        <p>{item.address}</p>
                    </span>

                </div>                
                <div style={{display: "flex",justifyContent: "space-between",padding:"30px",alignItems: "center",border: "1px solid black"}}>
                    <span><h3>Genrel ward</h3>{item.general_ward}</span>
                    <span><h3>Private ward</h3>{item.private_ward}</span>
                    <span><h3>Oxygen supply</h3>{item.oxygen_supply}</span>
                    <span><h3>Vaccine Availability</h3>{item.vaccine}</span>
                    <span><h3>Distance</h3></span>
                </div>
            </li>))}
            </ul>
        </div> */}