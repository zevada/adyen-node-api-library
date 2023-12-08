/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export * from './accountCapabilityData';
export * from './accountCreateNotificationData';
export * from './accountNotificationResponse';
export * from './accountUpdateNotificationData';
export * from './capabilityProblem';
export * from './capabilityProblemEntity';
export * from './capabilityProblemEntityRecursive';
export * from './merchantCreatedNotificationRequest';
export * from './merchantUpdatedNotificationRequest';
export * from './midServiceNotificationData';
export * from './paymentMethodCreatedNotificationRequest';
export * from './paymentMethodNotificationResponse';
export * from './paymentMethodRequestRemovedNotificationRequest';
export * from './paymentMethodScheduledForRemovalNotificationRequest';
export * from './remediatingAction';
export * from './verificationError';
export * from './verificationErrorRecursive';


import { AccountCapabilityData } from './accountCapabilityData';
import { AccountCreateNotificationData } from './accountCreateNotificationData';
import { AccountNotificationResponse } from './accountNotificationResponse';
import { AccountUpdateNotificationData } from './accountUpdateNotificationData';
import { CapabilityProblem } from './capabilityProblem';
import { CapabilityProblemEntity } from './capabilityProblemEntity';
import { CapabilityProblemEntityRecursive } from './capabilityProblemEntityRecursive';
import { MerchantCreatedNotificationRequest } from './merchantCreatedNotificationRequest';
import { MerchantUpdatedNotificationRequest } from './merchantUpdatedNotificationRequest';
import { MidServiceNotificationData } from './midServiceNotificationData';
import { PaymentMethodCreatedNotificationRequest } from './paymentMethodCreatedNotificationRequest';
import { PaymentMethodNotificationResponse } from './paymentMethodNotificationResponse';
import { PaymentMethodRequestRemovedNotificationRequest } from './paymentMethodRequestRemovedNotificationRequest';
import { PaymentMethodScheduledForRemovalNotificationRequest } from './paymentMethodScheduledForRemovalNotificationRequest';
import { RemediatingAction } from './remediatingAction';
import { VerificationError } from './verificationError';
import { VerificationErrorRecursive } from './verificationErrorRecursive';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "CapabilityProblemEntity.TypeEnum": CapabilityProblemEntity.TypeEnum,
        "CapabilityProblemEntityRecursive.TypeEnum": CapabilityProblemEntityRecursive.TypeEnum,
        "MerchantCreatedNotificationRequest.TypeEnum": MerchantCreatedNotificationRequest.TypeEnum,
        "MerchantUpdatedNotificationRequest.TypeEnum": MerchantUpdatedNotificationRequest.TypeEnum,
        "MidServiceNotificationData.StatusEnum": MidServiceNotificationData.StatusEnum,
        "MidServiceNotificationData.VerificationStatusEnum": MidServiceNotificationData.VerificationStatusEnum,
        "PaymentMethodCreatedNotificationRequest.TypeEnum": PaymentMethodCreatedNotificationRequest.TypeEnum,
        "PaymentMethodRequestRemovedNotificationRequest.TypeEnum": PaymentMethodRequestRemovedNotificationRequest.TypeEnum,
        "PaymentMethodScheduledForRemovalNotificationRequest.TypeEnum": PaymentMethodScheduledForRemovalNotificationRequest.TypeEnum,
        "VerificationError.TypeEnum": VerificationError.TypeEnum,
        "VerificationErrorRecursive.TypeEnum": VerificationErrorRecursive.TypeEnum,
}

let typeMap: {[index: string]: any} = {
    "AccountCapabilityData": AccountCapabilityData,
    "AccountCreateNotificationData": AccountCreateNotificationData,
    "AccountNotificationResponse": AccountNotificationResponse,
    "AccountUpdateNotificationData": AccountUpdateNotificationData,
    "CapabilityProblem": CapabilityProblem,
    "CapabilityProblemEntity": CapabilityProblemEntity,
    "CapabilityProblemEntityRecursive": CapabilityProblemEntityRecursive,
    "MerchantCreatedNotificationRequest": MerchantCreatedNotificationRequest,
    "MerchantUpdatedNotificationRequest": MerchantUpdatedNotificationRequest,
    "MidServiceNotificationData": MidServiceNotificationData,
    "PaymentMethodCreatedNotificationRequest": PaymentMethodCreatedNotificationRequest,
    "PaymentMethodNotificationResponse": PaymentMethodNotificationResponse,
    "PaymentMethodRequestRemovedNotificationRequest": PaymentMethodRequestRemovedNotificationRequest,
    "PaymentMethodScheduledForRemovalNotificationRequest": PaymentMethodScheduledForRemovalNotificationRequest,
    "RemediatingAction": RemediatingAction,
    "VerificationError": VerificationError,
    "VerificationErrorRecursive": VerificationErrorRecursive,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else if (type === "SaleToAcquirerData") {
            const dataString = JSON.stringify(data);
            return Buffer.from(dataString).toString("base64");
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}