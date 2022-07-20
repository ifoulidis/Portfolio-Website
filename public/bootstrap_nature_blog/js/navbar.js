const template = document.createElement('template');

template.innerHTML = `
  <!-- Start -->
  <nav class="navbar navbar-expand-sm bg-light navbar-light">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about.html">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact.html">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
   <!-- End -->
`;

document.body.appendChild(template.content)