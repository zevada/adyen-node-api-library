/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class CancelOrderResponse {
    /**
    * A unique reference of the cancellation request.
    */
    'pspReference': string;
    /**
    * The result of the cancellation request.  Possible values:  * **Received** – Indicates the cancellation has successfully been received by Adyen, and will be processed.
    */
    'resultCode': CancelOrderResponse.ResultCodeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pspReference",
            "baseName": "pspReference",
            "type": "string"
        },
        {
            "name": "resultCode",
            "baseName": "resultCode",
            "type": "CancelOrderResponse.ResultCodeEnum"
        }    ];

    static getAttributeTypeMap() {
        return CancelOrderResponse.attributeTypeMap;
    }
}

export namespace CancelOrderResponse {
    export enum ResultCodeEnum {
        Received = 'Received'
    }
}