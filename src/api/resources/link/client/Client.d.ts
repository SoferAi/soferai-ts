/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SoferaiApi from "../../../index";
export declare namespace Link {
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
export declare class Link {
    protected readonly _options: Link.Options;
    constructor(_options?: Link.Options);
    /**
     * @param {SoferaiApi.LinkRequest} request
     * @param {Link.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SoferaiApi.LinkNotSupported}
     * @throws {@link SoferaiApi.LinkNotFound}
     * @throws {@link SoferaiApi.LinkError}
     *
     * @example
     *     await client.link.extract({
     *         url: "url"
     *     })
     */
    extract(request: SoferaiApi.LinkRequest, requestOptions?: Link.RequestOptions): Promise<SoferaiApi.LinkResponse>;
    protected _getAuthorizationHeader(): Promise<string | undefined>;
}
