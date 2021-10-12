import React from 'react'

function About() {
    return (
        <>
        <div id="about"></div>
        <div style={{textAlign:'center', marginTop:'5%'}}>
            <h1 style={{border:'1px solid #DBA601', width:'20%', marginLeft:'40%', borderRadius:'10px', backgroundColor:'#DBA601'}} >About Us</h1>
        </div>
        <div className="row mt-5">
                <div className="offset-md-1 col-md-4">
                    <img alt="about us" src="https://www.kaspersky.co.za/content/en-za/images/repository/isc/2020/what-is-a-vpn.jpg" style={{borderRadius:'10px'}} width="100%"/>
                </div>          
                <div className="col-md-4 offset-md-2">
                    <img alt="about us" src="https://i.pcmag.com/imagery/roundups/047UeKYFrRZKMtW9FZhggG1-12..1569492679.jpg" style={{borderRadius:'10px'}} width="100%" height="101%" />
                </div>          
        </div>
        <div className="row mt-2">
            <div className="offset-md-1 col-md-4">
                <p style={{border:'1px solid #22222', backgroundColor:'#DBA601', padding:'1%', borderRadius:'10px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and 
                    more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className="col-md-4 offset-md-2">
                <p style={{border:'1px solid #22222', backgroundColor:'#DBA601', padding:'1%', borderRadius:'10px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and 
                    more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
        <div className="row mt-3">
            <div className="offset-md-4 col-md-4">
            <img alt="about us" src="https://www.nerdynaut.com/wp-content/uploads/2021/08/Need-a-VPN-Here-s-How-to-Choose-One.png" style={{borderRadius:'10px'}} width="100%" height="105%"/>
            </div>
        </div>
        <div className="row mt-4">
            <div className="offset-md-4 col-md-4">
            <p style={{border:'1px solid #22222', backgroundColor:'#DBA601', padding:'1%', borderRadius:'10px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and 
                    more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
        </>
    )
}

export default About
