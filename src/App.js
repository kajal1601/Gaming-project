import React from "react";
import Navbar from "./components/Navbar";



import { Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFj7pb-qVIw3Km0vsjzNOWvDyRJmK-jVlJMQ&usqp=CAU" style={{height : '100%' ,width:'100%'}} />
        
       
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section" >
        <div className="abcd0">
        <p>Welcome to </p>
        <h1>Poki Site</h1>
        <h2>Poki is a completely free online playground that offers a super fun experience with the best online games selection.</h2>
        <h2>It uses algorithms to select games that are shown based on user preference. </h2>
        <h2>Poki Educational Games provides an assortment of learning activities in several different subjects.</h2>

        </div>

      </section>
    </>
  );
};



const Contacts = () => {
  return (
    <>
      <Navbar />
<section class=" xl-9">

    <h1 class="h1-responsive font-weight-bold text-center my-4">Contact us</h1>
  
    <p class="text-center w-responsive mx-auto mb-5">On Poki you can play free online games at home or on the road. Poki has the best online game selection and offers the most fun experience to play alone or ...</p>

    <div class="row" >

        <div style={{border:'2px solid red',
        // backgroundColor: 'purple',
        width: '100vw',
        display:' flex',
        justifyContent: 'center',
        height: '36vh'
        }}>
        <div class="col-md-4 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

          
                <div class="row">

                    
                    <div class="col-sm-4">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control" />
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                    

                    
                    <div class="col-sm-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control" />
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                 

                </div>
               
                <div class="row">
                    <div class="col-sm-7">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control" />
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
           
                <div class="row">

                           <div class="col-sm-9">

                        <div class="sm-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
               

            </form>

            <div class="text-center text-md-left">
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div class="status"></div>
        </div>
      
        
       

    </div>
    </div>

</section>

    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/contact">
        <Contacts />
      </Route>
    </Switch>
  );
};

export default App;
