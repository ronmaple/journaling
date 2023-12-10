// Not the best solution, compared to the one in JS
// But this is comparatively easier to understand and remember
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> output = new ArrayList<>();
        Map<List<Integer>, Boolean> seen = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
          int left = i + 1;
          int right = nums.length - 1;

          while (left < right) {
            int sum = nums[i] + nums[left] + nums[right];
            List<Integer> numSet = Arrays.asList(nums[i], nums[left], nums[right]);
            if (sum == 0 && !seen.containsKey(numSet)) {
              seen.put(numSet, true);
              output.add(numSet);
            }
            else {
              if (sum > 0) {
                right--;
              } else {
                left++;
              }
            }
          }
        }

        return output;
    }
}