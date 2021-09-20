import React from 'react'
import { useContext, useState } from 'react';
import { authContext } from '../AuthProvider';
import './EnteredClass.css';
import { useLocation } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { firestore, storage } from '../lib/firebase';
import firebase from 'firebase';

export const EnteredClass = (props) => {
    const location = useLocation();
    let user = useContext(authContext);
    console.log(props);
    console.log(location);
    let [document, setdocument] = useState(null);
    let [announcedText, setannouncedText] = useState("");
    let handlechosenfiles = (e) => {
        if (e.target.files[0]) {
            setdocument(e.target.files[0]);
        }
    }
    let handleUpload = () => {
        let uploadImage = storage.ref(`document/${document.name}`).put(document);
        uploadImage.on('state_changed', () => {
            storage.ref('document/').child(document.name).getDownloadURL().then((url) => {
                firestore.collection('announcements')
                    .doc('classes')
                    .collection(location.state.detail.id)
                    .add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        documentURL: url,
                        text: announcedText,
                        sender: user.email
                    })
            })
        })
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
                                <div class="panel-body">
                                    <p class="text-muted font-13">Hye, I’m Johnathan Doe residing in this beautiful world. I create websites and mobile apps with great UX and UI design. I have done work with big companies like Nokia, Google and Yahoo. Meet me or Contact me for any queries. One Extra line for filling space. Fill as many you want.</p>
                                    <hr />
                                    <div class="text-left">
                                        <p class="text-muted font-13"><strong>Full Name: </strong> <span class="m-l-15">Johnathan Deo</span></p>
                                        <p class="text-muted font-13"><strong>Mobile: </strong><span class="m-l-15">(+12) 123 1234 567</span></p>
                                        <p class="text-muted font-13"><strong>Email: </strong> <span class="m-l-15">coderthemes @gmail.com</span></p>
                                        <p class="text-muted font-13"><strong>Location: </strong> <span class="m-l-15">USA</span></p>
                                        <p class="text-muted font-13"><strong>Languages: </strong> <span class="m-l-5"><span class="flag-icon flag-icon-us m-r-5 m-t-0" title="us"></span> <span>English</span> </span><span class="m-l-5"><span class="flag-icon flag-icon-de m-r-5" title="de"></span> <span>German</span> </span><span class="m-l-5"><span class="flag-icon flag-icon-es m-r-5" title="es"></span> <span>Spanish</span> </span><span class="m-l-5"><span class="flag-icon flag-icon-fr m-r-5" title="fr"></span> <span>French</span></span>
                                        </p>
                                    </div>
                                    <ul class="social-links list-inline mt-4 mb-0">
                                        <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Facebook"><i class="fa fa-facebook"></i></a></li>
                                        <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Twitter"><i class="fa fa-twitter"></i></a></li>
                                        <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Skype"><i class="fa fa-skype"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="card-box ribbon-box">
                                <div class="ribbon ribbon-primary">Messages</div>
                                <div class="clearfix"></div>
                                <div class="inbox-widget">
                                    <a href="#">
                                        <div class="inbox-item">
                                            <div class="inbox-item-img"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="rounded-circle" alt="" /></div>
                                            <p class="inbox-item-author">Tomaslau</p>
                                            <p class="inbox-item-text">I've finished it! See you so...</p>
                                            <p class="inbox-item-date">
                                                <button type="button" class="btn btn-icon btn-sm waves-effect waves-light btn-success">Reply</button>
                                            </p>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div class="inbox-item">
                                            <div class="inbox-item-img"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" class="rounded-circle" alt="" /></div>
                                            <p class="inbox-item-author">Stillnotdavid</p>
                                            <p class="inbox-item-text">This theme is awesome!</p>
                                            <p class="inbox-item-date">
                                                <button type="button" class="btn btn-icon btn-sm waves-effect waves-light btn-success">Reply</button>
                                            </p>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div class="inbox-item">
                                            <div class="inbox-item-img"><img src="https://bootdey.com/img/Content/avatar/avatar4.png" class="rounded-circle" alt="" /></div>
                                            <p class="inbox-item-author">Kurafire</p>
                                            <p class="inbox-item-text">Nice to meet you</p>
                                            <p class="inbox-item-date">
                                                <button type="button" class="btn btn-icon btn-sm waves-effect waves-light btn-success">Reply</button>
                                            </p>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div class="inbox-item">
                                            <div class="inbox-item-img"><img src="https://bootdey.com/img/Content/avatar/avatar5.png" class="rounded-circle" alt="" /></div>
                                            <p class="inbox-item-author">Shahedk</p>
                                            <p class="inbox-item-text">Hey! there I'm available...</p>
                                            <p class="inbox-item-date">
                                                <button type="button" class="btn btn-icon btn-sm waves-effect waves-light btn-success">Reply</button>
                                            </p>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div class="inbox-item">
                                            <div class="inbox-item-img"><img src="https://bootdey.com/img/Content/avatar/avatar6.png" class="rounded-circle" alt="" /></div>
                                            <p class="inbox-item-author">Adhamdannaway</p>
                                            <p class="inbox-item-text">This theme is awesome!</p>
                                            <p class="inbox-item-date">
                                                <button type="button" class="btn btn-icon btn-sm waves-effect waves-light btn-success">Reply</button>
                                            </p>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div class="inbox-item">
                                            <div class="inbox-item-img"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="rounded-circle" alt="" /></div>
                                            <p class="inbox-item-author">Tomaslau</p>
                                            <p class="inbox-item-text">I've finished it! See you so...</p>
                                            <p class="inbox-item-date">
                                                <button type="button" class="btn btn-icon btn-sm waves-effect waves-light btn-success">Reply</button>
                                            </p>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div class="inbox-item">
                                            <div class="inbox-item-img"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" class="rounded-circle" alt="" /></div>
                                            <p class="inbox-item-author">Stillnotdavid</p>
                                            <p class="inbox-item-text">This theme is awesome!</p>
                                            <p class="inbox-item-date">
                                                <button type="button" class="btn btn-icon btn-sm waves-effect waves-light btn-success">Reply</button>
                                            </p>
                                        </div>
                                    </a>
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
                            <div class="card-box">

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
