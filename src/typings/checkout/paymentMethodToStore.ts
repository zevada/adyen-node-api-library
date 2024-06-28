/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class PaymentMethodToStore {
    /**
    * Secondary brand of the card. For example: **plastix**, **hmclub**.
    */
    'brand'?: string;
    /**
    * The card verification code. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).
    */
    'cvc'?: string;
    /**
    * The encrypted card number.
    */
    'encryptedCardNumber'?: string;
    /**
    * The encrypted card expiry month.
    */
    'encryptedExpiryMonth'?: string;
    /**
    * The encrypted card expiry year.
    */
    'encryptedExpiryYear'?: string;
    /**
    * The encrypted card verification code.
    */
    'encryptedSecurityCode'?: string;
    /**
    * The card expiry month. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).
    */
    'expiryMonth'?: string;
    /**
    * The card expiry year. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).
    */
    'expiryYear'?: string;
    /**
    * The name of the card holder.
    */
    'holderName'?: string;
    /**
    * The card number. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).
    */
    'number'?: string;
    /**
    * Set to **scheme**.
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string"
        },
        {
            "name": "cvc",
            "baseName": "cvc",
            "type": "string"
        },
        {
            "name": "encryptedCardNumber",
            "baseName": "encryptedCardNumber",
            "type": "string"
        },
        {
            "name": "encryptedExpiryMonth",
            "baseName": "encryptedExpiryMonth",
            "type": "string"
        },
        {
            "name": "encryptedExpiryYear",
            "baseName": "encryptedExpiryYear",
            "type": "string"
        },
        {
            "name": "encryptedSecurityCode",
            "baseName": "encryptedSecurityCode",
            "type": "string"
        },
        {
            "name": "expiryMonth",
            "baseName": "expiryMonth",
            "type": "string"
        },
        {
            "name": "expiryYear",
            "baseName": "expiryYear",
            "type": "string"
        },
        {
            "name": "holderName",
            "baseName": "holderName",
            "type": "string"
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodToStore.attributeTypeMap;
    }
}
