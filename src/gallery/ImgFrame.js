import React from 'react';

function ImgFrame({src, h, author }){
    return(
        <div>
            {author}
            <img src={src} height={h} />
        </div>
    )
}
export default ImgFrame;