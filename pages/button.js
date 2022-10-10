import React from 'react'

const Button = () => {
  return (
    <div className='container'>
      <p>Button</p>

      <div className='d-flex justify-content-space-evenly'>
          <button type="button" class="me-3 btn btn-primary">Primary</button>
          <button type="button" class="me-3 btn btn-secondary">Secondary</button>
          <button type="button" class="me-3 btn btn-success">Success</button>
          <button type="button" class="me-3 btn btn-danger">Danger</button>

          <button type="button" class="me-3 btn btn-warning">Warning</button>
          <button type="button" class="me-3 btn btn-info">Info</button>
          <button type="button" class="me-3 btn btn-light">Light</button>
          <button type="button" class="me-3 btn btn-dark">Dark</button>
      </div>

      <div className='d-flex justify-content-center m-3'>
        <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
          <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" />
          <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

          <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" />
          <label class="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>

          <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" />
          <label class="btn btn-outline-primary" for="btncheck3">Checkbox 2</label>
        </div>
      </div>
      
    </div>
  )
}

export default Button