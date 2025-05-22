import Phaser from 'phaser'
import LabyrintScen from './Labyrintscen.js'
import MenuScen from './MenuScen.js'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#222222',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true
    }
  },
  scene: [MenuScen, LabyrintScen]
}

new Phaser.Game(config)