const SCENE_ORDER = ['ForestScene', 'OceanScene', 'DesertScene', 'SpaceScene', 'CityScene'];

function preload() {}

function addSceneTransition(scene) {
    const currentIndex = SCENE_ORDER.indexOf(scene.scene.key);
    const isLast = currentIndex === SCENE_ORDER.length - 1;
    const nextScene = SCENE_ORDER[(currentIndex + 1) % SCENE_ORDER.length];

    if (isLast) {
        const restartText = scene.add.text(400, 540, 'Press SPACE to restart', {
            fontSize: '20px',
            fontFamily: 'Gotham',
            color: '#AABBEE',
            stroke: '#000000',
            strokeThickness: 3
        }).setOrigin(0.5);

        scene.tweens.add({
            targets: restartText,
            alpha: 0.4,
            duration: 900,
            yoyo: true,
            repeat: -1
        });
    } else {
        scene.add.text(400, 540, 'Press SPACE for next scene', {
            fontSize: '20px',
            fontFamily: 'Gotham',
            color: '#AABBEE',
            stroke: '#000000',
            strokeThickness: 3
        }).setOrigin(0.5);
    }

    scene.cameras.main.fadeIn(800, 0, 0, 0);

    scene.transitioning = false;
    scene.input.keyboard.on('keydown-SPACE', () => {
        if (scene.transitioning) return;
        scene.transitioning = true;
        scene.cameras.main.fadeOut(600, 0, 0, 0);
        scene.cameras.main.once('camerafadeoutcomplete', () => {
            scene.scene.start(nextScene);
        });
    });
}
