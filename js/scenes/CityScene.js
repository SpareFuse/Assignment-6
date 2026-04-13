class CityScene extends Phaser.Scene {
    constructor() {
        super({ key: 'CityScene' });
    }

    create() {
        // Night sky
        this.add.rectangle(400, 300, 800, 600, 0x0a0a2e);

        // Moon
        this.add.circle(700, 60, 25, 0xFFF8DC);
        this.add.circle(708, 55, 23, 0x0a0a2e);

        // Buildings with windows
        const buildings = this.add.graphics();
        const data = [
            { x: 0, w: 90, h: 300 },
            { x: 100, w: 70, h: 350 },
            { x: 180, w: 100, h: 280 },
            { x: 290, w: 80, h: 370 },
            { x: 380, w: 90, h: 310 },
            { x: 480, w: 70, h: 360 },
            { x: 560, w: 100, h: 290 },
            { x: 670, w: 80, h: 340 },
            { x: 750, w: 70, h: 320 }
        ];

        for (const b of data) {
            buildings.fillStyle(0x161630);
            buildings.fillRect(b.x, 600 - b.h, b.w, b.h);

            for (let wy = 600 - b.h + 15; wy < 570; wy += 20) {
                for (let wx = b.x + 8; wx < b.x + b.w - 8; wx += 14) {
                    if (Math.random() > 0.4) {
                        buildings.fillStyle(0xFFEE88, Phaser.Math.FloatBetween(0.4, 0.9));
                        buildings.fillRect(wx, wy, 6, 8);
                    }
                }
            }
        }

        // Street
        const street = this.add.graphics();
        street.fillStyle(0x222222);
        street.fillRect(0, 540, 800, 60);
        street.fillStyle(0x444444);
        street.fillRect(0, 540, 800, 8);

        // Road lines
        for (let i = 0; i < 12; i++) {
            street.fillStyle(0xFFFF00, 0.5);
            street.fillRect(10 + i * 70, 565, 40, 3);
        }

        // Title
        this.add.text(400, 40, 'City', {
            fontSize: '38px',
            fontFamily: 'Gotham',
            color: '#FF66AA',
            stroke: '#1a0a2e',
            strokeThickness: 4
        }).setOrigin(0.5);

        addSceneTransition(this);
    }
}
