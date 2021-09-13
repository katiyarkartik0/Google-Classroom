import { Avatar } from '@material-ui/core'
import React from 'react'
import { useContext } from 'react';
import { authContext } from '../AuthProvider';
import './CardUI.css'
export const CardUI = (props) => {
    let user = useContext(authContext);
    console.log(props);
    let imageCollection=[
        "https://i.ytimg.com/vi/oT_8yN5RVow/maxresdefault.jpg",
        "https://i.pinimg.com/originals/0f/70/d6/0f70d6f8985b149d23f7784ee6163d5c.jpg",
        "https://64.media.tumblr.com/6e7df3c57dd725407b591a77e4da5ffe/tumblr_pgew3cjnPA1sguk2k_540.gif",
        "https://data.whicdn.com/images/260986695/original.gif",
        "https://images.crazygames.com/games/death-note-type/thumb-1582906488818.png?auto=format,compress&q=75&cs=strip",
        "https://media.baamboozle.com/uploads/images/57307/1595450130_258217",
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/1d101530e7435bc49e296775a8ea9c4c109f31a4fc3853f1c40d9786943cf26a._RI_V_TTW_.jpg",
        "https://wallpaperaccess.com/full/859072.jpg",
        "https://static.wikia.nocookie.net/mharoleplaying/images/2/24/TSJ_High.png/revision/latest?cb=20190814063314",
        "https://piggy-rider.s3.ap-south-1.amazonaws.com/st.-xavier%27s-school-primary-image-SXUgApmDecANPbEZ.jpg",
        "https://p4.wallpaperbetter.com/wallpaper/176/733/109/anime-classroom-wallpaper-preview.jpg",
        "https://www.teahub.io/photos/full/266-2667305_anime-wallpaper-school-sad.jpg"

    ]
    return (
        <div class="card-deck col-2">
        <div class="card">
            <img class="card-img-top" src={imageCollection[props.data.subject.charCodeAt(0)%11]} alt=""/>
            <Avatar className = "avatarStyle" src={props.data.photoURL}/>
            <div class ="card-body">

            <h5 class ="card-title">{props.data.subject}</h5>
            <p class ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
            <h6>ClassCode :</h6> 
            <h6>{props.data.id}</h6>
            </div>

            <div class ="card-footer">
            <small class ="text-muted">
            <div>Professor : {props.data.owner}</div>
            <div>Status : {props.status}</div>
            </small>
            </div>
        </div>
        
    </div>
    )
}
