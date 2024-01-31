import React from "react";
import './Regfrom.css'
import {useState} from "react";

function RegistrationForm(){
    const[firstname,setFirstname]=useState("")
    const[lastname,setLastname]=useState("")
    const[mobilenumber,setMobilenumber]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[confpassword,setConfpassword]=useState("")
    const[dob,setDob]=useState("")
    const[gender,setselectedoption]=useState("")
    const[selectstate,setSelectstate ]=useState("")
    const[selectcourse,setselectcourse ]=useState("")
    const[delivarymode,setselectDelivarymode]=useState("")
    const[comments,setcomments]=useState("")
    const[PasswordError,setPasswordError]=useState(false)

    const handleoptionchange=(event)=>{
        setselectedoption(event.target.value)
    }
    const handleoption=(event)=>{
        setselectDelivarymode(event.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(password !==confpassword){
            setPasswordError(true);
        }
        else{
            setPasswordError(false)
            console.log("first name:"+firstname)
            console.log("last name:"+lastname)
            console.log("moblie number:"+mobilenumber)
            console.log("email:"+email)
            console.log("pasword:"+password)
            console.log("confpassword:"+confpassword)
            console.log("dob:"+dob)
            console.log("gender:"+gender)
            console.log("course:"+selectcourse)
            console.log("delivarymode:"+delivarymode)
            console.log("comments:"+comments)
            alert("your response  updated successfully"+firstname)
        }
    }
    return(
        <>
        <form className="registration-form" onSubmit={handleSubmit}>
            <fieldset>
                <legend>Personal Information</legend>
                <div className="form-group">
                    <label htmlFor="FirstName">First Name:</label>
                    <input placeholder="Enter your First Name"type="text"id="firstname"
                    value={firstname}onChange={(e)=>setFirstname(e.target.value)}required/>
                </div>
                <div className="form-group">
                    <label htmlFor="LastName">Last Name:</label>
                    <input placeholder="Enter your Last Name"type="text"id="lasttname"
                    value={lastname}onChange={(e)=>setLastname(e.target.value)}required/>
                </div>
                <div className="form-group">
                    <label htmlFor="moblie number">Moblie Number:</label>
                    <input placeholder="Enter your Moblie Number"type="number"id="moblienumber"
                    value={mobilenumber}onChange={(e)=>setMobilenumber(e.target.value)}required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input placeholder="Enter your Email"type="text"id="email"
                    value={email}onChange={(e)=>setEmail(e.target.value)}required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">PassWord:</label>
                    <input placeholder="Enter Password"type="password"id="password" className="password"maxLength={"10"}
                    value={password}onChange={(e)=>setPassword(e.target.value)}required/>
                </div>
                <div className="form-group">
                    <label htmlFor="Confpassword">Confirm PassWord:</label>
                    <input placeholder="Confirm Password" type="password"id="password" className="password"maxLength={"10"}
                     value={confpassword}onChange={(e)=>setConfpassword(e.target.value)}required/>
                </div>
                <div className="form-group">
                    <label htmlFor="dob">DOB:</label>
                    <input type="date"id="dob"
                    value={dob}onChange={(e)=>setDob(e.target.value)}required/>
                </div>
                <div className="form-group1">
                    <label htmlFor="gender">Gender</label>
                    <input className="gender" type="radio" value="Male"checked={delivarymode==="Male"}
                    onChange={handleoptionchange}/>
                    <label>Male</label>
                    <input className="gender" type="radio"value="Female"checked={gender==="Female"}
                    onChange={handleoptionchange}/>
                    <label>Female</label>
                    <input className="gender" type="radio"value="Others"checked={gender==="Others"}
                    onChange={handleoptionchange}/>
                    <label>Others</label>
                </div>
                <div className="form-group">
                    <label htmlFor="Select State">Select State:</label>
                    <select id="Select state" value={selectstate}onChange={(e)=>setSelectstate(e.target.value)}
                    required>
                    <option></option>   
                    <option>Maharastra</option>
                    <option>Karnataka</option>
                    <option>TamilNadu</option>
                    <option>Kerala</option>
                    <option>Andrapradhesh</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <legend>Course Information</legend>
                <div className="from-group">
                    <label htmlFor="select course" >Select Course </label>
                    <select id="select course"value={selectcourse}onChange={(e)=>setselectcourse(e.target.value)}
                     required>
                        <option></option>
                        <option>JAVA FullStack</option>
                        <option>Python FullStack</option>                    
                        <option>SoftWarw Testing</option>
                       </select>
                </div>
                <div className="form-group1">
                    <label htmlFor="delivarymode">Delivary mode</label>
                    <input className="delivary" type="radio" value="Online"checked={delivarymode==="Online"}
                    onChange={handleoption}/>
                    <label>Online</label>
                    <input className="delivary" type="radio" value="Offline"checked={delivarymode==="Offline"}
                    onChange={handleoption}/>
                    <label>Offline</label>
                </div>
                <div className="from-group">
                    <label htmlFor="comments">comments</label>
                    <textarea id="comments" value={comments}onChange={(e)=>setcomments(e.target.value)} required></textarea>
                </div>
            </fieldset>
            <br></br>
            {
              PasswordError && <p className="warning">*password does not match</p>
            }
            <button type="submit">Register</button>
        </form>
        </>
    )
}
export default RegistrationForm