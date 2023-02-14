/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { ValariApi } from "@fern-api/valari";
import * as core from "../../../../core";

export const AttributesRequest: core.serialization.ObjectSchema<
    serializers.AttributesRequest.Raw,
    ValariApi.AttributesRequest
> = core.serialization.object({
    partnerId: core.serialization.string(),
    partnerSecret: core.serialization.string(),
    grantType: core.serialization.string(),
    appKey: core.serialization.string(),
});

export declare namespace AttributesRequest {
    interface Raw {
        partnerId: string;
        partnerSecret: string;
        grantType: string;
        appKey: string;
    }
}