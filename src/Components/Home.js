import React,{Component} from "react";
class Home extends Component{
    render(){
        return(
<div className="container">
    <div className="card">
        <div className="card-header">
          <h1>Enter Details </h1>
        </div>
        <div className="card-body">
            <form>
                <div className="mb-3">
                    <lable for = "fname" className = "form-label">
                        First Name : 
                    </lable>
                    <input type="text" className="form-control" id="fname" name="id"></input>
                </div>
                <div className="mb-3">
                    <lable for = "lname" className = "form-label">
                        Last Name : 
                    </lable>
                    <input type="text" className="form-control" id="lname" name="id"></input>
                </div>
                <div className="mb-3">
                    <lable for = "Date" className = "form-label">
                        Date Of Birth : 
                    </lable>
                    <input type="date" className="form-control" id="date" name="id"></input>
                </div>
                <div className="mb-3">
                    <lable for = "dropdown" className = "form-label">
                        Place Of Birth : 
                    </lable>
                    <input type="select" className="form-control" id="date" name="id"></input>
                </div>
            </form>
        </div>
        </div>     
</div>
        )
    }
}
export default Home