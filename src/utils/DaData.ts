const url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const token = "452211a69a52fe610c2215669a658b07b225ca1d";

export async function getAddress(query: string) {
    const options: RequestInit = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({query: query})
    }

    return fetch(url, options)
        .then(response => response.json())
        .catch(error => { throw Error(error) });
}
