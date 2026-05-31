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
        <a href="/index.html"><img src="/can.png" style="width:64px; height:90px;"></a> |
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