import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {sortAscId, sortDescId} from '../../utils';
import Modal from './Modal';
import './style.scss';

const LIMIT_IMAGES = 8;

const List = () => {
    const [images, setImages] = useState([])
    const [page, setPage] = useState(1)
    const [modal, setModal] = useState(null)
    const pages = [1, 2, 3, 4, 5]

    useEffect( async () => {
        const { data } = await axios.get('http://jsonplaceholder.typicode.com/photos', {
            params: {_page: page, _limit: LIMIT_IMAGES}
        })

        setImages(data)
    }, [page])

    const sortingById = (e) => {
        const typeSort = e.target.value
        const currentImages = [...images]
        setImages(currentImages.sort( typeSort == 'asc' ? sortAscId : sortDescId ))
    }

    const modalShow = modal ? <Modal 
        image={modal} 
        closeModal={setModal} 
    /> : '';

    return (
        <div>
            <select onChange={(e) => sortingById(e)}>
                <option value="asc">sort id by asc</option>
                <option value="desc">sort id by desc</option>
            </select>

            <div className='image__list'>
                {images.map(image =>
                <div 
                    key={image.id}
                    className='image__item' 
                    onClick={() => setModal(image.url)}
                >
                    <img src={image.thumbnailUrl} />
                    <div className='image__title'>{image.title} ({image.id})</div>                
                </div>
                )}
            </div>
            <div className='pagination'>
                {pages.map(p =>
                    <div
                        key={p}
                        onClick={() => setPage(p)}
                        className={`pagination__item ${p === page ? 'active' : ''}`}
                    >
                        {p}
                    </div>
                )}
            </div>

            {modalShow}
        </div>
    );
};

export default List;