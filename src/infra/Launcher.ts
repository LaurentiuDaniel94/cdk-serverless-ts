import { App } from "aws-cdk-lib";
import { DataStack } from "./stacks/DataStack";
import { LambdaStack } from "./stacks/LambdaStack";
import { ApiGatewayStack } from "./stacks/ApiGatewayStack";


const app = new App();
const dataStack = new DataStack(app, 'DataStack');

const lambdaStack = new LambdaStack(app, 'LambdaStack', {
    dynamoTable: dataStack.dynamoTable 
});

new ApiGatewayStack(app, 'ApiGatewayStack', {
    helloLambdaIntegration: lambdaStack.helloLambdaIntegration,
});
