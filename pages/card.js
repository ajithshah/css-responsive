import React from 'react'

const Card = () => {
  return (
    <div className='container'>
    <p>Card</p>
      <div className="row">
        <div className="col-sm-4">
          <div class="card" >
          <img class="card-img-top" src="./card.svg" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div class="card" >
          <img class="card-img-top" src="./card.svg" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div class="card" >
          <img class="card-img-top" src="./card.svg" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card