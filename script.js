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
    <section class="menu">
        <a href="/saolim.html">Presentation of the style</a>
        <a href="/lessons.html">Lessons</a>
        <a class="${ path == "/teacher"? "active" : "" }" href="/teacher.html">Teacher</a>
        <a href="/schedules.html">Schedules and location</a>
        <a href="/inscription.html">Prices and inscription</a>
    </section>`
);

const loadPage = () => {
    render(getHeader(document.location.pathname), "header");
}