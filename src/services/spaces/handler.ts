import { APIGatewayProxyResult, APIGatewayProxyEvent, Context } from 'aws-lambda'
import { v4 } from 'uuid';
import { S3Client, ListBucketsCommand } from '@aws-sdk/client-s3';




async function handler(event, ApiGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {


    let message: string;

    switch (event.httpMethod) {
        case 'GET':
            message = 'Hello from GET'
            break;
            message = 'Hello from POST'
        case 'POST':
    
        default:

            break;
    }

    const response: APIGatewayProxyResult = {
        statusCode: 200,
        body: JSON.stringify(message)
        }

    return response;
}
export { handler } 