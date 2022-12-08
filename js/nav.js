document.querySelector('header').innerHTML = `
    <nav class="flex" id="nav-bar">
        <div class="nav-el flex" id="logo-nav">
            <a href="#"
            ><img
                class="logo-nav-link"
                id="header-logo"
                src="../img/logo.png"
                alt="Logo iNesflix"
                title="Logo iNesflix"
            /></a>
        </div>

        <div class="nav-el flex" id="home-nav">
            <div class="flex home-nav-link nav-link cursor-pointer">
            <img
                class="nav-logo"
                id="home-nav-logo"
                src="../img/home-nav.png"
                alt="Accueil"
                title="Accueil"
            />
            <p class="nav-text" id="home-nav-text">Accueil</p>
            </div>
        </div>

        <div class="nav-el flex" id="search-nav">
            <div class="flex search-nav-link nav-link cursor-pointer">
            <img
                class="nav-logo"
                id="search-nav-logo"
                src="../img/search-nav.png"
                alt="Recherche"
                title="Recherche"
            />
            <p class="nav-text" id="search-nav-text">Recherche</p>
            </div>
        </div>

        <div class="nav-el flex" id="fav-nav">
            <div class="flex fav-nav-link nav-link cursor-pointer">
            <img
                class="nav-logo"
                d="fav-nav-logo"
                src="../img/fav-nav.png"
                alt="Favoris"
                title="Favoris"
            />
            <p class="nav-text" id="fav-nav-text">Favoris</p>
            </div>
        </div>
    </nav>
`



const logoNavLink = document.querySelector('.logo-nav-link')
const homeNavLink = document.querySelector('.home-nav-link')
const searchNavLink = document.querySelector('.search-nav-link')
const favNavLink = document.querySelector('.fav-nav-link')



logoNavLink.addEventListener('click', function () {
    window.open('../html/home.html', '_self')
})

homeNavLink.addEventListener('click', function () {
    window.open('../html/home.html', '_self')
})

searchNavLink.addEventListener('click', function () {
    window.open('../html/search.html', '_self')
})

favNavLink.addEventListener('click', function () {
    window.open('../html/fav.html', '_self')
})