
var Trie = function() {
    this.prefixBank = {};
    this.wordBank = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    this.wordBank[word] = true;
    
    for (let i = 1; i <= word.length; i++) {
        if (this.prefixBank[word.substring(0, i)]) {
            this.prefixBank[word.substring(0, i)].push(word);
        } else {
            this.prefixBank[word.substring(0, i)] = [word];
        }
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    return this.wordBank.hasOwnProperty(word);
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.prefixBank.hasOwnProperty(prefix);
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */