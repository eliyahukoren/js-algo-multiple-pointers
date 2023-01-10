class TrieNode {
	constructor(){
		this.children = new Array(25).fill().map(() => null);
		this.isWord = false;
	}
}

class Trie{
	constructor(){
		this.Tree = new TrieNode();
	}

	insert(s){
		let cur = this.Tree;
		let prev = null;

		for (let i of s){
			if (cur.children[this.index(i)] === null){
				cur.children[this.index(i)] = new TrieNode()
			}

			prev = cur;
			cur = cur.children[this.index(i)];
		}

		cur.isWord = true;
	}

	contains(s){
		let cur = this.Tree;
		cur.isWord = true;
		let prev = null;

		for (let i of s){
			if (cur.children[this.index(i)] === null || !cur.isWord){
				return false;
			}
			prev = cur;
			cur = cur.children[this.index(i)];
		}

		return true;
	}

	index(char){
		return char.charCodeAt(0) - "a".charCodeAt(0);
	}
}

class Helper {
	min(a, b){
		let aSum = 0;
		let bSum = 0;

		for(let i of a){
			aSum += i.charCodeAt(0);
		}

		for (let i of b) {
			bSum += i.charCodeAt(0);
		}

		return aSum < bSum ? a : b;
	}
}

class Solution {
	longestString(arr, n){
		let trie = new Trie();
		let min = new Helper().min;

		for(let s of arr){
			trie.insert(s);
		}

		let ans = ""

		for(let s of arr){
			if( trie.contains(s)){
				if(s.length > ans.length){
					ans = s;
				}else if(s.length === ans.length){
					ans = min(ans, s);
				}
			}
		}

		return ans;
	}
}

module.exports = {Solution}