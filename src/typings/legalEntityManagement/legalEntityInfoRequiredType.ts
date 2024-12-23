/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Individual } from './individual';
import { LegalEntityAssociation } from './legalEntityAssociation';
import { LegalEntityCapability } from './legalEntityCapability';
import { Organization } from './organization';
import { SoleProprietorship } from './soleProprietorship';
import { Trust } from './trust';
import { UnincorporatedPartnership } from './unincorporatedPartnership';

export class LegalEntityInfoRequiredType {
    /**
    * Contains key-value pairs that specify the actions that the legal entity can do in your platform.The key is a capability required for your integration. For example, **issueCard** for Issuing.The value is an object containing the settings for the capability.
    */
    'capabilities'?: { [key: string]: LegalEntityCapability; };
    /**
    * List of legal entities associated with the current legal entity. For example, ultimate beneficial owners associated with an organization through ownership or control, or as signatories.
    */
    'entityAssociations'?: Array<LegalEntityAssociation>;
    'individual'?: Individual | null;
    'organization'?: Organization | null;
    /**
    * Your reference for the legal entity, maximum 150 characters.
    */
    'reference'?: string;
    'soleProprietorship'?: SoleProprietorship | null;
    'trust'?: Trust | null;
    /**
    * The type of legal entity.   Possible values: **individual**, **organization**, **soleProprietorship**, or **trust**.
    */
    'type': LegalEntityInfoRequiredType.TypeEnum;
    'unincorporatedPartnership'?: UnincorporatedPartnership | null;
    /**
    * A key-value pair that specifies the verification process for a legal entity. Set to **upfront** for upfront verification for [marketplaces](https://docs.adyen.com/marketplaces/verification-overview/verification-types/#upfront-verification).
    */
    'verificationPlan'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "capabilities",
            "baseName": "capabilities",
            "type": "{ [key: string]: LegalEntityCapability; }"
        },
        {
            "name": "entityAssociations",
            "baseName": "entityAssociations",
            "type": "Array<LegalEntityAssociation>"
        },
        {
            "name": "individual",
            "baseName": "individual",
            "type": "Individual | null"
        },
        {
            "name": "organization",
            "baseName": "organization",
            "type": "Organization | null"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "soleProprietorship",
            "baseName": "soleProprietorship",
            "type": "SoleProprietorship | null"
        },
        {
            "name": "trust",
            "baseName": "trust",
            "type": "Trust | null"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "LegalEntityInfoRequiredType.TypeEnum"
        },
        {
            "name": "unincorporatedPartnership",
            "baseName": "unincorporatedPartnership",
            "type": "UnincorporatedPartnership | null"
        },
        {
            "name": "verificationPlan",
            "baseName": "verificationPlan",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return LegalEntityInfoRequiredType.attributeTypeMap;
    }
}

export namespace LegalEntityInfoRequiredType {
    export enum TypeEnum {
        Individual = 'individual',
        Organization = 'organization',
        SoleProprietorship = 'soleProprietorship',
        Trust = 'trust',
        UnincorporatedPartnership = 'unincorporatedPartnership'
    }
}
