export function getValidTeams(teams) {
  return teams.reduce((acc, currVal) => {
    if (!currVal) {
      return acc;
    }

    const isPlayer = Object.keys(currVal).find(key => currVal[key].color !== 'observer');

    if (isPlayer) {
      acc = acc.concat(currVal);
    }

    return acc;
  }, []);
}

export function formatMap(map) {
  return map.split('\\').filter(i => i !== 'Maps' && i !== 'FrozenThrone').join().split('.w3x')[0];
}

export function formatGameLength(millis) {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);

  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}