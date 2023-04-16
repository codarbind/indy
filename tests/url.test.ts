

import {expect} from "chai"
const request = require("supertest");
const baseUrl = process.env.BASE_URL || "localhost:3030";


let slug:string
let longurl = "www.testurl.com"

describe("POST /encode - shorten a long url",()=>{
    it("should return 200", async()=>{
    let correctBody = {longurl}

        const response = await request(baseUrl)
        .post("/encode")
        .send(correctBody);
        let body = response.body;
        let data = body.data;
         slug = data.url.slug
      expect(response.statusCode).to.equal(200);
 
    
    })
})


describe("GET /decode - retrieve the longurl of a slug",()=>{

  it("should return 400 if the slug is not found",async()=>{
    const response = await request(baseUrl)
    .get(`/decode/slugabcdefgh09`)
    let body = response.body;
    let data = body.data;
    expect(response.statusCode).to.equal(404);
  })
  it("should return 200 if the slug is found",async()=>{
    const response = await request(baseUrl)
        .get(`/decode/${slug}`)
        let body = response.body;
        let data = body.data;
        expect(response.statusCode).to.equal(200);
        expect(data.longurl).to.equal(longurl)
      
  })
  
})
