# Landing Page Component Challenge

### Project Overview

Welcome to the **Stoke Collage Landing Page Challenge!** In this project, we’ll be collaborating using Git, GitHub, and Next.js to build a simple landing page. Each student will be responsible for creating one of the eight components in the design. This will help you gain hands-on experience with:

✅ Git workflows (branching, pull requests, merging) <br>
✅ Collaborative coding & peer reviews<br>
✅ Building reusable React components in a modern web framework<br>


### Project Structure & Workflow

1. Clone this Repository – This repo contains the porject you will be working on ready for and set up for your contribution.
2. Create a Branch – Each student will create a new branch for their assigned component.
3. Build Your Component – Develop your assigned component inside the /components folder using React.
4. Submit a Pull Request (PR) – Once your component is ready, create a pull request to the main branch.
5. Peer Review & Merge – Another student will review your PR before it gets merged.


## Getting Started with GitHub Desktop

**GitHub Desktop** is a brilliant GUI for git work flows that helps you to manage repositories without using the command line.

1. Download and install[ GitHub Desktop](https://desktop.github.com/).
2. Clone the repository by clicking “File” → “Clone repository” and selecting the project from GitHub.
3. Create a new branch for your component by clicking “Current Branch” → “New Branch” and naming it (e.g., navigation).
4. Open your project in vs code and work on your branch.
5. You can associate your branch with the git hub issue in the issue itself: [Landing Page Issues](https://github.com/StarbotsCreativeLtd/Stoke-on-Trent-College/issues). This way when you create a pull request (PR) the issue will be linked and closed when your PR is merged with the main code base. 
6. Make your changes and commit them with a clear message from using VS codes built in version control features.
7. Click “Push origin” to upload your changes to GitHub.
8. Open a pull request (PR) on GitHub for review and merging.
## Getting Started with Git Using Terminal Commands

1. Clone the repo:
 ```
git clone <repo-url>
cd <project-folder>
```
2. Create a new branch:
```
git checkout -b navigation
```
3. Add and commit changes (see commit etiquette below):
```
git add .
git commit -m "feat: added Navigation component"
```
4. Push your branch to GitHub:
```
git push origin navigation
```
5. Open a pull request (PR) on GitHub.


## Commit Etiquette & Semantic Commit Messages

Good commit messages make collaboration easier. Use semantic commits to describe changes properly.

#### Commit Message Format:
```
<type>: <short description>
```
#### Common Commit Types:
- feat: – Adding a new feature (e.g., feat: added responsive navbar)
- fix: – Fixing a bug (e.g., fix: corrected form validation issue)
- refactor: – Code improvements that don’t change functionality
- style: – Formatting changes (e.g., indentation, missing semicolons)
- docs: – Documentation updates (e.g., README edits)
- chore: – Routine tasks like dependency updates

#### Example Commit Messages:

✅ feat: implemented FAQ accordion component <br>
✅ fix: resolved broken image in hero section <br>
✅ style: improved button spacing in footer <br>


#### Commit Best Practices:
- Keep messages concise but meaningful.
- Use present tense (add, not added).
- Group related changes into a single commit instead of many small ones.
- Push only completed work (avoid WIP commits unless necessary).


## Component Assignments

Each student will work on one of the following:
1. Navigation – A navigation system with open and closed states on both destop and mobile.
2. Hero Section – A welcome banner with text & an image.
3. Features – A section displaying key features with tabs/cards.
4. Testimonials – User reviews displayed in cards.
5. FAQs – A list of collapsible frequently asked questions.
6. Simple Contact – A form for users to enter their name, email, and message.
7. Footer – The bottom section with links and social media icons and a news letter sign up box.
8. Scroll Percentage Indicator – A progress bar that fills as the user scrolls down.

Each component in this project has been designed to have a similar level of complexity, ensuring a fair and balanced challenge for everyone. The main focus of this challenge is not to become a React expert but to **collaborate effectively, work in a team, and produce well-structured, maintainable code.** While each component will require at least one React hook and some may involve additional logic, the real goal is to practice good development workflows, peer reviewing, and writing clean, understandable code.

You’re encouraged to use resources like Stack Overflow, GPT, or documentation to help you along the way—just make sure you take the time to understand what’s happening in the code you write. Asking questions, discussing approaches with your teammates, and learning from each other is all part of the process. The challenge is about working together, not just coding alone!

## Learning Outcomes

By the end of this challenge, you’ll have:

✅ Experience using Git & GitHub collaboratively <br>
✅ A better understanding of Next.js & component-based development <br>
✅ Learned how to create & review pull requests <br>
✅ Improved commit habits for real-world projects <br>

## Code Etiquette & Working in a Team

When working as part of a development team, writing **consistent, readable, and maintainable code** is just as important as getting things to work. Good code etiquette helps ensure that everyone on the team can easily understand, review, and build upon each other’s work.

To achieve this, professional teams use tools like **ESLint and Prettier** to enforce coding standards and maintain a uniform style across the project. These tools help automate formatting, catch errors early, and reduce unnecessary changes in pull requests, making collaboration smoother.

Using **VS Code extensions** can also enhance **productivity** in many ways—whether it’s improving code formatting, providing intelligent autocompletions, or offering debugging assistance. By setting up the right extensions, you can save time and avoid common mistakes, allowing you to focus on solving problems rather than fixing syntax issues.

### VS Code Extensions to Install

✅ ESLint – Ensures consistent code quality and catches common issues.
🔗 [Install ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

✅ Prettier – Auto-formats your code to keep it clean and readable.
🔗 [Install Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

✅ Tailwind CSS IntelliSense – Provides autocompletion and syntax highlighting for Tailwind CSS.
🔗 [Install Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

✅ React & JSX Snippets – Helps speed up writing React components with useful snippets.
🔗 [Install React Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

### Recommended Settings for VS Code
1. Open VS Code settings (Cmd + , on Mac, Ctrl + , on Windows).
2. Search for Format on Save and enable it.
3. Search for Editor: Default Formatter, select Prettier - Code formatter.
4. You can find your settings json file by pressing CMD + SHIFT + P (CRTL + SHIFT + P for windows) and searching for settings - you will see "Open user settings (JSON) - Add this to your settings.json file for automatic linting:
```
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": [
    "source.formatDocument",
    "source.fixAll.eslint",
    "source.fixAll.stylelint"
  ]
```
If you don't already have a json object in your settings file then be sure to wrap this in curly braces like so : 
```
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": [
    "source.formatDocument",
    "source.fixAll.eslint",
    "source.fixAll.stylelint"
  ]
}
```
If a json object already exists add it in line inside the existing curly braces.

Heres a little video on some of the code config files you will see in the repo :  📽️ [Config Files](https://www.youtube.com/watch?v=14WanxTD2O4&t=89s)



## Installing Node

Next.js runs on Node.js, so make sure you have it installed.
If not installed, grab it from [Node.js official site](https://nodejs.org/).

We will also be using yarn as our package manager so once you have node installed run: 
```
npm install -g yarn
``` 
in the terminal to install yarn globally. 

## Starting the Dev server
Once you have cloned the project from GitHub and have Node and VScode set up you are ready to begin! <br>
Navigate to the projects root directory using cd <PATH> in the comand line. <br>
You can get the path from the GitHub GUI by right clicking on the current repository tab at the top and clicking copy repo path. 

To install the dependancies for this project run: 
``` 
yarn
```

in the terminal from within the projects root directory. This will install all the required packages for the project. 

Now you are now ready to run the dev server:
```
yarn dev
``` 
This will spin up a dev server and allow your browser to access the project via localhost:3000.

Next js renders the project live in the browser so now you can start building your components and see them update live in the dev server!


## First Steps

Inside your git issue you will see the top comment contains and overview of the desired outcomes with some information about how to attempt a solution. 
This will also include the acceptance criteria for the issue and whatever other relevant information is required.
I have created a file structure for this project with blank files ready for your components.
You will find your component file inside the `components` directory.

You can start coding right away and committing changes to your branch. Be sure to make your commits at what feels like a 'good place'. For example don't make a commit half way through defining a function. Finish what you are doing then make a commit. Even if what you have done doesn't work fully yet, its okay to commit. A completed attempt will help get better feedback or support than a half written ...

You are welcome to ask for support within your git issue. You can tag myself or your fellow students using @ followed by their username. 
Please feel free to ask for help if you get stuck or are unsure. 

Git messages are styled using markdown. Try to use this where you can to structure your git comments and pull requests. 🔗 [Markdown Cheat sheet](https://www.markdownguide.org/cheat-sheet/)

Once you have created a Pull request for your branch you can comment and provide feedback with using the same methods. 

If you have any questions feel free to @ me in your issue.

Happy coding. 🚀
