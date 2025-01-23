

// test/app.test.js
const request = require("supertest");
const sinon = require("sinon");
const app = require("../api/server"); 
const WordModel = require("../api/databse/word");

describe("API Tests", () => {
  afterEach(() => {
    sinon.restore(); // Restore the mocked methods after each test
  });

  // Test GET /
  describe("GET /", () => {
    it("should return a list of words", async () => {
      const mockWords = [{ en: "test", id: "1" }];
      sinon.stub(WordModel, "find").resolves(mockWords);

      const response = await request(app).get("/");

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockWords);
    });

    it("should return 500 if an error occurs", async () => {
      sinon.stub(WordModel, "find").throws(new Error("Database error"));

      const response = await request(app).get("/");

      expect(response.status).toBe(500);
      expect(response.body.message).toBe("Error fetching words");
    });
  });

  // Test GET /word/:id
  describe("GET /word/:id", () => {
    it("should return the word for a valid ID", async () => {
      const mockWord = { en: "test", id: "1" };
      sinon.stub(WordModel, "findById").resolves(mockWord);

      const response = await request(app).get("/word/1");

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockWord);
    });

    it("should return 404 if the word is not found", async () => {
      sinon.stub(WordModel, "findById").resolves(null);

      const response = await request(app).get("/word/1");

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Word not found");
    });

    it("should return 500 if an error occurs", async () => {
      sinon.stub(WordModel, "findById").throws(new Error("Database error"));

      const response = await request(app).get("/word/1");

      expect(response.status).toBe(500);
      expect(response.body.message).toBe("Error fetching the word");
    });
  });

  // Test GET /api/search
  describe("GET /api/search", () => {
    it("should return search results for a valid query", async () => {
      const mockResults = [{ en: "test", id: "1" }];
      sinon.stub(WordModel, "find").resolves(mockResults);

      const response = await request(app).get("/api/search?query=test");

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockResults);
    });

    it("should return 400 if query parameter is missing", async () => {
      const response = await request(app).get("/api/search");

      expect(response.status).toBe(400);
      expect(response.body.message).toBe("Query parameter is missing");
    });

    it("should return 500 if an error occurs", async () => {
      sinon.stub(WordModel, "find").throws(new Error("Database error"));

      const response = await request(app).get("/api/search?query=test");

      expect(response.status).toBe(500);
      expect(response.body.message).toBe("Error fetching search related");
    });
  });

  // Test DELETE /word/:id
  describe("DELETE /word/:id", () => {
    it("should delete a word and return a success message", async () => {
      const mockWord = { en: "test", id: "1" };
      sinon.stub(WordModel, "findByIdAndDelete").resolves(mockWord);

      const response = await request(app).delete("/word/1");

      expect(response.status).toBe(200);
      expect(response.body.message).toBe("Word deleted successfully");
    });

    it("should return 500 if an error occurs", async () => {
      sinon.stub(WordModel, "findByIdAndDelete").throws(new Error("Database error"));

      const response = await request(app).delete("/word/1");

      expect(response.status).toBe(500);
      expect(response.body.message).toBe("Error deleting the word");
    });
  });

  // Test PUT /word/:id
  describe("PUT /word/:id", () => {
    it("should update a word and return a success message", async () => {
      const mockWord = { en: "updated", id: "1" };
      sinon.stub(WordModel, "findByIdAndUpdate").resolves(mockWord);

      const response = await request(app)
        .put("/word/1")
        .send({ en: "updated" });

      expect(response.status).toBe(200);
      expect(response.body.message).toBe("Word updated successfully");
    });

    it("should return 500 if an error occurs", async () => {
      sinon.stub(WordModel, "findByIdAndUpdate").throws(new Error("Database error"));

      const response = await request(app)
        .put("/word/1")
        .send({ en: "updated" });

      expect(response.status).toBe(500);
      expect(response.body.message).toBe("Error updating the word");
    });
  });
});
