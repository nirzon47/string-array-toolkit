function reverse(nums, left, right) {
	while (left < right) {
		let temp = nums[left]
		nums[left] = nums[right]
		nums[right] = temp

		left++
		right--
	}
}

function rotateArray() {
	const nums = document.getElementById('nums').value.split(' ')
	let k = document.getElementById('k').value
	const resultElement = document.getElementById('result')

	const n = nums.length
	k %= n

	reverse(nums, 0, n - 1)
	reverse(nums, 0, k - 1)
	reverse(nums, k, n - 1)

	resultElement.textContent = nums
}
