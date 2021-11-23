/* Amplify Params - DO NOT EDIT
	API_SHUSHEN_GRAPHQLAPIENDPOINTOUTPUT
	API_SHUSHEN_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
var AWS = require("aws-sdk");
var docClient = new AWS.DynamoDB.DocumentClient();
exports.handler = (event) => {
  //eslint-disable-line
  console.log(JSON.stringify(event, null, 2));
  event.Records.forEach((record) => {
    console.log("record.eventName", record.eventName);
    console.log("DynamoDB Record: %j", record.dynamodb);
    // let date = new Date();
    // let params = {
    //   TableName: process.env.FORUMPOSTTABLE,
    //   Key: {
    //     "id": record.dynamodb.NewImage.postID,
    //   },
    //   UpdateExpression: "set lastCommentAt = :l",
    //   ExpressionAttributeValues: {
    //     ":l": { S: date.toISOString() },
    //   },
    //   ReturnValues: "UPDATED_NEW",
    // };
    // console.log("params", params);
    // console.log("Updating the item...");
    // docClient.update(params, function (err, data) {
    //   if (err) {
    //     console.error(
    //       "Unable to update item. Error JSON:",
    //       JSON.stringify(err, null, 2)
    //     );
    //   } else {
    //     console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
    //   }
    // });

    var params = {
      TableName: "Post-co6oukty4zabrmm7c47jb7rnii-dev",
    };
    docClient.query(params, function (err, data) {
      if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
      } else {
        console.log("Query succeeded.");
        data.Items.forEach(function (item) {
          console.log(" -", item.year + ": " + item.title);
        });
      }
    });
  });
};
