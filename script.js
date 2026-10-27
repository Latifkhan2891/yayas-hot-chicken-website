document.addEventListener("DOMContentLoaded", function () {

    renderMenu();
    renderCatering();
    renderRestaurantInfo();
    setupMobileMenu();

    document.getElementById("currentYear").textContent =
        new Date().getFullYear();

});


function renderMenu() {

    const container =
        document.getElementById("menuContainer");

    container.innerHTML = "";

    restaurantData.menu.forEach(category => {

        const section =
            document.createElement("div");

        section.className = "menu-category";


        const title =
            document.createElement("div");

        title.className = "category-title";

        title.innerHTML =
            `<h3>${category.category}</h3>`;

        section.appendChild(title);


        const grid =
            document.createElement("div");

        grid.className = "menu-grid";


        category.items.forEach(item => {

            const card =
                document.createElement("article");

            card.className = "menu-item";


            const priceHTML =
                item.price
                    ? `<span class="menu-price">${item.price}</span>`
                    : "";


            const descriptionHTML =
                item.description
                    ? `<p class="menu-description">${item.description}</p>`
                    : "";


            card.innerHTML = `

                <div class="menu-item-top">

                    <h4>${item.name}</h4>

                    ${priceHTML}

                </div>

                ${descriptionHTML}

            `;


            grid.appendChild(card);

        });


        section.appendChild(grid);

        container.appendChild(section);

    });

}


function renderCatering() {

    const container =
        document.getElementById("cateringItems");

    container.className = "catering-list";


    restaurantData.catering.forEach(item => {

        const element =
            document.createElement("div");

        element.className = "catering-item";

        element.textContent = item.name;

        container.appendChild(element);

    });

}


function renderRestaurantInfo() {

    const address =
        restaurantData.address;


    document.getElementById("addressText")
        .textContent = address;


    if (restaurantData.phone) {

        document.getElementById("phoneText")
            .innerHTML =
            `<a href="tel:${restaurantData.phone}">
                ${restaurantData.phone}
             </a>`;

    }


    const hoursContainer =
        document.getElementById("hoursContainer");


    restaurantData.hours.forEach(hours => {

        const row =
            document.createElement("div");

        row.className = "hours-row";


        row.innerHTML = `

            <span>${hours.day}</span>

            <span>${hours.time}</span>

        `;


        hoursContainer.appendChild(row);

    });


    const mapURL =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(address);


    document.getElementById("directionsButton")
        .href = mapURL;


    document.getElementById("mapLink")
        .href = mapURL;

}


function setupMobileMenu() {

    const button =
        document.getElementById("menuButton");

    const navigation =
        document.getElementById("navLinks");


    button.addEventListener("click", function () {

        navigation.classList.toggle("open");

    });


    const links =
        navigation.querySelectorAll("a");


    links.forEach(link => {

        link.addEventListener("click", function () {

            navigation.classList.remove("open");

        });

    });

}