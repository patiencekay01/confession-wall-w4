Introduction
An interactive guestbook where users can anonymously publish their confessions, incorporating aspects of Node.js, Express, PostgreSQL, and Vite.

Reflection
In comparison to the other projects, this one was much easier to setup. However, it was highly prone to error messages. I learned the hard way that having a chronological process is crucial, as I initially tried to git add, commit, and push before there was any data to track, which of course triggered some errors.

In addition to this, I later realised that I had created my Vite client inside an existing client folder, which cause my ‘npm run dev’ command to not run initially. I felt that the risk of losing all of my work was much greater than the need to delete this extra file, so I worked from inside this client file instead.

By far, debugging was the most exhausting part of this project. Fixing one error often triggered another, especially in managing variable names, pluralisation, and consistency across server, client and other databases. Furthermore, I often mixed-up which dependencies belonged to either the client or server. Small grammar and spelling errors resulted in multiple bugs, again, highlighting the importance of consistency and accuracy.

When deploying, I ran into a further issue, caused by the earlier double client issue. Render encountered an error because it could not find the files where it expected them to be. After some research, I did manage to resolve this but all of the css styling was lost.

Conclusion
This project was a great exercise in debugging, managing multiple systems and the mechanisms of the front-end and back-end. While it was frustrating at times, I have gained a deeper understanding of full-stack workflow, the independence of client and server, and the importance of adhering to a careful plan. With more practice, I’m confident 
