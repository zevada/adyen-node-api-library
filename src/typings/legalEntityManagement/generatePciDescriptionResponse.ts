/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class GeneratePciDescriptionResponse {
    /**
    * The generated questionnaires in a base64 encoded format.
    */
    'content'?: string;
    /**
    * The two-letter [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code for the questionnaire. For example, **en**.
    */
    'language'?: string;
    /**
    * The array of Adyen-generated unique identifiers for the questionnaires. If empty, the user is not required to sign questionnaires.
    */
    'pciTemplateReferences'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "pciTemplateReferences",
            "baseName": "pciTemplateReferences",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return GeneratePciDescriptionResponse.attributeTypeMap;
    }
}

