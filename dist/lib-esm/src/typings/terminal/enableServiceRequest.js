var EnableServiceRequest = (function () {
    function EnableServiceRequest() {
    }
    EnableServiceRequest.getAttributeTypeMap = function () {
        return EnableServiceRequest.attributeTypeMap;
    };
    EnableServiceRequest.discriminator = undefined;
    EnableServiceRequest.attributeTypeMap = [
        {
            "name": "displayOutput",
            "baseName": "DisplayOutput",
            "type": "DisplayOutput"
        },
        {
            "name": "servicesEnabled",
            "baseName": "ServicesEnabled",
            "type": "Array<EnableServiceRequest.ServicesEnabledEnum>"
        },
        {
            "name": "transactionAction",
            "baseName": "TransactionAction",
            "type": "TransactionActionType"
        }
    ];
    return EnableServiceRequest;
}());
export { EnableServiceRequest };
(function (EnableServiceRequest) {
    var ServicesEnabledEnum;
    (function (ServicesEnabledEnum) {
        ServicesEnabledEnum[ServicesEnabledEnum["CardAcquisition"] = 'CardAcquisition'] = "CardAcquisition";
        ServicesEnabledEnum[ServicesEnabledEnum["Loyalty"] = 'Loyalty'] = "Loyalty";
        ServicesEnabledEnum[ServicesEnabledEnum["Payment"] = 'Payment'] = "Payment";
    })(ServicesEnabledEnum = EnableServiceRequest.ServicesEnabledEnum || (EnableServiceRequest.ServicesEnabledEnum = {}));
})(EnableServiceRequest || (EnableServiceRequest = {}));
//# sourceMappingURL=enableServiceRequest.js.map