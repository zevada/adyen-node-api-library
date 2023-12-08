/*
 * The version of the OpenAPI document: v68
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class ExternalPlatform {
    /**
    * External platform integrator.
    */
    'integrator'?: string;
    /**
    * Name of the field. For example, Name of External Platform.
    */
    'name'?: string;
    /**
    * Version of the field. For example, Version of External Platform.
    */
    'version'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "integrator",
            "baseName": "integrator",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ExternalPlatform.attributeTypeMap;
    }
}
