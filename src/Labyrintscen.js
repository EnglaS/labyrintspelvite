import Phaser from 'phaser'
import { buildLabyrint } from './labyrintBuilder'
import { level1, level2 } from './levels'
import { createBackToMenuButton, createNextLevelButton } from './uiButtons'

export default class LabyrintScen extends Phaser.Scene {
    constructor() {
      super('LabyrintScen');
    }
  
    preload() {
      this.load.image('bunny', 'bunny.png')
      this.load.image('wall', 'wall.png')
    }
  
    create() {
      this.currentLevel = 1;
    
      // Skapa spelaren först
      this.bunny = this.physics.add.image(100, 100, 'bunny').setScale(0.15);
      this.bunny.setCollideWorldBounds(true);
    
      // Tangentstyrning
      this.cursors = this.input.keyboard.createCursorKeys();
    
      // Instruktionstext
      this.add.text(20, 20, 'Använd piltangenterna för att röra dig.', {
        fontSize: '18px',
        fill: '#ffffff'
      });
    
      // Skapa knappen för att byta nivå
      createNextLevelButton(this, () => {
        this.currentLevel = this.currentLevel === 1 ? 2 : 1;
        this.loadLevel();
        this.bunny.setPosition(100, 100);
      })
    
      // Ladda första nivån efter att bunny är skapad
      this.loadLevel()

      createBackToMenuButton(this)
    }

    loadLevel() {
      if (this.walls?.clear) {
        try {
          this.walls.clear(true, true);
        } catch (err) {
          console.warn('Kunde inte rensa väggar:', err);
        }
      }
    
      const layout = this.currentLevel === 1 ? level1 : level2;
      const newWalls = buildLabyrint(this, layout);
    
      if (newWalls?.clear) {
        this.walls = newWalls;
      } else {
        console.warn('Byggd labyrint returnerade ingen giltig vägggrupp:', newWalls);
        this.walls = null;
      }
    }
  
    update() {
      this.bunny.setVelocity(0);
  
      if (this.cursors.left.isDown) this.bunny.setVelocityX(-150);
      else if (this.cursors.right.isDown) this.bunny.setVelocityX(150);
  
      if (this.cursors.up.isDown) this.bunny.setVelocityY(-150);
      else if (this.cursors.down.isDown) this.bunny.setVelocityY(150);
    }
  }