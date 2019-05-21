class Github {
    constructor(){
        this.client_id = 'e382feeff988165122f4';
        this.client_secret = '9e3b1f97194193a247d53c97e9d3bc7d0ceb8314';
        this.repos_count = 5;
        this.repos_sort = 'create: asc';
    }
    async getUser(user) { //Kaylangan e init ito sa app.js
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=$sort=${this.repos_sort}$client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        };
    }
   
}