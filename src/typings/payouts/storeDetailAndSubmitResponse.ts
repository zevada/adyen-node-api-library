/*
 * The version of the OpenAPI document: v68
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class StoreDetailAndSubmitResponse {
    /**
    * This field contains additional data, which may be returned in a particular response.
    */
    'additionalData'?: { [key: string]: string; };
    /**
    * A new reference to uniquely identify this request.
    */
    'pspReference': string;
    /**
    * In case of refusal, an informational message for the reason.
    */
    'refusalReason'?: string;
    /**
    * The response:  * In case of success is payout-submit-received. * In case of an error, an informational message is returned.
    */
    'resultCode': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalData",
            "baseName": "additionalData",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "pspReference",
            "baseName": "pspReference",
            "type": "string"
        },
        {
            "name": "refusalReason",
            "baseName": "refusalReason",
            "type": "string"
        },
        {
            "name": "resultCode",
            "baseName": "resultCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StoreDetailAndSubmitResponse.attributeTypeMap;
    }
}

