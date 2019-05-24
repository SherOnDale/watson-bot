const AssistantV1 = require('ibm-watson/assistant/v1');
require('dotenv').config();

const service = new AssistantV1({
  version: process.env.API_VERSION,
  iam_apikey: process.env.API_KEY,
  url: process.env.API_URL
});

service
  .message({
    workspace_id: process.env.WORKSPACE_ID,
    input: { text: 'Hello' }
  })
  .then(res => {
    console.log(JSON.stringify(res, null, 2));
  })
  .catch(err => {
    console.log(err);
  });
