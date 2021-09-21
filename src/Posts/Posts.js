import React, { useState } from 'react'
import { useEffect } from 'react';
import { firestore } from '../lib/firebase';
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
        }
    }, [props.postInfo])
    console.log(posts);
    return (
        <div>
            {posts.map((item) => (
                <>
                    <div class="card-box">
                        <iframe src={item.imageURL}></iframe>
                        <div>{item.text}</div>
                    </div>
                </>
            ))}
        </div>
    )
}
