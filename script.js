const artworks = [
    {
        id: "act-1",
        src: "assets/act1.jpg",
        title: "Act 1",
        description: "An artwork from Act 1 of my GEARTS+ portfolio. The appendix shows the full artwork.",
        appendixSrc: "assets/act1.jpg",
        appendixDescription: "Full artwork view."
    },
    {
        id: "act-2",
        src: "assets/act2.png",
        title: "Act 2",
        description: "An artwork from Act 2 of my GEARTS+ portfolio. The appendix shows the full artwork.",
        appendixSrc: "assets/act2.png",
        appendixDescription: "Full artwork view."
    },
    {
        id: "act-3",
        src: "assets/act3.jpg",
        title: "Act 3",
        description: "An artwork from Act 3 of my GEARTS+ portfolio. The appendix shows the full artwork.",
        appendixSrc: "assets/act3.jpg",
        appendixDescription: "Full artwork view."
    },
    {
        id: "act-4",
        src: "assets/act4.jpg",
        title: "Act 4",
        description: "An artwork from Act 4 of my GEARTS+ portfolio. The appendix shows the full artwork.",
        appendixSrc: "assets/act4.jpg",
        appendixDescription: "Full artwork view."
    }
];

const gallery = document.querySelector(".artwork");
const artModal = document.getElementById("art-modal");
const appendixModal = document.getElementById("appendix-modal");
const modalContent = document.getElementById("modal-content");
let activeArtwork = null;
let lastFocusedElement = null;

function openArtwork(id, trigger) {
    const artwork = artworks.find((item) => item.id === id);
    if (!artwork) return;

    activeArtwork = artwork;
    lastFocusedElement = trigger || document.activeElement;
    modalContent.innerHTML = `
        <button class="modal-close" type="button" aria-label="Close artwork details">×</button>
        <img class="modal-artwork" src="${artwork.src}" alt="${artwork.title}">
        <div class="modal-copy">
            <p class="eyebrow">GEARTS+ ARTWORK</p>
            <h2 id="modal-title">${artwork.title}</h2>
            <p>${artwork.description}</p>
            <button class="appendix-button" type="button">
                <span aria-hidden="true">▧</span> View Appendix
            </button>
        </div>
    `;

    artModal.hidden = false;
    document.body.classList.add("modal-active");
    artModal.querySelector(".modal-close").focus();
}

function closeArtwork() {
    artModal.hidden = true;
    if (appendixModal.hidden) document.body.classList.remove("modal-active");
    lastFocusedElement?.focus();
}

function openAppendix() {
    if (!activeArtwork) return;
    document.getElementById("appendix-title").textContent = activeArtwork.title;
    const image = document.getElementById("appendix-image");
    image.src = activeArtwork.appendixSrc || activeArtwork.src;
    image.alt = `Appendix image for ${activeArtwork.title}`;
    document.getElementById("appendix-description").textContent =
        activeArtwork.appendixDescription || "Full artwork view.";
    appendixModal.hidden = false;
    appendixModal.querySelector(".modal-close").focus();
}

function closeAppendix() {
    appendixModal.hidden = true;
    if (artModal.hidden) document.body.classList.remove("modal-active");
    else artModal.querySelector(".appendix-button")?.focus();
}

if (gallery) {
    artworks.forEach(({ id, src, title }) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "artwork-card";
        card.setAttribute("aria-label", `View ${title} details`);
        card.innerHTML = `
            <img src="${src}" alt="" loading="lazy">
            <span class="artwork-card-caption">${title}</span>
        `;
        card.addEventListener("click", () => openArtwork(id, card));
        gallery.append(card);
    });
}

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.getElementById("primary-navigation");

menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    navigation?.classList.toggle("is-open", !isOpen);
});

navigation?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        menuToggle?.setAttribute("aria-expanded", "false");
        menuToggle?.setAttribute("aria-label", "Open navigation menu");
        navigation.classList.remove("is-open");
    });
});

artModal?.addEventListener("click", (event) => {
    if (event.target === artModal || event.target.closest(".modal-close")) closeArtwork();
    if (event.target.closest(".appendix-button")) openAppendix();
});

appendixModal?.addEventListener("click", (event) => {
    if (event.target === appendixModal || event.target.closest(".modal-close")) closeAppendix();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        if (!appendixModal.hidden) closeAppendix();
        else if (!artModal.hidden) closeArtwork();
    }
});
