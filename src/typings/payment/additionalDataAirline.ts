/*
 * The version of the OpenAPI document: v68
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AdditionalDataAirline {
    /**
    * The reference number for the invoice, issued by the agency. * Encoding: ASCII * minLength: 1 character * maxLength: 6 characters
    */
    'airline_agency_invoice_number'?: string;
    /**
    * The two-letter agency plan identifier. * Encoding: ASCII * minLength: 2 characters * maxLength: 2 characters
    */
    'airline_agency_plan_name'?: string;
    /**
    * The [IATA](https://www.iata.org/services/pages/codes.aspx) 3-digit accounting code (PAX) that identifies the carrier. * Format: IATA 3-digit accounting code (PAX) * Example: KLM = 074 * minLength: 3 characters * maxLength: 3 characters * Must not be all spaces *Must not be all zeros.
    */
    'airline_airline_code'?: string;
    /**
    * The [IATA](https://www.iata.org/services/pages/codes.aspx) 2-letter accounting code (PAX) that identifies the carrier. * Encoding: ASCII * Example: KLM = KL * minLength: 2 characters * maxLength: 2 characters * Must not be all spaces *Must not be all zeros.
    */
    'airline_airline_designator_code'?: string;
    /**
    * The amount charged for boarding the plane, in [minor units](https://docs.adyen.com/development-resources/currency-codes). * Encoding: Numeric * minLength: 1 character * maxLength: 18 characters
    */
    'airline_boarding_fee'?: string;
    /**
    * The [CRS](https://en.wikipedia.org/wiki/Computer_reservation_system) used to make the reservation and purchase the ticket. * Encoding: ASCII * minLength: 4 characters * maxLength: 4 characters
    */
    'airline_computerized_reservation_system'?: string;
    /**
    * The alphanumeric customer reference number. * Encoding: ASCII * maxLength: 20 characters * If you send more than 20 characters, the customer reference number is truncated * Must not be all spaces
    */
    'airline_customer_reference_number'?: string;
    /**
    * A code that identifies the type of item bought. The description of the code can appear on credit card statements. * Encoding: ASCII * Example: Passenger ticket = 01 * minLength: 2 characters * maxLength: 2 characters
    */
    'airline_document_type'?: string;
    /**
    * The flight departure date. Local time `(HH:mm)` is optional. * Date format: `yyyy-MM-dd` * Date and time format: `yyyy-MM-dd HH:mm` * minLength: 10 characters * maxLength: 16 characters
    */
    'airline_flight_date'?: string;
    /**
    * The date that the ticket was issued to the passenger. * minLength: 6 characters * maxLength: 6 characters * Date format: YYMMDD
    */
    'airline_issue_date'?: string;
    /**
    * The [IATA](https://www.iata.org/services/pages/codes.aspx) 2-letter accounting code (PAX) that identifies the carrier. This field is required if the airline data includes leg details. * Example: KLM = KL * minLength: 2 characters * maxLength: 2 characters * Must not be all spaces *Must not be all zeros.
    */
    'airline_leg_carrier_code'?: string;
    /**
    * A one-letter travel class identifier.  The following are common:  * F: first class * J: business class * Y: economy class * W: premium economy  * Encoding: ASCII * minLength: 1 character * maxLength: 1 character * Must not be all spaces *Must not be all zeros.
    */
    'airline_leg_class_of_travel'?: string;
    /**
    *   Date and time of travel in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format `yyyy-MM-dd HH:mm`. * Encoding: ASCII * minLength: 16 characters * maxLength: 16 characters
    */
    'airline_leg_date_of_travel'?: string;
    /**
    * The [IATA](https://www.iata.org/services/pages/codes.aspx) three-letter airport code of the departure airport. This field is required if the airline data includes leg details.  * Encoding: ASCII * Example: Amsterdam = AMS * minLength: 3 characters * maxLength: 3 characters * Must not be all spaces *Must not be all zeros.
    */
    'airline_leg_depart_airport'?: string;
    /**
    * The amount of [departure tax](https://en.wikipedia.org/wiki/Departure_tax) charged, in [minor units](https://docs.adyen.com/development-resources/currency-codes). * Encoding: Numeric * minLength: 1 * maxLength: 12 *Must not be all zeros.
    */
    'airline_leg_depart_tax'?: string;
    /**
    * The [IATA](https://www.iata.org/services/pages/codes.aspx) 3-letter airport code of the destination airport. This field is required if the airline data includes leg details. * Example: Amsterdam = AMS * Encoding: ASCII * minLength: 3 characters * maxLength: 3 characters * Must not be all spaces *Must not be all zeros.
    */
    'airline_leg_destination_code'?: string;
    /**
    * The [fare basis code](https://en.wikipedia.org/wiki/Fare_basis_code), alphanumeric. * minLength: 1 character * maxLength: 6 characters * Must not be all spaces *Must not be all zeros.
    */
    'airline_leg_fare_base_code'?: string;
    /**
    * The flight identifier. * minLength: 1 character * maxLength: 5 characters * Must not be all spaces *Must not be all zeros.
    */
    'airline_leg_flight_number'?: string;
    /**
    * A one-letter code that indicates whether the passenger is entitled to make a stopover. Can be a space, O if the passenger is entitled to make a stopover, or X if they are not. * Encoding: ASCII * minLength: 1 character * maxLength: 1 character
    */
    'airline_leg_stop_over_code'?: string;
    /**
    * The passenger\'s date of birth.  Date format: `yyyy-MM-dd` * minLength: 10 * maxLength: 10
    */
    'airline_passenger_date_of_birth'?: string;
    /**
    * The passenger\'s first name. > This field is required if the airline data includes passenger details or leg details. * Encoding: ASCII
    */
    'airline_passenger_first_name'?: string;
    /**
    * The passenger\'s last name. > This field is required if the airline data includes passenger details or leg details. * Encoding: ASCII
    */
    'airline_passenger_last_name'?: string;
    /**
    * The passenger\'s telephone number, including country code. This is an alphanumeric field that can include the \'+\' and \'-\' signs. * Encoding: ASCII * minLength: 3 characters * maxLength: 30 characters
    */
    'airline_passenger_telephone_number'?: string;
    /**
    * The IATA passenger type code (PTC). * Encoding: ASCII * minLength: 3 characters * maxLength: 6 characters
    */
    'airline_passenger_traveller_type'?: string;
    /**
    * The passenger\'s name, initials, and title. * Format: last name + first name or initials + title * Example: *FLYER / MARY MS* * minLength: 1 character * maxLength: 20 characters * If you send more than 20 characters, the name is truncated * Must not be all spaces  *Must not be all zeros.
    */
    'airline_passenger_name': string;
    /**
    * The address of the organization that issued the ticket. * minLength: 0 characters * maxLength: 16 characters
    */
    'airline_ticket_issue_address'?: string;
    /**
    * The ticket\'s unique identifier. * minLength: 1 character * maxLength: 15 characters * Must not be all spaces *Must not be all zeros.
    */
    'airline_ticket_number'?: string;
    /**
    * The unique identifier from IATA or ARC for the travel agency that issues the ticket. * Encoding: ASCII * minLength: 1 character * maxLength: 8 characters * Must not be all spaces *Must not be all zeros.
    */
    'airline_travel_agency_code'?: string;
    /**
    * The name of the travel agency.  * Encoding: ASCII * minLength: 1 character * maxLength: 25 characters * Must not be all spaces *Must not be all zeros.
    */
    'airline_travel_agency_name'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "airline_agency_invoice_number",
            "baseName": "airline.agency_invoice_number",
            "type": "string"
        },
        {
            "name": "airline_agency_plan_name",
            "baseName": "airline.agency_plan_name",
            "type": "string"
        },
        {
            "name": "airline_airline_code",
            "baseName": "airline.airline_code",
            "type": "string"
        },
        {
            "name": "airline_airline_designator_code",
            "baseName": "airline.airline_designator_code",
            "type": "string"
        },
        {
            "name": "airline_boarding_fee",
            "baseName": "airline.boarding_fee",
            "type": "string"
        },
        {
            "name": "airline_computerized_reservation_system",
            "baseName": "airline.computerized_reservation_system",
            "type": "string"
        },
        {
            "name": "airline_customer_reference_number",
            "baseName": "airline.customer_reference_number",
            "type": "string"
        },
        {
            "name": "airline_document_type",
            "baseName": "airline.document_type",
            "type": "string"
        },
        {
            "name": "airline_flight_date",
            "baseName": "airline.flight_date",
            "type": "string"
        },
        {
            "name": "airline_issue_date",
            "baseName": "airline.issue_date",
            "type": "string"
        },
        {
            "name": "airline_leg_carrier_code",
            "baseName": "airline.leg.carrier_code",
            "type": "string"
        },
        {
            "name": "airline_leg_class_of_travel",
            "baseName": "airline.leg.class_of_travel",
            "type": "string"
        },
        {
            "name": "airline_leg_date_of_travel",
            "baseName": "airline.leg.date_of_travel",
            "type": "string"
        },
        {
            "name": "airline_leg_depart_airport",
            "baseName": "airline.leg.depart_airport",
            "type": "string"
        },
        {
            "name": "airline_leg_depart_tax",
            "baseName": "airline.leg.depart_tax",
            "type": "string"
        },
        {
            "name": "airline_leg_destination_code",
            "baseName": "airline.leg.destination_code",
            "type": "string"
        },
        {
            "name": "airline_leg_fare_base_code",
            "baseName": "airline.leg.fare_base_code",
            "type": "string"
        },
        {
            "name": "airline_leg_flight_number",
            "baseName": "airline.leg.flight_number",
            "type": "string"
        },
        {
            "name": "airline_leg_stop_over_code",
            "baseName": "airline.leg.stop_over_code",
            "type": "string"
        },
        {
            "name": "airline_passenger_date_of_birth",
            "baseName": "airline.passenger.date_of_birth",
            "type": "string"
        },
        {
            "name": "airline_passenger_first_name",
            "baseName": "airline.passenger.first_name",
            "type": "string"
        },
        {
            "name": "airline_passenger_last_name",
            "baseName": "airline.passenger.last_name",
            "type": "string"
        },
        {
            "name": "airline_passenger_telephone_number",
            "baseName": "airline.passenger.telephone_number",
            "type": "string"
        },
        {
            "name": "airline_passenger_traveller_type",
            "baseName": "airline.passenger.traveller_type",
            "type": "string"
        },
        {
            "name": "airline_passenger_name",
            "baseName": "airline.passenger_name",
            "type": "string"
        },
        {
            "name": "airline_ticket_issue_address",
            "baseName": "airline.ticket_issue_address",
            "type": "string"
        },
        {
            "name": "airline_ticket_number",
            "baseName": "airline.ticket_number",
            "type": "string"
        },
        {
            "name": "airline_travel_agency_code",
            "baseName": "airline.travel_agency_code",
            "type": "string"
        },
        {
            "name": "airline_travel_agency_name",
            "baseName": "airline.travel_agency_name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AdditionalDataAirline.attributeTypeMap;
    }
}

