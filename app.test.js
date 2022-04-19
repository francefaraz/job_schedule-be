// it('should run',() => {})
const request = require("supertest");
const app = require("./index");
var d={};

describe("Dictonary", () => {
    //   it("should run", () => {});
      it("GET /api ---> words array", () => {
          return request(app)
          .get('/api')
          .expect('Content-Type', /json/)
          .expect(200)
          .then((response) =>{
              expect(response.body).toEqual(expect.arrayContaining([
                expect.objectContaining({ 
                    word1:expect.any(String),
                })
            ]))
          })
      });
      it("POST /api/add ---> created word", () => {
        return request(app).post('/api/add').send({ 
            word1:'peace begins with smile'
        }).expect('Content-Type', /json/)
        .then((response) =>{
            console.log(response.body)
            d=request.body
            expect(response.body).toEqual(expect.objectContaining({
                word1:expect.any(String),
            }))
        })
        
      });
      it("DELETE /api/:id ---> deleting specific document", () => {
         return request(app).delete('/api/624ab5b0a09f32547db8e7ca')
        //  withArgs({_id:"624a8453e6affd8dc9138993"})
         .expect('Content-Type', /json/)         
         .then((response) =>{
            console.log(response.body)
            expect(response.body).toEqual(expect.objectContaining({
                word1:expect.any(String),
            }))

         })

        //  624a8d6b989e3759dc503018
         

      });

      
      it("PUT /api/:id ---> updating specific document", () => {
        return request(app).put('/api/624ab66c43a15298f0de7891')
       //  withArgs({_id:"624a8453e6affd8dc9138993"})
       .send({ 
        word1:'aracde is in love is not that easy'
    })
    .then((response) =>{
        console.log(response.body)
        d=request.body
        expect(response.body).toEqual(expect.objectContaining({
            word1:expect.any(String),
        }))
    })
     });


    });