/**
 * Merge sort implementation.
 * @author oprohonnyi@gmail.com
 * @license Apache-2.0
 */

/*
 * Algorithm:
 * # split in half
 * m = n / 2
 *
 * # recursive sorts
 * sort a[1..m]
 * sort a[m+1..n]
 *
 * # merge sorted sub-arrays using temp array
 * b = copy of a[1..m]
 * i = 1, j = m+1, k = 1
 * while i <= m and j <= n,
 *     a[k++] = (a[j] < b[i]) ? a[j++] : b[i++]
 *     ? invariant: a[1..k] in final position
 * while i <= m,
 *     a[k++] = b[i++]
 *     ? invariant: a[1..k] in final position
 */

var sortMerge = function (arr) {
    function _merge(left, right, arr) {
        var a = 0;

        while (left.length && right.length) {
            arr[a++] = (right[0] < left[0]) ? right.shift() : left.shift();
        }
        while (left.length) {
            arr[a++] = left.shift();
        }
        while (right.length) {
            arr[a++] = right.shift();
        }
    }

    var tmp = arr.slice(),
        len = arr.length;

    if (len === 1) { return; }

    var m = Math.floor(len / 2),
        tmp_l = tmp.slice(0, m),
        tmp_r = tmp.slice(m);

    sortMerge(tmp_l, arr.slice(0, m), m);
    sortMerge(tmp_r, arr.slice(m), len - m);
    _merge(tmp_l, tmp_r, arr);
};

console.groupCollapsed("Efficient sorts");

console.info("Merge sort");

var arr = [3, 5, 1, 9, 0, -5, 17];
console.log("init array:", arr);

sortMerge(arr);
console.log("result array:", arr);