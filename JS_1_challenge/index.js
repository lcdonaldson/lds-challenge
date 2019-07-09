const findShortestWords = sentence => {
    let result = [];

    // 1. Format string before making array. Remove punctuation.
    // 2. Turn into array of strings.
    // 3. Sort words by length.
    // 4. Find length of shortest word.
    // 5. Filter out words that have the same length as the shortest word and alphabetize those words.

    const format = sentence.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();
    const strToArr = format.split(" ");
    const sortWords = strToArr.sort((a, b) => b.length - a.length).reverse();
    const firstWord = sortWords[0].length;
    const shortestWords = sortWords.filter(word => word.length === firstWord).sort();
    return shortestWords;

    // I didn't mess with this code because the challenge only
    // specified the logic above.
    var node = document.createElement("p");
    node.innerHTML = `${sentence} = ${JSON.stringify(result, null, 4)}`
    resultWindow = document.getElementById("resultWindow");
    resultWindow.append(node);
    if (result.length > 0) {
        resultWindow.scrollIntoView();
    }
}
//tests
// I added console.logs on each phrase to make it easy to see at one time.
console.log(findShortestWords("The quick brown fox jumped over the lazy dogs back."));

console.log(findShortestWords("I think the solution is fairly obvious."));

console.log(findShortestWords("Chase two rabbits, catch none."));

console.log(findShortestWords("We become what we think about."));