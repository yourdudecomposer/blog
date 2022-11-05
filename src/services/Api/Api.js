
const Api = {

    url: 'https://blog.kata.academy/api/',
    limit: 20,
    getArticles: async (ofset = 0) => {

        let response = await fetch(`${Api.url}articles/?limit=${Api.limit}&offset=${ofset}`);
        return response.json();

    }

}
export default Api;