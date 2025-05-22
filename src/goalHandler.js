export function placeGoal(scene, x, y) {
  const goal = scene.physics.add.image(x, y, 'goal').setScale(1)
  goal.refreshBody();

  scene.physics.add.overlap(scene.bunny, goal, () => {
    scene.handleLevelComplete();
  }, null, scene);

  scene.goal = goal;
  return goal;
}