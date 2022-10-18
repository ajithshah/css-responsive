import React from 'react'
import Image from 'next/image'

const Carousel = () => {
  return (
    <div className="container">
    <p>Carousel</p>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <Image src="/slide.jpg" layout="fill" alt="..."/>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <Image src="/slide.jpg" layout="fill" alt="..."/>
        </div>
        <div class="carousel-item">
          <Image src="/slide.jpg" layout="fill" alt="..."/>
        </div>
      </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel