class Solution {
    public int[] productExceptSelf(int[] nums) {
      int[] products = new int[nums.length];
      Arrays.fill(products, 1);

      int[] leftProduct = new int[]{1};
      int[] rightProduct = new int[]{1};

      for (int left = 0; left < nums.length; left++) {
        int right = nums.length - 1 - left;

        products[left] = leftProduct[0] * products[left];
        products[right] = rightProduct[0] * products[right];
        
        leftProduct[0] = leftProduct[0] * nums[left];
        rightProduct[0] = rightProduct[0] * nums[right];
      }

      return products;
    }
}