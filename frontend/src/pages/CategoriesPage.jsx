import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PodcastCard from '../components/PodcastCard/PodcastCard';

const CategoriesPage = () => {
    const { cat } = useParams();
    const [Podcasts, setPodcasts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPodcasts = async () => {
            try {
                const res = await axios.get(`http://localhost:1000/api/v1/category/${cat}`, { withCredentials: true });
                setPodcasts(res.data.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load podcasts.');
                setLoading(false);
            }
        };
        fetchPodcasts();
    }, [cat]);

    return (
        <div>
            <div className="px-4 py-4 lg:px-12 -z-30">
                <h1 className="text-xl font-semibold">{cat}</h1>
            </div>

            <div className="w-full px-4 lg:px-12 py-4">
                {loading ? (
                    <div className="text-3xl font-bold text-center">Loading...</div>
                ) : error ? (
                    <div className="text-3xl font-bold text-center text-red-600">{error}</div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {Podcasts.length > 0 ? (
                                Podcasts.map((items, i) => (
                                    <div key={i}>
                                        <PodcastCard items={items} />
                                    </div>
                                ))
                            ) : (
                                <div className="text-3xl font-bold text-center col-span-full">
                                    No podcasts right now
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CategoriesPage;
