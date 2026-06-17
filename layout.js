const base = document.createElement("base");
base.href = "/thecan/";
document.head.appendChild(base);

class globalheader extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
<div class="brand">
    <div class="brand-logo">
        <a href="index.html"><img src="/thecan/can.png"></a>
    </div>

    <div class="brand-text">
        <h1>TheCan</h1>
        <h2>The empty can rattles the most</h2>
    </div>
</div>`;
            
    }
}

class globalnav extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
     <nav>
        <a href="index.html">Home</a> |
        <a href="html/tech_index.html">Technology</a> |
        <a href="html/linux_index.html">Linux</a> |
        <a href="html/sci_index.html">Science</a> |
        <a href="html/autos_index.html">Autos</a> 
        
    </nav>
                `
    // Highlight active link
        const links = this.querySelectorAll("a");
        const current = window.location.pathname;
        const currentPage = current.split("/").pop();

        links.forEach(link => {
            const linkPage = link.getAttribute("href").split("/").pop();
            if (currentPage === linkPage) {
                link.classList.add("active");
            }
        });
    }
}

class globalfooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <nav>
                <a href="index.html">Home</a>
                <a href="html/tech_index.html">Technology</a>
                <a href="html/linux_index.html">Linux</a>
                <a href="html/sci_index.html">Science</a>
                <a href="html/autos_index.html">Autos</a> 
            </nav>
            <h5>Author: TC <br> © 2026 <br> <a href="mailto:meathorse@hotmail.com">Contact</a></h5>`
    }
}

customElements.define('global-header', globalheader)
customElements.define('global-nav', globalnav)
customElements.define('global-footer', globalfooter)
