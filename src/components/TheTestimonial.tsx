import TheFooter from "./template/TheFooter"
import TheHeader from "./template/TheHeader"
import TheNavbar from "./template/TheNavbar"

const TheTestimonial = () => {
    return (
        <>
            <TheNavbar />
            <TheHeader />
            {/* Testimonial Start */}
            <div className="container-fluid py-5">
                <div className="container">
                <div className="section-title">
                    <h4
                    className="text-primary text-uppercase"
                    style={{ letterSpacing: 5 }}
                    >
                    Testimonial
                    </h4>
                    <h1 className="display-4">Our Clients Say</h1>
                </div>
                <div className="owl-carousel testimonial-carousel">
                    <div className="testimonial-item">
                    <div className="d-flex align-items-center mb-3">
                        <img className="img-fluid" src="assets/img/testimonial-1.jpg" alt="" />
                        <div className="ml-3">
                        <h4>Client Name</h4>
                        <i>Profession</i>
                        </div>
                    </div>
                    <p className="m-0">
                        Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                        eirmod clita lorem. Dolor tempor ipsum sanct clita
                    </p>
                    </div>
                    <div className="testimonial-item">
                    <div className="d-flex align-items-center mb-3">
                        <img className="img-fluid" src="assets/img/testimonial-2.jpg" alt="" />
                        <div className="ml-3">
                        <h4>Client Name</h4>
                        <i>Profession</i>
                        </div>
                    </div>
                    <p className="m-0">
                        Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                        eirmod clita lorem. Dolor tempor ipsum sanct clita
                    </p>
                    </div>
                    <div className="testimonial-item">
                    <div className="d-flex align-items-center mb-3">
                        <img className="img-fluid" src="assets/img/testimonial-3.jpg" alt="" />
                        <div className="ml-3">
                        <h4>Client Name</h4>
                        <i>Profession</i>
                        </div>
                    </div>
                    <p className="m-0">
                        Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                        eirmod clita lorem. Dolor tempor ipsum sanct clita
                    </p>
                    </div>
                    <div className="testimonial-item">
                    <div className="d-flex align-items-center mb-3">
                        <img className="img-fluid" src="assets/img/testimonial-4.jpg" alt="" />
                        <div className="ml-3">
                        <h4>Client Name</h4>
                        <i>Profession</i>
                        </div>
                    </div>
                    <p className="m-0">
                        Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                        eirmod clita lorem. Dolor tempor ipsum sanct clita
                    </p>
                    </div>
                </div>
                </div>
            </div>
            {/* Testimonial End */}
            <TheFooter />
        </>
    )
}

export default TheTestimonial;