import React,{useState} from 'react';


export default function Home() {

  const[val,setVal]=useState(4);
  const change=()=>{
    setVal( < img src="https://images.pexels.com/photos/2896890/pexels-photo-2896890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="100%" height="300px"  alt="imc" />)
  }


    return (
  <div>


<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img className="d-block w-100" src="https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"width="1300px"height="400px" alt="First slide" />
    </div>
    <div className="carousel-item">
    <img className="d-block w-100" src="https://images.pexels.com/photos/975250/pexels-photo-975250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"width="1300px"height="400px" alt="Second slide" />
    </div>
    <div className="carousel-item">
    <img className="d-block w-100" src="https://images.pexels.com/photos/2896890/pexels-photo-2896890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"width="1300px"height="400px" alt="Third slide" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<h1 className="text-center text-capitalize  m-5">My Card List</h1>
<div className="container">
<div className="card-group">
  <div className="card">
    <img src="https://images.pexels.com/photos/2896890/pexels-photo-2896890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="imc"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
    <img src="https://images.pexels.com/photos/2896890/pexels-photo-2896890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="imc"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
    <img src="https://images.pexels.com/photos/2896890/pexels-photo-2896890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="imc"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
</div>


<div className="jumbotron text-center bg-info p-3 text-white my-3" >
  <h1>TELL US</h1>
  <h3>ANYTHINGS</h3>
  <p>012345678</p>
  <hr className="w-25 mx-auto bg-white" />
</div>


<div className="container">
  <h1 className="text-center">SECTION</h1>
  <hr className="w-50 m-auto mb-2 bg-dark" />
  <div className="row m-4 text-center ">

      <div className="col-md-4 col-sm-4 col-lg-4">
      <i className="fa fa-css3 my my " />
      <h2>CSS LEARNING</h2>
      <p>Lorem ipsum dolor sit, amet, consectetur adipisicing elit.
         Laborum dolores aut quo, animi minus, impedit maiores iure sit qui eaque.</p>
      </div>

      <div className="col-md-4 col-sm-4 col-lg-4">
      <i class="fa fa-quora my" ></i>
					<h2>QURALEARNING</h2>
					<p>Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Laborum dolores aut quo, animi minus, impedit maiores iure sit qui eaque.</p>
      </div>

      <div className="col-md-4 col-sm-4 col-lg-4">
      <i className="fa fa-git-square my"></i>
					<h2>GITHUB LEARNING</h2>
					<p>Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Laborum dolores aut quo,
             animi minus, impedit maiores iure sit qui eaque.</p>
      </div>
</div>
<hr/>
</div>


{/* card section */}

<div className="flex1 text-center mt-5">
  <div className="pk1">
  <img src="https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
 height="300px"width="100%" alt="pix2"  />
 <h2>MY CARD</h2>
 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eaque aspernatur vero quod fuga voluptates incidunt porro commodi nobis ipsam, obcaecati asperiores tempore
    fugiat inventore tempora sed facilis praesentium haru</p>
  </div>

  <div className="pk2">
  <img src="https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
 height="300px"width="100%" alt="pix2"  />
 <h2>MY CARD</h2>
 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eaque aspernatur vero quod fuga voluptates incidunt porro commodi nobis ipsam, obcaecati asperiores tempore
    fugiat inventore tempora sed facilis praesentium haru</p>
  </div>

  <div className="pk3">
  <img src="https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
 height="300px"width="100%" alt="pix2"  />
 <h2>MY CARD</h2>
 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eaque aspernatur vero quod fuga voluptates incidunt porro commodi nobis ipsam, obcaecati asperiores tempore
    fugiat inventore tempora sed facilis praesentium haru
    </p>
  </div>
</div>


<div className="container-fluid mt-5 mb-4">
<div className="row">
<div className="col-md-6 col-sm-6 col-lg-6">
  <img src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
   width="100%" height="300px" alt="pix3" />
  
</div>

<div className="col-md-6 col-sm-6 col-lg-6">
  <h2 className="text-center">SEE THE NATURE</h2>
  <p>Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis at nesciunt dolorum eos unde odit itaque necessitatibus vel dignissimos officiis sit porro inventore nisi modi mollitia enim qui facere, ipsam.necessitatibus vel dignissimos officiis
     sit porro inventore nisi modi mollitia enim qui facere sit porro inventore nisi modi mollitia enim qui facer
     Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis at nesciunt dolorum eos unde odit itaque necessitatibus vel dignissimos officiis sit porro inventore nisi modi mollitia enim qui facere, ipsam.necessitatibus vel dignissimos officiis sit porro inventore nisi modi mollitia enim qui facere
      sit porro inventore nisi modi mollitia enim qui facer</p>
</div>
</div>
</div>

      <div className="m-auto text-center p-3">
         <h1>SHOWPIC:{val}</h1>
        <button className="btn btn-primary " onClick={change}>CLICK</button>
      </div>


      <div className="container-fluid bg-secondary text-center text-white">
        <div className="row">
         
              <div className="col-md-4 col-sm-12 col-lg-4">
              <hr class="w-50 m-auto" />
              <h1>our aims</h1>
              <hr class="w-50 m-auto"/>
              <p>long srreet green road</p>
              <p>north south</p>
              <p>post code-3434</p>
            </div>

            <div className="col-md-4 col-sm-12 col-lg-4">
            <h1 className="m-1">ABOUTUS</h1>
            <hr className="w-20 m-auto" />
         
            <a className="text-white" href="#">WHATS NEW</a><br></br>
            <a className="text-white" href="#">TELL ANYTHING</a><br></br>
            <a className="text-white" href="#">CHECK</a>
     
          </div>
         
          <div className="col-md-4 col-sm-12 col-lg-4">
          <hr class="w-50 m-auto"/>
				<h1>find us</h1>
				<hr class="w-50 m-auto" />
				<p>west areaa </p>
				<p>south east</p>
				<p>post gard-3434</p>
        </div>
        <hr className="sk"/>
        <h6>w3@new school</h6>
        </div>
      
      </div>
      
        </div>
    )
};

