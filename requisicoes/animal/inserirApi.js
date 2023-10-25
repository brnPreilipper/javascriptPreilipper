fetch("http://cafepradev.com.br:21020/animals/insert", {
    method: "POST",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
        id: 4,
        name: "Gaia",
        species: "Dog",
        color: "Black",
        size: "big"
    })
})
    .then(response => response.json())
    .then(result => {
        console.log("Result: JSON");
        console.log(JSON.stringify(result, null, 4));
    })
    .catch((err) => {
        console.log(err);
    });