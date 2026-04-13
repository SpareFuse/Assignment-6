class ForestScene extends Phaser.Scene {
    constructor() {
        super({ key: 'ForestScene' });
    }

    create() {
        // Sky
        const sky = this.add.graphics();
        sky.fillGradientStyle(0x87CEEB, 0x87CEEB, 0x228B22, 0x228B22, 1);
        sky.fillRect(0, 0, 800, 600);

        // Sun
        this.add.circle(650, 80, 50, 0xFFDD00);

        // Ground
        const ground = this.add.graphics();
        ground.fillStyle(0x2d5a1e);
        ground.fillRect(0, 480, 800, 120);

        // Trees
        for (let i = 0; i < 8; i++) {
            const x = 50 + i * 100;
            const tree = this.add.graphics();
            tree.fillStyle(0x8B4513);
            tree.fillRect(x - 6, 430, 12, 50);
            tree.fillStyle(0x228B22);
            tree.fillTriangle(x, 350, x - 35, 450, x + 35, 450);
            tree.fillStyle(0x32CD32);
            tree.fillTriangle(x, 320, x - 28, 400, x + 28, 400);
        }

        // Title
        this.add.text(400, 40, 'Forest', {
            fontSize: '38px',
            fontFamily: 'Gotham',
            color: '#ffffff',
            stroke: '#006400',
            strokeThickness: 4
        }).setOrigin(0.5);

        addSceneTransition(this);
    }
}
