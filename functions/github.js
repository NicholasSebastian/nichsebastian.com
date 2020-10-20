require('isomorphic-fetch');

const url = 'https://api.github.com/graphql';
const token = process.env.GITHUB_KEY;
const query = `
    query { 
        user(login: "NicholasSebastian") {
            repositories(last: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
                edges {
                    node {
                        name
                        description
                        createdAt
                        primaryLanguage {
                            name
                        }
                        url
                    }
                }
            } 
        }
    }`;

const cache = {
    lastFetch: 0,
    repos: []
}

async function getRepos() {
    const timeSinceLastFetch = Date.now() - cache.lastFetch;
    if (timeSinceLastFetch <= 1800000) 
        return cache.repos;

    const data = await fetch(url, {
        method: 'POST',
        headers: { 
            'Content-Type': "application/json",
            'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify({ query })
    })
    .then(res => res.json());

    const { edges } = data.data.user.repositories;
    const repos = edges.map(edge => {
        const { 
            name,
            description,
            createdAt,
            primaryLanguage,
            url
        } = edge.node;

        return {
            name: name.replace(/-/g, ' '),
            description,
            createdAt: createdAt.substr(0, 10).replace(/-/g, '/'),
            primaryLanguage: primaryLanguage && primaryLanguage.name,
            url
        };
    });

    cache.lastFetch = Date.now();
    cache.repos = repos;
    return repos;
}

module.exports.handler = async function(event, context, callback) {
    const repos = await getRepos();
    callback(null, {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(repos)
    });
}