# Documentação
-> FRONTEND<-
/signup OK
 /user OK
 /company OK
/login OK
/profile
 /:username
  /edit
  /my-jobs
   /:id
/jobs OK
 :id OK
/company
 /:id
  /edit
  /jobs
   /:id
    /edit
    /dashboard

->BACKEND<-
[POST]: /users
[GET]: /users/:id
[PATCH]: /users/:id
[DELETE]: /users/:id

[POST]: /companies
[GET]: /companies/:id
[PATCH]: /companies/:id
[DELETE]: /companies/:id

[GET]: /jobs?company_id=number&user_id=number
[POST]: /jobs/:id
[GET]: /jobs/:id
[PATCH]: /jobs/:id
[DELETE]: /jobs/:id

[POST]: /login
