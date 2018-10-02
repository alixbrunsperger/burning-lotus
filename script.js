var render = function (template, selector) {
    var node = document.querySelector(selector);
    if (!node) return;
    node.innerHTML = template;
};


const getHeader = (path) => (
    `<div class="top-image">
        <a href="/"><img alt="logo burning lotus" src="/assets/lotus-test-3-blanc.png" /></a>
    </div>
    <div class="title-text">
        Kung fu Sao Lim Hood Khar Pai Göteborg
    </div>
    <div class="menu-container">
        <div class="menu-icon active">
            <img alt="menu icon" src="/assets/menu.png" onclick="toggleMenu()"/>
        </div>
        <div class="menu-content">
            <a class="${ path == "/saolim.html"? "active" : "" }" href="/saolim.html">Presentation of the style</a>
            <a class="${ path == "/lessons.html"? "active" : "" }" href="/lessons.html">Lessons</a>
            <a class="${ path == "/teacher.html"? "active" : "" }" href="/teacher.html">Teacher</a>
            <a class="${ path == "/schedules.html"? "active" : "" }" href="/schedules.html">Schedules and location</a>
            <a class="${ path == "/inscription.html"? "active" : "" }" href="/inscription.html">Prices and inscription</a>
        </div>
    </div>`
);

const getFooter = () => (
    `<span>Contact :  Alix Brunsperger</span><span> - 073 421 66 34</span><span> - alixpro[at]live.fr</span>`
);

const loadPage = () => {
    render(getHeader(document.location.pathname), "header");
    render(getFooter(), "footer");
}

const toggleMenu = () => {
    document.querySelector('.menu-icon').classList.toggle('active');
    document.querySelector('.menu-content').classList.toggle('active');
}
