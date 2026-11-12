const assert = require("node:assert/strict");
const http = require("node:http");
const {SoferAIClient} = require("../dist");
const id = "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32";
const modes = ["standard", "enhanced", "handwriting"];
const received = [];
const server = http.createServer(async (request, response) => {
  try {
    assert.equal(request.headers.authorization, "Bearer release-contract-test");
    const chunks = [];
    for await (const chunk of request) chunks.push(chunk);
    response.setHeader("Content-Type", "application/json");
    if (request.method === "POST") {
      assert.equal(request.url, "/v1/ocr/");
      const body = JSON.parse(Buffer.concat(chunks).toString());
      assert.ok(modes.includes(body.mode));
      assert.equal(body.file_name, "page.png");
      received.push(body.mode);
      const cost = {standard: 2.5, enhanced: 12.5, handwriting: 25}[body.mode];
      response.end(JSON.stringify({document_id:id,status:"PENDING",num_pages:1,estimated_api_cost_cents:cost}));
    } else {
      assert.equal(request.method, "GET");
      assert.equal(request.url, "/v1/ocr/" + id);
      response.end(JSON.stringify({document_id:id,title:"Release test",status:"COMPLETED",num_pages:1,completed_pages:1,failed_pages:0,pages:[{page_num:1,content:"<p>Release test</p>"}]}));
    }
  } catch (error) {
    response.statusCode = 500;
    response.end(JSON.stringify({error: String(error)}));
  }
});
server.listen(0, "127.0.0.1", async () => {
  try {
    const client = new SoferAIClient({apiKey:"release-contract-test",baseUrl:"http://127.0.0.1:" + server.address().port});
    for (const mode of modes) {
      const created = await client.ocr.createOcrDocument({file:"AA==",fileName:"page.png",contentType:"image/png",mode});
      assert.equal(created.documentId, id);
      const status = await client.ocr.getOcrDocument(id);
      assert.equal(status.status, "COMPLETED");
      assert.equal(status.pages[0].content, "<p>Release test</p>");
    }
    assert.deepEqual(received, modes);
    console.log("Compiled TypeScript create/status HTTP contracts passed for all modes");
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  } finally {
    server.close();
  }
});
