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
     <div class="btn-bar">
     <nav>
        <a class="btn-link" href="index.html">Home</a> |
        <a class="btn-link" href="html/tech_index.html">Tech</a> |
        <a class="btn-link" href="html/wheels_index.html">Wheels</a> |
        <a class="btn-link" href="html/nz_index.html">NZ</a> |
        <a class="btn-link" href="html/random_index.html">Random</a> 
     </nav>
     </div>
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
            <div class="btn-bar">
            <nav>
                <a class="btn-link" href="index.html">Home</a> |
                <a class="btn-link" href="html/tech_index.html">Tech</a> |
                <a class="btn-link" href="html/wheels_index.html">Wheels</a> |
                <a class="btn-link" href="html/nz_index.html">NZ</a> |
                <a class="btn-link" href="html/random_index.html">Random</a>
            </nav>
            </div>
            <h5>Author: TC  |  © 2026 <br> <a href="mailto:meathorse@hotmail.com">Contact</a></h5>
            `

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

customElements.define('global-header', globalheader)
customElements.define('global-nav', globalnav)
customElements.define('global-footer', globalfooter)
