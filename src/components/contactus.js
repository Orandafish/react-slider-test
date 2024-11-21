const ContactUs = () => {
    return (
        <div className="contactus-container">
            <div className="contactus-header">
                <h1>Choose how you want to connect with us:</h1>
            </div>
            <div className="card-main-container">
                <div class="card" style={{height: '370px'}}>
                    <img src="https://avatar.iran.liara.run/public/42" alt="Avatar" style={{ width: '30%' }}></img>
                    <div class="card-container">
                        <h1><b>Talk to a sales member of our team</b></h1>
                       
                    </div>
                </div>
                <div class="card" style={{height: '370px'}}>
                    <img src="https://avatar.iran.liara.run/public/boy?username=Ash" alt="Avatar" style={{ width: '30%' }}></img>
                    <div class="card-container">
                    <h1><b>Social media links, and contact details</b></h1>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <br/>
            <br/>
            <div>
            </div>

        </div>
    );
}
export default ContactUs;