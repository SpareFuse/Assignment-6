class DesertScene extends Phaser.Scene {
    constructor() {
        super({ key: 'DesertScene' });
    }

    create() {
        // Sky
        const bg = this.add.graphics();
        bg.fillStyle(0xFF8C42);
        bg.fillRect(0, 0, 800, 200);
        bg.fillStyle(0xFFF4B8);
        bg.fillRect(0, 200, 800, 200);

        // Sand
        this.add.rectangle(400, 500, 800, 200, 0xEDC967);

        // Sun
        this.add.circle(400, 100, 60, 0xFFDD00);
        this.add.circle(400, 100, 75, 0xFFDD00, 0.2);

        // Pyramids
        const pyr = this.add.graphics();
        pyr.fillStyle(0xCCAE5A);
        pyr.fillTriangle(290, 400, 190, 400, 240, 280);
        pyr.fillStyle(0xB39545);
        pyr.fillTriangle(240, 280, 240, 400, 290, 400);

        pyr.fillStyle(0xBFA258);
        pyr.fillTriangle(520, 400, 470, 400, 495, 320);
        pyr.fillStyle(0xA88B40);
        pyr.fillTriangle(495, 320, 495, 400, 520, 400);

        // Cactus
        const cactus = this.add.graphics();
        cactus.fillStyle(0x2D5A27);
        cactus.fillRoundedRect(646, 400, 14, 50, 5);
        cactus.fillRoundedRect(630, 410, 18, 8, 3);
        cactus.fillRoundedRect(630, 400, 8, 20, 3);
        cactus.fillRoundedRect(658, 415, 16, 8, 3);
        cactus.fillRoundedRect(668, 398, 8, 22, 3);

        // Blowing sand
        for (let i = 0; i < 8; i++) {
            const p = this.add.circle(
                Phaser.Math.Between(0, 800),
                Phaser.Math.Between(380, 480),
                2, 0xEDC967, 0.6
            );
            this.tweens.add({
                targets: p,
                x: p.x + 200,
                alpha: 0,
                duration: Phaser.Math.Between(2000, 4000),
                repeat: -1
            });
        }

        // Title
        this.add.text(400, 40, 'Desert', {
            fontSize: '38px',
            fontFamily: 'Gotham',
            color: '#FFF4B8',
            stroke: '#8B4513',
            strokeThickness: 4
        }).setOrigin(0.5);

        addSceneTransition(this);
    }
}
