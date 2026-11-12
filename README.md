# (BETA) Sofer.Ai Typescript SDK

This is the official Typescript SDK for Sofer.Ai.

## Installation

```bash
npm install soferai
```

## Usage

```typescript
import { SoferAi } from "soferai";

const soferai = new SoferAi({
    apiKey: "your-api-key",
});
```


## Public OCR

Use `client.ocr.createOcrDocument({file, fileName, contentType, mode})` with `standard`, `enhanced`, or `handwriting`, then poll `client.ocr.getOcrDocument(documentId)`. Creation returns a durable document ID shared with Documents endpoints. See https://docs.sofer.ai/ocr for rates and examples.

This release refreshes the public API audience and removes the legacy Usage resource. The included api_source.json records its API release and schema fingerprint.
