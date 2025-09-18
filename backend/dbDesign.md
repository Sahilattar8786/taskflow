
organization 

organizationId   unique id
name      string
address   string
admin     [] uid
members   [] uid 

User -
   uid - unique Id for each user
   orgId - organization ID 
   name 
   email 
   password 
   tickets     []
   projects    []

project 
   projectId  id for project 
   name       string
   admin      []
   member     []   
   ticket     []

ticket  
   ticketId   id for ticket 
   projectId  id for project
   title      string 
   created at  date 
   ETA         date 
   repoter     uid 
   assignee    uid 
   status      [backlog,Inprogress,Waiting on Internal Team , Waiting on Customer , QA in Stagging , QA In Production, Done , closes or canceled]
   comments     []   

comments 
  commentId   id 
  ticketId    id 
  comment     []


