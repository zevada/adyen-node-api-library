/*
 * The version of the OpenAPI document: v68
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { FraudCheckResult } from './fraudCheckResult';

export class FraudCheckResultWrapper {
    'FraudCheckResult'?: FraudCheckResult | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "FraudCheckResult",
            "baseName": "FraudCheckResult",
            "type": "FraudCheckResult | null"
        }    ];

    static getAttributeTypeMap() {
        return FraudCheckResultWrapper.attributeTypeMap;
    }
}

