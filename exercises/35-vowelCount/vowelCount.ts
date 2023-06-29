// Given a string s, return the number of vowels that s contains
// for the purposes of this excercise, vowels are [a, e, i, o, u] (but not y)
// Example
// "apple" -> 2
// "aaa" -> 3
// "bbb" -> 0

export const vowelCount = (s: string): number => {
let vowels = "aeiou".split('')
let sol = 0;
for(let x of s){
	if (vowels.includes(x))
		sol++;
}
return sol;
};
