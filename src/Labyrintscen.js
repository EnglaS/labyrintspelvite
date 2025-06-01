import Phaser from 'phaser'
import { buildLabyrint } from './labyrintBuilder'
import { level1, level2, level3 } from './levels'
import { createBackToMenuButton, createNextLevelButton } from './uiButtons'

export default class LabyrintScen extends Phaser.Scene {
    constructor() {
      super('LabyrintScen');
    }
  
    preload() {
      this.load.image('bunny', 'bunny.png')
      this.load.image('wall', 'wall.png')
      this.load.image('goal', 'goal.png')
      this.load.image('key', 'key.png')
      this.load.image('door', 'door.png')
      // this.load.spritesheet('tiles', 'tilesheet.png', {
      //   frameWidth: 16, // enligt Kenney-dokumentation
      //   frameHeight: 16,
      //   spacing: 1
      // })
    }
  
    create() {
      this.currentLevel = 1;
      this.isLoadingLevel = false;
      this.hasKey = false;
    
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
    
      // Skapa knappar
      createNextLevelButton(this, () => {
        this.currentLevel = (this.currentLevel % 3) + 1;
        this.bunny.setPosition(100, 100);
        this.loadLevel();
      });
    
      createBackToMenuButton(this);
    
      // FLYTTAD HIT: Nu är bunny garanterat definierad
      this.loadLevel();
    }

    loadLevel() {
      if (this.isLoadingLevel) {
        console.warn('Avbryter: nivå laddas redan');
        return;
      }
    
      this.isLoadingLevel = true;
    
      if (this.walls && typeof this.walls.clear === 'function') {
        try {
          this.walls.clear(true, true);
        } catch (err) {
          console.warn('Kunde inte rensa väggar:', err);
        }
      } else {
        console.warn('Varning: this.walls fanns inte eller saknade .clear:', this.walls);
      }
    
      if (this.goal) {
        this.goal.destroy();
        this.goal = null;
      }
      if (this.doors) {
        this.doors.forEach(d => d.destroy());
        this.doors = [];
      }
      if (this.keys) {
        this.keys.forEach(k => k.destroy());
        this.keys = [];
      }
    
      const layout = this.currentLevel === 1 ? level1
                   : this.currentLevel === 2 ? level2
                   : level3;
    
      this.walls = buildLabyrint(this, layout);
    
      this.isLoadingLevel = false;
    }

    handleLevelComplete() {
      // Stoppa spelaren och pausa fysik
      this.bunny.setVelocity(0);
      this.physics.pause();
    
      // Visa meddelande
      this.add.text(300, 250, 'Mål uppnått!', {
        fontSize: '24px',
        fill: '#00ff00',
        backgroundColor: '#000000',
        padding: { x: 10, y: 5 }
      });
    
      // Vänta 2 sekunder innan du byter nivå
      this.time.delayedCall(2000, () => {
        // Uppdatera till nästa nivå
        this.currentLevel = (this.currentLevel % 3) + 1;
    
        // Flytta spelaren först
        this.bunny.setVelocity(0); // för säkerhets skull
        this.bunny.setPosition(100, 100);
    
        // 🟢 Starta fysiksystemet igen innan du bygger upp nya objekt
        this.physics.resume();
    
        // Ladda nästa nivå
        this.loadLevel();
      });
    }
  
    update() {
      this.bunny.setVelocity(0);
  
      if (this.cursors.left.isDown) this.bunny.setVelocityX(-150);
      else if (this.cursors.right.isDown) this.bunny.setVelocityX(150);
  
      if (this.cursors.up.isDown) this.bunny.setVelocityY(-150);
      else if (this.cursors.down.isDown) this.bunny.setVelocityY(150);
    }
  }