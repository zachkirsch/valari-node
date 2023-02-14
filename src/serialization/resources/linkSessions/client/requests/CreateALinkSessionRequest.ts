/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { ValariApi } from "@fern-api/valari";
import * as core from "../../../../../core";

export const CreateALinkSessionRequest: core.serialization.Schema<
    serializers.CreateALinkSessionRequest.Raw,
    ValariApi.CreateALinkSessionRequest
> = core.serialization.object({
    data: core.serialization.lazyObject(async () => (await import("../../../..")).LinkSessionData),
});

export declare namespace CreateALinkSessionRequest {
    interface Raw {
        data: serializers.LinkSessionData.Raw;
    }
}
