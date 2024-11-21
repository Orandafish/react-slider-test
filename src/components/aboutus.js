const AboutUs = () => {
    document.body.style.overflow = 'scroll';
    return (
        <div className="aboutus-main-container">
            <div className="aboutus-container">
                <h1>Meet The Team</h1>
                <div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="card-main-container">
                    <div class="card">
                        <img src="https://avatar.iran.liara.run/public/42" alt="Avatar" style={{ width: '100%' }}></img>
                        <div class="card-container">
                            <h4><b>John Doe</b></h4>
                            <p>Art Director</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://avatar.iran.liara.run/public/53" alt="Avatar" style={{ width: '100%' }}></img>
                        <div class="card-container">
                            <h4><b>Angela Angel</b></h4>
                            <p>Creative Director</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://avatar.iran.liara.run/public/40" alt="Avatar" style={{ width: '100%' }}></img>
                        <div class="card-container">
                            <h4><b>Ricardo Milos</b></h4>
                            <p>Photographer/ Videographer</p>
                        </div>
                    </div>
                </div>
                <h1>Mission and Vision</h1>
                <div>
                    <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                    as opposed to using 'Content here, content here', making it look like readable English. 
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
                    and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, 
                    sometimes on purpose (injected humour and the like).
                    </p>
                </div>
                <footer>
                <p style={{color: 'white'}}>© 2024 Company Name. All Rights Reserved.</p>
                <a href="#">Terms of Service/ ToS</a>
            </footer>
            </div>
            
        </div>
    );
}
export default AboutUs;