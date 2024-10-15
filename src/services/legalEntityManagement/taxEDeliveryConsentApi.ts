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
    CheckTaxElectronicDeliveryConsentResponse,
    SetTaxElectronicDeliveryConsentRequest,
    ObjectSerializer
} from "../../typings/legalEntityManagement/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";

export class TaxEDeliveryConsentApi extends Service {

    private readonly API_BASEPATH: string = "https://kyc-test.adyen.com/lem/v3";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Check the status of consent for electronic delivery of tax forms
    * @param id {@link string } The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CheckTaxElectronicDeliveryConsentResponse }
    */
    public async checkStatusOfConsentForElectronicDeliveryOfTaxForms(id: string, requestOptions?: IRequest.Options): Promise<CheckTaxElectronicDeliveryConsentResponse> {
        const endpoint = `${this.baseUrl}/legalEntities/{id}/checkTaxElectronicDeliveryConsent`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, CheckTaxElectronicDeliveryConsentResponse>(
            resource,
            "",
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "CheckTaxElectronicDeliveryConsentResponse");
    }

    /**
    * @summary Set the consent status for electronic delivery of tax forms
    * @param id {@link string } The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization.
    * @param setTaxElectronicDeliveryConsentRequest {@link SetTaxElectronicDeliveryConsentRequest } 
    * @param requestOptions {@link IRequest.Options }
    */
    public async setConsentStatusForElectronicDeliveryOfTaxForms(id: string, setTaxElectronicDeliveryConsentRequest: SetTaxElectronicDeliveryConsentRequest, requestOptions?: IRequest.Options): Promise<void> {
        const endpoint = `${this.baseUrl}/legalEntities/{id}/setTaxElectronicDeliveryConsent`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const request: SetTaxElectronicDeliveryConsentRequest = ObjectSerializer.serialize(setTaxElectronicDeliveryConsentRequest, "SetTaxElectronicDeliveryConsentRequest");
        await getJsonResponse<SetTaxElectronicDeliveryConsentRequest, void>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
    }
}