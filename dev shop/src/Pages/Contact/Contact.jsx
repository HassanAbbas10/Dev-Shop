import React from 'react'

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
  event.preventDeafault()
  //submittoApi()
  console.log(Contact)
}

  return (
    <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                onChange={handleChange}
                name="name"
                value={Contact.name}
            />
            <input
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={Contact.email}
            />
            <input
                type="text"
                placeholder="Phone Number"
                onChange={handleChange}
                name="phoneNum"
                value={Contact.phoneNum}
            />
             <textarea 
                value={Contact.message}
                placeholder="Message"
                onChange={handleChange}
                name="message"
            />
             <button>Send</button>
    </form>
  )
}

export default Contact