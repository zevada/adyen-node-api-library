/**
 * Adyen Checkout API
 * Adyen Checkout API provides a simple and flexible way to initiate and authorise online payments. You can use the same integration for payments made with cards (including 3D Secure), mobile wallets, and local payment methods (for example, iDEAL and Sofort).  This API reference provides information on available endpoints and how to interact with them. To learn more about the API, visit [Checkout documentation](https://docs.adyen.com/online-payments).  ## Authentication Each request to the Checkout API must be signed with an API key. For this, obtain an API Key from your Customer Area, as described in [How to get the API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key). Then set this key to the `X-API-Key` header value, for example:  ``` curl -H \"Content-Type: application/json\" \\ -H \"X-API-Key: Your_Checkout_API_key\" \\ ... ``` Note that when going live, you need to generate a new API Key to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Checkout API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://checkout-test.adyen.com/v67/payments ```
 *
 * The version of the OpenAPI document: 67
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class DokuDetails {
    /**
    * The shopper\'s first name.
    */
    'firstName': string;
    /**
    * The shopper\'s last name.
    */
    'lastName': string;
    /**
    * The shopper\'s email.
    */
    'shopperEmail': string;
    /**
    * **doku**
    */
    'type': DokuDetails.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        },
        {
            "name": "shopperEmail",
            "baseName": "shopperEmail",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "DokuDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return DokuDetails.attributeTypeMap;
    }
}

export namespace DokuDetails {
    export enum TypeEnum {
        MandiriVa = <any> 'doku_mandiri_va',
        CimbVa = <any> 'doku_cimb_va',
        DanamonVa = <any> 'doku_danamon_va',
        BniVa = <any> 'doku_bni_va',
        PermataLiteAtm = <any> 'doku_permata_lite_atm',
        BriVa = <any> 'doku_bri_va',
        BcaVa = <any> 'doku_bca_va',
        Alfamart = <any> 'doku_alfamart',
        Indomaret = <any> 'doku_indomaret'
    }
}
