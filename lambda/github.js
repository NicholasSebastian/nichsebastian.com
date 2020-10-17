module.exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            msg: "test"
        })
    }
}

// later to fetch, insert:
// fetch("/.netlify/functions/github")
// .then(response = > response.json())
// .then(data => console.log(data));