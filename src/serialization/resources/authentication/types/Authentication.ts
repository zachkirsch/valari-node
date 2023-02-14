/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { ValariApi } from "@fern-api/valari";
import * as core from "../../../../core";

export const Authentication: core.serialization.ObjectSchema<serializers.Authentication.Raw, ValariApi.Authentication> =
    core.serialization.object({
        message: core.serialization.string().optional(),
        data: core.serialization.lazyObject(async () => (await import("../../..")).AuthenticationData).optional(),
    });

export declare namespace Authentication {
    interface Raw {
        message?: string | null;
        data?: serializers.AuthenticationData.Raw | null;
    }
}