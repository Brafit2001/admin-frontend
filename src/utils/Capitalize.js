

const Capitalize = (word) => {
    const firstLetterCap = word.charAt(0).toUpperCase()
    const remainingLetters = word.slice(1)
    return (
        firstLetterCap + remainingLetters
    )
}


export default Capitalize;