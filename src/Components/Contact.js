import React from 'react'

function Contact() {
    return (
        <>
        <div id="contact"></div>
        <div style={{textAlign:'center', marginTop:'5%'}}>
            <h1 id="contact" style={{border:'1px solid #DBA601', width:'20%', marginLeft:'40%', borderRadius:'10px', backgroundColor:'#DBA601'}} >Contact Us</h1>
        </div>

        <div className="row mt-3">
            <div className="offset-md-2 col-md-8" style={{backgroundColor:'white', borderRadius:'10px'}}>
            <h5 className="mt-3">Hello! We’d like to make sure that your contact submission/feedback is directed to the appropriate team at this Blog.
             Please read through the following carefully before submitting below:</h5>
             <p>We can only address issues related to this blog . We are not affiliated with the sites we write about.
              For more information on advertising, please see our Advertising Information Page first.
              If you would like to use our blog's Logo or any content on your site, 
              please contact us via Customer Support so that we may look into your request. Please be as detailed as possible.</p>
              <p>Please follow the guidelines below to reach the BLOG team:
                Please direct mail to the following addresses:</p>
          <h5>News Submissions (news@...)
          </h5>
          <p>Have a tip, update, or press release? (This is the only BLOG address that reaches our editorial team.)</p>
          <h5>Advertising and Sponsorship Opportunities (advertising@...)
          </h5>
          <p>See here for more information
          </p>
          <h5>Customer Support, Feedback, and Suggestions (support@...)
          </h5>
          <p>Do you see something that we can improve? Have you experienced a technical issue that we need to be aware of?
          </p>
          <h5>Events and Calendar (events@...)
          </h5>
          <p>Be a part of BLOG’s events. Just ask — we might be looking for corporate sponsorship opportunities.
          </p>
          <h5>Business Inquiries and Partnerships (bizdev@...)
          </h5>
          <p>BLOG is always looking for new ideas and partnerships.
          </p>
          <h5>Reprints or Permission to use BLOG articles (licensing@...)
          </h5>
          <p>If you would like to reprint a BLOG article or use it as promotion on your own site contact us here.
          </p>
          <h5>Press Inquiries (press@...)
          </h5>
          <p>Our editors and reporters are regularly featured in the media as experts. Contact us to get their advice or schedule an interview..
          </p>
          <h5>Other Inquiries (contact@...)
          </h5>
          <p>If something didn’t quite fit into the above, contact us here. Please do not send press releases or news requests to this address (Note: We can only address issues related to MASHABLE.COM. We are not affiliated with the sites we blog about).

          </p>


            </div>
        </div>
        
        </>
)
}

export default Contact
