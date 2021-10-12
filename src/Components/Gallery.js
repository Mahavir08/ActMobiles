import React from 'react'

function Gallery() {
    return (
        <>
        <div id="gallery"></div>
        <div style={{textAlign:'center', marginTop:'5%'}}>
            <h1 id="gallery" style={{border:'1px solid #DBA601', width:'20%', marginLeft:'40%', borderRadius:'10px', backgroundColor:'#DBA601'}} >Gallery</h1>
        </div>
        <div className="row mt-5">
            <div className="offset-md-2 col-md-8">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://www.howtogeek.com/wp-content/uploads/2018/04/vpn-in-use-on-a-laptop-computer.jpeg?height=200p&trim=2,2,2,2" width="100%" alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://bg.systweak.com/blogs/wp-content/uploads/2021/03/How-to-Use-a-VPN-and-Why-You-Need-One.jpg" width="100%" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://i.pcmag.com/imagery/articles/05ffOhJd8MdcGRQsjAGSpiS-3..1569488783.jpg" width="100%" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
            </div>
        </div>
        </>
    )
}

export default Gallery
