/*
 * The version of the OpenAPI document: v68
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AdditionalDataSubMerchant {
    /**
    * Required for transactions performed by registered payment facilitators. Indicates the number of sub-merchants contained in the request. For example, **3**.
    */
    'subMerchantNumberOfSubSellers'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The city of the sub-merchant\'s address. * Format: Alphanumeric * Maximum length: 13 characters
    */
    'subMerchantSubSellerSubSellerNrCity'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The three-letter country code of the sub-merchant\'s address. For example, **BRA** for Brazil.  * Format: [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) * Fixed length: 3 characters
    */
    'subMerchantSubSellerSubSellerNrCountry'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. A unique identifier that you create for the sub-merchant, used by schemes to identify the sub-merchant.  * Format: Alphanumeric * Maximum length: 15 characters
    */
    'subMerchantSubSellerSubSellerNrId'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The sub-merchant\'s 4-digit Merchant Category Code (MCC).  * Format: Numeric * Fixed length: 4 digits
    */
    'subMerchantSubSellerSubSellerNrMcc'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The name of the sub-merchant. Based on scheme specifications, this value will overwrite the shopper statement  that will appear in the card statement. * Format: Alphanumeric * Maximum length: 22 characters
    */
    'subMerchantSubSellerSubSellerNrName'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The postal code of the sub-merchant\'s address, without dashes. * Format: Numeric * Fixed length: 8 digits
    */
    'subMerchantSubSellerSubSellerNrPostalCode'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The state code of the sub-merchant\'s address, if applicable to the country. * Format: Alphanumeric * Maximum length: 2 characters
    */
    'subMerchantSubSellerSubSellerNrState'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The street name and house number of the sub-merchant\'s address. * Format: Alphanumeric * Maximum length: 60 characters
    */
    'subMerchantSubSellerSubSellerNrStreet'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The tax ID of the sub-merchant. * Format: Numeric * Fixed length: 11 digits for the CPF or 14 digits for the CNPJ
    */
    'subMerchantSubSellerSubSellerNrTaxId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "subMerchantNumberOfSubSellers",
            "baseName": "subMerchant.numberOfSubSellers",
            "type": "string"
        },
        {
            "name": "subMerchantSubSellerSubSellerNrCity",
            "baseName": "subMerchant.subSeller[subSellerNr].city",
            "type": "string"
        },
        {
            "name": "subMerchantSubSellerSubSellerNrCountry",
            "baseName": "subMerchant.subSeller[subSellerNr].country",
            "type": "string"
        },
        {
            "name": "subMerchantSubSellerSubSellerNrId",
            "baseName": "subMerchant.subSeller[subSellerNr].id",
            "type": "string"
        },
        {
            "name": "subMerchantSubSellerSubSellerNrMcc",
            "baseName": "subMerchant.subSeller[subSellerNr].mcc",
            "type": "string"
        },
        {
            "name": "subMerchantSubSellerSubSellerNrName",
            "baseName": "subMerchant.subSeller[subSellerNr].name",
            "type": "string"
        },
        {
            "name": "subMerchantSubSellerSubSellerNrPostalCode",
            "baseName": "subMerchant.subSeller[subSellerNr].postalCode",
            "type": "string"
        },
        {
            "name": "subMerchantSubSellerSubSellerNrState",
            "baseName": "subMerchant.subSeller[subSellerNr].state",
            "type": "string"
        },
        {
            "name": "subMerchantSubSellerSubSellerNrStreet",
            "baseName": "subMerchant.subSeller[subSellerNr].street",
            "type": "string"
        },
        {
            "name": "subMerchantSubSellerSubSellerNrTaxId",
            "baseName": "subMerchant.subSeller[subSellerNr].taxId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AdditionalDataSubMerchant.attributeTypeMap;
    }
}
