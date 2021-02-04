import React from "react"
import Card from '../components/Card'
import $ from "jquery"
import "bootstrap/dist/js/bootstrap.bundle"
class BookGallery extends React.Component{
    constructor(){
        super()
        this.state = {
            buku: [
                {
                    isbn:"12345", judul:"Bumi", penulis:"Tere Liye",
                    penerbit:"CV Harapan Kita", harga:90000,
                    cover:"https://drive.google.com/uc?id=1ui-jyKgu3DqFyo7VKJu-FFXkaNQN3aSg"
                },
                {
                    isbn:"12344", judul:"Matahari", penulis:"Tere Liye",
                    penerbit:"CV Harapan Putra", harga:95000,
                    cover:"https://drive.google.com/uc?id=1ui-jyKgu3DqFyo7VKJu-FFXkaNQN3aSg"
                },
                {
                    isbn:"12343", judul:"Bintang", penulis:"Tere Liye",
                    penerbit:"CV Nusa Bangsa", harga:85000,
                    cover:"https://drive.google.com/uc?id=1ui-jyKgu3DqFyo7VKJu-FFXkaNQN3aSg"
                }
            ],

            action: "",
            isbn: "",
            judul: "",
            penulis: "",
            penerbit:"",
            harga: 0,
            cover: "",
            selectedItem: null,
            keyword: "",
            filterBuku: []
        }

        this.state.filterBuku = this.state.buku
    }

    Add = () => {
        // menampilkan component modal 
        $("#modal_buku").modal("show")
        this.setState({
            isbn: Math.random(1,10000000),
            judul: "",
            penulis: "",
            penerbit: "",
            cover: "",
            harga: 0,
            action: "insert"  
        })
    }

    Edit = (item) => {
        // menampilkan component modal 
        $("#modal_buku").modal("show")
        this.setState({
            isbn: item.isbn,
            judul: item.judul,
            penulis: item.penulis,
            penerbit: item.penerbit,
            cover: item.cover,
            harga: item.harga,
            action: "update",
            selectedItem: item  
        })
    }

    Save = (event) => {
        event.preventDefault();
        //menampung data state
        let tempBuku = this.state.buku

        if(this.state.action === "insert"){
            // menambah data baru
            tempBuku.push({
                isbn: this.state.isbn,
                judul: this.state.judul,
                penulis: this.state.penulis,
                penerbit: this.state.penerbit,
                cover: this.state.cover,
                harga: this.state.harga
            })
        }else if(this.state.action === "update"){
            //menyimpan perubahan data
            let index = tempBuku.indexOf(this.state.selectedItem)
            tempBuku[index].isbn = this.state.isbn
            tempBuku[index].judul = this.state.judul
            tempBuku[index].penulis = this.state.penulis 
            tempBuku[index].penerbit = this.state.penerbit 
            tempBuku[index].cover = this.state.cover 
            tempBuku[index].harga = this.state.harga
        }

        this.setState({buku : tempBuku})

        // menutup komponen modal
        $("#modal_buku").modal("hide")
    }

    Drop = (item) => {
        // beri konfirmas untuk menghapus data
        if(window.confirm("apakah anda yakin ingin menghapus data ini?") ){
            // menghapus data
            let tempBuku = this.state.buku
            // posisi indeks yang akan dihapus
            let index =  tempBuku.indexOf(item)

            // hapus data
            tempBuku.splice(index, 1)

            this.setState({
                buku: tempBuku
            })
        }
    }
    searching = event => {
        if(event.keyCode === 13){
            // 13 adalah kode untuk tombol ENTER
            
            let keyword = this.state.keyword.toLowerCase()
            let tempBuku = this.state.buku
            let result = tempBuku.filter( item => {
                return item.judul.toLowerCase().includes(keyword) ||
                item.penulis.toLowerCase().includes(keyword) ||
                item.penerbit.toLowerCase().includes(keyword)
                } )
                
                this.setState({filterBuku: result})
            }
        }
        
    render(){
        return(
            <div className="container">
                <input type="text" className="form-control my-2" placeholder="pencarian"
                value={this.state.keyword} 
                onChange={ev => this.setState({keyword: ev.target.value})}
                onKeyUp={ev => this.searching(ev)} />
                <div className="row">
                    {this.state.filterBuku.map( (item, index) =>(
                        <Card
                        judul={item.judul}
                        penulis={item.penulis}
                        penerbit={item.penerbit}
                        harga={item.harga}
                        cover={item.harga}
                        onEdit={ () => this.Edit(item) }
                        onDrop={ () => this.Drop(item) }
                        />
                    ))}
                </div>

                <buttonn className="btn btn-success" onClick={() => this.Add()}>
                    Tambah Data
                </buttonn>

                {/**component modal sbg control manupulasi data */}
                <div className="modal" id="modal_buku">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/** modal Header */}
                            <div className="modal-header">
                                Form Buku
                            </div>

                            {/** Modal body */}
                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Judul Buku
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.judul}
                                    onChange={ev => this.setState({judul: ev.target.value}) }
                                    required />

                                    Penulis Buku
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.penulis}
                                    onChange={ev => this.setState({penulis: ev.target.value}) }
                                    required />

                                    Penerbit Buku
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.penerbit}
                                    onChange={ev => this.setState({penerbit: ev.target.value}) }
                                    required />

                                    Harga Buku
                                    <input type="number" className="form-control mb-2"
                                    value={this.state.harga}
                                    onChange={ev => this.setState({harga: ev.target.value}) }
                                    required />

                                    Cover Buku
                                    <input type="url" className="form-control mb-2"
                                    value={this.state.cover}
                                    onChange={ev => this.setState({cover: ev.target.value}) }
                                    required />

                                    <button className="btn btn-info btn-block" type="submit">
                                        Simpan
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default BookGallery;