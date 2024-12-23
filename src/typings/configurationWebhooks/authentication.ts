/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Phone } from './phone';

export class Authentication {
    /**
    * The email address where the one-time password (OTP) is sent.
    */
    'email'?: string;
    /**
    * The password used for 3D Secure password-based authentication. The value must be between 1 to 30 characters and must only contain the following supported characters.  * Characters between **a-z**, **A-Z**, and **0-9**  * Special characters: **äöüßÄÖÜ+-*_/ç%()=?!~#\'\",;:$&àùòâôûáúó**
    */
    'password'?: string;
    'phone'?: Phone | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "Phone | null"
        }    ];

    static getAttributeTypeMap() {
        return Authentication.attributeTypeMap;
    }
}

