/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AndroidCertificate } from './androidCertificate';

export class AndroidCertificatesResponse {
    /**
    * Uploaded Android certificates for Android payment terminals.
    */
    'data'?: Array<AndroidCertificate>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<AndroidCertificate>"
        }    ];

    static getAttributeTypeMap() {
        return AndroidCertificatesResponse.attributeTypeMap;
    }
}

