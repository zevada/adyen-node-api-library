/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import Client from "../../client";
import { 
    GenerateClientKeyResponse,
    RestServiceError,
    ObjectSerializer
} from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";

export class ClientKeyMerchantLevelApi extends Service {

    private readonly API_BASEPATH: string = "https://management-test.adyen.com/v3";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Generate new client key
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param apiCredentialId {@link string } Unique identifier of the API credential.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link GenerateClientKeyResponse }
    */
    public async generateNewClientKey(merchantId: string, apiCredentialId: string, requestOptions?: IRequest.Options): Promise<GenerateClientKeyResponse> {
        const endpoint = `${this.baseUrl}/merchants/{merchantId}/apiCredentials/{apiCredentialId}/generateClientKey`
            .replace("{" + "merchantId" + "}", encodeURIComponent(String(merchantId)))
            .replace("{" + "apiCredentialId" + "}", encodeURIComponent(String(apiCredentialId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, GenerateClientKeyResponse>(
            resource,
            "",
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "GenerateClientKeyResponse");
    }
}
