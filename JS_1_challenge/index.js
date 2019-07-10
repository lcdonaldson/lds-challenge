const findShortestWords = sentence => {
    // 1. Format string before making array. Remove punctuation.
    // 2. Turn into array of strings.
    // 3. Sort words by length.
    // 4. Find length of shortest word.
    // 5. Filter out words that have the same length as the shortest word and alphabetize those words.
    // 6. Push new data to empty array for final result.

    let result = [];
    const format = sentence.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();
    const strToArr = format.split(" ");
    const sortWords = strToArr.sort((a, b) => b.length - a.length).reverse();
    const firstWord = sortWords[0].length;
    const shortestWords = sortWords.filter(word => word.length === firstWord).sort();
    shortestWords.map(word => result.push(word));

    let node = document.createElement("p");
    node.innerHTML = `${sentence} = ${JSON.stringify(result,null,4)}`
    resultWindow = document.getElementById("resultWindow");
    resultWindow.append(node);
    if (result.length > 0) {
        resultWindow.scrollIntoView();
    }
}
//tests
findShortestWords("The quick brown fox jumped over the lazy dogs back.");

findShortestWords("I think the solution is fairly obvious.");

findShortestWords("Chase two rabbits, catch none.");

findShortestWords("We become what we think about.");