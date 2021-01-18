import React, {Fragment} from 'react';
import Column from './Column'

function Gallery({imgarr}){
    //console.log(imgarr)
    let images = [[], [], [], []]
    
    let sum = 0;
    imgarr.forEach(img => {
        sum += Number(img.height);
    });
    
    let threshold = sum / 4;
    let current = 0;
    let l = 0;

    console.log(threshold)
    imgarr.forEach(img => {
        if (current >= threshold ) {
            l += 1;
            current = 0;
            images[l].push(img)
        }else{
            current += Number(img.height);
            images[l].push(img)
        }
    })

    return(
        <Fragment>
            {
                images.map((img, i) => {
                    return <Column key={i} images={img} />
                })
            }
            
        </Fragment>
    )
}
export default Gallery;