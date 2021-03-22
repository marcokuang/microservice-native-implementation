# Blog web application with microservice architecture
This is a native/simple implementation by hand to set up a microservice architecture for an application.

It has a client web app written in React to connect to the APIs to publish blogs and comments of individual blogs.

The services has the following microservices:
* Event-bus service - act as a event bus for communication purpose
* Posts - host the posts
* Comments - host all the comments for the posts
* Moderation - add-.on service that modifies/filter the data
* Query - add-on service that provide query functionality

It can be deployed in Docker containers and managed by Kubernetes, the infra directory has all the config files