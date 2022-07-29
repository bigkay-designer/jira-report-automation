import axios from "axios";

// Url for Jira Rest API and we specified the project we want to target
let url = 'https://company-link/rest/api/2/search?jql=project=PDC&maxResults=100';

export default async () => {
    try {

        // Calling the Jira Rest API
        let response = await axios.get(url, {
            headers: {
                'Authorization': `Basic ${Buffer.from(
                    `your email:${process.env.JIRA_API_KEY}`
                ).toString('base64')}`,
                'Accept': 'application/json'
                }
        })
        console.log( `Response from reports: ${response.status} ${response.statusText}` )
        return (response)
        
    }catch (err){
        console.log(err)
    }
}
