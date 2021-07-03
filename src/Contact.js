
import React, {useState} from 'react';

export default function Contact() {
	const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

	const check_name=(e)=>{
		setName(e.target.value)
	}
	const check_email=(e)=>{
		setEmail(e.target.value);
	}
	const check_password=(e)=>{
		setPassword(e.target.value);
	}
	const handle_submit=(e)=>{
		console.log("from is submit");
		alert(`From is submit:${name}:${email}`);
		e.preventDefault();
	};

    return (
            <div className="container w-50 p-4">
			<h1 className="text-center mt-5">CONTACT US</h1>
			<hr className="w-25 mx-auto" />
			<form action="" onSubmit={handle_submit}>

				<div className="form-group">
					<label for="name">YOUR NAME</label>
					<input type="text" className="form-control" placeholder="name" name="name" value={name} onChange={check_name}  />
				</div>
				<div className="form-group">
					<label for="email">email</label>
					<input type="text" className="form-control"placeholder="email"  name="email" value={email} onChange={check_email} />
				</div>
				<div className="form-group">
					<label for="password">password</label>
					<input type="password" className="form-control" placeholder="password"  name="password" value={password} onChange={check_password} />
				</div>
				<div className="form-group form-check">
					<label className="form-check-label">
						<input className="form-check-input" type="checkbox" /> Remember me
					</label>
				</div>
				<div className="form-group">

					<label for="textarea">textarea</label>
					<textarea className="form-control"></textarea>
				</div>
				 <button type="submit" className="btn btn-primary">Submit</button>
		</form>
	</div>
     
    )
}
/*-------
import React, { Component } from 'react'

export default class Contact extends Component {
       constructor(props) {
		   super(props)
	   
		   this.state = {
			   name:" ",
			   email:" ",
			   password:" ",
				
		   }
	   }
	   check_name=(e)=>{
		   this.setState({
			   name:e.target.value,
		   })
	   }
	   check_email=(e)=>{
		this.setState({
			email:e.target.value,
		})
	}
	check_password=(e)=>{
		this.setState({
			password:e.target.value,
		})
	}
	handle_submit=(e)=>{
        alert("from is submit");
        console.log(`ALL DATA=${this.state.name},${this.state.email},${this.state.password}`);
        e.preventDefault();
    };


	render() {
		return (
			<div className="container w-50 p-4">
			<h1 className="text-center mt-5">CONTACT US</h1>
			<hr className="w-25 mx-auto" />
			<form action="" onSubmit={this.handle_submit}>

				<div className="form-group">
					<label for="name">YOUR NAME</label>
					<input type="text" className="form-control" placeholder="name" name="name" value={this.state.name} onChange={this.check_name}  />
				</div>
				<div className="form-group">
					<label for="email">email</label>
					<input type="text" className="form-control"placeholder="email"  name="email" value={this.state.email} onChange={this.check_email} />
				</div>
				<div className="form-group">
					<label for="password">password</label>
					<input type="password" className="form-control" placeholder="password"  name="password" value={this.state.password} onChange={this.check_password} />
				</div>
				<div className="form-group form-check">
					<label className="form-check-label">
						<input className="form-check-input" type="checkbox" /> Remember me
					</label>
				</div>
				<div className="form-group">

					<label for="textarea">textarea</label>
					<textarea className="form-control"></textarea>
				</div>
				 <button type="submit" className="btn btn-primary">Submit</button>
		</form>
	</div>
     
		)
	}
    }
    -----*/
