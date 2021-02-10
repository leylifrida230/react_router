import React from 'react'
import $, { event } from "jquery"
import "bootstrap/dist/js/bootstrap.bundle"


class Cart extends React.Component{
    constructor(){
        super()
        this.state = {
            cart: [], // untuk menyimpan list cart
            User: "", // untuk menyimpan data user
            total: 0, // untuk menyimpan data total belanja
            action: "",
            selectedItem: null
        }
    }

    EditCart = (item) => {
        $("#modal_cart").modal("show")
        this.setState({
            cart: item.cart,
            user: item.user,
            total: item.total,
            action: "update",
            selectedItem: item
        })
    }

    saveCart = (e) => {
        e.preventDefault();
        let tempCart = this.state.cart

        if(this.state.action === "update"){
            let index = tempCart.findIndex(item => item.isbn === this.state.isbn);
            tempCart[index].jumlahBeli = this.state.jumlahBeli
        }
        this.setState({cart : tempCart})

        // simpan data perubahan pada localStorage
        localStorage.setItem("cart", JSON.stringify(tempCart))

        this.initCart()

        $("#modal_cart").modal("hide")
    }


    DropCart = (item) => {
        if(window.confirm("apakah anda yakin ingin menghapus data ini?")){
            let tempCart = this.state.cart
            let index = tempCart.indexOf(item)

            tempCart.splice(index, 1)

            this.setState({
                cart: tempCart
            })
        }

    }

    initCart = () => {
        // memanggil data cart pada localStorage
        let tempCart = []
        if(localStorage.getItem("cart") !== null){
            tempCart = JSON.parse(localStorage.getItem("cart"))
        }
        

        // memanggil data user pada localStorage
        let userName = localStorage.getItem("user")

        // kalkulasi total harga
        let totalHarga = 0;
        tempCart.map(item => {
            totalHarga += (item.harga * item.jumlahBeli)
        })

        // memasukkan data cart, user, dan total harga pada state
        this.setState({
            cart: tempCart,
            user: userName,
            total: totalHarga
        })
    }


    componentDidMount(){
        this.initCart()
    }

    render(){
        return(
            <div className="container">
                <div className="modal" id="modal_cart">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* modal header */}
                            <div className="modal-header">
                                Form cart
                            </div>

                            {/* modal body */}
                            <div className="modal-body">
                                <form onSubmit={ev => this.saveCart(ev)}>
                                    Judul Buku
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.judul}
                                    onChange={ ev => this.setState({judul: ev.target.value}) }
                                    required />
                                    
                                    Penulis Buku
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.penulis}
                                    onChange={ ev => this.setState({penulis: ev.target.value}) }
                                    required />
                                    
                                    Penerbit Buku
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.penerbit}
                                    onChange={ ev => this.setState({penerbit: ev.target.value}) }
                                    required />
                                    
                                    Harga Buku
                                    <input type="number" className="form-control mb-2"
                                    value={this.state.harga}
                                    onChange={ ev => this.setState({harga: ev.target.value}) }
                                    required />
                                    
                                    Cover Buku
                                    <input type="url" className="form-control mb-2"
                                    value={this.state.cover}
                                    onChange={ ev => this.setState({cover: ev.target.value}) }
                                    required />

                                    <button className="btn btn-info btn-block" type="submit">
                                        Simpan
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card col-12 mt-2">
                <div className="card-header bg-primary text-white">
                        <h4>Data Keranjang Belanja</h4>
                    </div>

                    <div className="card-body">
                        <h5 className="text-primary">
                            Nama User: { this.state.user }
                        </h5>

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Nama Item</th>
                                    <th>Harga</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                    <th>Button</th>
                                </tr>
                            </thead>

                            <tbody>
                                { this.state.cart.map( (item, index) => (
                                    <tr key={index}>
                                        <td>{item.judul}</td>
                                        <td>Rp {item.harga}</td>
                                        <td>{item.jumlahBeli}</td>
                                        <td>
                                            Rp { item.harga * item.jumlahBeli }
                                        </td>
                                        <td>
                                            
                                            <button className="btn btn-primary m-1">
                                                Edit
                                            </button>
                                           
                                            <button className="btn btn-danger"
                                             onClick={this.DropCart}>
                                               Delete
                                            </button>
                                        </td>
                                    </tr>
                                ) ) }
                            </tbody>
                        </table>

                        <h4 className="text-danger">
                            Total Harga: Rp {this.state.total}
                        </h4>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cart;