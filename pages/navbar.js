import React from 'react'

const Navbar = () => {
  return (
    <div className="header">
      <nav class="nav justify-content-center">
        <a class="nav-link active" aria-current="page" href="#">Active</a>
        <a class="nav-link text-dark" href="#">Link</a>
        <a class="nav-link text-dark" href="#">Link</a>
        <a class="nav-link text-dark">Disabled</a>
      </nav>
    </div>
  )
}

export default Navbar