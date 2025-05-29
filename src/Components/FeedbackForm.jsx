import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling


const FeedbackForm = () => {

    // initialize states to handle form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
        rating: ''
    });

    // updates the form data state as users inputs their information
    const handleChange = (event) => {
        const { name, value } = event.target; // extracts name and value properties
        setFormData({
        ...formData,
        [name]: value // update the state variable formData
        });
    };

    // handle form submission
    const handleSubmit = (event) => {
    event.preventDefault();

    // caputures user details
    const confirmationMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
      Rating: ${formData.rating}
    `;
    // confirms whether user details are correct
    const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
    if (isConfirmed) {
      console.log('Submitting feedback:', formData);
      setFormData({ // clear form fields
        name: '',
        email: '',
        feedback: '',
        rating: ''
      });
      alert('Thank you for your valuable feedback!');
    }
  };

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
        {/* // includes onSubmit event handler */}
        <form onSubmit={handleSubmit} className="feedback-form"> 

            <h2>We'd Love to Hear From You!</h2>
            <p>Please share your feedback with us.</p>

            {/* input field type text*/}
            <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name} // sets the inpit field values
            onChange={handleChange} //integrates onchange event
            />
            <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            />
            <textarea
            name="feedback"
            placeholder="Your Feedback"
            value={formData.feedback}
            onChange={handleChange}
            ></textarea>

            {/* input box with type radio buttons */}
             <div style={{display:'flex',gap:'10px',flexDirection:'column'}}>
                    <span>Rate Us:</span>
                    <p><input
                        type="radio"
                        name="rating"
                        value="1"
                        onChange={handleChange}
                    /> 1</p>
                  <p>  <input
                        type="radio"
                        name="rating"
                        value="2"
                        onChange={handleChange}
                    /> 2</p>
                  <p>  <input
                        type="radio"
                        name="rating"
                        value="3"
                        onChange={handleChange}
                    /> 3</p>
                   <p> <input
                        type="radio"
                        name="rating"
                        value="4"
                        onChange={handleChange}
                    /> 4</p>
                    <p><input
                        type="radio"
                        name="rating"
                        value="5"
                        onChange={handleChange}
                    /> 5</p>
                </div>

            <button type="submit">Submit Feedback</button>

        
        </form>
    </>
  );
};

export default FeedbackForm;
