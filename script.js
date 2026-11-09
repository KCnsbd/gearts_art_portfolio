const artworks = [
    {
        id: "beauty-is-balance",
        group: "classwork",
        src: "assets/class-work/beauty is balance.jpg",
        title: "Beauty Is Balance",
        description: "Our group arranged natural materials into a yin-yang symbol to represent balance and unity between opposing forces, and the beauty found in both.",
        dateLabel: "Created: July 31, 2026",
        contribution: "I helped conceptualize the design, gathered materials, and presented the final output, explaining its meaning.",
        members: ["Keana Consebido","Angela Galang","Yzabelle Macalindong","Voltaire Punzalan","Ernest Villareal","Tauries Maestre","Angel Rafols","Angela Reano","Hector Torralba"],
        workType: "group",
        medium: "Group Nature Art"
    },
    {
        id: "validation",
        group: "classwork",
        src: "assets/class-work/VALIDATION YESSSSS.png",
        title: "VALIDATION YASSSS",
        description: "Inspired by a moment in class when my answer was complimented, this meme celebrates the joy of getting words of affirmation.",
        dateLabel: "Created: September 4, 2026",
        workType: "individual",
        medium: "Meme"
    },
    {
        id: "kalye-analysis",
        group: "classwork",
        src: "assets/class-work/Kalye Analysis.png",
        title: "Kalye — Gloc-9",
        dateLabel: "Created: September 18, 2026",
        description: "Our group analyzed Gloc-9’s “Kalye,” exploring how its lyrics and delivery portray street life and the realities of people whose stories are often overlooked.",
        workType: "group",
        contribution: "I was assigned the Observe part of the analysis, assisted in the interpretation, and proofread the whole paper before submission.",
        members: ["Keana Consebido","Angela Galang","Yzabelle Macalindong","Voltaire Punzalan","Matt Sulit"],
        medium: "Art Analysis",
        analysisUrl: "https://drive.google.com/file/d/1zBcCL_IGGEnDi05GADKjaUwDGs9QER6G/view?usp=sharing"
    },
    {
        id: "researcher-above-the-sea-of-ash",
        group: "classwork",
        src: "assets/class-work/Researcher Above the Sea of Ash.jpg",
        title: "Researcher Above the Sea of Ash",
        description: "An appropriation of Wanderer above the Sea of Fog, placing me above Taal Volcano as a researcher. It connects my interest in Taal, sparked during my observatory internship, with my current thesis work.",
        dateLabel: "Created: October 1, 2026",
        workType: "individual",
        medium: "AI Appropriation"
    },
    {
        id: "earth-yearns",
        group: "classwork",
        src: "assets/class-work/the-earth-yearns-for-the-heavens.jpg",
        title: "The Earth Yearns for the Heavens",
        description: "My colored reinterpretation of The Creation of Adam depicts the earth as a branch-wrapped hand reaching toward the heavens for salvation. It was my first successful attempt at acrylic painting.",
        dateLabel: "Created: October 2, 2026",
        workType: "individual",
        medium: "Acrylic Painting"
    },
    {
        id: "wonder",
        group: "classwork",
        src: "assets/class-work/wonder.mp4",
        title: "Wonder",
        description: "A group video exploring wonder through the joy of romanticizing the mundane. As Sync-O, we turn everyday moments into something worth noticing, finding small sparks of beauty and surprise in ordinary life.",
        groupName: "Sync-O",
        dateLabel: "Created: October 9, 2026",
        contribution: "I helped brainstorm the shots, filmed some of the clips, and generated the music for the video.",
        members: ["Keana Consebido","Tauries Maestre","Kriztan Sumbillo","Daniel De Lara"],
        workType: "group",
        medium: "Group Video"
    },
    {
        id: "sandbearer",
        group: "exploration",
        src: "assets/art-exploration/Where the Sandbearer Meets the Sun.png",
        appendixPreview: "assets/art-exploration/appendix/sandbearer-og-ss.png",
        title: "Where the Sandbearer Meets the Sun",
        description: "A 2023 landscape painting revamped in 2026. Returning to the piece let me see how my approach to contrast, value, lighting, and shadow had developed.",
        dateLabel: "Created: December 27, 2023 · Revamped: September 23, 2026",
        medium: "Digital Illustration",
        appendices: [
            { src: "assets/art-exploration/appendix/Where the Sandbearer meets the Sun(og).clip", title: "Original Clip Studio file", download: true },
            { src: "assets/art-exploration/appendix/sandbearer-og-ss.png", title: "Original layers screenshot" },
            { src: "assets/art-exploration/appendix/Where the Sandbearer meets the Sun (revamp).ipv", title: "Revamped artwork file", download: true },
            { src: "assets/art-exploration/appendix/sandbearer-revamp-ss.jpg", title: "Revamped layers screenshot" }
        ]
    },
    {
        id: "we-were-just-children",
        group: "exploration",
        src: "assets/art-exploration/We Were Just Children.mp4",
        title: "We Were Just Children",
        description: "A 16-second frame-by-frame animation inspired by Peruere and Clervie’s story in Genshin Impact. It contrasts their childhood innocence with the tragic fate waiting for them.",
        dateLabel: "Created: October 13–15, 2026",
        medium: "Digital Animation",
        sourceFileUrl: "https://drive.google.com/file/d/1vz4iUton_SScqp5WNIstX9U06YLrvlaE/view?usp=sharing",
        appendices: [
            { src: "assets/art-exploration/appendix/children(layers).mp4", title: "Layer Recording" }
        ]
    },
    {
        id: "bj",
        group: "exploration",
        src: "assets/art-exploration/BJ.jpeg",
        title: "BJ",
        description: "A hand-sewn Snorlax felt charm made as a birthday gift for a friend. Every detail, including the face and initials, was sewn by hand without glue.",
        dateLabel: "Created: November 2, 2026",
        medium: "Felt Craft",
        appendices: [
            { src: "assets/art-exploration/appendix/feltcrafts/materials.jpg", title: "Materials" },
            { src: "assets/art-exploration/appendix/feltcrafts/process1.jpg", title: "Process · 1" },
            { src: "assets/art-exploration/appendix/feltcrafts/process2.jpg", title: "Process · 2" }
        ]
    },
    {
        id: "felt-doll",
        group: "exploration",
        src: "assets/art-exploration/Felt Doll.jpg",
        title: "My Love Language",
        description: "A handmade felt doll for my sister’s birthday, created to turn a familiar digital gift into a new kind of handmade keepsake.",
        dateLabel: "Created: November 3, 2026",
        medium: "Felt Craft",
        appendices: [
            { src: "assets/art-exploration/appendix/feltcrafts/document_6307514053791064889.mp4", title: "Timelapse" }
        ]
    },
    {
        id: "quiet-corner-photography",
        group: "exploration",
        src: "assets/art-exploration/A Quiet Corner of Stories/1.jpg",
        photos: [
            "assets/art-exploration/A Quiet Corner of Stories/1.jpg",
            "assets/art-exploration/A Quiet Corner of Stories/2.jpg",
            "assets/art-exploration/A Quiet Corner of Stories/3.jpg",
            "assets/art-exploration/A Quiet Corner of Stories/4.jpg"
        ],
        title: "A Quiet Corner of Stories",
        description: "A set of photographs taken at Paperback & Lattes, capturing the café’s vintage, dark-academia atmosphere during a birthday visit with my sister.",
        dateLabel: "Taken: November 3, 2026",
        medium: "Photography",
        appendices: [
            { src: "assets/art-exploration/appendix/photography/raw1.jpg", title: "Original photo · 1" },
            { src: "assets/art-exploration/appendix/photography/raw2.jpg", title: "Original photo · 2" },
            { src: "assets/art-exploration/appendix/photography/raw3.jpg", title: "Original photo · 3" },
            { src: "assets/art-exploration/appendix/photography/raw4.jpg", title: "Original photo · 4" },
            { src: "assets/art-exploration/appendix/photography/lightroom-ss.jpg", title: "Lightroom editing screenshot" }
        ]
    }
];

const gallery = document.querySelector(".gallery-groups");
const appendixGrid = document.querySelector(".appendix-grid");
const artModal = document.getElementById("art-modal");
const appendixModal = document.getElementById("appendix-modal");
const appendixModalContent = document.getElementById("appendix-modal-content");
const modalContent = document.getElementById("modal-content");
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


function createPhotoSlideshow(photos, title, className, interactive = false) {
    const slideshow = document.createElement("div");
    slideshow.className = `photo-slideshow ${className}`;
    slideshow.setAttribute("aria-label", `${title} photo slideshow`);

    const track = document.createElement("div");
    track.className = "slideshow-track";
    const slides = photos.map((src, index) => {
        const image = document.createElement("img");
        image.className = "slideshow-photo";
        image.src = src;
        image.alt = `${title}, photo ${index + 1} of ${photos.length}`;
        image.loading = interactive || index === 0 ? "eager" : "lazy";
        track.append(image);
        return image;
    });
    slideshow.append(track);

    let currentIndex = 0;
    const updatePhoto = (step) => {
        currentIndex = (currentIndex + step + photos.length) % photos.length;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        const counter = slideshow.querySelector(".slideshow-counter");
        if (counter) counter.textContent = `${currentIndex + 1} / ${photos.length}`;
        slides.forEach((image, index) => {
            image.setAttribute("aria-hidden", String(index !== currentIndex));
        });
    };

    slides.forEach((image, index) => {
        image.setAttribute("aria-hidden", String(index !== 0));
    });

    if (interactive) {
        slideshow.classList.add("is-interactive");
        [["previous", "‹", -1], ["next", "›", 1]].forEach(([direction, label, step]) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = `slideshow-arrow slideshow-arrow-${direction}`;
            button.setAttribute("aria-label", `${direction === "previous" ? "Previous" : "Next"} photo`);
            button.textContent = label;
            button.addEventListener("click", () => updatePhoto(step));
            slideshow.append(button);
        });
        const counter = document.createElement("span");
        counter.className = "slideshow-counter";
        counter.setAttribute("aria-live", "polite");
        counter.textContent = `1 / ${photos.length}`;
        slideshow.append(counter);
    } else if (photos.length > 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        window.setInterval(() => updatePhoto(1), 3200);
    }

    return slideshow;
}

function appendArtworkCredits(container, artwork) {
    if (!artwork.groupName && !artwork.contribution && !artwork.members?.length) return;

    const credits = document.createElement("section");
    credits.className = "artwork-credits";

    if (artwork.groupName) {
        const group = document.createElement("p");
        group.className = "artwork-group-name";
        const groupLabel = document.createElement("strong");
        groupLabel.textContent = "Group:";
        group.append(groupLabel, document.createTextNode(` ${artwork.groupName}`));
        credits.append(group);
    }

    if (artwork.contribution) {
        const contributionHeading = document.createElement("h3");
        contributionHeading.textContent = "My contribution";
        const contribution = document.createElement("p");
        contribution.textContent = artwork.contribution;
        credits.append(contributionHeading, contribution);
    }

    if (artwork.members?.length) {
        const membersHeading = document.createElement("h3");
        membersHeading.textContent = "Group members";
        const members = document.createElement("ul");
        artwork.members.forEach((name) => {
            const item = document.createElement("li");
            item.textContent = name;
            members.append(item);
        });
        credits.append(membersHeading, members);
    }

    container.append(credits);
}

function createDateLabel(artwork) {
    if (!artwork.dateLabel) return null;
    const date = document.createElement("p");
    date.className = "artwork-date";
    date.textContent = artwork.dateLabel;
    return date;
}

function createClassworkFilter(grid) {
    const filterBar = document.createElement("div");
    filterBar.className = "work-filter";
    filterBar.setAttribute("role", "group");
    filterBar.setAttribute("aria-label", "Filter classwork by collaboration type");

    const filters = [
        { value: "all", label: "All Works" },
        { value: "group", label: "Group Works" },
        { value: "individual", label: "Individual Works" }
    ];

    filters.forEach(({ value, label }, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "work-filter-button";
        button.textContent = label;
        button.dataset.filter = value;
        button.setAttribute("aria-pressed", String(index === 0));
        if (index === 0) button.classList.add("is-active");

        button.addEventListener("click", () => {
            filterBar.querySelectorAll(".work-filter-button").forEach((filter) => {
                const isActive = filter === button;
                filter.classList.toggle("is-active", isActive);
                filter.setAttribute("aria-pressed", String(isActive));
            });
            grid.querySelectorAll(".artwork-card").forEach((card) => {
                card.hidden = value !== "all" && card.dataset.workType !== value;
            });
        });

        filterBar.append(button);
    });

    return filterBar;
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
        const filterBar = key === "classwork" ? createClassworkFilter(grid) : null;
        artworks.filter((artwork) => artwork.group === key).forEach((artwork) => {
            const card = document.createElement("article");
            card.className = "artwork-card";
            card.setAttribute("role", "button");
            card.tabIndex = 0;
            card.setAttribute("aria-label", `Open details for ${artwork.title}`);
            if (artwork.workType) card.dataset.workType = artwork.workType;

            const mediaWrap = document.createElement("div");
            mediaWrap.className = "artwork-media-wrap";
            mediaWrap.append(artwork.photos?.length ? createPhotoSlideshow(artwork.photos, artwork.title, "gallery-photo-slideshow") : createMedia(artwork.src, artwork.title, "artwork-media"));

            const caption = document.createElement("h4");
            caption.className = "artwork-card-caption";
            caption.textContent = artwork.title;

            const medium = document.createElement("p");
            medium.className = "medium-text";
            medium.textContent = `${artwork.medium}`;
            const workTypeLabel = artwork.workType ? document.createElement("p") : null;
            if (workTypeLabel) {
                workTypeLabel.className = `work-type-label work-type-${artwork.workType}`;
                workTypeLabel.textContent = artwork.workType === "group" ? "Group work" : "Individual work";
            }
            const date = createDateLabel(artwork);

            const description = document.createElement("p");
            description.className = "card-description";
            description.textContent = artwork.description;

            const readMore = document.createElement("span");
            readMore.className = "read-more-button";
            readMore.textContent = "Read more ↗";
            readMore.setAttribute("aria-hidden", "true");

            card.append(mediaWrap, caption, medium);
            if (workTypeLabel) card.append(workTypeLabel);
            if (date) card.append(date);
            card.append(description, readMore);
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

        group.append(heading);
        if (filterBar) group.append(filterBar);
        group.append(grid);
        gallery.append(group);
    });
}

function renderAppendix() {
    if (!appendixGrid) return;
    artworks.filter((artwork) => artwork.group === "exploration").forEach((artwork) => {
        const card = document.createElement("article");
        card.id = `appendix-${artwork.id}`;
        card.className = "appendix-card";

        const appendixPreview = artwork.appendixPreview || artwork.appendices?.[0]?.src || artwork.src;
        const media = createMedia(appendixPreview, artwork.title, "appendix-card-media");
        const title = document.createElement("h3");
        title.textContent = artwork.title;

        const medium = document.createElement("p");
        medium.className = "medium-text";
        medium.textContent = `${artwork.medium}`;
        const date = createDateLabel(artwork);

        const description = document.createElement("p");
        description.textContent = artwork.appendices?.length ? `${artwork.appendices.length} supporting items` : artwork.description;

        const readMore = document.createElement("button");
        readMore.type = "button";
        readMore.className = "appendix-read-more";
        readMore.textContent = "Read more ↗";
        readMore.addEventListener("click", (event) => {
            event.stopPropagation();
            openAppendixModal(artwork.id, readMore);
        });

        card.append(media, title, medium);
        if (date) card.append(date);
        card.append(description, readMore);
        card.addEventListener("click", () => openAppendixModal(artwork.id, card));
        appendixGrid.append(card);
    });
}

function openArtwork(id, trigger) {
    const artwork = artworks.find((item) => item.id === id);
    if (!artwork) return;
    lastFocusedElement = trigger || document.activeElement;
    modalContent.replaceChildren();

    const close = document.createElement("button");
    close.className = "modal-close";
    close.type = "button";
    close.setAttribute("aria-label", "Close artwork details");
    close.textContent = "×";
    modalContent.append(close);
    modalContent.append(artwork.photos?.length ? createPhotoSlideshow(artwork.photos, artwork.title, "modal-photo-slideshow", true) : createMedia(artwork.src, artwork.title, "modal-artwork", true));

    const copy = document.createElement("div");
    copy.className = "modal-copy";
    const eyebrow = document.createElement("p");
    eyebrow.className = "eyebrow";
    eyebrow.textContent = artwork.group === "classwork" ? "GEARTS+ CLASSWORK" : "ART EXPLORATION";
    const heading = document.createElement("h2");
    heading.id = "modal-title";
    heading.textContent = artwork.title;
    const date = createDateLabel(artwork);
    const description = document.createElement("p");
    description.textContent = artwork.description;
    copy.append(eyebrow, heading);
    if (date) copy.append(date);
    copy.append(description);
    appendArtworkCredits(copy, artwork);

    if (artwork.analysisUrl) {
        const analysisLink = document.createElement("a");
        analysisLink.className = "analysis-link";
        analysisLink.href = artwork.analysisUrl;
        analysisLink.target = "_blank";
        analysisLink.rel = "noopener noreferrer";
        analysisLink.textContent = "Read the full analysis ↗";
        copy.append(analysisLink);
    }

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
    medium.textContent = `${artwork.medium}`;

    const copy = document.createElement("div");
    copy.className = "modal-copy";
    const date = createDateLabel(artwork);
    copy.append(eyebrow, heading);
    if (date) copy.append(date);
    copy.append(medium);

    const items = artwork.appendices?.length
        ? artwork.appendices
        : [{ src: artwork.src, title: "Full artwork view" }];

    const appendixItems = document.createElement("div");
    appendixItems.className = "appendix-items";
    items.forEach((item) => {
        const itemSection = document.createElement("section");
        itemSection.className = "appendix-item";

        const itemHeading = document.createElement("h3");
        itemHeading.textContent = item.title;
        itemSection.append(itemHeading, createMedia(item.src, item.title, "appendix-artwork", true));

        if (item.download) {
            const download = document.createElement("a");
            download.className = "appendix-download-link";
            download.href = item.src;
            download.setAttribute("download", "");
            download.textContent = `Download ${item.title.toLowerCase()} ↓`;
            itemSection.append(download);
        }

        appendixItems.append(itemSection);
    });

    appendixModalContent.append(copy, appendixItems);

    if (artwork.sourceFileUrl) {
        const sourceFileLink = document.createElement("a");
        sourceFileLink.className = "analysis-link";
        sourceFileLink.href = artwork.sourceFileUrl;
        sourceFileLink.target = "_blank";
        sourceFileLink.rel = "noopener noreferrer";
        sourceFileLink.textContent = "Download original artwork file ↗";
        appendixModalContent.append(sourceFileLink);
    }

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
