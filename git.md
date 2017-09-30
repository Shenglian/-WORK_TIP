# Git

## git branch 

* git branch -m <new-branch-name>

 (設置與遠端連結)
* git branch --set-upstream-to=<origin/dev>
or 
* git branch -u <origin/dev>

(取消與遠端連結)
* git branch --unset-upstream

## git push 

* git push origin :<branch-name> ( delete branch )

## git remote 

 (顯示目前 remote 分支的狀態)
* git remote show origin

## git tag 

* git push origin <tag_name>
* git push --tags (push all tags)


## git reset 

* git reset --hard HEAD~1 （）
> Careful: git reset --hard WILL DELETE YOUR WORKING DIRECTORY CHANGES. Be sure to stash any local changes you want to keep before running this comman（）