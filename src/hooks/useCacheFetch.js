import React, { useEffect, useState } from 'react';

const useCacheFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchData = async (siginal) => {
        if (localStorage.getItem(url)) {
            setData(JSON.parse(localStorage.getItem(url)));
        }
        setLoading(true)
        try {
            const res = await fetch(url, { siginal });
            const jsonRes = await res?.json();
            setData(jsonRes);
            localStorage.setItem(url, JSON.stringify(jsonRes));
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        if (!url) return;

        const controller = new AbortController();
        const siginal = controller.signal;
        fetchData(siginal);

        return () => {
            controller.abort()
        }


    }, [url])

    return { data, loading, error };
};

export default useCacheFetch;
