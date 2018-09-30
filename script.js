var render = function (template, selector) {
    var node = document.querySelector(selector);
    if (!node) return;
    node.innerHTML = template;
};


const getHeader = (path) => (
    `<section class="top-image">
        <a href="/"><img src="/assets/lotus-test-3-blanc.png" /></a>
    </section>
    <section class="title-text">
        Kung fu Sao Lim Hood Khar Pai Göteborg
    </section>
    <section class="menu-container">
        <section class="menu-icon active">
            <img src="/assets/menu.png" onclick="toggleMenu()"/>
        </section>
        <section class="menu-content">
            <a class="${ path == "/saolim"? "active" : "" }" href="/saolim">Presentation of the style</a>
            <a class="${ path == "/lessons"? "active" : "" }" href="/lessons">Lessons</a>
            <a class="${ path == "/teacher"? "active" : "" }" href="/teacher">Teacher</a>
            <a class="${ path == "/schedules"? "active" : "" }" href="/schedules">Schedules and location</a>
            <a class="${ path == "/inscription"? "active" : "" }" href="/inscription">Prices and inscription</a>
        </section>
    </section>`
);

const loadPage = () => {
    render(getHeader(document.location.pathname), "header");
}

const toggleMenu = () => {
    document.querySelector('.menu-icon').classList.toggle('active');
    document.querySelector('.menu-content').classList.toggle('active');
}
