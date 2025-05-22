import { placeGoal } from './goalHandler'
import { placeKey } from './keyHandler'
import { placeDoor } from './doorHandler'
import { TILE_INDEX } from './tileConstants'

export function buildLabyrint(scene, layout) {
  const wallGroup = scene.physics.add.staticGroup();
  const tileSize = 64;

  for (let row = 0; row < layout.length; row++) {
    for (let col = 0; col < layout[row].length; col++) {
      const tile = layout[row][col];
      const x = col * tileSize + tileSize / 2;
      const y = row * tileSize + tileSize / 2;

      // Visa alltid ett golv
      //scene.add.image(x, y, 'tiles', TILE_INDEX.FLOOR).setScale(4);

      if (tile === 1) {
        const wall = wallGroup.create(x, y, 'wall').setScale(1)
        wall.refreshBody();
      } else if (tile === 2) {
        placeGoal(scene, x, y);
      } else if (tile === 3) {
        placeKey(scene, x, y);
      } else if (tile === 4) {
        placeDoor(scene, x, y);
      }
    }
  }

  scene.physics.add.collider(scene.bunny, wallGroup);
  return wallGroup;
}
  