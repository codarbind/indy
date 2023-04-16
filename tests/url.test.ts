
import {expect} from "chai"
const request = require("supertest");
const baseUrl = process.env.BASE_URL || "localhost:3030";

describe("POST /encode - shorten a long url",()=>{
    it("should return 200", async()=>{
    let correctBody = {longurl:"www.testurl.com"}

        const response = await request(baseUrl)
        .post("/encode")
        .send(correctBody);
        
      expect(response.statusCode).to.equal(200); 
    
    })
})

