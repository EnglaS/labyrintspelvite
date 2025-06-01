export function placeKey(scene, x, y) {
  const key = scene.physics.add.image(x, y, 'key').setScale(1)
  key.refreshBody();

  if (!scene.keys) scene.keys = [];
  scene.keys.push(key);

  scene.physics.add.overlap(scene.bunny, key, () => {
    key.destroy();
    scene.hasKey = true;

    scene.add.text(x - 20, y - 40, 'nyckel!', {
      fontSize: '18px',
      fill: '#ffff00'
    });
  }, null, scene);

  return key;
}