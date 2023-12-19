import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { APIGatewayProxyResult, APIGatewayProxyEvent, Context } from 'aws-lambda'
import { postSpaces } from './PostSpaces';


const dbClient = new DynamoDBClient({})

// Handler
async function handler(event, ApiGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {


    let message: string;

    try {
        switch (event.httpMethod) {
            case 'GET':
                message = 'Hello from GET'
                break;
                message = 'Hello from POST'
            case 'POST':
                const response = postSpaces(event, dbClient)
                return response;
            default:
    
                break;
        }
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify(error.message)
        }
       
    }

    // Return response
    const response: APIGatewayProxyResult = {
        statusCode: 200,
        body: JSON.stringify(message)
        }

    return response;
}
export { handler } 