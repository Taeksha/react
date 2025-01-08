import React, { useEffect, useState } from 'react'
import '../App.css'
import { Link } from 'react-router';



  const Product = () => {
    const [data,setdata]= useState([ ]);
    const [page,setpage]= useState(1)

   const fetchdata = () =>{
     fetch(`http://localhost:3000/product`)
     .then((res)=>res.json())
     .then((data)=>setdata(data))
     .catch ((err) => console.log(err));
   } ; 
    
    
   useEffect(()=>
  {
    fetchdata();

  },[data])
  const Handelete=(id) =>

  {

  fetch(`http://localhost:3000/product/${id}`,{
    method:"Delete"

  })
  .then(res=>res.json())
  .then(data=>alert('delete successs..'))

  }
  

    return (
    
    <div>
  <h1 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', color: '#333' }}>
    Product
  </h1>
  <div className="product" style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  }}>
    {data.map((el) => (
      <div
        key={el.id}
        style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '16px',
          backgroundColor: '#fff',
          textAlign: 'center',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.02)';
          e.currentTarget.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.15)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }}
      >
        <Link to={`/description/${el.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '8px',
            color: '#555',
          }}>
            {el.id}
          </div>
          <img
            src={el.image}
            alt=""
            style={{ height: '200px', width: '200px', objectFit: 'cover', marginBottom: '12px' }}
          />
          <h2 style={{ fontSize: '20px', margin: '8px 0', color: '#333' }}>{el.title}</h2>
          <h4 style={{ fontSize: '16px', margin: '4px 0', color: '#777' }}>{el.description}</h4>
          <h5 style={{ fontSize: '14px', margin: '4px 0', color: '#999' }}>{el.category}</h5>
        </Link>
        <h2 style={{ fontSize: '20px', margin: '12px 0', color: '#000' }}>${el.price}</h2>
        <button
          onClick={() => Handelete(el.id)}
          style={{
            padding: '10px 20px',
            backgroundColor: '#f44336',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '8px',
          }}
        >
          Delete
        </button>
        <Link to={`/edit/${el.id}`}>
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Update
          </button>
        </Link>
      </div>
    ))}
  </div>
</div>

  )
  
}
  

export default Product