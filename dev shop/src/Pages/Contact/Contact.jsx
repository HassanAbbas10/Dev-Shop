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

    </form>
  )
}

export default Contact