## Jira Rest API to automate report extraction to Google Docs 

NodeJs application that automates report extraction from Jira issues to a template Google doc. 




## Used APIs

<!-- Google drive API -->
https://developers.google.com/drive/api/v3/reference

<!-- Google docs API -->
https://developers.google.com/docs/api/reference/rest/

<!-- Jira API -->
https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/


**Create Jira API key**

https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/

**Create Google OAuth 2.0**

https://support.google.com/cloud/answer/6158849?hl=en

## Running the application

Before you run the application, save your Google OAuth credentials in the root folder and name the file **credentials.json**

Add .env file to your root and safe the Jira API key there. Name it (JIRA_API_KEY=)

Make sure you add your own files and folders in the udpdateDoc.js file. 

In reports.js file update the Jira url and add your email to the axios headers. 


## Code to run

git clone https://github.com/bigkay-designer/jira-report-automation.git

cd jira-report-automation

npm install

npm run server