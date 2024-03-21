/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class SupportedCardTypes {
    /**
    * Set to **true** to accept credit cards.
    */
    'credit'?: boolean;
    /**
    * Set to **true** to accept debit cards.
    */
    'debit'?: boolean;
    /**
    * Set to **true** to accept cards that allow deferred debit.
    */
    'deferredDebit'?: boolean;
    /**
    * Set to **true** to accept prepaid cards.
    */
    'prepaid'?: boolean;
    /**
    * Set to **true** to accept card types for which the terminal can\'t determine the funding source while offline.
    */
    'unknown'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "credit",
            "baseName": "credit",
            "type": "boolean"
        },
        {
            "name": "debit",
            "baseName": "debit",
            "type": "boolean"
        },
        {
            "name": "deferredDebit",
            "baseName": "deferredDebit",
            "type": "boolean"
        },
        {
            "name": "prepaid",
            "baseName": "prepaid",
            "type": "boolean"
        },
        {
            "name": "unknown",
            "baseName": "unknown",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return SupportedCardTypes.attributeTypeMap;
    }
}
