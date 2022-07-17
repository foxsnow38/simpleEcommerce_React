Hello this this is simple ecommerce pratice project
im taking project from patika.dev here is the source:https://app.patika.dev/courses/react/ecommerce-tanitim

so when i try praticing video  i struggled with some issues and i wanna write this issues because i know somebodys can look,some of them not have experience with this issues.

first issue import problem in backend you need the change import type in node js how you change?
open your package.json and write a type:"module" https://prnt.sc/NPzIaO9v9rOb

2. issue yea dotenv not came to with package.json dependency so wee need install it
write terminal to npm or yarn i dotenv

3. issue is not find nodemon to so write npm i nodemon

4. issue in my pc i dont have mongo db so we need dowland mongo db and mongo comprass, if redis not installed to in there very sempathic grandpa is help you https://www.youtube.com/watch?v=_nFwPTHOMIY watch this.

5. issue is yea is cant find mongoose so write npm i mongoose 

6. ENV file does not have, so wee need create.

7.  collections file mongo db data base its change style kinda not correct so we need fix this files:
so object id its wrong we need to say this is not func this is need to be object like this ;

{
  "_id": {"$oid":"60783a5adfb6e19e4a2e6b3b"},
  "createdAt": {"$date":"2021-04-15T13:06:34.804Z"},
  "__v": 0
}

but data comes from 
/* 1 */
{
  "_id": ObjectId("60783a5adfb6e19e4a2e6b3b"),
  "createdAt": ISODate("2021-04-15T13:06:34.804Z"),
  "__v": 0
}
/* 2 */


 like that so we can fix this issue then you need to be fit in array to this objects. need to be like  [object,object] 
 
expamples pic 

https://prnt.sc/Eh_oewFXH7QS  https://prnt.sc/r3bf9pSNp0kf
then you totally fix your json collections open mongo db compass and create database  named of test then add your collections.



8. ıssue finally i give up  i think other ways then i find other ways  i install other students git same gitproject  here and i take backend : https://github.com/ekiciezgi/EcommerceReactNode/archive/refs/heads/master.zip

