import React, { useState, useEffect } from "react";
import axios from 'axios'
import '../Blog/blog.css'

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    const url = "http://localhost:4000";

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${url}/api/blog/list`);
                setBlogs(response.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchBlogs()
    }, [])

    const getEmbedUrl = (url) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        if (match && match[2].length === 11) {
            return `https://www.youtube.com/embed/${match[2]}`;
        }
        return null;
    };

    return (
        <div className="blog">
            <h1 className="blog-header">Precision-Blog</h1>

            {blogs.map((blog) => (
                <li key={blog._id} className="blog-item">
                    {/* Image display */}
                    {blog.image === 'image' && (
                        <img
                            src={`${url}/uploads/${blog.image}`}
                            alt={blog.title}
                            className="blog-image"
                        />
                    )}

                    <h2>{blog.title}</h2>
                    <p>{blog.subtitle}</p>

                    {/* Video display */}
                    {blog.videoUrl && getEmbedUrl(blog.videoUrl) && (
                        <div className="video-container">
                            <iframe
                                width="560"
                                height="315"
                                src={getEmbedUrl(blog.videoUrl)}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </li>
            ))}
        </div>
    );
}

export default Blog;