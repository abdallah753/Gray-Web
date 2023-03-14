import React from 'react'

function Home() {
    return (
        <div>
            <nav className='navbar navbar-expand-lg' style={{ zIndex: '5', backgroundColor: 'transparent' }}>
                <div className='container'>
                    <p className='navbar-brand'>Gray Scale</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='collapse navbar-collapse' id='nav'>
                        <ul className='navbar-nav ms-auto'>
                            <li className='nav-item'><a href="#" className='nav-link'>Home</a></li>
                            <li className='nav-item'><a href="#" className='nav-link'>Projects</a></li>
                            <li className='nav-item'><a href="#" className='nav-link'>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='position-relative cccc d-flex flex-column align-items-center justify-content-center text-center'>
                <div className=''>
                    <h1 className='master mb-4' style={{ color: '#f0ffffd9', fontSize: '4rem', letterSpacing: '0.1rem' }}>GRAYSCALE</h1>
                    <h2 style={{ color: '#f0ffffd9' }}>A free, responsive, one page Bootstrap theme created by Abdallah Ramadan.</h2>
                    <button className='btn text-light mt-4 ' style={{ width: 'fit-content', backgroundColor: '#64a19d', letterSpacing: '0.1rem' }}>Get Started</button>
                </div>
            </div>
            <div className='position-relative' style={{ background: 'linear-gradient(to bottom, #000 0%, rgba(0, 0, 0, 0.9) 75%, rgba(0, 0, 0, 0.8) 100%)', top: '-1px', padding: '10rem 0 0' }}>
                <div className='text-light text-center d-flex align-items-center flex-column' style={{ padding: '100px 0' }}>
                    <h3>Built with Bootstrap 5</h3>
                    <p className='col-6' style={{ color: "rgba(255, 255, 255, 0.5)" }}>Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now, simply download the template on the preview page. The theme is open source, and you can use it for any purpose, personal or commercial.</p>
                </div>
                <img src="../../public/imges/ipad.png" className='w-100' alt="" />
            </div>
            <div className='container pb-5 mb-5' style={{ backgroundColor: '#fff' }}>
                <div className='row m-0 justify-content-center' style={{ padding: '10rem 0 0' }}>
                    <div className='col-12 row justify-content-center mb-5'>
                        <div className='col-md-12 col-lg-7 p-0'>
                            <img src="../../public/imges/bg-masthead.jpg" className='w-100' alt="" />
                        </div>
                        <div className='col-md-12 col-lg-5 text-center align-self-center pt-5 border-md-none'>
                            <h4 style={{ color: '#212529' }}>Shoreline</h4>
                            <p style={{ color: "rgba(0, 0, 0, 0.5)" }}>Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!</p>
                        </div>
                    </div>
                    <div className='col-12 row mb-5 mb-lg-0'>
                        <div className='col-lg-6 col-md-12 p-0'>
                            <img src="../../public/imges/demo-image-01.jpg" className='w-100' alt="" />
                        </div>
                        <div className='text-center pt-5 pb-5 col-lg-6 col-md-12 d-flex justify-content-center flex-column position-relative' style={{ backgroundColor: 'black', top: '-1px' }}>
                            <h4 className='text-light'>Misty</h4>
                            <p style={{ color: "rgba(255, 255, 255, 0.5)" }}>An example of where you can put an image of a project, or anything else, along with a description.</p>
                        </div>
                    </div>
                    <div className='col-12 row' style={{ flexDirection: 'row-reverse' }}>
                        <div className='col-lg-6 col-md-12 p-0'>
                            <img src="../../public/imges/demo-image-02.jpg" className='w-100' alt="" />
                        </div>
                        <div className='text-center pt-5 pb-5 col-lg-6 col-md-12 d-flex justify-content-center flex-column position-relative' style={{ backgroundColor: 'black', top: '-1px' }}>
                            <h4 className='text-light'>Mountains</h4>
                            <p style={{ color: "rgba(255, 255, 255, 0.5)" }}>Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='position-relative nnn'>
                <div className='w-100'>
                    <h3 className='text-center '>Subscribe to receive updates!</h3>
                    <form action="" className='row m-0 justify-content-center gap-5 mt-5'>
                        <div className='col-10 col-md-6 col-lg-5'>
                            <input type="text" className='form-control' placeholder='ENTER EMAIL ADDRESS...' />
                        </div>
                        <button className='btn' style={{ backgroundColor: '#64a19d', opacity: '0.8', width: '140px' }}>NOTIFY ME</button>
                    </form>
                </div>
            </div>
            <div className='pt-5 row m-0 gap-5 justify-content-center position-relative ' style={{ backgroundColor: 'black', top: '-1px' }}>
                <div className='card col-lg-3 col-md-5 col-8' style={{ borderBottom: "0.25rem solid #64a19d" }}>
                    <div className='card-body'>
                        <h4 style={{ letterSpacing: '0.1rem', fontSize: '0.8rem' }} className='text-center fw-bold'>ADDRESS</h4>
                        <hr className='w-25 mx-auto my-5' />
                        <p style={{ color: 'rgba(0 , 0 , 0 , 0.5)' }} className='text-center'>4522 Saber Street, Qalubiya</p>
                    </div>
                </div>
                <div className='card col-lg-3 col-md-5 col-8' style={{ borderBottom: "0.25rem solid #64a19d" }}>
                    <div className='card-body'>
                        <h4 style={{ letterSpacing: '0.1rem', fontSize: '0.8rem' }} className='text-center fw-bold'>EMAIL</h4>
                        <hr className='w-25 mx-auto my-5' />
                        <p style={{ color: 'rgba(0 , 0 , 0 , 0.5)' }} className='text-center'>abdallah@gmail.com</p>
                    </div>
                </div>
                <div className='card col-lg-3 col-md-5 col-8' style={{ borderBottom: "0.25rem solid #64a19d" }}>
                    <div className='card-body'>
                        <h4 style={{ letterSpacing: '0.1rem', fontSize: '0.8rem' }} className='text-center fw-bold'>PHONE</h4>
                        <hr className='w-25 mx-auto my-5' />
                        <p style={{ color: 'rgba(0 , 0 , 0 , 0.5)' }} className='text-center'>010 904 132 05</p>
                    </div>
                </div>
                <div className='py-5 text-center mt-5'>
                    <p style={{ color: 'rgba(255 , 255 , 255 , 0.5)' }}>Copyright © Your Website 2022</p>
                </div>
            </div>
        </div>
    )
}

export default Home