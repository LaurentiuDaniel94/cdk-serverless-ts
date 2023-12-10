import { APIGatewayProxyResult, APIGatewayProxyEvent, Context } from 'aws-lambda'
import { v4 } from 'uuid';



async function handler(event, ApiGatewayProxyEvent, context: Context) {
    const response: APIGatewayProxyResult = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from Lambda, this is the id: ' + v4()
        })
    }
    console.log(event);
    return response;
}

export { handler } 