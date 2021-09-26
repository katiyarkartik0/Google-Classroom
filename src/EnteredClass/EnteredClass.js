import React from 'react'
import { useContext, useState } from 'react';
import { authContext } from '../AuthProvider';
import './EnteredClass.css';
import { useLocation } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { firestore, storage } from '../lib/firebase';
import firebase from 'firebase';
import { Posts } from '../Posts/Posts';

export const EnteredClass = () => {
    const location = useLocation();
    let user = useContext(authContext);
    console.log(location);
    let [document, setdocument] = useState(null);
    let [announcedText, setannouncedText] = useState("");
    let postInfo = location.state.detail;
    console.log(user)
    let handlechosenfiles = (e) => {
        e.preventDefault();

        if (e.target.files[0]) {
            setdocument(e.target.files[0]);
        }
    }
    let handleUpload = (e) => {
        e.preventDefault();
        if(document!==null){
        let uploadDoc = storage.ref(`document/${document.name}`).put(document);
        uploadDoc.on('state_changed',null,null,() => {
            storage.ref('document/').child(document.name).getDownloadURL().then((url) => {
                firestore.collection('announcements')
                    .doc('classes')
                    .collection(location.state.detail.id)
                    .add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        documentName: document.name,
                        documentURL: url,
                        text: announcedText,
                        sender: user.email,
                        senderPhoto: user.photoURL
                    });
            })

        })
    }
        else
        {
            firestore.collection('announcements')
            .doc('classes')
            .collection(location.state.detail.id)
            .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                documentURL: null,
                text: announcedText,
                sender: user.email,
                senderPhoto: user.photoURL
            })
        }
    }


    return (
        <>
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <img className="theme" src={location.state.background} />
                            <div className="profile shade">
                                <div class="row">
                                    <div class="col-sm-12"><span class="float-left mr-3"><img src={location.state.detail.photoURL} alt="" class="thumb-lg rounded-circle" /></span>
                                        <div class="media-body text-white">
                                            <h4 class="mt-1 mb-1 font-18">Instructor: {location.state.detail.owner}</h4>
                                            <p class="mt-1 mb-1 font-10">Class: {location.state.detail.className}</p>
                                            <p class="mt-1 mb-1 font-10">Section: {location.state.detail.section}</p>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="text-right">
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xl-4">

                            <div class="card-box">
                                <h4 class="header-title mt-0">Reminder</h4>
                               <h1>UNDER CONSTRUCTION!!</h1>
                            </div>

                            <div class="card-box ribbon-box">
                                <div class="ribbon ribbon-primary">People in class</div>
                                <div class="clearfix"></div>
                                <div class="inbox-widget">
                                    {console.log(location.state.detail.joinedStudents)}
                                    {location.state.detail.joinedStudents.map((item, index)=>{return(<>
                                        {console.log(item)}
                                          <div class="inbox-item">
                                          <div class="inbox-item-img"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="rounded-circle" alt="" /></div>
                                          <p class="inbox-item-author">{item}</p>
                                      </div></>)
                                    })}
                                    
                                                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-8">
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="card-box tilebox-one"><i class="icon-layers float-right text-muted"></i>
                                        <h6 class="text-muted text-uppercase mt-0">Classcode</h6>
                                        <h4 class="" data-plugin="counterup">{location.state.detail.id}</h4></div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="card-box tilebox-one"><i class="icon-paypal float-right text-muted"></i>
                                        <h6 class="text-muted text-uppercase mt-0">SUBJECT</h6>
                                        <h2 class=""><span data-plugin="counterup">{location.state.detail.subject}</span></h2></div>
                                </div>

                                <div class="col-sm-4">
                                    <div class="card-box tilebox-one"><i class="icon-rocket float-right text-muted"></i>
                                        <h6 class="text-muted text-uppercase mt-0">Room</h6>
                                        <h2 class="" data-plugin="counterup">{location.state.detail.room}</h2></div>
                                </div>

                            </div>

                            <div class="card-box">
                                <div class="form-group announcement">
                                    <Avatar className="profile-photo" src={user.photoURL} />
                                    <textarea
                                        value={announcedText}
                                        onChange={(e) => {
                                            setannouncedText(e.target.value);
                                        }}
                                        class="form-control text-area" id="exampleFormControlTextarea1" placeholder="Announce something to the class..." rows="3"></textarea>
                                </div>
                                <input onChange={handlechosenfiles}
                                    className="document-button" type="file" />
                                <div className="post-button">

                                    <button
                                        onClick={handleUpload}
                                        
                        
                                        type="button" className="btn btn-primary">POST
                                    </button>
                                </div>

                            </div>
                            <Posts postInfo={postInfo} />

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
