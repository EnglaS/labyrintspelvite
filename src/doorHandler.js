export function placeDoor(scene, x, y) {
  const door = scene.physics.add.image(x, y, 'door').setScale(1)
  door.setSize(64, 64).setOffset(0, 0).refreshBody();

  if (!scene.doors) scene.doors = [];
  scene.doors.push(door);

  scene.physics.add.overlap(scene.bunny, door, () => {
    if (!scene.hasKey) {
      scene.bunny.setVelocity(0);
      const offset = 10;
      if (scene.cursors.left.isDown) scene.bunny.x += offset;
      if (scene.cursors.right.isDown) scene.bunny.x -= offset;
      if (scene.cursors.up.isDown) scene.bunny.y += offset;
      if (scene.cursors.down.isDown) scene.bunny.y -= offset;
      return;
    }

    door.destroy();
    scene.add.text(x - 20, y - 40, 'öppen!', {
      fontSize: '16px',
      fill: '#00ff88'
    });
  }, null, scene);

  return door;
}