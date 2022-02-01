import React, { useState } from 'react';
// import img from "../images/food-img.jpg";

import json from "../itemDetails.json";

function RecipesList(props) {
    const [data] = useState(json);
    // console.log(img);
    return (
        <div className='recipes-list'>
            {
                data.map((item, index) => {
                    return (
                        <div className='list-item' key={index}>
                            <div className='listItem-setup'>
                                <div className='dateAndNation'>
                                    <div>
                                        {item.date}
                                    </div>
                                    <div>
                                        {item.country}
                                    </div>
                                </div>
                                <h3>
                                    {item.title}
                                </h3>
                            </div>
                            <img src={item.img} alt='food item' width="200px" />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default RecipesList;