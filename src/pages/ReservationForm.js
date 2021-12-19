import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Api from '../ApiAxions'

function ReservationForm() {


  const [campos, setCampos] = useState({
    employee: '',
    customer: '',
    vehicle: '',
    insurance: '',
    rent_checklist: '',
    returned_checklist: '',
    rent_date: '',
    return_date: '',
    is_approved: '',
    total_price: '',
    is_returned: ''
  });

  function handleInputChange(event) {
    campos[event.target.name] = event.target.value;
    setCampos(campos);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(campos);
    Api.post("/rents/", campos).then((res) => {
      console.log(res.data);
    }).catch((error) => { console.log(error) });
  }

  return (
    <Container id="main-container" className="d-grid h-100">
      <h1>Reservation Form</h1>
      <p>Fill in the fields below.</p>
      <Form id="registration-in-form" onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="sign-in-employee">
          <Form.Label>Employee</Form.Label>
          <Form.Control type="text" name="employee" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="sign-in-customer">
          <Form.Label>Customer</Form.Label>
          <Form.Control type="text" name="customer" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="sign-in-vehicle">
          <Form.Label>Vehicle</Form.Label>
          <Form.Control type="text" name="vehicle" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="sign-ini-nsurance">
          <Form.Label>Insurance</Form.Label>
          <Form.Control type="text" name="insurance" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="sign-in-rent-checklist">
          <Form.Label>Rent checklist</Form.Label>
          <Form.Control type="text" name="rent_checklist" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="returned_checklist">
          <Form.Label>Returned checklist</Form.Label>
          <Form.Control type="text" name="returned_checklist" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="sign-rent_date">
          <Form.Label>Rent date</Form.Label>
          <Form.Control type="date" name="rent_date" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="sign-in-return-date">
          <Form.Label>Return date</Form.Label>
          <Form.Control type="date" name="return_date" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange} />
        </Form.Group>

        <Form.Label>Is approved</Form.Label>
        <Form.Control as="select" name="is_approved" size="lg" placeholder="" onChange={handleInputChange}>
          <option value={undefined}>Select</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </Form.Control>
        <Form.Group className="mb-3" controlId="total_price">
          <Form.Label>Total price</Form.Label>
          <Form.Control type="text" name="total_price" size="lg" placeholder="" style={{ width: '400px' }} onChange={handleInputChange} />
        </Form.Group>

        <Form.Label>Is returned</Form.Label>
        <Form.Control as="select" name="is_returned" size="lg" placeholder="" onChange={handleInputChange}>
          <option value={undefined}>Select</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </Form.Control>

					<div className="row">
						<input type="submit" name="submit button" className="btn btn-info btn-block mt-4" />
						<button type="reset" class="submit button" className="btn btn-info btn-block" onChange={handleInputChange}>Clear</button>
					</div>
      </Form>
    </Container>
  )
}

export default ReservationForm;