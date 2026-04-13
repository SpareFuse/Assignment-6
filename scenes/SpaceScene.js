class SpaceScene extends Phaser.Scene {
    constructor() {
        super({ key: 'SpaceScene' });
    }

    create() {
        // Background
        this.add.rectangle(400, 300, 800, 600, 0x050510);

        // Stars
        for (let i = 0; i < 80; i++) {
            const star = this.add.circle(
                Phaser.Math.Between(0, 800),
                Phaser.Math.Between(0, 600),
                Phaser.Math.Between(1, 2),
                0xFFFFFF,
                Phaser.Math.FloatBetween(0.3, 1.0)
            );
            this.tweens.add({
                targets: star,
                alpha: 0.2,
                duration: Phaser.Math.Between(800, 2000),
                yoyo: true,
                repeat: -1
            });
        }

        // Planet with rings
        const planet = this.add.graphics();
        planet.fillStyle(0xCC8844);
        planet.fillCircle(550, 280, 50);
        planet.lineStyle(3, 0xDDCCAA, 0.5);
        planet.strokeEllipse(550, 280, 160, 35);
        planet.lineStyle(2, 0xCCBB99, 0.3);
        planet.strokeEllipse(550, 280, 185, 42);

        // Small blue planet
        this.add.circle(180, 200, 22, 0x4169E1);

        // Title
        this.add.text(400, 40, 'Space', {
            fontSize: '38px',
            fontFamily: 'Gotham',
            color: '#EEDDFF',
            stroke: '#2A0845',
            strokeThickness: 4
        }).setOrigin(0.5);

        addSceneTransition(this);
    }
}
