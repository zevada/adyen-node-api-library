/*
 * The version of the OpenAPI document: v68
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AdditionalDataRiskStandalone {
    /**
    * Shopper\'s country of residence in the form of ISO standard 3166 2-character country codes.
    */
    'PayPal_CountryCode'?: string;
    /**
    * Shopper\'s email.
    */
    'PayPal_EmailId'?: string;
    /**
    * Shopper\'s first name.
    */
    'PayPal_FirstName'?: string;
    /**
    * Shopper\'s last name.
    */
    'PayPal_LastName'?: string;
    /**
    * Unique PayPal Customer Account identification number. Character length and limitations: 13 single-byte alphanumeric characters.
    */
    'PayPal_PayerId'?: string;
    /**
    * Shopper\'s phone number.
    */
    'PayPal_Phone'?: string;
    /**
    * Allowed values: * **Eligible** — Merchant is protected by PayPal\'s Seller Protection Policy for Unauthorized Payments and Item Not Received.  * **PartiallyEligible** — Merchant is protected by PayPal\'s Seller Protection Policy for Item Not Received.  * **Ineligible** — Merchant is not protected under the Seller Protection Policy.
    */
    'PayPal_ProtectionEligibility'?: string;
    /**
    * Unique transaction ID of the payment.
    */
    'PayPal_TransactionId'?: string;
    /**
    * Raw AVS result received from the acquirer, where available. Example: D
    */
    'avsResultRaw'?: string;
    /**
    * The Bank Identification Number of a credit card, which is the first six digits of a card number. Required for [tokenized card request](https://docs.adyen.com/online-payments/tokenization).
    */
    'bin'?: string;
    /**
    * Raw CVC result received from the acquirer, where available. Example: 1
    */
    'cvcResultRaw'?: string;
    /**
    * Unique identifier or token for the shopper\'s card details.
    */
    'riskToken'?: string;
    /**
    * A Boolean value indicating whether 3DS authentication was completed on this payment. Example: true
    */
    'threeDAuthenticated'?: string;
    /**
    * A Boolean value indicating whether 3DS was offered for this payment. Example: true
    */
    'threeDOffered'?: string;
    /**
    * Required for PayPal payments only. The only supported value is: **paypal**.
    */
    'tokenDataType'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "PayPal_CountryCode",
            "baseName": "PayPal.CountryCode",
            "type": "string"
        },
        {
            "name": "PayPal_EmailId",
            "baseName": "PayPal.EmailId",
            "type": "string"
        },
        {
            "name": "PayPal_FirstName",
            "baseName": "PayPal.FirstName",
            "type": "string"
        },
        {
            "name": "PayPal_LastName",
            "baseName": "PayPal.LastName",
            "type": "string"
        },
        {
            "name": "PayPal_PayerId",
            "baseName": "PayPal.PayerId",
            "type": "string"
        },
        {
            "name": "PayPal_Phone",
            "baseName": "PayPal.Phone",
            "type": "string"
        },
        {
            "name": "PayPal_ProtectionEligibility",
            "baseName": "PayPal.ProtectionEligibility",
            "type": "string"
        },
        {
            "name": "PayPal_TransactionId",
            "baseName": "PayPal.TransactionId",
            "type": "string"
        },
        {
            "name": "avsResultRaw",
            "baseName": "avsResultRaw",
            "type": "string"
        },
        {
            "name": "bin",
            "baseName": "bin",
            "type": "string"
        },
        {
            "name": "cvcResultRaw",
            "baseName": "cvcResultRaw",
            "type": "string"
        },
        {
            "name": "riskToken",
            "baseName": "riskToken",
            "type": "string"
        },
        {
            "name": "threeDAuthenticated",
            "baseName": "threeDAuthenticated",
            "type": "string"
        },
        {
            "name": "threeDOffered",
            "baseName": "threeDOffered",
            "type": "string"
        },
        {
            "name": "tokenDataType",
            "baseName": "tokenDataType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AdditionalDataRiskStandalone.attributeTypeMap;
    }
}

