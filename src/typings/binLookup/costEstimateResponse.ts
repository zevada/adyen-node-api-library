/*
 * The version of the OpenAPI document: v54
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { CardBin } from './cardBin';

export class CostEstimateResponse {
    'cardBin'?: CardBin | null;
    'costEstimateAmount'?: Amount | null;
    /**
    * Adyen\'s 16-character reference associated with the request.
    */
    'costEstimateReference'?: string;
    /**
    * The result of the cost estimation.
    */
    'resultCode'?: string;
    /**
    * Indicates the way the charges can be passed on to the cardholder. The following values are possible: * `ZERO` - the charges are not allowed to pass on * `PASSTHROUGH` - the charges can be passed on * `UNLIMITED` - there is no limit on how much surcharge is passed on
    */
    'surchargeType'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cardBin",
            "baseName": "cardBin",
            "type": "CardBin | null"
        },
        {
            "name": "costEstimateAmount",
            "baseName": "costEstimateAmount",
            "type": "Amount | null"
        },
        {
            "name": "costEstimateReference",
            "baseName": "costEstimateReference",
            "type": "string"
        },
        {
            "name": "resultCode",
            "baseName": "resultCode",
            "type": "string"
        },
        {
            "name": "surchargeType",
            "baseName": "surchargeType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CostEstimateResponse.attributeTypeMap;
    }
}

