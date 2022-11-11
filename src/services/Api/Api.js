
class Api  {

    url= 'https://blog.kata.academy/api/';

    limit= 20;

    getArticles= async (ofset = 0) => {
        
        let response = await fetch(`${this.url}articles/?limit=${this.limit}&offset=${ofset}`);
        return response.json();
    }
    getArticle= async (slug) => {
        let response = await fetch(`${this.url}articles/${slug}`);
        return response.json();
    }

}
export default new Api();