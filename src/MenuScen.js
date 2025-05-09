import Phaser from 'phaser'

export default class MenuScen extends Phaser.Scene {
  constructor() {
    super('MenuScen')
  }

  create() {
    this.add.text(300, 150, 'Labyrintspel', {
      fontSize: '32px',
      fill: '#ffffff'
    })

    const startButton = this.add.text(330, 300, 'Starta spel', {
      fontSize: '24px',
      fill: '#00ffcc',
      backgroundColor: '#000000',
      padding: { x: 10, y: 5 }
    })
    .setInteractive()
    .on('pointerdown', () => {
      this.scene.start('LabyrintScen')  // Starta själva spelet
    })
  }
}