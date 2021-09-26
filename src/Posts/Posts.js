import React, { useState } from 'react'
import { useEffect } from 'react';
import { firestore } from '../lib/firebase';
import './Posts.css'
import { Avatar } from '@material-ui/core';
export const Posts = (props) => {
    const [posts, setposts] = useState([])
    console.log(props);
    useEffect(() => {
        if (props.postInfo) {
            let unsubscribe = firestore.collection('announcements')
                .doc('classes')
                .collection(props.postInfo.id)
                .onSnapshot((snap) => {
                    setposts(snap.docs.map((doc) => doc.data()))
                })
            return () => {
                unsubscribe();
            }

        }
    }, [props.postInfo])
    console.log(posts);
    return (
        <div>
            {posts.map((item) => {
                console.log(item)
                {
                    if (item.documentURL) {
                        console.log(item.senderPhoto);
                        return (
                            <>
                                <div class="card-box">
                                    <Avatar src={item.senderPhoto}/>
                                    <h6>{item.sender}</h6>
                                    <hr />
                                    <h7>{item.text}</h7>
                                    <hr />
                                    <h4>ATTACHMENT</h4>
                                    <div className="attachment">
                                        <h5>{item.documentName}</h5>
                                        <a href={item.documentURL}>{item.documentURL}
                                        </a>
                                    </div>


                                </div>
                            </>)
                    } else {
                        return (
                            <>
                                <div class="card-box">
                                    <Avatar src={item.senderPhoto}/>
                                    <h6>{item.sender}</h6>
                                    <hr />
                                    <h7>{item.text}</h7>
                                </div>
                            </>)
                    }
                }


            })}
        </div>
    )
}
