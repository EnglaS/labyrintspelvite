export function buildLabyrint(scene, layout) {
    const wallGroup = scene.physics.add.staticGroup();
    const tileSize = 64;
  
    for (let row = 0; row < layout.length; row++) {
      for (let col = 0; col < layout[row].length; col++) {
        if (layout[row][col] === 1) {
          wallGroup.create(col * tileSize + tileSize / 2, row * tileSize + tileSize / 2, 'wall');
        }
      }
    }
  
    scene.physics.add.collider(scene.bunny, wallGroup);
    return wallGroup
  }

  