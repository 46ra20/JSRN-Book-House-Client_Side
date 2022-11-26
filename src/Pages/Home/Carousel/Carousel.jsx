import React from 'react';

const Carousel = () => {
    return (
        <div className='mx-auto container rounded'>
            <div className="carousel w-full rounded-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg" className="w-full h-96" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717__340.jpg" className="w-full h-96" alt=''/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://images-cdn.reedsy.com/discovery/post/142/featured_image/medium_187b2b29826e2ccf7eb2d88d65d8f1e756259fb5.jpg" className="w-full h-96" alt=''/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://media.npr.org/assets/img/2022/09/15/dearlifekit_book_slide-ccd8254109e6f445776ebef4d502a24c602c8ca0-s800-c85.webp" className="w-full h-96" alt=''/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;