
class Api {

    url = 'https://blog.kata.academy/api/';

    limit = 20;

    getArticles = async (ofset = 0) => {

        let response = await fetch(`${this.url}articles/?limit=${this.limit}&offset=${ofset}`);
        return response.json();
    }
    getArticle = async (slug) => {
        let response = await fetch(`${this.url}articles/${slug}`);
        return response.json();
    }

    registerUser = async (data) => {
        const response = await fetch(`${this.url}users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
        });
        return response.json();

    }

    loginUser = async (data) => {
        
        const response = await fetch(`${this.url}users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
        });
        if (response.ok)  return response.json();
        else throw new Error('Can\'t login')
    }

}
export default new Api();