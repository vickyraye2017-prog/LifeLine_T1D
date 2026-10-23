const paletteList = document.getElementById("paletteList");
const settingsStatus = document.getElementById("settingsStatus");

function renderPalettes() {
    const selectedPaletteId = localStorage.getItem(window.LifelineThemes.storageKey) || "lifeline";
    paletteList.replaceChildren();

    window.LifelineThemes.palettes.forEach(function (palette) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "palette-option";
        button.setAttribute("aria-pressed", String(palette.id === selectedPaletteId));

        const name = document.createElement("span");
        name.className = "palette-name";
        name.textContent = palette.name;

        const swatches = document.createElement("span");
        swatches.className = "palette-swatches";
        swatches.setAttribute("aria-hidden", "true");

        palette.colors.forEach(function (color) {
            const swatch = document.createElement("span");
            swatch.className = "palette-swatch";
            swatch.style.backgroundColor = color;
            swatches.appendChild(swatch);
        });

        button.append(name, swatches);
        button.addEventListener("click", function () {
            const selectedPalette = window.LifelineThemes.applyPalette(palette.id);
            localStorage.setItem(window.LifelineThemes.storageKey, selectedPalette.id);
            renderPalettes();
            settingsStatus.textContent = selectedPalette.name + " palette selected.";
        });

        paletteList.appendChild(button);
    });
}

renderPalettes();
