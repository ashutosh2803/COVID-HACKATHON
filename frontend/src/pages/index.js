import React from "react"
import {FiHome } from "react-icons/fi"
import {FaBlogger} from "react-icons/fa"
import {FcAbout} from "react-icons/fc"
import {RiHospitalFill} from "react-icons/ri"
import styles from "../styles/index.module.css"
import { useEffect, useState, useRef } from 'react';
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";



const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Video = styled.video`
  border: 1px solid blue;
  width: 50%;
  height: 50%;
`;

const IndexPage = () => {
const [yourID, setYourID] = useState("");
const [users, setUsers] = useState({});
const [stream, setStream] = useState();
const [receivingCall, setReceivingCall] = useState(false);
const [caller, setCaller] = useState("");
const [callerSignal, setCallerSignal] = useState();
const [callAccepted, setCallAccepted] = useState(false);

const userVideo = useRef();
const partnerVideo = useRef();
const socket = useRef();

useEffect(() => {
  socket.current = io.connect("/");
  navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
    setStream(stream);
    if (userVideo.current) {
      userVideo.current.srcObject = stream;
    }
  })

  socket.current.on("yourID", (id) => {
    setYourID(id);
  })
  socket.current.on("allUsers", (users) => {
    setUsers(users);
  })

  socket.current.on("hey", (data) => {
    setReceivingCall(true);
    setCaller(data.from);
    setCallerSignal(data.signal);
  })
}, []);

function callPeer(id) {
  const peer = new Peer({
    initiator: true,
    trickle: false,
    config: {

      iceServers: [
          {
              urls: "stun:numb.viagenie.ca",
              username: "sultan1640@gmail.com",
              credential: "98376683"
          },
          {
              urls: "turn:numb.viagenie.ca",
              username: "sultan1640@gmail.com",
              credential: "98376683"
          }
      ]
  },
    stream: stream,
  });

  peer.on("signal", data => {
    socket.current.emit("callUser", { userToCall: id, signalData: data, from: yourID })
  })

  peer.on("stream", stream => {
    if (partnerVideo.current) {
      partnerVideo.current.srcObject = stream;
    }
  });

  socket.current.on("callAccepted", signal => {
    setCallAccepted(true);
    peer.signal(signal);
  })

}

function acceptCall() {
  setCallAccepted(true);
  const peer = new Peer({
    initiator: false,
    trickle: false,
    stream: stream,
  });
  peer.on("signal", data => {
    socket.current.emit("acceptCall", { signal: data, to: caller })
  })

  peer.on("stream", stream => {
    partnerVideo.current.srcObject = stream;
  });

  peer.signal(callerSignal);
}

let UserVideo;
if (stream) {
  UserVideo = (
    <Video playsInline muted ref={userVideo} autoPlay />
  );
}

let PartnerVideo;
if (callAccepted) {
  PartnerVideo = (
    <Video playsInline ref={partnerVideo} autoPlay />
  );
}

let incomingCall;
if (receivingCall) {
  incomingCall = (
    <div>
      <h1>{caller} is calling you</h1>
      <button onClick={acceptCall}>Accept</button>
    </div>
  )
}
return (<>
 <Container>
      <Row>
        {UserVideo}
        {PartnerVideo}
      </Row>
      <Row>
        {Object.keys(users).map(key => {
          if (key === yourID) {
            return null;
          }
          return (
            <button onClick={() => callPeer(key)}>Call {key}</button>
          );
        })}
      </Row>
      <Row>
        {incomingCall}
      </Row>
    </Container>
    <style jsx global>
            {`
                body {
                    margin:0;
                    padding:0;
                }
            `}
        </style>
    <div style={{width:"15%",display:"flex",flexDirection:"column",padding:"0 15px",backgroundColor:"rgb(246,246,247)",height:"100vh"}}>
        <div style={{fontFamily:"monospace",fontWeight:"600",marginTop:"15px",fontSize:"14px",textAlign:"left"}}>
            COVID19<br/>
        <span style={{color:"grey"}}>INDIA</span>    
        </div>
        <h3 style={{display:"flex",fontSize:"22px",cursor:"pointer",alignItems:"center",gap:"20px"}}><FiHome size="24px" /> Home</h3>
        <h3 style={{display:"flex",fontSize:"22px",cursor:"pointer",alignItems:"center",gap:"20px"}}><FaBlogger size="24px"/> Blog</h3>
        <h3 style={{display:"flex",fontSize:"22px",cursor:"pointer",alignItems:"center",gap:"20px"}}><FcAbout size="24px"/> About</h3>
        <h3 style={{display:"flex",fontSize:"22px",cursor:"pointer",alignItems:"center",gap:"20px"}}><RiHospitalFill size="24px"/> Hospitals</h3>
    </div>

</>)
}
export default IndexPage