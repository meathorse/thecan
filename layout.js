class globalheader extends HTMLElement {
    constructor() {
        super();

        let basePath;
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    // Local path
    basePath = '/thecan/'; 
} else {
    // Web path
    basePath = 'https://meathorse.github.io/thecan/';
}
        // // Inject <base> ONLY on GitHub Pages
        // if (location.hostname === "https://meathorse.github.io") {
        //     const base = document.createElement("base");
        //     base.href = "/thecan/";
        //     document.head.appendChild(base);
        // }
    }

    connectedCallback() {
        this.innerHTML = `
        <h1>TheCan</h1>
        <h2>The empty can rattles the most</h2>`;
    }
}

class globalnav extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
     <nav>
        <a href="/index.html">Home</a> |
        <a href="/html/tech_index.html">Technology</a> |
        <a href="/html/linux_index.html">Linux</a> |
        <a href="/html/sci_index.html">Science</a> |
        <a href="/html/autos_index.html">Autos</a> 
        
    </nav>
                `
    }
}

class globalfooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <h5>---  Author: TC  ---  © 2026  ---  <a href="mailto:meathorse@hotmail.com">Contact</a>  ---</h5>
        `
    }
}

customElements.define('global-header', globalheader)
customElements.define('global-nav', globalnav)
customElements.define('global-footer', globalfooter)