export function health(player) {
    if (player.health > 50) {
        return 'healthy';
    }
    if (player.health >= 15) {
        return 'wounded';
    }
    if (player.health > 0) {
        return 'critical';
    }
    return 'dead';
}

export function sortHeroes(list) {
    return list.sort((a, b) => b.health - a.health);
}
