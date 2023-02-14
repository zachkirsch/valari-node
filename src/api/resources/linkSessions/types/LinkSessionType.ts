/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Value depends on the `sessionType`
 */
export type LinkSessionType =
    | "depositAccount"
    | "authorizedUser"
    | "customer"
    | "businessCustomer"
    | "application"
    | "businessApplication";

export const LinkSessionType = {
    DepositAccount: "depositAccount",
    AuthorizedUser: "authorizedUser",
    Customer: "customer",
    BusinessCustomer: "businessCustomer",
    Application: "application",
    BusinessApplication: "businessApplication",
} as const;
