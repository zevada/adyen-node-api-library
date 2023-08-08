/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class UpdateSplitConfigurationRuleRequest {
    /**
    * The currency condition that defines whether the split logic applies. Its value must be a three-character [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217).
    */
    'currency': string;
    /**
    * The funding source condition of the payment method (only for cards).  Possible values: **credit**, **debit**, or **ANY**.
    */
    'fundingSource'?: string;
    /**
    * The payment method condition that defines whether the split logic applies.  Possible values: * [Payment method variant](https://docs.adyen.com/development-resources/paymentmethodvariant): Apply the split logic for a specific payment method. * **ANY**: Apply the split logic for all available payment methods.
    */
    'paymentMethod': string;
    /**
    * The sales channel condition that defines whether the split logic applies.  Possible values: * **Ecommerce**: Online transactions where the cardholder is present. * **ContAuth**: Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). * **Moto**: Mail-order and telephone-order transactions where the customer is in contact with the merchant via email or telephone. * **POS**: Point-of-sale transactions where the customer is physically present to make a payment using a secure payment terminal. * **ANY**: All sales channels.
    */
    'shopperInteraction': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "fundingSource",
            "baseName": "fundingSource",
            "type": "string"
        },
        {
            "name": "paymentMethod",
            "baseName": "paymentMethod",
            "type": "string"
        },
        {
            "name": "shopperInteraction",
            "baseName": "shopperInteraction",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UpdateSplitConfigurationRuleRequest.attributeTypeMap;
    }
}

