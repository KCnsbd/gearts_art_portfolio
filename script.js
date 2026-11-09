const artworks = [
    {
        id: "beauty-is-balance",
        group: "classwork",
        src: "assets/class-work/beauty is balance.jpg",
        title: "Beauty Is Balance",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        medium: "Nature Art"
    },
    {
        id: "researcher-above-the-sea-of-ash",
        group: "classwork",
        src: "assets/class-work/Researcher Above the Sea of Ash.jpg",
        title: "Researcher Above the Sea of Ash",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        medium: "AI Appropriation"
    },
    {
        id: "validation",
        group: "classwork",
        src: "assets/class-work/VALIDATION YESSSSS.png",
        title: "VALIDATION YASSSS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        medium: "Meme"
    },
    {
        id: "earth-yearns",
        group: "classwork",
        src: "assets/class-work/the-earth-yearns-for-the-heavens.jpg",
        title: "The Earth Yearns for the Heavens",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        medium: "Acrylic Painting"
    },
    {
        id: "wonder",
        group: "classwork",
        src: "assets/class-work/wonder.mp4",
        title: "Wonder",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        medium: "Videography"
    },
    {
        id: "bj",
        group: "exploration",
        src: "assets/art-exploration/BJ.jpeg",
        title: "BJ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        medium: "Felt Craft",
        appendixDescription: "Full artwork view."
    },
    {
        id: "felt-doll",
        group: "exploration",
        src: "assets/art-exploration/Felt Doll.jpg",
        title: "My Love Language",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        medium: "Felt Craft",
        appendixDescription: "Full artwork view."
    },
    {
        id: "we-were-just-children",
        group: "exploration",
        src: "assets/art-exploration/We Were Just Children.mp4",
        title: "We Were Just Children",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        medium: "Digital Animation",
        appendixDescription: "Full video."
    },
    {
        id: "sandbearer",
        group: "exploration",
        src: "assets/art-exploration/Where the Sandbearer Meets the Sun.png",
        title: "Where the Sandbearer Meets the Sun",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        medium: "Digital Illustration",
        appendixDescription: "Full artwork view."
    }
];

const gallery = document.querySelector(".gallery-groups");
const appendixGrid = document.querySelector(".appendix-grid");
const artModal = document.getElementById("art-modal");
const appendixModal = document.getElementById("appendix-modal");
const appendixModalContent = document.getElementById("appendix-modal-content");
const modalContent = document.getElementById("modal-content");
let activeArtwork = null;
let lastFocusedElement = null;
let lastFocusedAppendixElement = null;

function createMedia(src, title, className, controls = false) {
    const isVideo = /\.mp4(?:$|\?)/i.test(src);
    const media = document.createElement(isVideo ? "video" : "img");
    media.className = className;
    if (isVideo) {
        media.src = src;
        media.controls = controls;
        media.playsInline = true;
        media.preload = controls ? "metadata" : "none";
        if (!controls) {
            media.muted = true;
            media.loop = true;
            media.autoplay = true;
            media.setAttribute("aria-label", `Preview video: ${title}`);
        }
    } else {
        media.src = src;
        media.alt = title;
        media.loading = controls ? "eager" : "lazy";
    }
    return media;
}

function renderGallery() {
    if (!gallery) return;
    const sections = [
        { key: "classwork", id: "part-one", title: "Part I | Art Appreciation", note: "My GEARTS+ outputs, gathered as a curated exhibition." },
        { key: "exploration", id: "part-two", title: "Part II | Artistic Exploration", note: "New work, unfamiliar forms, and experiments." }
    ];

    sections.forEach(({ key, id, title, note }) => {
        const group = document.createElement("section");
        group.id = id;
        group.className = `gallery-group gallery-group-${key}`;
        group.setAttribute("aria-labelledby", `gallery-${key}-title`);

        const heading = document.createElement("div");
        heading.className = "gallery-group-heading";
        const h3 = document.createElement("h3");
        h3.id = `gallery-${key}-title`;
        h3.textContent = title;
        const p = document.createElement("p");
        p.textContent = note;
        heading.append(h3, p);

        const grid = document.createElement("div");
        grid.className = "artwork-grid";
        artworks.filter((artwork) => artwork.group === key).forEach((artwork) => {
            const card = document.createElement("article");
            card.className = "artwork-card";
            card.setAttribute("role", "button");
            card.tabIndex = 0;
            card.setAttribute("aria-label", `Open details for ${artwork.title}`);

            const mediaWrap = document.createElement("div");
            mediaWrap.className = "artwork-media-wrap";
            mediaWrap.append(createMedia(artwork.src, artwork.title, "artwork-media"));

            const caption = document.createElement("h4");
            caption.className = "artwork-card-caption";
            caption.textContent = artwork.title;

            const medium = document.createElement("p");
            medium.className = "medium-text";
            medium.textContent = `Medium: ${artwork.medium}`;

            const description = document.createElement("p");
            description.className = "card-description";
            description.textContent = artwork.description;

            const readMore = document.createElement("span");
            readMore.className = "read-more-button";
            readMore.textContent = "Read more ↗";
            readMore.setAttribute("aria-hidden", "true");

            card.append(mediaWrap, caption, medium, description, readMore);
            card.addEventListener("click", () => openArtwork(artwork.id, card));
            card.addEventListener("keydown", (event) => {
                if (event.target !== card) return;
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openArtwork(artwork.id, card);
                }
            });
            grid.append(card);
        });

        group.append(heading, grid);
        gallery.append(group);
    });
}

function renderAppendix() {
    if (!appendixGrid) return;
    artworks.filter((artwork) => artwork.group === "exploration").forEach((artwork) => {
        const card = document.createElement("article");
        card.id = `appendix-${artwork.id}`;
        card.className = "appendix-card";

        const media = createMedia(artwork.src, artwork.title, "appendix-card-media");
        const title = document.createElement("h3");
        title.textContent = artwork.title;

        const medium = document.createElement("p");
        medium.className = "medium-text";
        medium.textContent = `Medium: ${artwork.medium}`;

        const description = document.createElement("p");
        description.textContent = artwork.description;

        const readMore = document.createElement("button");
        readMore.type = "button";
        readMore.className = "appendix-read-more";
        readMore.textContent = "Read more ↗";
        readMore.addEventListener("click", (event) => {
            event.stopPropagation();
            openAppendixModal(artwork.id, readMore);
        });

        card.append(media, title, medium, description, readMore);
        card.addEventListener("click", () => openAppendixModal(artwork.id, card));
        appendixGrid.append(card);
    });
}

function openArtwork(id, trigger) {
    const artwork = artworks.find((item) => item.id === id);
    if (!artwork) return;
    activeArtwork = artwork;
    lastFocusedElement = trigger || document.activeElement;
    modalContent.replaceChildren();

    const close = document.createElement("button");
    close.className = "modal-close";
    close.type = "button";
    close.setAttribute("aria-label", "Close artwork details");
    close.textContent = "×";
    modalContent.append(close);
    modalContent.append(createMedia(artwork.src, artwork.title, "modal-artwork", true));

    const copy = document.createElement("div");
    copy.className = "modal-copy";
    const eyebrow = document.createElement("p");
    eyebrow.className = "eyebrow";
    eyebrow.textContent = artwork.group === "classwork" ? "GEARTS+ CLASSWORK" : "ART EXPLORATION";
    const heading = document.createElement("h2");
    heading.id = "modal-title";
    heading.textContent = artwork.title;
    const description = document.createElement("p");
    description.textContent = artwork.description;
    copy.append(eyebrow, heading, description);

    if (artwork.group === "exploration") {
        const appendixButton = document.createElement("button");
        appendixButton.className = "appendix-button";
        appendixButton.type = "button";
        appendixButton.innerHTML = '<span aria-hidden="true">▧</span> View Appendix';
        appendixButton.addEventListener("click", () => openAppendixModal(artwork.id, appendixButton, true));
        copy.append(appendixButton);
    }
    modalContent.append(copy);
    artModal.hidden = false;
    document.body.classList.add("modal-active");
    close.focus();
}

function closeArtwork() {
    artModal.hidden = true;
    document.body.classList.remove("modal-active");
    lastFocusedElement?.focus();
}

function jumpToAppendix() {
    if (!activeArtwork || activeArtwork.group !== "exploration") return;
    const target = document.getElementById(`appendix-${activeArtwork.id}`);
    if (!target) return;

    closeArtwork();
    history.replaceState(null, "", `#${target.id}`);
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => target.focus({ preventScroll: true }), 350);
}

function openAppendixModal(id, trigger, fromArtworkModal = false) {
    const artwork = artworks.find((item) => item.id === id && item.group === "exploration");
    if (!artwork) return;
    lastFocusedAppendixElement = fromArtworkModal ? lastFocusedElement : (trigger || document.activeElement);
    if (fromArtworkModal) artModal.hidden = true;
    appendixModalContent.replaceChildren();

    const close = document.createElement("button");
    close.className = "modal-close";
    close.type = "button";
    close.setAttribute("aria-label", "Close appendix");
    close.textContent = "×";
    appendixModalContent.append(close);

    const eyebrow = document.createElement("p");
    eyebrow.className = "eyebrow";
    eyebrow.textContent = "ART EXPLORATION APPENDIX";

    const heading = document.createElement("h2");
    heading.id = "appendix-modal-title";
    heading.textContent = artwork.title;

    const medium = document.createElement("p");
    medium.className = "medium-text";
    medium.textContent = `Medium: ${artwork.medium}`;

    const media = createMedia(artwork.src, artwork.title, "modal-artwork", true);
    const description = document.createElement("p");
    description.className = "appendix-description";
    description.textContent = artwork.appendixDescription || artwork.description;

    const copy = document.createElement("div");
    copy.className = "modal-copy";
    copy.append(eyebrow, heading, medium, description);
    appendixModalContent.append(media, copy);

    appendixModal.hidden = false;
    document.body.classList.add("modal-active");
    close.focus();
}

function closeAppendixModal() {
    appendixModal.hidden = true;
    document.body.classList.remove("modal-active");
    lastFocusedAppendixElement?.focus();
}

renderGallery();
renderAppendix();

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.getElementById("primary-navigation");
menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    navigation?.classList.toggle("is-open", !isOpen);
});
navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation menu");
    navigation.classList.remove("is-open");
}));

artModal?.addEventListener("click", (event) => {
    if (event.target === artModal || event.target.closest(".modal-close")) closeArtwork();
});
appendixModal?.addEventListener("click", (event) => {
    if (event.target === appendixModal || event.target.closest(".modal-close")) closeAppendixModal();
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        if (!appendixModal.hidden) closeAppendixModal();
        else if (!artModal.hidden) closeArtwork();
    }
});
