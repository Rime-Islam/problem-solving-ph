// PW2.01.01 Two Sum
function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.hasOwnProperty(complement)) {
        return [map[complement], i];
    }

    map[nums[i]] = i;
  }

  throw new Error("No solution found");
}
console.log(twoSum([2, 7, 11, 15], 9));

// PW2.01.02 3Sum
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1, right = nums.length - 1;

    while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];

        if(sum === 0) {
            result.push([nums[i], nums[left], nums[right]]);
            left++;
            right--;

            while (left < right && nums[left] === nums[left - 1]) left++;
            while (left < right && nums[right] === nums[right - 1]) right--;
        } else if (sum < 0) {
            left++;
        } else {
            right--;
        }
    }
  }
  return result;
}
console.log(threeSum([-1,0,1,2,-1,-4]));

// PW2.01.03 Remove Duplicates From Sorted Array
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}

let nums1 = [1, 1, 2];
console.log(removeDuplicates(nums1));
console.log(nums1);

// PW2.01.04 Next Permutation