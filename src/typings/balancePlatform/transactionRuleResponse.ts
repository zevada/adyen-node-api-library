/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { TransactionRule } from './transactionRule';

export class TransactionRuleResponse {
    'transactionRule'?: TransactionRule | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transactionRule",
            "baseName": "transactionRule",
            "type": "TransactionRule | null"
        }    ];

    static getAttributeTypeMap() {
        return TransactionRuleResponse.attributeTypeMap;
    }
}

