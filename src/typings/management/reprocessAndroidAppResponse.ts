/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class ReprocessAndroidAppResponse {
    /**
    * The result of the reprocess.
    */
    'Message'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "Message",
            "baseName": "Message",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ReprocessAndroidAppResponse.attributeTypeMap;
    }
}
