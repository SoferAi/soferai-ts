/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SoferaiApi from "../../../index";
export declare namespace Health {
    interface Options {
        environment?: core.Supplier<environments.SoferaiApiEnvironment | string>;
        apiKey?: core.Supplier<core.BearerToken | undefined>;
    }
    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}
export declare class Health {
    protected readonly _options: Health.Options;
    constructor(_options?: Health.Options);
    /**
     * @param {Health.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.health.getHealth()
     */
    getHealth(requestOptions?: Health.RequestOptions): Promise<SoferaiApi.HealthResponse>;
    protected _getAuthorizationHeader(): Promise<string | undefined>;
}
