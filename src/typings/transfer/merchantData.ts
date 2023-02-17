/*
 * The version of the OpenAPI document: v3
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { NameLocation } from './nameLocation';

export class MerchantData {
    /**
    * The merchant category code.
    */
    'mcc'?: string;
    /**
    * The merchant identifier.
    */
    'merchantId'?: string;
    'nameLocation'?: NameLocation;
    /**
    * The merchant postal code.
    */
    'postalCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "mcc",
            "baseName": "mcc",
            "type": "string"
        },
        {
            "name": "merchantId",
            "baseName": "merchantId",
            "type": "string"
        },
        {
            "name": "nameLocation",
            "baseName": "nameLocation",
            "type": "NameLocation"
        },
        {
            "name": "postalCode",
            "baseName": "postalCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MerchantData.attributeTypeMap;
    }
}
