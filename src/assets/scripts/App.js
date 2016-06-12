import ImprovedNoise from '~/lib/ImprovedNoise';

export default class App {

    constructor () {

        this.canvas = document.getElementById('js-canvas');

        this.ctx = this.canvas.getContext('2d');

        const val = ImprovedNoise.noise(1.1, 1.1, 1.1);
        console.log('val', val);

    }

}
