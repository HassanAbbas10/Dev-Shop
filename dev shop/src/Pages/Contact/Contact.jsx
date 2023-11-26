import React from 'react'
import './Contact.scss';
const Contact = () => {
  const [Contact,setContact]=React.useState({
    name:"",
    email:"",
    phoneNum:"",
    message:"",
  })

  const handleChange = (event) =>{
    const{name,value,type} = event.target
    setContact(prevData =>{
      return{
        ...prevData,
        [name]:value
      }
    })
  }

const handleSubmit = (event) =>{
  event.preventDefault()
  //submit-to-Api()
  console.log(Contact)
}

  return (
    <form onSubmit={handleSubmit}>
            <input className="feedback-input"
                type="text"
                placeholder="Name"
                onChange={handleChange}
                name="name"
                value={Contact.name}
            />
            <input className="feedback-input"
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={Contact.email}
            />
            <input className="feedback-input"
                type="text"
                placeholder="Phone Number"
                onChange={handleChange}
                name="phoneNum"
                value={Contact.phoneNum}
            />
             <textarea className="feedback-input"
                value={Contact.message}
                placeholder="Message"
                onChange={handleChange}
                name="message"
               
            />
             <button className='contact-btn '>Send</button>
    </form>
  )
}

export default Contact



//////////////////////
// app.post("/submit", (req,res)=>{
//   let a = req.body.name;
//   let b = req.body.email;

//   fs.writeFile("abc.txt", a + b , (err)=>{
//     if(err) throw err;
//   })

// })