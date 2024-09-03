let palindrome = (str) => str.toLowerCase().match(/[^\W_]/ig).reverse().join() === str.toLowerCase().match(/[^\W_]/ig).join() ? true : false;

document.getElementById("checkButton").addEventListener("click", () => {
    const word = document.getElementById("wordInput").value;
    const result = palindrome(word) ? `"${word}" is a palindrome!` : `"${word}" is NOT a palindrome!`;
    document.getElementById("result").textContent = result;
})