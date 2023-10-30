import React from 'react';

function Home() {
    return (
        <div class="container-fluid text-center start-here">
            <div class="row align-items-center">
                <div class="col-sm-4 mt-0 first-head" style={{ marginTop: "-50px" }}>
                    <h1 id="my-header">Hi, I'm </h1>
                    <h3 class="my-name">Jenise Lukhele </h3>
                    <h2 id="my-header">Frontend Developer</h2>
                    <button type="button" class="btn btn-primary mt-4 " id="my-header">
                        <i class="fa-sharp fa-regular fa-circle-down" style={{ color: "#fff" }}></i>
                        <a href="Hlobisile Lukhele resume (10).pdf" download="HlobisileLukhele Resume" target="_blank">
                            Resume
                        </a>
                    </button>
                    <button type="button" class="btn btn-secondary mt-4  " id="my-header">
                        Get in Touch
                    </button>
                </div>
                <div class="col-sm-7 offset-sm-1 ">
                    <img src="images/Illustration.PNG" class="img-fluid illustration" alt="illustration computer with code" />
                </div>
            </div>

            {/* Social Links */}
            <div class="container-fluid text-center mt-4 social-links">
                <a href="https://www.linkedin.com/in/hlobisile-lukhele-8812b9183/" target="_blank">
                    <i class="fa-brands brands-one  fa-linkedin-in fa-xl" style={{ color: "#d76f37" }}></i>
                </a>
                <a href="https://github.com/HlobisileLukhele" target="_blank">
                    <i class="fa-brands  fa-brands-one fa-github fa-xl" style={{ color: "#d76f37" }}></i>
                </a>
                <a href="https://www.n.thwala03@gmail.com/" target="_blank">
                    <i class="fa-brands brands-one fa-solid fa-at fa-xl" style={{ color: "#d76f37" }}></i>
                </a>
            </div>
        </div>
    );
}


 export default Home;