var render = function (template, selector) {
    var node = document.querySelector(selector);
    if (!node) return;
    node.innerHTML = template;
};


const getHeader = (path) => (
    `<section class="top-image">
        <img src="/assets/lotus-test-3-blanc.png" />
    </section>
    <section class="title-text">
        Kung fu Sao Lim Hood Khar Pai Göteborg
    </section>
    <section class="menu-container">
        <section class="menu-icon active">
            <img src="/assets/menu.png" onclick="toggleMenu()"/>
        </section>
        <section class="menu-content">
            <a class="${ path == "/saolim"? "active" : "" }" href="/saolim.html">Presentation of the style</a>
            <a class="${ path == "/lessons"? "active" : "" }" href="/lessons.html">Lessons</a>
            <a class="${ path == "/teacher"? "active" : "" }" href="/teacher.html">Teacher</a>
            <a class="${ path == "/schedules"? "active" : "" }" href="/schedules.html">Schedules and location</a>
            <a class="${ path == "/inscription"? "active" : "" }" href="/inscription.html">Prices and inscription</a>
        </section>
    </section>`
);

const loadPage = () => {
    render(getHeader(document.location.pathname), "header");
}

const toggleMenu = () => {
    console.log(document.querySelector('.menu-content').classList);
    document.querySelector('.menu-icon').classList.toggle('active');
    document.querySelector('.menu-content').classList.toggle('active');
}