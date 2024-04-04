import React from 'react'

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container">
            <div className="row justify-content-center ">
                <div className="col-md-8">
                    <h1 className="display-4 fw-bolder mb-2 text-center text-black ">EVENT ORGANIZERS</h1>
                    <p className="lead text-center fs-4 mb-6 text-black">loream lispum hello there how are you welcome to our website</p>

                    <div className="buttons d-flex justify-content-center">
                        <button className="btn btn-dark me-2 rounded-pill px-4 py-2">Get Quotos</button>
                        <button className="btn btn-outline-dark  rounded-pill px-4 py-2">Services</button>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Home
