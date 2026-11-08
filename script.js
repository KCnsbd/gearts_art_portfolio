const artworks = [
    { src: "assets/act1.jpg", title: "Act 1" },
    { src: "assets/act2.png", title: "Act 2" },
    { src: "assets/act3.jpg", title: "Act 3" },
    { src: "assets/act4.jpg", title: "Act 4" }
];

const gallery = document.querySelector(".artwork");

artworks.forEach(({ src, title }) => {
    const card = document.createElement("figure");
    card.className = "artwork-card";

    const image = document.createElement("img");
    image.src = src;
    image.alt = title;
    image.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.textContent = title;

    card.append(image, caption);
    gallery.append(card);
});