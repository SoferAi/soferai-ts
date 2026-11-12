# Sofer.Ai TypeScript SDK

Install with `npm install soferai`.

```typescript
import { SoferAIClient } from "soferai";

const client = new SoferAIClient({ apiKey: process.env.SOFERAI_API_KEY });
const created = await client.ocr.createOcrDocument({
  file: "BASE64_ENCODED_IMAGE_OR_PDF",
  fileName: "page.png",
  contentType: "image/png",
  mode: "handwriting",
});
const status = await client.ocr.getOcrDocument(created.documentId);
```

OCR is asynchronous: poll status until completion. Modes are `standard`, `enhanced`, and `handwriting`; creation returns a durable document ID shared with Documents endpoints. See the [OCR quickstart](https://docs.sofer.ai/ocr) for pricing, limits, and examples.

This release refreshes the external API types and removes the legacy Usage resource. Internal OCR job/index/translation endpoints are excluded. `api_source.json` records the API release and schema fingerprint.

For maintainers, `yarn build && yarn test:ocr` exercises compiled create/status HTTP requests for every mode against a local mock server; `yarn test` runs the unit suite.
