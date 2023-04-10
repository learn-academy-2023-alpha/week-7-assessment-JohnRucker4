# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:
The name of the foreign key would be cohort_id, on the student model.  We can fix the mistake by adding columns then running a migration. 
Researched answer:
We can fix the mistake by opening Terminal and running $ rails generate migration add_columns_to_list.  We should see a file in the migrate folder.  If we select that migration file, we can add a column with - add_column :students, :integer, :cohort_id (cohort_id is the name of the foreign key.  It will be on the Student model because the students will need to be associated with the appropriate cohort).  Return to Terminal and run $ rails db:migrate.

2. Which RESTful routes must always be passed params? Why?

Your answer:
The RESTful routes that must be passed through params are Show (displaying a specific instance), Create (strong params require allowable data), Edit (editing the desired instance), Update (we need strong params to verify permissible data), and Destroy (pass through params for the desired instance).
Researched answer:
Show - In order to see the desired instance, we must issue a GET command with specified params.
Create - Using a POST request, Create uses strong params to issue specific requirements for the data to be considered valid and thereby, useable.  Without them, data submitted for instance creation could fall outside of intended program usage.
Edit - In order to edit a specific instance, we need to use a GET request and pass the appropriate params and id.
Update - We can update an instance with the PATCH/PUT request.  Strong params are needed in order to make sure only viable data is being utilized.
Destroy - A DELETE request, params allow for a specific instance to be removed.

3. Name three rails generator commands. What is created by each?

Your answer:
I can't remember at the moment, but I'll get back to you with what I find.
Researched answer:
The three rails generator commands are rails generate resource, rails generate model, and rails generate controller.

Rails generate resource is followed by attribute:datatype.  This will generate all of our requirements: a controller, RESTful routes, columns and the view folder.

Rails generate model is followed by the ModelName (in PascalCase) and attribute:datatype.  This will give us the model and desired attributes.

Rails generate controller is followed by ControllerName (PascalCase).  The controller acts as the brain.  It contains methods and logic that will dictate how the data is used and behaves.  In our Views folder, we can set a file with html.erb to display information to the user.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
Index - displays all of the instances for students

action: "POST" location: /students
Create - creates a new instance

action: "GET" location: /students/new
New - displays a new form for a new instance to be created

action: "GET" location: /students/2
Show - displays a specific instance using params

action: "GET" location: /students/2/edit
Edit - displays an edit form of a specific instance using params

action: "PATCH" location: /students/2
Update - updates the edit form of a specific instance using params

action: "DELETE" location: /students/2
Destroy - removes a specific instance using params

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I need to be able to see an index of all of the to-do items
2. As a user, I need to be able to interact with the indexed to-do items
3. As a user, I need to be able to display a specified item of the to-do list
4. As a user, I need to be able to create a new to-do item
5. As a user, I need to be able to see a form to create a new to-do item
6. As a user, I need to be able to input data into a form to create a new to-do item
7. As a user, I need to be able to update an existing to-do item
8. As a user, I need to be able to delete an existing to-do item
9. As a user, I need programming in place that won't allow me to  input data that is not valid
10. As a user, I need to be able to navigate from page to page without having to manually input the necessary info in the browser bar