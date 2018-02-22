/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var count = 0
    var was = []
    for (var i = 0; i < preferences.length; i++) {
        if (was.indexOf(i)==-1) {
        var j = preferences[i]
        var k = preferences[j-1]
        if (preferences[i] != preferences[j-1] && preferences[k-1] == i+1) {
                count ++
                was.push (i)
                was.push (j-1)
                was.push (k-1)
            }
        }
    }
    return count
}