/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2021 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
 
/**
 * Terminal API
 * Definition of Terminal API Schema
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



export class TransactionConditions {
    'AcquirerID'?: Array<string>;
    'AllowedLoyaltyBrand'?: Array<string>;
    'AllowedPaymentBrand'?: Array<string>;
    'CustomerLanguage'?: string;
    'DebitPreferredFlag'?: boolean;
    'ForceEntryMode'?: Array<TransactionConditions.ForceEntryModeEnum>;
    'ForceOnlineFlag'?: boolean;
    'LoyaltyHandling'?: TransactionConditions.LoyaltyHandlingEnum;
    'MerchantCategoryCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AcquirerID",
            "baseName": "AcquirerID",
            "type": "Array<string>"
        },
        {
            "name": "AllowedLoyaltyBrand",
            "baseName": "AllowedLoyaltyBrand",
            "type": "Array<string>"
        },
        {
            "name": "AllowedPaymentBrand",
            "baseName": "AllowedPaymentBrand",
            "type": "Array<string>"
        },
        {
            "name": "CustomerLanguage",
            "baseName": "CustomerLanguage",
            "type": "string"
        },
        {
            "name": "DebitPreferredFlag",
            "baseName": "DebitPreferredFlag",
            "type": "boolean"
        },
        {
            "name": "ForceEntryMode",
            "baseName": "ForceEntryMode",
            "type": "Array<TransactionConditions.ForceEntryModeEnum>"
        },
        {
            "name": "ForceOnlineFlag",
            "baseName": "ForceOnlineFlag",
            "type": "boolean"
        },
        {
            "name": "LoyaltyHandling",
            "baseName": "LoyaltyHandling",
            "type": "TransactionConditions.LoyaltyHandlingEnum"
        },
        {
            "name": "MerchantCategoryCode",
            "baseName": "MerchantCategoryCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransactionConditions.attributeTypeMap;
    }
}

export namespace TransactionConditions {
    export enum ForceEntryModeEnum {
        CheckReader = <any> 'CheckReader',
        Contactless = <any> 'Contactless',
        File = <any> 'File',
        Icc = <any> 'ICC',
        Keyed = <any> 'Keyed',
        MagStripe = <any> 'MagStripe',
        Manual = <any> 'Manual',
        Rfid = <any> 'RFID',
        Scanned = <any> 'Scanned',
        SynchronousIcc = <any> 'SynchronousICC',
        Tapped = <any> 'Tapped'
    }
    export enum LoyaltyHandlingEnum {
        Allowed = <any> 'Allowed',
        Forbidden = <any> 'Forbidden',
        Processed = <any> 'Processed',
        Proposed = <any> 'Proposed',
        Required = <any> 'Required'
    }
}
