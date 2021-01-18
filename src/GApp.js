import React, {Fragment} from "react"
import './App.css';
import Gallery from './gallery/Gallery';
import Header from './Header';

const getData = () => {
    let data = [
        {
            src: 'https://i.pinimg.com/564x/e7/e7/d9/e7e7d970ff0a00e4715e721a13e99234.jpg',
            height: '500',
            author: 'Awesome'
        },
        {
            src: 'https://i.pinimg.com/236x/4b/ed/23/4bed2314b00a45972e9625290dc69464.jpg',
            height: '300',
            author: 'Awesome'
        },
        {
            src: 'https://i.pinimg.com/236x/21/4a/f8/214af86c1f70dc662b37336a5f2ca6f4.jpg',
            height: '400',
            author: 'Awesome'
        },
        {
            src: 'https://i.pinimg.com/236x/e1/e2/5e/e1e25e48bf70cedd819a7084333ef63d.jpg',
            height: '250',
            author: 'Awesome'
        },
        {
            src: 'https://i.pinimg.com/236x/91/b2/63/91b2637a447234f356d39d3d5b2a7c09.jpg',
            height: '250',
            author: 'Awesome'
        },
        {
            src: 'https://i.pinimg.com/236x/e5/62/07/e562073caa46db4c87f93d641c8d4913.jpg',
            height: '800',
            author: 'Awesome'
        },
    ]
    return data;
}

function GApp() {
    let images = getData();
    return(
        <Fragment>
            <Header/>
            <div className="gallery">
                <Gallery imgarr={images}/>
            </div>
        </Fragment>
    )
}
export default GApp;

