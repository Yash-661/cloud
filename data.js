fetch('https://github.com/Yash-661/cloud/blob/main/data.json')
    .then((response) => {
            return response.json()
        })
    .then((data) => {
            // Work with JSON data here
            console.log(data)
        })
    .catch((err) => {
            // Do something for an error here
        })
