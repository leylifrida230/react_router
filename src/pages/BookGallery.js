
import React from "react"
import { BreadcrumbDivider } from "semantic-ui-react"
import Card from '../components/Card'

class BookGallery extends React.Component{
    constructor(){
        super()
        this.state = {
            buku: [
                {
                    isbn:"12345", judul:"Bumi", penulis:"Tere Liye",
                    penerbit:"CV Harapan Kita", harga:90000,
                    cover: "https://i.pinimg.com/564x/e1/df/fc/e1dffcf4f2057935640e8a498dc61db9.jpg"
                },
                {
                    isbn:"12344", judul:"Matahari", penulis:"Tere Liye",
                    penerbit:"CV Harapan Putra", harga:95000,
                    cover:"https://i.pinimg.com/564x/41/58/69/4158694a946d856a699a683556703d4f.jpg"
                },
                {
                    isbn:"12343", judul:"Bintang", penulis:"Tere Liye",
                    penerbit:"CV Nusa Bangsa", harga:85000,
                    cover:"https://i.pinimg.com/564x/76/6d/38/766d38ba7f9a2af72dd3fd959055d63a.jpg"
                }
            ]
        }
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    {this.state.buku.map( (item, index) =>(
                        <Card
                        judul={item.judul}
                        penulis={item.penulis}
                        penerbit={item.penerbit}
                        harga={item.harga}
                        cover={item.harga}
                        />
                    ))}
                </div>

            </div>
        )
    }
}

export default BookGallery;