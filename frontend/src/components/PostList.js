import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, deletePost } from '../features/posts/postSlice';
import './styles.css';

export default function PostList() {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector((state) => state.posts);
    const [inputValue, setInputValue] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    const filteredPosts = posts.filter(post =>
        post.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = () => {
        setSearchTerm(inputValue);
    };

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="list-container">
            <h2 className="list-title">Listado de Posts</h2>

            <div className="search-bar">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Buscar por nombre..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="search-button" onClick={handleSearch}>Buscar</button>
            </div>

            <ul className="post-list">
                {filteredPosts.map((post) => (
                    <li className="post-item" key={post.id}>
                        <div>
                            <strong>{post.name}</strong>
                            <p>{post.description}</p>
                        </div>
                        <button className="delete-button" onClick={() => dispatch(deletePost(post.id))}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
