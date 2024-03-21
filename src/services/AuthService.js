

export const login = () =>
    fetch(
        `http://localhost:8080/auth`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }
    )