import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
    const response = await axios.get(process.env.REACT_APP_API_URL);
    return response.data;
})

export const createPost = createAsyncThunk('posts/createPost', async (post) => {
    const response = await axios.post(process.env.REACT_APP_API_URL, post);
    return response.data;
})

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/${id}`);
    return id;
})

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.posts.push(action.payload);
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.posts = state.posts.filter((post) => post.id !== action.payload);
            })
    }
})

export default postSlice.reducer;