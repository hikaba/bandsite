export class BandSiteApi {
    constructor(apiKey){
        this.apikey = apiKey || "fb949080-b7ee-4573-9c43-96f008c248a0";
        this.baseURL = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";    
    }

    async getComments(){
        const response = await axios.get(`${this.baseURL}comments?api_key=${this.apiKey}`);
        const userComments = response.data;
        return userComments.reverse();
    }

    async postComment(newComment){
        const response = await axios.post(`${this.baseURL}comments?api_key=${this.apiKey}`, newComment);
        return response.data;
    }
    async getShows(){
        const response = await axios.get(`${this.baseURL}showdates?api_key=${this.apikey}`);
        return response.data;
    }
}