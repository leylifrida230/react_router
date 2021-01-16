import React from "react"

class Beranda extends React.Component {
    render(){
        return(
            <div className="container">
                <div className="alert alert-success">
                    <h2>Ini Beranda</h2>
                </div>
                <div className="alert alert-dark">
                    <h2>ADIWIYATA</h2>
                    <p>Adiwiyata adalah upaya membangun program atau wadah yang baik dan 
                    ideal untuk mendapatkan ilmu pengetahuan dan berbagai norma serta etika 
                    yang dapat menjadi dasar manusia menuju terciptanya kesejahteraan hidup 
                    untuk Cita-cita pembangunan berkelanjutan</p>
                </div>
            </div>
        )
    }
}
export default Beranda;