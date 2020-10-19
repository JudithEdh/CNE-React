import React from 'react'
import Footer from './Footer';

const Standard = () => {
    return(
        <div>
            <header className="navbar">
                <p>Well well well</p>
            </header>
            <nav>
                    <ul>
                        <li>Main</li>
                        <li>Home</li>
                        <li>About</li>
                    </ul>
                </nav>
            <main>
                <section>
                    <article>
                        <p>
                            Something important here...
                        </p>
                    </article>
                </section>
            </main>
           <Footer/>
        </div>
    );
}

export default Standard; 

// Convert this code into smaller components
