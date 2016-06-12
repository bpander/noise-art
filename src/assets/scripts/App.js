import ImprovedNoise from '~/lib/ImprovedNoise';

export default class App {

    constructor() {

        this.canvas = document.getElementById('js-canvas');

        this.ctx = this.canvas.getContext('2d');

        this.imageData = null;

        this.x = 0;

        this.y = 0;

        this.z = 0;

        this.loop = this.loop.bind(this);
    }


    render() {
        const width = this.canvas.width;
        const height = this.canvas.height;
        const frame = App.getFrame({
            width,
            height,
            scale: 1 / 20,
            xOffset: this.x,
            yOffset: this.y,
            zOffset: this.z,
        });
        this.ctx.putImageData(frame, 0, 0);
    }


    update() {
        this.z++;
    }


    loop() {
        this.update();
        this.render();
        requestAnimationFrame(this.loop);
    }


    static getFrame({ width, height, scale = 1, xOffset = 0, yOffset = 0, zOffset = 0 }) {
        const pixelSize = 4; // rgba
        const pixelData = new Uint8ClampedArray(width * height * pixelSize);
        const imageData = new ImageData(pixelData, width, height);

        for (let y = 0; y < height; y++) {
            const rowStart = y * width * pixelSize;
            for (let x = 0; x < width; x++) {
                const startIndex = rowStart + x * pixelSize;
                const finalIndex = startIndex + pixelSize - 1;
                const rawValue = ImprovedNoise.noise(
                    (x + xOffset) * scale,
                    (y + yOffset) * scale,
                    (0 + zOffset) * scale
                );
                const percentValue = (rawValue + 1) / 2;
                pixelData.fill(percentValue * 255, startIndex, finalIndex);
                pixelData[finalIndex] = 255; // alpha
            }
        }
        return imageData;
    }

}
