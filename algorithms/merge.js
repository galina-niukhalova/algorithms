var merge = function(nums1, m, nums2, n) {
  for(let i=m, j=0; i<m+n; i++, j++) {
    nums1[i] = nums2[j]
  }

  nums1.sort((a, b) => a - b)
};

let nums1 = [4, 0, 0, 0, 0, 0];
let nums2 = [1, 2, 3, 5, 6];
merge(nums1, 1, nums2, 5);

console.log(nums1);
