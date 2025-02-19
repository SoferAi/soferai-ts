/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors/index";

export class RateLimitError extends errors.SoferAIError {
    constructor() {
        super({
            message: "RateLimitError",
            statusCode: 429,
        });
        Object.setPrototypeOf(this, RateLimitError.prototype);
    }
}
