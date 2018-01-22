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