import {React, useState} from "react";
import AllLogos from "../components/AllLogos";
import axios from "axios";
import Swal from 'sweetalert2'
import "./purchase.css"

// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
// const MySwal = withReactContent(Swal)




export default function Purchase({ selectedGame, price }) {
    const [firstName, setFirstName]=useState()
    const [lastName, setLastName]=useState()
    const [email, setEmail]=useState()

    function sendPurchase(){
      axios.post("/purchases", {
        obj:obj
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error){
        console.log(error);
      })
    }

    const obj ={
      fisrtName: firstName,
      lastName :lastName,
      email: email,
      event: selectedGame.title,
      date: selectedGame.datetime_local,
      location: selectedGame.venue.display_location,
      price: price
      }

    function sweetalert(){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'THANK YOU FOR YOUR PURCHASE. WE WOULD LOVE TO SEE YOU SOON',
        showConfirmButton: false,
        timer: 3500
      })
    }
  
  return (
    <div className="purchase">
        Please Fill Your Details To Complete Your Purchase
        <div className="purchaseForm">
      <form
            onSubmit={(e) => {
                e.preventDefault();
                sendPurchase();
                console.log( obj);
                sweetalert();
                            }}
        
      >
        <input placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}></input><br />
        <input placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}></input><br />
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input><br />
        <input disabled={!email || !firstName || !lastName}  type="submit"/>
      </form>
        <h5> Event: {selectedGame.title}</h5>
        <h5> Date: {selectedGame.datetime_local} </h5>
        <h5>Arena: {selectedGame.venue.display_location}</h5>
        <h5>Price: {price}$</h5>

      </div>
      <AllLogos></AllLogos>
    </div>
  );
}
