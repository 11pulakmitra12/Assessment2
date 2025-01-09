const request = require('supertest');
const app = require('../app.js');
const expect = require('chai').expect;
//import { expect } from 'chai';
let jwt_token='';

  // i can have more, like attempting an actual user login
  describe('JWT-token-Generation ', () => {
    
    it('POST- /generate/token  -> should return status 200', async () => {
      
      const response = await request(app).post('/generate/token').send(
        {
            "userName":"Pulak",
            "userId":"pulak@gmail.com"
        }
      );
      
//   console.log("generate token is --->",response);
      expect(response?.status).to.equal(200);
      expect(response).to.have.property("_body");
      jwt_token=response._body;
      
    });

  });


  describe('JWT-token', () => {
   
    it('Get- /validate/token -> should return status 200', async () => {

      const response = (await request(app).get('/validate/token').auth(jwt_token,{type:"bearer"}));
    
      //   console.log("checking API response------>",response);

      // Assertions -just expecting my api to give a 200 response with more data
      expect(response?.status).to.equal(200);
      expect(response).to.have.property("_body");
      expect(response?._body).to.have.property("authData");
      expect(response?._body?.authData).to.have.property("user");
      
    });
  });