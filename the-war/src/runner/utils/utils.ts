export const getDistance = function (p1, p2) {
    let dep = Math.sqrt(Math.pow((p1[0] - p2[0]), 2) + Math.pow((p1[1] - p2[1]), 2));
    return dep;
}