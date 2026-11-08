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
const artModal = document.getElementById("art-modal");
const appendixModal = document.getElementById("appendix-modal");
const modalContent = document.getElementById("modal-content");
let activeArtwork = null;
let lastFocusedElement = null;

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
        { key: "classwork", title: "Classwork", note: "Pieces created for GEARTS+ activities." },
        { key: "exploration", title: "Art Exploration", note: "Personal pieces and experiments beyond class assignments." }
    ];

    sections.forEach(({ key, title, note }) => {
        const group = document.createElement("section");
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
            const card = document.createElement("button");
            card.type = "button";
            card.className = "artwork-card";
            card.setAttribute("aria-label", `View ${artwork.title} details`);
            const mediaWrap = document.createElement("span");
            mediaWrap.className = "artwork-media-wrap";
            mediaWrap.append(createMedia(artwork.src, artwork.title, "artwork-media"));
            const caption = document.createElement("span");
            caption.className = "artwork-card-caption";
            caption.textContent = artwork.title;
            const mediumTag = document.createElement("span");
            mediumTag.className = "medium-tag";
            mediumTag.textContent = `${artwork.medium}`;
            const indicator = document.createElement("span");
            indicator.className = "card-arrow";
            indicator.setAttribute("aria-hidden", "true");
            indicator.textContent = "↗";
            card.append(mediaWrap, caption, mediumTag, indicator);
            card.addEventListener("click", () => openArtwork(artwork.id, card));
            grid.append(card);
        });

        group.append(heading, grid);
        gallery.append(group);
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
        appendixButton.addEventListener("click", openAppendix);
        copy.append(appendixButton);
    }
    modalContent.append(copy);
    artModal.hidden = false;
    document.body.classList.add("modal-active");
    close.focus();
}

function closeArtwork() {
    artModal.hidden = true;
    if (appendixModal.hidden) document.body.classList.remove("modal-active");
    lastFocusedElement?.focus();
}

function openAppendix() {
    if (!activeArtwork || activeArtwork.group !== "exploration") return;
    document.getElementById("appendix-title").textContent = activeArtwork.title;
    const mediaContainer = document.getElementById("appendix-media");
    mediaContainer.replaceChildren(createMedia(activeArtwork.src, activeArtwork.title, "appendix-artwork", true));
    document.getElementById("appendix-description").textContent = activeArtwork.appendixDescription || "Full artwork view.";
    appendixModal.hidden = false;
    appendixModal.querySelector(".modal-close").focus();
}

function closeAppendix() {
    appendixModal.hidden = true;
    if (artModal.hidden) document.body.classList.remove("modal-active");
    else artModal.querySelector(".appendix-button")?.focus();
}

renderGallery();

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
    if (event.target === appendixModal || event.target.closest(".modal-close")) closeAppendix();
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        if (!appendixModal.hidden) closeAppendix();
        else if (!artModal.hidden) closeArtwork();
    }
});
