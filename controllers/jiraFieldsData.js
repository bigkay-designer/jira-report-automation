export default (reportsResponse) => {
    const fieldsData = {
        account: reportsResponse.data.issues[0].fields.customfield_11096, 
        engID: reportsResponse.data.issues[0].fields.customfield_11198, 
        overallRelationship: reportsResponse.data.issues[0].fields.customfield_11199, 
        deliverablesScore: reportsResponse.data.issues[0].fields.customfield_11200, 
        deliveryScore: reportsResponse.data.issues[0].fields.customfield_11201, 
        commsScore: reportsResponse.data.issues[0].fields.customfield_11202, 
        positives : reportsResponse.data.issues[0].fields.customfield_11203,
        improvements : reportsResponse.data.issues[0].fields.customfield_11204,
        feedback : reportsResponse.data.issues[0].fields.customfield_11205,
        notes : reportsResponse.data.issues[0].fields.customfield_11206
    }
    return fieldsData
}