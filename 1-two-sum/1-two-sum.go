func twoSum(nums []int, target int) []int {
    dict := make(map[int]int)
    
    for index, value := range nums {
        if diffIndex, ok := dict[target - value]; ok {
            return []int{diffIndex, index}
        } else {
            dict[value] = index;
        }
    }
    
    return nil;
}