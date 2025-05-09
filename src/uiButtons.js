export function createNextLevelButton(scene, onClickCallback) {
    return scene.add.text(650, 20, 'Byt nivå', {
      fontSize: '18px',
      fill: '#00ffff',
      backgroundColor: '#000000',
      padding: { x: 10, y: 5 }
    })
    .setInteractive()
    .on('pointerdown', onClickCallback);
}

export function createBackToMenuButton(scene) {
    return scene.add.text(20, 550, 'Till meny', {
      fontSize: '16px',
      fill: '#ffffff',
      backgroundColor: '#ff4444',
      padding: { x: 10, y: 5 }
    })
    .setInteractive()
    .on('pointerdown', () => {
      scene.scene.start('MenuScen') // Växla till menyn
    })
}