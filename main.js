const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#000000',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [ForestScene, OceanScene, DesertScene, SpaceScene, CityScene, GameScene]
};

const game = new Phaser.Game(config);

