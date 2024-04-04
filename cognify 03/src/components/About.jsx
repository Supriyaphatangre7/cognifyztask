import React from 'react'

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-md-6">
                   <img src="bg3.jpg" alt="myimage" className='w-75 mt-5' />
                </div>

                <div className="col-md-6">
                    <div className="h3-fs-5 mb-0 ">About Us</div>
                    <h1 className="display-6 mb-2">Who <b/>We <b/>Are</h1><hr className='w-50'/>
                    <p className="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consectetur nesciunt id, nam aut asperiores odit repellendus ratione vel dolorum cumque molestiae necessitatibus debitis vitae. Quia illum amet officiis, voluptatum sequi obcaecati, ipsa odio dignissimos illo quo, velit a. Reprehenderit, in. Sint sapiente minima omnis rerum, perferendis cum iusto autem.</p>
                    <button className="btn btn-primary rounded-pill py-2">Get Started</button>
                    <button className="btn btn-outline-primary rounded-pill py-2 ms-2">Contact Us</button>
                
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default About;
