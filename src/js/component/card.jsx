import React from "react";


export const Card = ({img}) => {
  return(
      <div className="container"style={{width: '18rem'}}>
          <img className="card-img-top" src={img} alt="Card image cap" />
          <div className ="row card-body">
              <h5 className="card-title text-center">Card title</h5>
              <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Find out more!</a>
          </div>
      </div>
  )
}