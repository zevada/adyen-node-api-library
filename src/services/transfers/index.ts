/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { CapitalApi } from "./capitalApi";
import { TransactionsApi } from "./transactionsApi";
import { TransfersApi } from "./transfersApi";

import Service from "../../service";
import Client from "../../client";

export default class TransfersAPI extends Service {
    
    public constructor(client: Client) {
        super(client);
    }

    public get CapitalApi() {
        return new CapitalApi(this.client);
    }

    public get TransactionsApi() {
        return new TransactionsApi(this.client);
    }

    public get TransfersApi() {
        return new TransfersApi(this.client);
    }
}
