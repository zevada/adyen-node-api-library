/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class SourceAccountTypesRestriction {
    /**
    * Defines how the condition must be evaluated.
    */
    'operation': string;
    /**
    * The list of source account types to be evaluated.
    */
    'value'?: Array<SourceAccountTypesRestriction.ValueEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "operation",
            "baseName": "operation",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "Array<SourceAccountTypesRestriction.ValueEnum>"
        }    ];

    static getAttributeTypeMap() {
        return SourceAccountTypesRestriction.attributeTypeMap;
    }
}

export namespace SourceAccountTypesRestriction {
    export enum ValueEnum {
        BalanceAccount = 'balanceAccount',
        BusinessAccount = 'businessAccount'
    }
}