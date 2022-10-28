class Index {
    constructor() {
        var obj = { Username: '123', Password: '456' };
        var user = { Username: '123' };
        $.ajax({
            type: "POST",
            dataType: "json", //RESPONSE TYPE
            contentType: "application/json",
            url: 'https://localhost:7243/signin',
            data: JSON.stringify(obj)
            /*
            headers: {
                'Content-Type': 'application/json'
            }
            */
        }).then((resp) => {
            console.log(resp);
            $.ajax({
                type: "GET",
                dataType: "json", //RESPONSE TYPE
                contentType: "application/json",
                url: 'https://localhost:7243/claims',
                data: JSON.stringify(user),
                headers: {
                    Authorization: 'Bearer ' + resp.token
                },
            }).then((resp) => {
                console.log(resp);
            })
            $.ajax({
                type: "GET",
                dataType: "json", //RESPONSE TYPE
                contentType: "application/json",
                url: 'https://localhost:7243/username',
                data: JSON.stringify(user),
                headers: {
                    Authorization: 'Bearer ' + resp.token
                },
            }).then((resp) => {
                console.log(resp);
            })
            $.ajax({
                type: "GET",
                dataType: "json", //RESPONSE TYPE
                contentType: "application/json",
                url: 'https://localhost:7243/jwtid',
                data: JSON.stringify(user),
                headers: {
                    Authorization: 'Bearer ' + resp.token
                },
            }).then((resp) => {
                console.log(resp);
            })
        })

    }
}

$(() => {
    new Index();
})