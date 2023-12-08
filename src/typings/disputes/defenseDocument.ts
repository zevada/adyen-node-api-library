/*
 * The version of the OpenAPI document: v30
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class DefenseDocument {
    /**
    * The content of the defense document.
    */
    'content': string;
    /**
    * The content type of the defense document.
    */
    'contentType': string;
    /**
    * The document type code of the defense document.
    */
    'defenseDocumentTypeCode': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
        },
        {
            "name": "contentType",
            "baseName": "contentType",
            "type": "string"
        },
        {
            "name": "defenseDocumentTypeCode",
            "baseName": "defenseDocumentTypeCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DefenseDocument.attributeTypeMap;
    }
}
