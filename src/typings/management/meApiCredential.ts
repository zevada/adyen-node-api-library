/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AllowedOrigin } from './allowedOrigin';
import { ApiCredentialLinks } from './apiCredentialLinks';

export class MeApiCredential {
    'links'?: ApiCredentialLinks;
    /**
    * Indicates if the API credential is enabled. Must be set to **true** to use the credential in your integration.
    */
    'active': boolean;
    /**
    * List of IP addresses from which your client can make requests.  If the list is empty, we allow requests from any IP. If the list is not empty and we get a request from an IP which is not on the list, you get a security error.
    */
    'allowedIpAddresses': Array<string>;
    /**
    * List containing the [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) linked to the API credential.
    */
    'allowedOrigins'?: Array<AllowedOrigin>;
    /**
    * List of merchant accounts that the API credential has explicit access to.   If the credential has access to a company, this implies access to all merchant accounts and no merchants for that company will be included.
    */
    'associatedMerchantAccounts'?: Array<string>;
    /**
    * Public key used for [client-side authentication](https://docs.adyen.com/development-resources/client-side-authentication). The client key is required for Drop-in and Components integrations.
    */
    'clientKey': string;
    /**
    * Name of the company linked to the API credential.
    */
    'companyName'?: string;
    /**
    * Description of the API credential.
    */
    'description'?: string;
    /**
    * Unique identifier of the API credential.
    */
    'id': string;
    /**
    * List of [roles](https://docs.adyen.com/development-resources/api-credentials#roles-1) for the API credential.
    */
    'roles': Array<string>;
    /**
    * The name of the [API credential](https://docs.adyen.com/development-resources/api-credentials), for example **ws@Company.TestCompany**.
    */
    'username': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "links",
            "baseName": "_links",
            "type": "ApiCredentialLinks"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "allowedIpAddresses",
            "baseName": "allowedIpAddresses",
            "type": "Array<string>"
        },
        {
            "name": "allowedOrigins",
            "baseName": "allowedOrigins",
            "type": "Array<AllowedOrigin>"
        },
        {
            "name": "associatedMerchantAccounts",
            "baseName": "associatedMerchantAccounts",
            "type": "Array<string>"
        },
        {
            "name": "clientKey",
            "baseName": "clientKey",
            "type": "string"
        },
        {
            "name": "companyName",
            "baseName": "companyName",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<string>"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MeApiCredential.attributeTypeMap;
    }
}
