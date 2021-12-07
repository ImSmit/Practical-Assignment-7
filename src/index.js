import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './cart.css'
import reportWebVitals from './reportWebVitals';

function Student(){
  var [product,setProduct] = React.useState([
    {id: 0, name: "milk", price: 100, quantity: 0},
    {id: 1, name: "tea", price: 200, quantity: 0},
    {id: 2, name: "coffee", price: 300, quantity: 0},
    {id: 3, name: "cookies", price: 50, quantity: 0},
    {id: 4, name: "Bread", price: 65, quantity: 0},
    {id: 5, name: "Butter", price: 250, quantity: 0}])
   
    var [quantity,setQuantity] = React.useState(0);
    var [tprice,setTprice] = React.useState(0);
    
   
  
      var inceremant = (pri, index) => {
      setTprice(tprice + pri)
      product.map((p) => {
        if(p.id === index){
          const newproduct = [...product];
          newproduct[index].quantity = p.quantity + 1
          setProduct(newproduct)
        }
      })
    }
      var decremant = (pri, index) => {
        if(tprice > 0){
         setTprice(tprice - pri)
          product.map((p) => {
            if(p.id === index){
              const newproduct = [...product];
              newproduct[index].quantity = p.quantity - 1
              setProduct(newproduct)
            }
          })
        }
   }
    
    return(
         <div className="maindiv">
           <table className="table">
                               
                                <tr>
                                  <th> Name </th>
                                  <th> Price </th>
                                  <th>  </th>
                                  <th> Quantity </th>
                                  <th>  </th>
                                  
                                </tr>
                                </table>
        {product.map((p)=>
                          <div>
                              <table className="table">
                                <tr>
                                  <td>
                                    {p.name}
                                  </td>
                                  <td>
                                    {p.price}
                                  </td>
                                  <td>
                                    <button onClick={() => inceremant(p.price,p.id)}>+</button>
                                  </td>
                                  <td>
                                    {p.quantity}
                                  </td>
                                  <td>
                                    <button onClick={() => decremant(p.price,p.id)}>-</button>
                                  </td>
                                </tr>
                                 
                              </table>
                              
                              
                          </div>)}
        <h1>Total Price = {tprice}</h1>
    </div>
    )
  }

ReactDOM.render(
  <Student />,
  document.getElementById('root')
)
reportWebVitals();