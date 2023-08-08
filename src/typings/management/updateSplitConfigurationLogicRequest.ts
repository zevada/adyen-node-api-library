/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AdditionalCommission } from './additionalCommission';
import { Commission } from './commission';

export class UpdateSplitConfigurationLogicRequest {
    'additionalCommission'?: AdditionalCommission;
    /**
    * Specifies the logic to apply when booking the chargeback amount.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**, **deductAccordingToSplitRatio**.
    */
    'chargeback'?: UpdateSplitConfigurationLogicRequest.ChargebackEnum;
    'commission': Commission;
    /**
    * Specifies the logic to apply when booking the transaction fees.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
    */
    'paymentFee': UpdateSplitConfigurationLogicRequest.PaymentFeeEnum;
    /**
    * Specifies the logic to apply when booking the amount left over after currency conversion.  Possible values: **addToLiableAccount**, **addToOneBalanceAccount**.
    */
    'remainder'?: UpdateSplitConfigurationLogicRequest.RemainderEnum;
    /**
    * Unique identifier of the split logic that is applied when the split configuration conditions are met.
    */
    'splitLogicId'?: string;
    /**
    * Specifies the logic to apply when booking the surcharge amount.  Possible values: **addToLiableAccount**, **addToOneBalanceAccount**
    */
    'surcharge'?: UpdateSplitConfigurationLogicRequest.SurchargeEnum;
    /**
    * Specifies the logic to apply when booking tips (gratuity).  Possible values: **addToLiableAccount**, **addToOneBalanceAccount**.
    */
    'tip'?: UpdateSplitConfigurationLogicRequest.TipEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalCommission",
            "baseName": "additionalCommission",
            "type": "AdditionalCommission"
        },
        {
            "name": "chargeback",
            "baseName": "chargeback",
            "type": "UpdateSplitConfigurationLogicRequest.ChargebackEnum"
        },
        {
            "name": "commission",
            "baseName": "commission",
            "type": "Commission"
        },
        {
            "name": "paymentFee",
            "baseName": "paymentFee",
            "type": "UpdateSplitConfigurationLogicRequest.PaymentFeeEnum"
        },
        {
            "name": "remainder",
            "baseName": "remainder",
            "type": "UpdateSplitConfigurationLogicRequest.RemainderEnum"
        },
        {
            "name": "splitLogicId",
            "baseName": "splitLogicId",
            "type": "string"
        },
        {
            "name": "surcharge",
            "baseName": "surcharge",
            "type": "UpdateSplitConfigurationLogicRequest.SurchargeEnum"
        },
        {
            "name": "tip",
            "baseName": "tip",
            "type": "UpdateSplitConfigurationLogicRequest.TipEnum"
        }    ];

    static getAttributeTypeMap() {
        return UpdateSplitConfigurationLogicRequest.attributeTypeMap;
    }
}

export namespace UpdateSplitConfigurationLogicRequest {
    export enum ChargebackEnum {
        DeductFromLiableAccount = 'deductFromLiableAccount',
        DeductFromOneBalanceAccount = 'deductFromOneBalanceAccount',
        DeductAccordingToSplitRatio = 'deductAccordingToSplitRatio'
    }
    export enum PaymentFeeEnum {
        DeductFromLiableAccount = 'deductFromLiableAccount',
        DeductFromOneBalanceAccount = 'deductFromOneBalanceAccount'
    }
    export enum RemainderEnum {
        AddToLiableAccount = 'addToLiableAccount',
        AddToOneBalanceAccount = 'addToOneBalanceAccount'
    }
    export enum SurchargeEnum {
        AddToLiableAccount = 'addToLiableAccount',
        AddToOneBalanceAccount = 'addToOneBalanceAccount'
    }
    export enum TipEnum {
        AddToLiableAccount = 'addToLiableAccount',
        AddToOneBalanceAccount = 'addToOneBalanceAccount'
    }
}
