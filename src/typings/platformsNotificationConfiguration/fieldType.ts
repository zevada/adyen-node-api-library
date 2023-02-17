/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class FieldType {
    /**
    * The full name of the property.
    */
    'field'?: string;
    /**
    * The type of the field.
    */
    'fieldName'?: FieldType.FieldNameEnum;
    /**
    * The code of the shareholder that the field belongs to. If empty, the field belongs to an account holder.
    */
    'shareholderCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "field",
            "baseName": "field",
            "type": "string"
        },
        {
            "name": "fieldName",
            "baseName": "fieldName",
            "type": "FieldType.FieldNameEnum"
        },
        {
            "name": "shareholderCode",
            "baseName": "shareholderCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FieldType.attributeTypeMap;
    }
}

export namespace FieldType {
    export enum FieldNameEnum {
        AccountCode = <any> 'accountCode',
        AccountHolderCode = <any> 'accountHolderCode',
        AccountHolderDetails = <any> 'accountHolderDetails',
        AccountNumber = <any> 'accountNumber',
        AccountStateType = <any> 'accountStateType',
        AccountStatus = <any> 'accountStatus',
        AccountType = <any> 'accountType',
        Address = <any> 'address',
        BalanceAccount = <any> 'balanceAccount',
        BalanceAccountActive = <any> 'balanceAccountActive',
        BalanceAccountCode = <any> 'balanceAccountCode',
        BalanceAccountId = <any> 'balanceAccountId',
        BankAccount = <any> 'bankAccount',
        BankAccountCode = <any> 'bankAccountCode',
        BankAccountName = <any> 'bankAccountName',
        BankAccountUuid = <any> 'bankAccountUUID',
        BankBicSwift = <any> 'bankBicSwift',
        BankCity = <any> 'bankCity',
        BankCode = <any> 'bankCode',
        BankName = <any> 'bankName',
        BankStatement = <any> 'bankStatement',
        BranchCode = <any> 'branchCode',
        BusinessContact = <any> 'businessContact',
        CardToken = <any> 'cardToken',
        CheckCode = <any> 'checkCode',
        City = <any> 'city',
        CompanyRegistration = <any> 'companyRegistration',
        ConstitutionalDocument = <any> 'constitutionalDocument',
        Country = <any> 'country',
        CountryCode = <any> 'countryCode',
        Currency = <any> 'currency',
        CurrencyCode = <any> 'currencyCode',
        DateOfBirth = <any> 'dateOfBirth',
        Description = <any> 'description',
        DestinationAccountCode = <any> 'destinationAccountCode',
        Document = <any> 'document',
        DocumentContent = <any> 'documentContent',
        DocumentExpirationDate = <any> 'documentExpirationDate',
        DocumentIssuerCountry = <any> 'documentIssuerCountry',
        DocumentIssuerState = <any> 'documentIssuerState',
        DocumentName = <any> 'documentName',
        DocumentNumber = <any> 'documentNumber',
        DocumentType = <any> 'documentType',
        DoingBusinessAs = <any> 'doingBusinessAs',
        DrivingLicence = <any> 'drivingLicence',
        DrivingLicenceBack = <any> 'drivingLicenceBack',
        DrivingLicenceFront = <any> 'drivingLicenceFront',
        DrivingLicense = <any> 'drivingLicense',
        Email = <any> 'email',
        FirstName = <any> 'firstName',
        FormType = <any> 'formType',
        FullPhoneNumber = <any> 'fullPhoneNumber',
        Gender = <any> 'gender',
        HopWebserviceUser = <any> 'hopWebserviceUser',
        HouseNumberOrName = <any> 'houseNumberOrName',
        Iban = <any> 'iban',
        IdCard = <any> 'idCard',
        IdCardBack = <any> 'idCardBack',
        IdCardFront = <any> 'idCardFront',
        IdNumber = <any> 'idNumber',
        IdentityDocument = <any> 'identityDocument',
        IndividualDetails = <any> 'individualDetails',
        Infix = <any> 'infix',
        JobTitle = <any> 'jobTitle',
        LastName = <any> 'lastName',
        LastReviewDate = <any> 'lastReviewDate',
        LegalArrangement = <any> 'legalArrangement',
        LegalArrangementCode = <any> 'legalArrangementCode',
        LegalArrangementEntity = <any> 'legalArrangementEntity',
        LegalArrangementEntityCode = <any> 'legalArrangementEntityCode',
        LegalArrangementLegalForm = <any> 'legalArrangementLegalForm',
        LegalArrangementMember = <any> 'legalArrangementMember',
        LegalArrangementMembers = <any> 'legalArrangementMembers',
        LegalArrangementName = <any> 'legalArrangementName',
        LegalArrangementReference = <any> 'legalArrangementReference',
        LegalArrangementRegistrationNumber = <any> 'legalArrangementRegistrationNumber',
        LegalArrangementTaxNumber = <any> 'legalArrangementTaxNumber',
        LegalArrangementType = <any> 'legalArrangementType',
        LegalBusinessName = <any> 'legalBusinessName',
        LegalEntity = <any> 'legalEntity',
        LegalEntityType = <any> 'legalEntityType',
        Logo = <any> 'logo',
        MerchantAccount = <any> 'merchantAccount',
        MerchantCategoryCode = <any> 'merchantCategoryCode',
        MerchantHouseNumber = <any> 'merchantHouseNumber',
        MerchantReference = <any> 'merchantReference',
        MicroDeposit = <any> 'microDeposit',
        Name = <any> 'name',
        Nationality = <any> 'nationality',
        OriginalReference = <any> 'originalReference',
        OwnerCity = <any> 'ownerCity',
        OwnerCountryCode = <any> 'ownerCountryCode',
        OwnerDateOfBirth = <any> 'ownerDateOfBirth',
        OwnerHouseNumberOrName = <any> 'ownerHouseNumberOrName',
        OwnerName = <any> 'ownerName',
        OwnerPostalCode = <any> 'ownerPostalCode',
        OwnerState = <any> 'ownerState',
        OwnerStreet = <any> 'ownerStreet',
        Passport = <any> 'passport',
        PassportNumber = <any> 'passportNumber',
        PayoutMethodCode = <any> 'payoutMethodCode',
        PayoutSchedule = <any> 'payoutSchedule',
        PciSelfAssessment = <any> 'pciSelfAssessment',
        PersonalData = <any> 'personalData',
        PhoneCountryCode = <any> 'phoneCountryCode',
        PhoneNumber = <any> 'phoneNumber',
        PostalCode = <any> 'postalCode',
        PrimaryCurrency = <any> 'primaryCurrency',
        Reason = <any> 'reason',
        RegistrationNumber = <any> 'registrationNumber',
        ReturnUrl = <any> 'returnUrl',
        Schedule = <any> 'schedule',
        Shareholder = <any> 'shareholder',
        ShareholderCode = <any> 'shareholderCode',
        ShareholderCodeAndSignatoryCode = <any> 'shareholderCodeAndSignatoryCode',
        ShareholderCodeOrSignatoryCode = <any> 'shareholderCodeOrSignatoryCode',
        ShareholderType = <any> 'shareholderType',
        ShopperInteraction = <any> 'shopperInteraction',
        Signatory = <any> 'signatory',
        SignatoryCode = <any> 'signatoryCode',
        SocialSecurityNumber = <any> 'socialSecurityNumber',
        SourceAccountCode = <any> 'sourceAccountCode',
        SplitAccount = <any> 'splitAccount',
        SplitConfigurationUuid = <any> 'splitConfigurationUUID',
        SplitCurrency = <any> 'splitCurrency',
        SplitValue = <any> 'splitValue',
        Splits = <any> 'splits',
        StateOrProvince = <any> 'stateOrProvince',
        Status = <any> 'status',
        StockExchange = <any> 'stockExchange',
        StockNumber = <any> 'stockNumber',
        StockTicker = <any> 'stockTicker',
        Store = <any> 'store',
        StoreDetail = <any> 'storeDetail',
        StoreName = <any> 'storeName',
        StoreReference = <any> 'storeReference',
        Street = <any> 'street',
        TaxId = <any> 'taxId',
        Tier = <any> 'tier',
        TierNumber = <any> 'tierNumber',
        TransferCode = <any> 'transferCode',
        UltimateParentCompany = <any> 'ultimateParentCompany',
        UltimateParentCompanyAddressDetails = <any> 'ultimateParentCompanyAddressDetails',
        UltimateParentCompanyAddressDetailsCountry = <any> 'ultimateParentCompanyAddressDetailsCountry',
        UltimateParentCompanyBusinessDetails = <any> 'ultimateParentCompanyBusinessDetails',
        UltimateParentCompanyBusinessDetailsLegalBusinessName = <any> 'ultimateParentCompanyBusinessDetailsLegalBusinessName',
        UltimateParentCompanyBusinessDetailsRegistrationNumber = <any> 'ultimateParentCompanyBusinessDetailsRegistrationNumber',
        UltimateParentCompanyCode = <any> 'ultimateParentCompanyCode',
        UltimateParentCompanyStockExchange = <any> 'ultimateParentCompanyStockExchange',
        UltimateParentCompanyStockNumber = <any> 'ultimateParentCompanyStockNumber',
        UltimateParentCompanyStockNumberOrStockTicker = <any> 'ultimateParentCompanyStockNumberOrStockTicker',
        UltimateParentCompanyStockTicker = <any> 'ultimateParentCompanyStockTicker',
        Unknown = <any> 'unknown',
        Value = <any> 'value',
        VerificationType = <any> 'verificationType',
        VirtualAccount = <any> 'virtualAccount',
        VisaNumber = <any> 'visaNumber',
        WebAddress = <any> 'webAddress',
        Year = <any> 'year'
    }
}