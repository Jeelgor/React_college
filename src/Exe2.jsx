// develope a react component that show from 
// registration from should contain following things
// name , age , gender , branch , email , address
// below registration tabel show display tabel
// as user enter data into form , same should be reflected 
// in bottom tabel
import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    branch: [],
    email: '',
    address: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? (checked ? [...prevData[name], value] : prevData[name].filter(item => item !== value)) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional actions here with the form data
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleInputChange} required />
        </label>
        <br />

        <label>
          Gender:
          <label>
            <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleInputChange} />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleInputChange} />
            Female
          </label>
        </label>
        <br />

        <label>
          Branch:
          <label>
            <input type="checkbox" name="branch" value="IT" checked={formData.branch.includes('IT')} onChange={handleInputChange} />
            IT
          </label>
          <label>
            <input type="checkbox" name="branch" value="CSE" checked={formData.branch.includes('CSE')} onChange={handleInputChange} />
            CSE
          </label>
          <label>
            <input type="checkbox" name="branch" value="ECE" checked={formData.branch.includes('ECE')} onChange={handleInputChange} />
            ECE
          </label>
        </label>
        <br />

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </label>
        <br />

        <label>
          Address:
          <textarea name="address" value={formData.address} onChange={handleInputChange} required />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>Display Table</h2>
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Branch</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{formData.name}</td>
              <td>{formData.age}</td>
              <td>{formData.gender}</td>
              <td>{formData.branch.join(', ')}</td>
              <td>{formData.email}</td>
              <td>{formData.address}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegistrationForm;
