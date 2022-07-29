import express from "express";
import {google} from "googleapis";
import reports from '../controllers/reports.js';
import fs from "fs"
import {authorize} from "../controllers/googleAuth.js"
import updateRequestBody from "../controllers/updateRequestBody.js";
import jiraFieldsData from "../controllers/jiraFieldsData.js";

const router = express.Router();

router.route("/jira/reports")
.get( (req, res)=> {

    // Load client secrets from a local file.
    fs.readFile('credentials.json', (err, content) => {
        if (err) return console.log('Error loading client secret file:', err);
        // Authorize a client with credentials, then call the Google Docs API.
        authorize(JSON.parse(content), fileUpdate);
    });

    const fileUpdate = async (auth) => {
        const docs = google.docs({version: 'v1', auth});
        const drive = google.drive({version: 'v3', auth});
    
        // data response from reports
        const reportsResponse = await reports(); 
        
        // Storing reportResponse into an object
        const fieldsData = jiraFieldsData(reportsResponse)

        // Get current month and append it to new copied file name
        let currentMonth = new Date().toLocaleDateString('en-GB', { month:"long"});
    
        // Setting copyFileResponse call requestBody
        const copyFileRequest = {
        name: `Daemon-Monthly-Customer-Report-${fieldsData.account.value}(${fieldsData.engID.value})-(${currentMonth})`,
        parents: ["folder ID"]
        };

        
        try{

            // Get a list of files in the specified folder
            let getFilesInFolder = await drive.files.list({
                pageSize: 10,
                fields: 'nextPageToken, files(id, name)',
                q: `'folder ID' in parents and name = '${copyFileRequest.name}' and trashed=false`,
                spaces: 'drive'
            })

            // Checking if the file we want to create already exist in the specified folder
            if(getFilesInFolder.data.files.length){
                console.log("File Is Present In The Folder")
                res.status(400).json({Error_Message: "File Is Present In The Folder"})
            }else{
                
                // The initial call to copy the specified doc.
                const copyFileResponse = await drive.files.copy({
                    fileId: "fileId",
                    requestBody: copyFileRequest
                });
        
        
                // now that we copied the doc, let's add content using the
                // documentId returned from the copyFileResponse call.
                const updateResponse = await docs.documents.batchUpdate({
                documentId: copyFileResponse.data.id,
                requestBody: updateRequestBody(fieldsData)
            
                });
                // console.log(`Response from updateDoc: ${updateResponse.data}`); 
                console.log(`New File Id: ${updateResponse.data.documentId}`)
                console.log(`New File Name: ${copyFileResponse.data.name} Link: https://docs.google.com/document/d/${copyFileResponse.data.id}/edit`)
                res.status(200).json({New_Created_Document: ` https://docs.google.com/document/d/${copyFileResponse.data.id}/edit`});
            }

        }catch(err){
            res.status(500).json({ Error: err.message });
        }

    }

})

export default router

        