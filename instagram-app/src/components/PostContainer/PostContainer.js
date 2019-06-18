import React from 'react';

import { PostsContainer, Post, PostHeader, UserThumb, PostContent, PostImg, PostInteraction } from '../../styles/PostContainer/PostContainer'
import { StyleH2, StyleP } from '../../styles/App'
import CommentSection from '../CommentSection/CommentSection'
import Social from './Social'

const PostContainer = (props) => {
    return (
        <PostsContainer>
            {props.postData.map(post => (
                <Post key={post.id}>
                    <PostHeader>
                        <UserThumb src={post.thumbnailUrl} />
                        <StyleH2>{post.username}</StyleH2>
                    </PostHeader>
                    <PostContent>
                        <PostImg src={post.imageUrl} />
                        <PostInteraction>
                            <Social data={post} />
                        </PostInteraction>
                    </PostContent>
                    <CommentSection comments={post.comments} />
                </Post>
            ))}
        </PostsContainer>
    )
}

export default PostContainer;