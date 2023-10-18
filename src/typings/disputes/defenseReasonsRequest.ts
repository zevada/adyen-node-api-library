/*
 * The version of the OpenAPI document: v30
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class DefenseReasonsRequest {
    /**
    * The PSP reference assigned to the dispute.
    */
    'disputePspReference': string;
    /**
    * The merchant account identifier, for which you want to process the dispute transaction.
    */
    'merchantAccountCode': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "disputePspReference",
            "baseName": "disputePspReference",
            "type": "string"
        },
        {
            "name": "merchantAccountCode",
            "baseName": "merchantAccountCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DefenseReasonsRequest.attributeTypeMap;
    }
}

