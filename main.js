const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#000000',
    scene: [ForestScene, OceanScene, DesertScene, SpaceScene, CityScene]
};

const game = new Phaser.Game(config);

