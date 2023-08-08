/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { BalanceMutation } from './balanceMutation';
import { CounterpartyV3 } from './counterpartyV3';
import { PaymentInstrument } from './paymentInstrument';
import { RelayedAuthorisationData } from './relayedAuthorisationData';
import { ResourceReference } from './resourceReference';
import { TransactionRulesResult } from './transactionRulesResult';
import { TransferEvent } from './transferEvent';
import { TransferNotificationTransferTracking } from './transferNotificationTransferTracking';
import { TransferNotificationValidationFact } from './transferNotificationValidationFact';

export class TransferData {
    'accountHolder'?: ResourceReference;
    'amount': Amount;
    'balanceAccount'?: ResourceReference;
    /**
    * The unique identifier of the source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).
    */
    'balanceAccountId'?: string;
    /**
    * The unique identifier of the balance platform.
    */
    'balancePlatform'?: string;
    /**
    * The list of the latest balance statuses in the transfer.
    */
    'balances'?: Array<BalanceMutation>;
    /**
    * The type of transfer.  Possible values:   - **bank**: Transfer to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account.  - **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.  - **issuedCard**: Transfer initiated by a Adyen-issued card.  - **platformPayment**: Fund movements related to payments that are acquired for your users.
    */
    'category': TransferData.CategoryEnum;
    'counterparty'?: CounterpartyV3;
    /**
    * The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.
    */
    'creationDate'?: Date;
    /**
    * Your description for the transfer. It is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.  Supported characters: **[a-z] [A-Z] [0-9] / - ?** **: ( ) . , \' + Space**  Supported characters for **regular** and **fast** transfers to a US counterparty: **[a-z] [A-Z] [0-9] & $ % # @** **~ = + - _ \' \" ! ?**
    */
    'description'?: string;
    /**
    * The direction of the transfer.  Possible values: **incoming**, **outgoing**.
    */
    'direction'?: TransferData.DirectionEnum;
    /**
    * The list of events leading up to the current status of the transfer.
    */
    'events'?: Array<TransferEvent>;
    /**
    * The ID of the resource.
    */
    'id'?: string;
    /**
    * The capture\'s merchant reference included in the transfer.
    */
    'modificationMerchantReference'?: string;
    /**
    * The capture reference included in the transfer.
    */
    'modificationPspReference'?: string;
    /**
    * Indicates the method used for entering the PAN to initiate a transaction.  Possible values: **manual**, **chip**, **magstripe**, **contactless**, **cof**, **ecommerce**, **token**.
    */
    'panEntryMode'?: TransferData.PanEntryModeEnum;
    'paymentInstrument'?: PaymentInstrument;
    /**
    * The unique identifier of the [payment instrument](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) used in the transfer.
    */
    'paymentInstrumentId'?: string;
    /**
    * The payment\'s merchant reference included in the transfer.
    */
    'paymentMerchantReference'?: string;
    /**
    * The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Required for transfers with `category` **bank**.  Possible values:  * **regular**: For normal, low-value transactions.  * **fast**: Faster way to transfer funds but has higher fees. Recommended for high-priority, low-value transactions.  * **wire**: Fastest way to transfer funds but has the highest fees. Recommended for high-priority, high-value transactions.  * **instant**: Instant way to transfer funds in [SEPA countries](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).  * **crossBorder**: High-value transfer to a recipient in a different country.  * **internal**: Transfer to an Adyen-issued business bank account (by bank account number/IBAN).
    */
    'priority'?: TransferData.PriorityEnum;
    /**
    * Contains information about how the payment was processed. For example, **ecommerce** for online or **pos** for in-person payments.
    */
    'processingType'?: TransferData.ProcessingTypeEnum;
    /**
    * The payment reference included in the transfer.
    */
    'pspPaymentReference'?: string;
    /**
    * Additional information about the status of the transfer.
    */
    'reason'?: TransferData.ReasonEnum;
    /**
    * Your reference for the transfer, used internally within your platform. If you don\'t provide this in the request, Adyen generates a unique reference.
    */
    'reference'?: string;
    /**
    *  A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both the source and recipient of funds.   Supported characters: **a-z**, **A-Z**, **0-9**. The maximum length depends on the `category`.  - **internal**: 80 characters  - **bank**: 35 characters when transferring to an IBAN, 15 characters for others.
    */
    'referenceForBeneficiary'?: string;
    'relayedAuthorisationData'?: RelayedAuthorisationData;
    /**
    * The sequence number of the transfer notification. The numbers start from 1 and increase with each new notification for a specific transfer.  It can help you restore the correct sequence of events even if they arrive out of order.
    */
    'sequenceNumber'?: number;
    /**
    * The result of the transfer.   For example, **authorised**, **refused**, or **error**.
    */
    'status': TransferData.StatusEnum;
    'tracking'?: TransferNotificationTransferTracking;
    /**
    * The ID of the transaction that is created based on the transfer.
    */
    'transactionId'?: string;
    'transactionRulesResult'?: TransactionRulesResult;
    /**
    * The type of transfer or transaction. For example, **refund**, **payment**, **internalTransfer**, **bankTransfer**.
    */
    'type'?: TransferData.TypeEnum;
    /**
    * The evaluation of the validation facts. See [validation checks](https://docs.adyen.com/issuing/validation-checks) for more information.
    */
    'validationFacts'?: Array<TransferNotificationValidationFact>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolder",
            "baseName": "accountHolder",
            "type": "ResourceReference"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "balanceAccount",
            "baseName": "balanceAccount",
            "type": "ResourceReference"
        },
        {
            "name": "balanceAccountId",
            "baseName": "balanceAccountId",
            "type": "string"
        },
        {
            "name": "balancePlatform",
            "baseName": "balancePlatform",
            "type": "string"
        },
        {
            "name": "balances",
            "baseName": "balances",
            "type": "Array<BalanceMutation>"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "TransferData.CategoryEnum"
        },
        {
            "name": "counterparty",
            "baseName": "counterparty",
            "type": "CounterpartyV3"
        },
        {
            "name": "creationDate",
            "baseName": "creationDate",
            "type": "Date"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "direction",
            "baseName": "direction",
            "type": "TransferData.DirectionEnum"
        },
        {
            "name": "events",
            "baseName": "events",
            "type": "Array<TransferEvent>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "modificationMerchantReference",
            "baseName": "modificationMerchantReference",
            "type": "string"
        },
        {
            "name": "modificationPspReference",
            "baseName": "modificationPspReference",
            "type": "string"
        },
        {
            "name": "panEntryMode",
            "baseName": "panEntryMode",
            "type": "TransferData.PanEntryModeEnum"
        },
        {
            "name": "paymentInstrument",
            "baseName": "paymentInstrument",
            "type": "PaymentInstrument"
        },
        {
            "name": "paymentInstrumentId",
            "baseName": "paymentInstrumentId",
            "type": "string"
        },
        {
            "name": "paymentMerchantReference",
            "baseName": "paymentMerchantReference",
            "type": "string"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "TransferData.PriorityEnum"
        },
        {
            "name": "processingType",
            "baseName": "processingType",
            "type": "TransferData.ProcessingTypeEnum"
        },
        {
            "name": "pspPaymentReference",
            "baseName": "pspPaymentReference",
            "type": "string"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "TransferData.ReasonEnum"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "referenceForBeneficiary",
            "baseName": "referenceForBeneficiary",
            "type": "string"
        },
        {
            "name": "relayedAuthorisationData",
            "baseName": "relayedAuthorisationData",
            "type": "RelayedAuthorisationData"
        },
        {
            "name": "sequenceNumber",
            "baseName": "sequenceNumber",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TransferData.StatusEnum"
        },
        {
            "name": "tracking",
            "baseName": "tracking",
            "type": "TransferNotificationTransferTracking"
        },
        {
            "name": "transactionId",
            "baseName": "transactionId",
            "type": "string"
        },
        {
            "name": "transactionRulesResult",
            "baseName": "transactionRulesResult",
            "type": "TransactionRulesResult"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TransferData.TypeEnum"
        },
        {
            "name": "validationFacts",
            "baseName": "validationFacts",
            "type": "Array<TransferNotificationValidationFact>"
        }    ];

    static getAttributeTypeMap() {
        return TransferData.attributeTypeMap;
    }
}

export namespace TransferData {
    export enum CategoryEnum {
        Bank = 'bank',
        Internal = 'internal',
        IssuedCard = 'issuedCard',
        PlatformPayment = 'platformPayment'
    }
    export enum DirectionEnum {
        Incoming = 'incoming',
        Outgoing = 'outgoing'
    }
    export enum PanEntryModeEnum {
        Chip = 'chip',
        Cof = 'cof',
        Contactless = 'contactless',
        Ecommerce = 'ecommerce',
        Magstripe = 'magstripe',
        Manual = 'manual',
        Token = 'token'
    }
    export enum PriorityEnum {
        CrossBorder = 'crossBorder',
        DirectDebit = 'directDebit',
        Fast = 'fast',
        Instant = 'instant',
        Internal = 'internal',
        Regular = 'regular',
        Wire = 'wire'
    }
    export enum ProcessingTypeEnum {
        AtmWithdraw = 'atmWithdraw',
        BalanceInquiry = 'balanceInquiry',
        Ecommerce = 'ecommerce',
        Moto = 'moto',
        Pos = 'pos',
        PurchaseWithCashback = 'purchaseWithCashback',
        Recurring = 'recurring',
        Token = 'token'
    }
    export enum ReasonEnum {
        AmountLimitExceeded = 'amountLimitExceeded',
        Approved = 'approved',
        CounterpartyAccountBlocked = 'counterpartyAccountBlocked',
        CounterpartyAccountClosed = 'counterpartyAccountClosed',
        CounterpartyAccountNotFound = 'counterpartyAccountNotFound',
        CounterpartyAddressRequired = 'counterpartyAddressRequired',
        CounterpartyBankTimedOut = 'counterpartyBankTimedOut',
        CounterpartyBankUnavailable = 'counterpartyBankUnavailable',
        Error = 'error',
        NotEnoughBalance = 'notEnoughBalance',
        RefusedByCounterpartyBank = 'refusedByCounterpartyBank',
        RouteNotFound = 'routeNotFound',
        Unknown = 'unknown'
    }
    export enum StatusEnum {
        ApprovalPending = 'approvalPending',
        AtmWithdrawal = 'atmWithdrawal',
        AtmWithdrawalReversalPending = 'atmWithdrawalReversalPending',
        AtmWithdrawalReversed = 'atmWithdrawalReversed',
        AuthAdjustmentAuthorised = 'authAdjustmentAuthorised',
        AuthAdjustmentError = 'authAdjustmentError',
        AuthAdjustmentRefused = 'authAdjustmentRefused',
        Authorised = 'authorised',
        BankTransfer = 'bankTransfer',
        BankTransferPending = 'bankTransferPending',
        Booked = 'booked',
        BookingPending = 'bookingPending',
        Cancelled = 'cancelled',
        CapturePending = 'capturePending',
        CaptureReversalPending = 'captureReversalPending',
        CaptureReversed = 'captureReversed',
        Captured = 'captured',
        CapturedExternally = 'capturedExternally',
        Chargeback = 'chargeback',
        ChargebackExternally = 'chargebackExternally',
        ChargebackPending = 'chargebackPending',
        ChargebackReversalPending = 'chargebackReversalPending',
        ChargebackReversed = 'chargebackReversed',
        Credited = 'credited',
        DepositCorrection = 'depositCorrection',
        DepositCorrectionPending = 'depositCorrectionPending',
        Dispute = 'dispute',
        DisputeClosed = 'disputeClosed',
        DisputeExpired = 'disputeExpired',
        DisputeNeedsReview = 'disputeNeedsReview',
        Error = 'error',
        Expired = 'expired',
        Failed = 'failed',
        Fee = 'fee',
        FeePending = 'feePending',
        InternalTransfer = 'internalTransfer',
        InternalTransferPending = 'internalTransferPending',
        InvoiceDeduction = 'invoiceDeduction',
        InvoiceDeductionPending = 'invoiceDeductionPending',
        ManualCorrectionPending = 'manualCorrectionPending',
        ManuallyCorrected = 'manuallyCorrected',
        MatchedStatement = 'matchedStatement',
        MatchedStatementPending = 'matchedStatementPending',
        MerchantPayin = 'merchantPayin',
        MerchantPayinPending = 'merchantPayinPending',
        MerchantPayinReversed = 'merchantPayinReversed',
        MerchantPayinReversedPending = 'merchantPayinReversedPending',
        MiscCost = 'miscCost',
        MiscCostPending = 'miscCostPending',
        PaymentCost = 'paymentCost',
        PaymentCostPending = 'paymentCostPending',
        Received = 'received',
        RefundPending = 'refundPending',
        RefundReversalPending = 'refundReversalPending',
        RefundReversed = 'refundReversed',
        Refunded = 'refunded',
        RefundedExternally = 'refundedExternally',
        Refused = 'refused',
        ReserveAdjustment = 'reserveAdjustment',
        ReserveAdjustmentPending = 'reserveAdjustmentPending',
        Returned = 'returned',
        SecondChargeback = 'secondChargeback',
        SecondChargebackPending = 'secondChargebackPending',
        Undefined = 'undefined'
    }
    export enum TypeEnum {
        AtmWithdrawal = 'atmWithdrawal',
        AtmWithdrawalReversal = 'atmWithdrawalReversal',
        BalanceAdjustment = 'balanceAdjustment',
        BalanceRollover = 'balanceRollover',
        BankTransfer = 'bankTransfer',
        Capture = 'capture',
        CaptureReversal = 'captureReversal',
        Chargeback = 'chargeback',
        ChargebackReversal = 'chargebackReversal',
        DepositCorrection = 'depositCorrection',
        Fee = 'fee',
        Grant = 'grant',
        Installment = 'installment',
        InstallmentReversal = 'installmentReversal',
        InternalTransfer = 'internalTransfer',
        InvoiceDeduction = 'invoiceDeduction',
        Leftover = 'leftover',
        ManualCorrection = 'manualCorrection',
        MiscCost = 'miscCost',
        Payment = 'payment',
        PaymentCost = 'paymentCost',
        Refund = 'refund',
        RefundReversal = 'refundReversal',
        Repayment = 'repayment',
        ReserveAdjustment = 'reserveAdjustment',
        SecondChargeback = 'secondChargeback'
    }
}
