import React from 'react';

import bannerImg from "../images/banner.jpg"

function Banner(props) {
    return (
        <div className='banner'>
            <img className='img' src={bannerImg} alt='banner' />
            <div className='details'>
                <h4 className='chaild'>LATEST RECIPE</h4>
                <h1 className='chaild'>Baked Polenta with CHeese and Mushrooms.</h1>
                <p className='chaild'>Normally, garlic mushrooms are cooked in butter and garlic, hence the name of the recipe. However, you will love the extra ingredients we add even more..</p>
                <button className='button'>Go to recipe <span><i className="fas fa-long-arrow-alt-right"></i></span></button>
            </div>
        </div>
    );
}

export default Banner;