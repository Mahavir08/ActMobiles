import React, { useEffect } from 'react'
var x = Date()
var z = x.slice(16, 18)
var y = Number(z);

function Home() {

    useEffect(() => {
        document.getElementById('clickme').click();
    }, [])

    setTimeout(() => {
        document.getElementById('close').click();
    }, 10000)

    return (
        <>


            <div>
                <button id="clickme" type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    .
                </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document" >
                        <div className="modal-content" style={{ backgroundColor: "#222222" }}>
                            <div className="modal-header" >
                                <h5 className="modal-title" id="exampleModalLabel" style={{ color: '#DBA601', marginLeft: '30%' }} >{y >= 0 && y < 12 ? 'Good Morning,' : y>=12 && y<16 ? 'Good Afternoon,' : y>=16 && y<20 ? 'Good Evening,' : y>=20 && y<=23 ? 'Good Night,' : '' } User</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ marginTop: '5%' }} >
                <div className="offset-lg-1">
                </div>
                <div className="col-lg-4">
                    <img alt="Vpn Owl" style={{ borderRadius: '10px' }} src="https://www.kindpng.com/picc/m/244-2444620_yellow-owl-arts-clipart-astonishing-monthly-sketchbook-cartoon.png" width="80%" />
                </div>
                <div className="col-lg-6" style={{ border: '1px solid black', backgroundColor: '#DBA601', padding: '2%', borderRadius: '10px' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                    <br /><br />
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                    and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                    Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </div>
            </div>
            <hr style={{ color: '#DBA601' }} />
            <div>
            </div>
        </>
    )
}

export default Home
