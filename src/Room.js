import React from 'react'
import {useParams} from "react-router-dom"
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room =()=> {
    const {roomID} = useParams();
    console.log(roomID);
    const meeting = async (Element)=> {
        const appID = 2078854219;
        const serverSecret = "e8ebab90e2ab381ce877b83defbe0cfa";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,serverSecret,roomID,Date.now().toString(),
            "andre"
        );
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container:Element,
            scenario:{
                mode: ZegoUIKitPrebuilt.VideoConference,
            }
        })
    };
  return (
    <div className="myCallContainer" ref={meeting} style={{width : "100vw", height : "100vh"}}>
     
    </div>
  )
}

export default Room
