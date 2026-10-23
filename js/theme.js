(function () {
    const storageKey = "lifeline-t1d-color-palette";
    const palettes = [
        {
            id: "lifeline",
            name: "Lifeline",
            colors: ["#e6f4f8", "#e5f3e9", "#398d87"],
            variables: {
                "--page-start": "#e6f4f8",
                "--page-end": "#e5f3e9",
                "--text": "#294b5a",
                "--card": "#ffffff",
                "--heading": "#286f78",
                "--muted-text": "#6b8791",
                "--section-heading": "#315c6b",
                "--input-border": "#c8dfe4",
                "--input-text": "#294b5a",
                "--input-background": "#f9fcfd",
                "--focus-outline": "#c7e9df",
                "--focus-border": "#4b9b91",
                "--button": "#398d87",
                "--button-hover": "#2c756f",
                "--result-background": "#edf6f3",
                "--result-text": "#326b61",
                "--footer-text": "#849ba3",
                "--card-shadow": "rgba(45, 91, 105, 0.12)"
            }
        },
        {
            id: "lavender",
            name: "Lavender",
            colors: ["#f1edfa", "#e7e2f5", "#7863a8"],
            variables: {
                "--page-start": "#f1edfa",
                "--page-end": "#e7e2f5",
                "--text": "#453e56",
                "--card": "#ffffff",
                "--heading": "#66518f",
                "--muted-text": "#786f8b",
                "--section-heading": "#594b75",
                "--input-border": "#d5cce8",
                "--input-text": "#453e56",
                "--input-background": "#fbfaff",
                "--focus-outline": "#ddd3f2",
                "--focus-border": "#7863a8",
                "--button": "#7863a8",
                "--button-hover": "#62508c",
                "--result-background": "#f1eef8",
                "--result-text": "#594b75",
                "--footer-text": "#827993",
                "--card-shadow": "rgba(69, 62, 86, 0.12)"
            }
        },
        {
            id: "rose",
            name: "Rose",
            colors: ["#fff0f2", "#ffe4e8", "#bd5368"],
            variables: {
                "--page-start": "#fff0f2",
                "--page-end": "#ffe4e8",
                "--text": "#5a3d45",
                "--card": "#ffffff",
                "--heading": "#a63f58",
                "--muted-text": "#896c73",
                "--section-heading": "#754855",
                "--input-border": "#efcbd2",
                "--input-text": "#5a3d45",
                "--input-background": "#fffafb",
                "--focus-outline": "#f7d5dc",
                "--focus-border": "#bd5368",
                "--button": "#bd5368",
                "--button-hover": "#9f4357",
                "--result-background": "#fff0f2",
                "--result-text": "#754855",
                "--footer-text": "#927b80",
                "--card-shadow": "rgba(90, 61, 69, 0.12)"
            }
        },
        {
            id: "forest",
            name: "Forest",
            colors: ["#eaf4e9", "#dceddc", "#4b805a"],
            variables: {
                "--page-start": "#eaf4e9",
                "--page-end": "#dceddc",
                "--text": "#344b39",
                "--card": "#ffffff",
                "--heading": "#3d704b",
                "--muted-text": "#6b806f",
                "--section-heading": "#45634b",
                "--input-border": "#c9ddcb",
                "--input-text": "#344b39",
                "--input-background": "#fafdfa",
                "--focus-outline": "#cce4cf",
                "--focus-border": "#4b805a",
                "--button": "#4b805a",
                "--button-hover": "#3b6948",
                "--result-background": "#edf5ed",
                "--result-text": "#45634b",
                "--footer-text": "#7c9080",
                "--card-shadow": "rgba(52, 75, 57, 0.12)"
            }
        }
    ];

    function applyPalette(id) {
        const palette = palettes.find(function (item) {
            return item.id === id;
        }) || palettes[0];

        Object.entries(palette.variables).forEach(function (entry) {
            document.documentElement.style.setProperty(entry[0], entry[1]);
        });

        return palette;
    }

    const savedPaletteId = localStorage.getItem(storageKey);
    applyPalette(savedPaletteId);

    window.LifelineThemes = {
        palettes: palettes,
        storageKey: storageKey,
        applyPalette: applyPalette
    };
})();
