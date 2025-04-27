import React , {useState} from 'react'
import Header from './Header'
import '../styles/contact.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
     const response = await axios.post("http://localhost:5000/api/",{
      Name:formData.name ,
      email : formData.email,
      message: formData.message
     })

     console.log(response);
     

      console.log('Form submitted:', formData)
      alert("Message sent successfully!")
      setFormData({ Name: '', email: '', message: '' })
      navigate('/')
    } catch (error) {
      
    }
    // Handle form submission here (e.g. send to backend or email service)
   
  }


  return (
    <>
    <Header/>
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
    </>
  )
}

export default Contact