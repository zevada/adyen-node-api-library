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
 * Copyright (c) 2020 Adyen B.V.
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



export class AllowedProduct {
    'additionalProductInfo'?: string;
    'eanUpc'?: string;
    'productCode': string;
    'productLabel'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalProductInfo",
            "baseName": "AdditionalProductInfo",
            "type": "string"
        },
        {
            "name": "eanUpc",
            "baseName": "EanUpc",
            "type": "string"
        },
        {
            "name": "productCode",
            "baseName": "ProductCode",
            "type": "string"
        },
        {
            "name": "productLabel",
            "baseName": "ProductLabel",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AllowedProduct.attributeTypeMap;
    }
}
