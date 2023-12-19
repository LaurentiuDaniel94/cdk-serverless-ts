import {Stack, StackProps} from 'aws-cdk-lib';
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway';
import {Construct} from 'constructs'
interface ApiGatewayStackProps extends StackProps {
    spacesLambdaIntegration: LambdaIntegration
}

export class ApiGatewayStack extends Stack {

    constructor(scope: Construct, id: string, props: ApiGatewayStackProps) {
        super(scope, id, props)


        const api = new RestApi(this, 'ApiGateway');
        const apiGw = api.root.addResource('api-gw');
        apiGw.addMethod('GET',props.spacesLambdaIntegration);
        apiGw.addMethod('POST',props.spacesLambdaIntegration);
    }
}