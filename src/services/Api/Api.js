
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
        if (response.status === 200) {
            return response.json();
        }
        let res = await response.json()
         throw new Error(JSON.stringify(res.errors))
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
    updateUser = async (data) => {
        const response = await fetch(`${this.url}user`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + JSON.parse(localStorage.getItem('user')).token
            },
            body: JSON.stringify(data) 
        });
        if (response.ok)  return response.json();
        else throw new Error('Can\'t update')
    }

    geteUser = async () => {
        const response = await fetch(`${this.url}user`, {
            headers: {
                'Authorization': 'Token ' + JSON.parse(localStorage.getItem('user')).token
            },
        });
        if (response.ok)  return response.json();
        else throw new Error('Can\'t get user')
    }
}



export default new Api();