## Overview
![image](https://media.git.generalassemb.ly/user/24824/files/b63f4b80-5fa7-11ea-91c0-a66088b72e0c)

**ny knickstory** Fan Page for the NY Knicks basketball team; featuring stats, info, & photos. Users also can leave comments on the website.

### Permissions

Namelix; Google; Imgur 
<br>

## MVP

Allow Users to be able to view information on the New York Knicks and its Player's; as well as, post and store comments to the websites database (Non Real-time). 

<br>

### MVP Goals

- Build out a back-end server; to include instances of players, exposing RESTful JSON endpoints.
- Implement User Auth; implement full-CRUD through controller method's, to include (index, show, create, update, & delete) for all tables. ***** Users will be able to CREATE, READ, UPDATE, & DELETE their post.
- Have at least 8 separate, rendered components.
- Consume data from backend API, and render that data in into components. ***** User will be able to view information from database. 
- View Player and Team stats & info.

<br>

### MVP Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Will serve as the Front-end Framework for the application._ |
|   React Router   | _Provides routing functionality._ |
|      Axios       | _Used to send asynchronous HTTP request to REST endpoints and perform CRUD operations._ |
|      BCRYPT       | _Password hashing function._ |
|      Rails       | _Server-side framework authored with the Ruby language._ |
|      Bootstrap       | _Bootstrap is a free and open-source CSS framework ._ |


<br>

### MVP Client (Front End)

#### Wireframes

![image](https://media.git.generalassemb.ly/user/24824/files/9fa8ec80-5fc7-11ea-8db0-e68f2fc52162)


#### Component Hierarchy

![image](https://media.git.generalassemb.ly/user/24824/files/b995ff80-5fc6-11ea-9e34-2188dcc96c31)

#### Component Breakdown

|  Component   | State | Description                                                      |
| :----------: | :---: | :--------------------------------------------------------------- |
|    App.js    |   y   | _Will serve as the Initial file to app._               |
|  User Login  |   n   | _Will allow users to login for access to a personalized experience; as well as, access to the comments they post._       |
|   Gallery    |   n   | _The gallery will render photos of the New York Knicks._      |
| Player |   n   | _Will render the Navigation Bar & Blog Interface; as well as, individual player information and stats._                 |
|    Players    |   n   | _Will render the Navigation Bar & Blog Interface; as well as, a full list of the New York Knicks player roster._ |
|    Team    |   n   | _Will render the Navigation Bar & Blog Interface; as well as, New York Knicks team stats._ |
|    Homepage    |   n   | _Will render the Navigation Bar & Blog Interface; as well as, articles on news from the NBA._ |
|    Landing Page    |   n   | _Will serve as a Welcome Page and contain a link to access the site._ |
|    Navigation Bar    |   n   | _The Navigation Bar will contain links to the "Team", "Players", & "Gallery" routes._ |
|    Blog Interface    |   n   | _The Blog Interface will have an text-input field and a "submit" button._ |
|    Admin    |   n   | _Will allow user to delete and update post._ |



<br>

### MVP Server (Back End)

#### ERD Model

![image](https://media.git.generalassemb.ly/user/24824/files/72f0d700-5fbf-11ea-97ec-1f6ed166bfe2)

#### Endpoints

> Use this section to list a selection of your intended endpoints and their uses. Please list any and all custom-created endpoints.

- GET `/players`
	- Index route returning an array of all Players.
- GET `/player/:id`
	- Show route for a player requested by ID.
- GET `/blog_post`
	- Index route returning an array of all Post.
- GET `/blog_post/:id`
	- Show route for a Post requested by ID.
- POST `/blog_post`
	- Create route for a new Post.
- PUT `/blog_post/:id`
  	- Update a post by id.
- DELETE `/blog_post/:id`
  	- Delete a post by id.

<br>

***

## Planning

<br>

### Timeframes

| Task                | Priority | Estimated Time | Actual Time |
| ------------------- | :------: | :------------: | :---------: |
| Build out Back-End    |    H     |     5 hrs      |    5 hrs    |
| Create Create Seed data |    L     |     3 hrs      |     2 hrs     |
| Build out components |    H     |     6 hrs      |     7 hrs     |
| Create CRUD Actions (Front & Back End)  |    H     |     10 hrs      |     10 hrs     |
| Implement User Auth |    H     |     4 hrs      |     3 hrs     |
| Add Blog Interface    |    M     |     2 hrs      |    4 hrs    |
| Stlye/ CSS/ Structure |    H     |     8 hrs      |     10 hrs     |
| TOTAL               |          |     38 hrs      |     41 hrs     |

<br>

### Schedule

|  Day   | Deliverables                              |
| ------ | ----------------------------------------- |
|Mar 4th | Project proposal worksheet / psuedocoding |
|Mar 5th | Project proposal worksheet / psuedocoding |
|Mar 6th | Project pitch / build out endpoints       |
|Mar 6th | Build out back-end server and data        |
|Mar 7th | Build out front-end components            |
|Mar 8th | OFF
|Mar 9th | Impliment user auth                       |
|Mar 9th | Slight Styling                     	     |
|Mar 10th| MVP, begin post-MVP                       |
|Mar 11th| Post-MVP                                  |
|Mar 12th| Polishing                                 |
|Mar 13th| Final presentations                       |

<br>

***

## Post-MVP

- Create a LIVE Feed for post and comments. (Similar to Twitter)
- Expand the website to include additional NY teams.
- Continue Styling.
- Expand my Database and info stored.
- Implement an external API.
<br>

***

## Project Change Log

Due to time contraints, Photos, & Stats were temporarily ommited but all CRUD functionality, Auth, & Sign-up achieved.

## Code Showcase

<Container>
                        {this.state.posts.map((post, index) => (
                            <div
                                key={index}>

                                <div>
                                    <Link to={`/post_edit/${post.id}`}>Edit/Delete</Link>
                                    <p>
                                        - {post.post_text}
                                    </p>


                                </div>
                            </div>

                        ))}
</Container>

Mapped throught the array of Posts and assigned it to post... then wrapped them in "Link" tags that route to a specific "id".

## Code Issues & Resolutions

Looking forward; a little rusty with Routes and React, so I will have to be prepared to relearn as I go.

- Connecting CRUD functionality to the front-end. I utilized "Postman", "Rails S", & the console to troubleshoot and fix. 
***
