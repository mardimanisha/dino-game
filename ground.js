import { getCustomProperty, setCustomProperty } from "./updateCustom.js"
import { incrementCustomProperty } from "./updateCustom.js"

const SPEED = 0.05
const groundElement = document.querySelectorAll("[data-ground]")

export function setupGround() {
    setCustomProperty(groundElement[0], "--left", 0)
    setCustomProperty(groundElement[1], "--left", 300)
}

export function updateGround(delta, speedScale) {
    groundElement.forEach(ground => {
        incrementCustomProperty(ground, "--left", delta * speedScale * SPEED * -1)

        if(getCustomProperty(ground, "--left") <= -300) {
            incrementCustomProperty(ground, "--left", 600)
        }
    })
}