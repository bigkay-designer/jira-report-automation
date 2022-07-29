export default (fieldsData) => {
    const requestBodyObj = {
        requests: [
        {
            replaceAllText: {
            containsText: {
                text: '{{customer-name}}',
                matchCase: true,
            },
            replaceText: fieldsData.account.value,
            },
        },
        {
            replaceAllText: {
            containsText: {
                text: '{{engID}}',
                matchCase: true,
            },
            replaceText: fieldsData.engID.value,
            },
        },
        {
            replaceAllText: {
            containsText: {
                text: '{{overall-relationship}}',
                matchCase: true,
            },
            replaceText: fieldsData.overallRelationship.value,
            },
        },
        {
            replaceAllText: {
            containsText: {
                text: '{{quality}}',
                matchCase: true,
            },
            replaceText: fieldsData.deliverablesScore.value,
            },
        },
        {
            replaceAllText: {
            containsText: {
                text: '{{delivering}}',
                matchCase: true,
            },
            replaceText: fieldsData.deliveryScore.value,
            },
        },
        {
            replaceAllText: {
            containsText: {
                text: '{{communication}}',
                matchCase: true,
            },
            replaceText: fieldsData.commsScore.value,
            },
        },
        {
            replaceAllText: {
            containsText: {
                text: '{{doing-well}}',
                matchCase: true,
            },
            replaceText: fieldsData.positives,
            },
        },
        {
            replaceAllText: {
            containsText: {
                text: '{{improve-on}}',
                matchCase: true,
            },
            replaceText: fieldsData.improvements,
            },
        },
        {
            replaceAllText: {
            containsText: {
                text: '{{feedback}}',
                matchCase: true,
            },
            replaceText: fieldsData.feedback,
            },
        },
        {
            replaceAllText: {
            containsText: {
                text: '{{notes}}',
                matchCase: true,
            },
            replaceText: fieldsData.notes,
            },
        },
        ]
    };
    return requestBodyObj;
}