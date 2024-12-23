/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class CalculatePciStatusRequest {
    /**
    * An array of additional sales channels to generate PCI questionnaires. Include the relevant sales channels if you need your user to sign PCI questionnaires. Not required if you [create stores](https://docs.adyen.com/platforms) and [add payment methods](https://docs.adyen.com/adyen-for-platforms-model) before you generate the questionnaires.  Possible values: *  **eCommerce** *  **pos** *  **ecomMoto** *  **posMoto**  
    */
    'additionalSalesChannels'?: Array<CalculatePciStatusRequest.AdditionalSalesChannelsEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalSalesChannels",
            "baseName": "additionalSalesChannels",
            "type": "Array<CalculatePciStatusRequest.AdditionalSalesChannelsEnum>"
        }    ];

    static getAttributeTypeMap() {
        return CalculatePciStatusRequest.attributeTypeMap;
    }
}

export namespace CalculatePciStatusRequest {
    export enum AdditionalSalesChannelsEnum {
        ECommerce = 'eCommerce',
        EcomMoto = 'ecomMoto',
        Pos = 'pos',
        PosMoto = 'posMoto'
    }
}