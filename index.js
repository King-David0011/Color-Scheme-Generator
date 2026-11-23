const colorInput = document.getElementById("seed-color")
const modeSelect = document.getElementById("scheme-mode")
const getSchemeBtn = document.getElementById("get-scheme-btn")
const schemeEl = document.getElementById("scheme")

getSchemeBtn.addEventListener("click", getScheme)

function getScheme() {
    // the API wants the hex without the "#"
    const hex = colorInput.value.replace("#", "")
    const mode = modeSelect.value

    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(data => {
            renderScheme(data.colors)
        })
}

function renderScheme(colors) {
    let html = ""
    for (let color of colors) {
        html += `
            <div class="color-col">
                <div class="swatch" style="background-color: ${color.hex.value}"></div>
                <div class="hex">${color.hex.value}</div>
            </div>
        `
    }
    schemeEl.innerHTML = html
}

// show a scheme when the page first loads
getScheme()
