## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
Add the current content found in your working tree. The add command can be used multiple times before a commit. The add command adds the current content at the time the command is issued, therefore if addition content is added to the same file after the first add command, a subsequent add command will need to be run to have the new information added to the repository snapshot during the next commit. 


#### branch
The branch command can list the current branches in the repository, as well as create a new branch within the repository. 

#### checkout
The checkout command lets you switch to the specified branch, which will have been created using the branch command. When you checkout a branch the files in your working directory will be updated to reflect the content within that branch. 

#### clone
The clone command will copy a repository into a specified directory. 

#### commit
The commit command will record the changes to the repository that have been made using commands like add and rm.

#### fetch
The fetch command will import the commits from a remote repository into your local repository. These commits are not added to your normal branches, they are instead stored in remote branches and are not merged into your local branches. This allows you to view the commits that were made by other people prior to merging them into your local copy.  

#### log
The log command will show you a history of commits made in the current repository. 

#### merge
The merge command will incorporate the changes from two branches, since they seperated, into the current branch. The command will compare the two branches to see how they have diverged, it will then output a log message that details the changes along with the names of the two parent commits. 

#### pull
The pull command is a combination of fetch and merge. Pull fetches the changes from either a remote repository or a local branch and merges those changes into your current branch. 

#### push
The push command updates your remote repository with the changes that you have committed to your local repository. 

#### reset
The reset command will revert changes made in the repository by shifting where the HEAD points. This allows you to go back a version in the repository if you discovered that you did not want to make a certain commit. 

#### rm
The rm command removes files from a git repository. Once a file has been added to git, you will want to use the rm command instead of going into a folder and manually deleting the file, as git will consider the file missing if you delete it instead of removing.

#### status
The status command will tell you the differences in your repository since your last commit. It does this by indicating the differences in files already tracked by git in your repository since your last commit and also shows content in your repository that is not tracked by git.  

## Release 4: Git Workflow

- Push files to a remote repository
- Fetch changes
- Commit locally


- Push files to a remote repository
git add * or specific_filename.ext (* will add all files that have been modified from the current commit to the repository, whereas you can also add a specific file if that's all you want to add at the time)
git commit -m "Appropriate present tense message for what was accomplished"
git push


## Release 5: Errors you encountered
1. Error
2. Solution
3. Cause (explain the error)

## Release 6: Reflection


https://www.atlassian.com/git/tutorial/remote-repositories#!fetch

I found the tutorial at <a href="https://www.atlassian.com/git">atlassian.com/git</a> exceptionally useful for understanding what certain git commands actually do. 