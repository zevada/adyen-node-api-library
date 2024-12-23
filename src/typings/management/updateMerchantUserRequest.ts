/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Name2 } from './name2';

export class UpdateMerchantUserRequest {
    /**
    * The list of [account groups](https://docs.adyen.com/account/account-structure#account-groups) associated with this user.
    */
    'accountGroups'?: Array<string>;
    /**
    * Sets the status of the user to active (**true**) or inactive (**false**).
    */
    'active'?: boolean;
    /**
    * The email address of the user.
    */
    'email'?: string;
    /**
    * The requested login method for the user. To use SSO, you must already have SSO configured with Adyen before creating the user.  Possible values: **Username & account**, **Email**, or **SSO** 
    */
    'loginMethod'?: string;
    'name'?: Name2 | null;
    /**
    * The list of [roles](https://docs.adyen.com/account/user-roles) for this user.
    */
    'roles'?: Array<string>;
    /**
    * The [tz database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) of the time zone of the user. For example, **Europe/Amsterdam**.
    */
    'timeZoneCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountGroups",
            "baseName": "accountGroups",
            "type": "Array<string>"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "loginMethod",
            "baseName": "loginMethod",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "Name2 | null"
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<string>"
        },
        {
            "name": "timeZoneCode",
            "baseName": "timeZoneCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UpdateMerchantUserRequest.attributeTypeMap;
    }
}

