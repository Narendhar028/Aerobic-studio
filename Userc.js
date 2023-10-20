import React from 'react';
import './Style1.css';  
class Userc extends React.Component {  
  constructor(props) 
{  
      super(props);  
      this.state =    {
         username: '',
         Email: '',
         Password:'',
         Phno:'',
         Gender:'',
        Address:''	         };  
      }  
  handleChange=(event)=> {  
      this.setState({username: event.target.value});  
  }
  handleemailChange=(event)=> {  
    this.setState({Email: event.target.value});  
 }  
 handlepasswordChange=(event)=> {  
    this.setState({Password: event.target.value});  
 }
 handlephChange=(event)=> {  
    this.setState({Phno: event.target.value});  
 }
 handlegenChange=(event)=> {  
    this.setState({Gender: event.target.value});  
 }
 handleadChange=(event)=> {  
    this.setState({Address: event.target.value});  
 }
   handleSubmit=(event) =>{  
    document.write("<style>");
      document.write("body{background-image:url('new3.jpg');background-size:cover}");
      document.write("</style>")
      document.write("<body>");
      document.write("<center>");
      document.write("<h1>Registered Successfully</h1>");
      document.write("<h1>Your Details!!!!</h1>");
    document.write("Name:"+this.state.username+"<br><br>");
    document.write("Email:"+this.state.Email+"<br><br>");
    document.write("Password:"+this.state.Password+"<br><br>");
    document.write("Phone-Number:"+this.state.Phno+"<br><br>");
    document.write("Gender:"+this.state.Gender+"<br><br>");
    document.write("Address:"+this.state.Address);
    document.write("</center>")
      document.write("</body>")
 event.preventDefault(); 
   }  
   render() {  
    return (  
    <center> <form onSubmit={this.handleSubmit}>  
          <h1>Controlled Registration Form </h1>  
     Name:<input type="text" size='30'value={this.state.username} onChange={this.handleChange} />  
     <br></br><br></br><br></br>
     Email:<input type="email"size='30' value={this.state.Email}      
                      onChange={this.handleemailChange}/>    
     <br></br><br></br><br></br>
     Password:<input type="password"size='30' value={this.state.Password}      
                      onChange={this.handlepasswordChange}/>    
     <br></br><br></br><br></br>
     Phone-No:<input type="number"size='30' value={this.state.Phno}      
                      onChange={this.handlephChange}/>    
     <br></br><br></br><br></br>
    Gender:<select value={this.state.Gender} onChange={this.handlegenChange}>
       <option>Male</option>
       <option>Female</option>
     </select><br></br><br></br>
     Address:<textarea rows='5'  value={this.state.Address}      
                      onChange={this.handleadChange}></textarea>    
     <br></br><br></br><br></br>
          <input type="submit" value="Submit" />  
       </form> </center> 
    );    }  } 
     export default Userc;  
