/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class USInternationalAchAddressRequirement {
    /**
    * Specifies that you must provide a complete street address for International ACH (IAT) transactions.
    */
    'description'?: string;
    /**
    * **usInternationalAchAddressRequirement**
    */
    'type': USInternationalAchAddressRequirement.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "USInternationalAchAddressRequirement.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return USInternationalAchAddressRequirement.attributeTypeMap;
    }
}

export namespace USInternationalAchAddressRequirement {
    export enum TypeEnum {
        UsInternationalAchAddressRequirement = 'usInternationalAchAddressRequirement'
    }
}