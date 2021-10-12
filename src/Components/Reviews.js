import React from 'react'

function Reviews() {
    return (
        <>
        <div id="reviews"></div>
        <div style={{textAlign:'center', marginTop:'5%'}}>
            <h1 id="reviews" style={{border:'1px solid #DBA601', width:'20%', marginLeft:'40%', borderRadius:'10px', backgroundColor:'#DBA601'}} >Reviews</h1>
        </div>

        <div className="row mt-3">
            <div className="offset-md-2 col-md-8"  style={{backgroundColor:'white', borderRadius:'10px'}}>
                <h3>Alex Fernandes -- </h3>
                <p style={{marginRight:'5%', marginLeft:'5%'}}>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                    unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                    essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>

                    <h3>Brad Milner -- </h3>
                <p style={{marginRight:'5%', marginLeft:'5%'}}>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                    unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                    essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
            </div>           
        </div>
       </>
    )
}

export default Reviews
