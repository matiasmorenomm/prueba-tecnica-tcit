import React, { useEffect, useState } from 'react'
import PostForm from './components/PostForm'
import PostList from './components/PostList'

export const App = () => {

    return (
        <div style={{ padding: 20 }}>
            <PostList />
            <PostForm />
        </div>
    )
}
