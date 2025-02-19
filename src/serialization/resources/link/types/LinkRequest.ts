/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SoferAI from "../../../../api/index";
import * as core from "../../../../core";

export const LinkRequest: core.serialization.ObjectSchema<serializers.LinkRequest.Raw, SoferAI.LinkRequest> =
    core.serialization.object({
        url: core.serialization.string(),
    });

export declare namespace LinkRequest {
    interface Raw {
        url: string;
    }
}
