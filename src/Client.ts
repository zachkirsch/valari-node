/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Client as AuthenticationClient } from "./api/resources/authentication/client/Client";
import { Client as LinkSessionsClient } from "./api/resources/linkSessions/client/Client";

export declare namespace ValariApiClient {
    interface Options {
        environment?: environments.ValariApiEnvironment | string;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class ValariApiClient {
    constructor(private readonly options: ValariApiClient.Options) {}

    private _authentication: AuthenticationClient | undefined;

    public get authentication(): AuthenticationClient {
        return (this._authentication ??= new AuthenticationClient(this.options));
    }

    private _linkSessions: LinkSessionsClient | undefined;

    public get linkSessions(): LinkSessionsClient {
        return (this._linkSessions ??= new LinkSessionsClient(this.options));
    }
}
