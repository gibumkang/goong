Versatile and simple menu management application, built on nextjs and strapi.

**Quick-tip:** When you encounter graphql errors, try to see the error log by running:

```js
console.log(JSON.stringify(error, null, 2))
```

Strapi must be hosted on heroku. The application runs best when the database is configured with postgresql. Once the data is set up with pg, you can begin setting up the backend. Review the current setup with Goong, as that is a good baseline to set up future projects.

The frontend should be hosted on vercel. Deployment on vercel is pretty straightforward. This repo is set up to host different branches but it seems like only the master branch can be deployed on vercel. That means future projects must be pushed to the repo on separate branches (For version control purposes) and ultimate merged back into branch.
