// mazeUtils.js
export function findTilePositions(layout, targetValue) {
    const positions = [];
  
    for (let row = 0; row < layout.length; row++) {
      for (let col = 0; col < layout[row].length; col++) {
        if (layout[row][col] === targetValue) {
          positions.push({ row, col });
        }
      }
    }
  
    return positions;
  }