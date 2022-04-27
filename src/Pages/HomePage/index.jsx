import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ListFilm from '../../Layouts/ListFilm';
import Slider from '../../Layouts/Slider';

function HomePage(props) {

    const [filmList, setFilmList] = useState([]);

    const fetchData = async () => {
        const { data } = await axios.get("/api/blogs/");
        setFilmList(data.documents);
    };

    useEffect(() => {
        if (filmList.length > 0)
            fetchData();;
    }, [filmList]);


    return (
        <Container>
            <Slider />
            <ListFilm filmList={filmList} />
        </Container>
    );
}

export default HomePage;