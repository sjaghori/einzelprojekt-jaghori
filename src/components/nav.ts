

const navTemplate = document.createElement('template');

navTemplate.innerHTML = `
<style>
nav {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:  #0a0a23;
}

ul {
  padding: 0;
}

ul li {
  list-style: none;
  display: inline;
}

a {
  font-weight: 700;
  margin: 0 25px;
  color: #fff;
  text-decoration: none;
}

a:hover {
  padding-bottom: 5px;
  box-shadow: inset 0 -2px 0 0 #fff;
}
</style>
<header>
<nav>
  <ul>
    <li><a href="/routes/home.html">Home</a></li>
    <li><a href="/routes/about.html">About</a></li>
    <li><a href="/routes/contents.html">Contents</a></li>
  </ul>
</nav>
</header>
`;

class Header extends HTMLElement {
constructor() {
super();
}

connectedCallback() {
const shadowRoot = this.attachShadow({ mode: 'closed' });

shadowRoot.appendChild(navTemplate.content);
}
}

customElements.define('nav-component', Header);

export {}