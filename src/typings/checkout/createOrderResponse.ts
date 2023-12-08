/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { FraudResult } from './fraudResult';

export class CreateOrderResponse {
    /**
    * Contains additional information about the payment. Some data fields are included only if you select them first: Go to **Customer Area** > **Developers** > **Additional data**.
    */
    'additionalData'?: { [key: string]: string; };
    'amount': Amount;
    /**
    * The date that the order will expire.
    */
    'expiresAt': string;
    'fraudResult'?: FraudResult;
    /**
    * The encrypted data that will be used by merchant for adding payments to the order.
    */
    'orderData': string;
    /**
    * Adyen\'s 16-character reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.
    */
    'pspReference'?: string;
    /**
    * The reference provided by merchant for creating the order.
    */
    'reference'?: string;
    /**
    * If the payment\'s authorisation is refused or an error occurs during authorisation, this field holds Adyen\'s mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.  For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).
    */
    'refusalReason'?: string;
    'remainingAmount': Amount;
    /**
    * The result of the order creation request.  The value is always **Success**.
    */
    'resultCode': CreateOrderResponse.ResultCodeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalData",
            "baseName": "additionalData",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "string"
        },
        {
            "name": "fraudResult",
            "baseName": "fraudResult",
            "type": "FraudResult"
        },
        {
            "name": "orderData",
            "baseName": "orderData",
            "type": "string"
        },
        {
            "name": "pspReference",
            "baseName": "pspReference",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "refusalReason",
            "baseName": "refusalReason",
            "type": "string"
        },
        {
            "name": "remainingAmount",
            "baseName": "remainingAmount",
            "type": "Amount"
        },
        {
            "name": "resultCode",
            "baseName": "resultCode",
            "type": "CreateOrderResponse.ResultCodeEnum"
        }    ];

    static getAttributeTypeMap() {
        return CreateOrderResponse.attributeTypeMap;
    }
}

export namespace CreateOrderResponse {
    export enum ResultCodeEnum {
        Success = 'Success'
    }
}