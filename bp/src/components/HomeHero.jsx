import React from 'react'

function HomeHero() {
    return (
        <>
        {/* Main Section */}
        <section id="hero" class="s-hero target-section" data-parallax="scroll" data-image-src="" >
            <div class="row hero-content">

            <div class="column large-full">
                <div className="wrapper">
                    <div className="scroll-text">
                        <h1> FegoHuncho </h1>
                        <p> Scroll Effect</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis similique debitis neque labore placeat aspernatur possimus quae, architecto animi natus.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas recusandae hic necessitatibus eaque modi adipisci autem natus eligendi, aut cum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, error tenetur. Explicabo, dolorem blanditiis? Et delectus adipisci rem aliquam voluptatum?</p>
                
                    </div>
                </div>
                
        {/* Links */}
    <ul class="hero-social">
        <li>
            <a href="#0" title="">Twitter</a>
        </li>
        <li>
            <a href="#0" title="">Behance</a>
        </li>
        <li>
            <a href="#0" title="">Dribbble</a>
        </li>
    </ul> 
</div>
</div> 

<div class="hero-scroll">
            <a href="#about" class="scroll-link smoothscroll">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 24l-8-9h6v-15h4v15h6z"/></svg>
            </a>
        </div> 
        </section>
        </>

            
    )
}

export default HomeHero
