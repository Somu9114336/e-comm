import React, { useEffect, useState } from 'react'
import './LIstproduct.css'
import cross_icon from '../../assets/cross_icon.png'

const LIstproduct = () => {

  const [allproducts, setallproducts] = useState([]);

  const fetchinfo = async () => {
    await fetch('http://localhost:4000/allproducts')
      .then((res) => res.json())
      .then((data) => { setallproducts(data) });
  }
  useEffect(() => {
    fetchinfo()
  }, [])

  const remove_product = async (id)=>{
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
      headers:{
        accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchinfo();
  }

  return (
    <div className='list-product'>
      <h1>All products list</h1>
      <div className="listproduct-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>old price</p>
        <p>new price</p>
        <p>category</p>
        <p>remove</p>
      </div>
      <div className="listproduct-allproduct">
        <hr />
        {allproducts.map((product, index) => {
          return <>
          <div key={index} className="listproduct-format-main listproduct-format">
            <img src={product.image} alt="" className="listproduct-product-icon" />
            <p> {product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img onClick={()=>{remove_product(product.id)}} className='listproduct-remove-icon' src={cross_icon} alt='' />
          </div > 
          <hr /> 
          </>
        })}
      </div >  
    </div >
  )
}

export default LIstproduct
