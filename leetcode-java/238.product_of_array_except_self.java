class Solution {
    public int[] productExceptSelf(int[] nums) {
      int[] products = new int[nums.length];
      Arrays.fill(products, 1);

      int leftProduct = 1;
      int rightProduct = 1;

      for (int left = 0; left < nums.length; left++) {
        int right = nums.length - 1 - left;

        products[left] = leftProduct * products[left];
        products[right] = rightProduct * products[right];
        
        leftProduct = leftProduct * nums[left];
        rightProduct = rightProduct * nums[right];
      }

      return products;
    }
}