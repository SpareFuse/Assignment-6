class OceanScene extends Phaser.Scene {
    constructor() {
        super({ key: 'OceanScene' });
    }

    create() {
        // Water gradient
        const bg = this.add.graphics();
        bg.fillGradientStyle(0x0077BE, 0x0077BE, 0x001133, 0x001133, 1);
        bg.fillRect(0, 0, 800, 600);

        // Bubbles
        for (let i = 0; i < 15; i++) {
            const bubble = this.add.circle(
                Phaser.Math.Between(20, 780),
                Phaser.Math.Between(100, 580),
                Phaser.Math.Between(3, 8)
            ).setStrokeStyle(1.5, 0x88DDFF, 0.5).setAlpha(0);

            this.tweens.add({
                targets: bubble,
                y: -20,
                alpha: { from: 0.6, to: 0 },
                duration: Phaser.Math.Between(3000, 6000),
                repeat: -1,
                delay: Phaser.Math.Between(0, 3000)
            });
        }

        // Fish
        for (let i = 0; i < 4; i++) {
            const fy = 150 + i * 90;
            const colors = [0xFF6347, 0xFFD700, 0xFF69B4, 0x00CED1];
            const fish = this.add.graphics();
            fish.fillStyle(colors[i]);
            fish.fillEllipse(0, 0, 28, 12);
            fish.fillTriangle(-16, 0, -26, -8, -26, 8);
            fish.fillStyle(0x000000);
            fish.fillCircle(8, -2, 2);
            fish.setPosition(-40 - i * 100, fy);

            this.tweens.add({
                targets: fish,
                x: 850,
                duration: 6000 + i * 1000,
                repeat: -1
            });
        }

        // Sand floor
        const sand = this.add.graphics();
        sand.fillStyle(0xC2B280, 0.4);
        sand.fillRect(0, 550, 800, 50);

        // Title
        this.add.text(400, 40, 'Ocean', {
            fontSize: '38px',
            fontFamily: 'Gotham',
            color: '#88DDFF',
            stroke: '#001133',
            strokeThickness: 4
        }).setOrigin(0.5);

        addSceneTransition(this);
    }
}
