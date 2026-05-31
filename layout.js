class globalheader extends HTMLElement {
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
        <a href="/thecan/index.html"><img src="/thecan/can.png" style="width:64px; height:90px;"></a> |
        <a href="/thecan/html/tech_index.html">Technology</a> |
        <a href="/thecan/html/linux_index.html">Linux</a> |
        <a href="/thecan/html/sci_index.html">Science</a> |
        <a href="/thecan/html/autos_index.html">Autos</a> 
        
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