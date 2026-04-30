const SCENE_ORDER = ['ForestScene', 'OceanScene', 'DesertScene', 'SpaceScene', 'CityScene', 'GameScene'];

function preload() {}

function addSceneTransition(scene) {
    const currentIndex = SCENE_ORDER.indexOf(scene.scene.key);
    const isLast = currentIndex === SCENE_ORDER.length - 1;
    const nextScene = SCENE_ORDER[(currentIndex + 1) % SCENE_ORDER.length];

    let text = undefined;
    if (isLast) {
       text = scene.add.text(400, 540, 'Press ENTER to restart', {
            fontSize: '32px',
            fontFamily: 'Gotham',
            color: '#ff0000',
            stroke: '#000000',
            strokeThickness: 3
        }).setOrigin(0.5);
    } else {
       text = scene.add.text(400, 540, 'Press ENTER for next scene', {
            fontSize: '32px',
            fontFamily: 'Gotham',
            color: '#ff0000',
            stroke: '#000000',
            strokeThickness: 3
        }).setOrigin(0.5);
    }

    scene.tweens.add({
        targets: text,
        alpha: 0.4,
        duration: 900,
        yoyo: true,
        repeat: -1
     });
    scene.cameras.main.fadeIn(800, 0, 0, 0);

    scene.input.keyboard.addCapture('ENTER');

    scene.transitioning = false;
    scene.input.keyboard.on('keydown-ENTER', () => {
        if (scene.transitioning) return;
        scene.transitioning = true;
        scene.cameras.main.fadeOut(600, 0, 0, 0);
        scene.cameras.main.once('camerafadeoutcomplete', () => {
            scene.scene.start(nextScene);
        });
    });
}
