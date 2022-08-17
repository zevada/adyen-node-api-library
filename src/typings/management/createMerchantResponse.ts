/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class CreateMerchantResponse {
    /**
    * The unique identifier of the [business line](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businessLines).
    */
    'businessLineId'?: string;
    /**
    * The unique identifier of the company account.
    */
    'companyId'?: string;
    /**
    * Your description for the merchant account, maximum 300 characters.
    */
    'description'?: string;
    /**
    * The unique identifier of the merchant account. If Adyen set up a template for the `reference`, then the `id` will have the same value as the `reference` that you sent in the request. Otherwise, the value is generated by Adyen.
    */
    'id'?: string;
    /**
    * The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities).
    */
    'legalEntityId'?: string;
    /**
    * Partner pricing plan for the merchant, applicable for merchants under AfP managed company accounts.
    */
    'pricingPlan'?: string;
    /**
    * Your reference for the merchant account.
    */
    'reference'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "businessLineId",
            "baseName": "businessLineId",
            "type": "string"
        },
        {
            "name": "companyId",
            "baseName": "companyId",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "legalEntityId",
            "baseName": "legalEntityId",
            "type": "string"
        },
        {
            "name": "pricingPlan",
            "baseName": "pricingPlan",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateMerchantResponse.attributeTypeMap;
    }
}

