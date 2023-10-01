const navbar_text = ["@rajariandhana", "Unity", "Gallery", "Merch", "Cats"];
const navbar_links = ["index.html", "unity.html", "gallery.html", "merch.html", "cats.html"];

const container = document.querySelector(".nav-bar");

function GenerateNavBar()
{
    const logo = document.createElement("a");
    logo.classList.add("nav-logo");
    logo.href = navbar_links[0];
    logo.textContent = navbar_text[0];

    const menu = document.createElement("ul");
    menu.classList.add("nav-menu");
    
    for (let i = 1; i < navbar_text.length; i++) {
        const itemContainer = document.createElement("li");
        const link = document.createElement("a");
        link.href = navbar_links[i];
        link.classList.add("nav-item");
        link.textContent = navbar_text[i];
        
        itemContainer.appendChild(link);
        menu.appendChild(itemContainer);
    }

    const hamburger = document.createElement("div");
    hamburger.classList.add("hamburger");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const span3 = document.createElement("span");
    span1.classList.add("bar");
    span2.classList.add("bar");
    span3.classList.add("bar");
    hamburger.appendChild(span1);
    hamburger.appendChild(span2);
    hamburger.appendChild(span3);

    container.append(logo);
    container.append(menu);
    container.append(hamburger);

    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", ()=>
    {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
    )

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>
    {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
    ))
}

GenerateNavBar();