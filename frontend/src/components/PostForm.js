import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../features/posts/postSlice';
import './styles.css';

export default function PostForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !description) return;
        dispatch(createPost({ name, description }));
        setName('');
        setDescription('');
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <h2 className="form-title">Crear Post</h2>
            <input
                className="form-input"
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <textarea
                className="form-textarea"
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button className="form-button" type="submit">Crear</button>
        </form>
    );
}
