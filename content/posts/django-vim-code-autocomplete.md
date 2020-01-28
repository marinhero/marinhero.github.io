---
author: Marin
comments: false
date: 2013-09-08 20:12:39+00:00
layout: post
link: http://marinhero.com/django-vim-code-autocomplete/
slug: django-vim-code-autocomplete
title: Django-Vim code autocomplete
wordpress_id: 7
categories:
- Code
tags:
- code
- django
- python
- tip
- vim
---

Recently I came back to Django development and after a year my set of tools had change a lot. Mainly because vim became my main text editor.

The following lines of code will turn vim into a more powerful tool to work with Django and Python, place them inside your `.vimrc`:

```vim
    "--ENABLE PYTHON/DJANGO OMNICOMPLETE

    filetype plugin on
    set omnifunc=syntaxcomplete#Complete
    autocmd FileType python set omnifunc=pythoncomplete#Complete
    autocmd FileType javascript set omnifunc=javascriptcomplete#CompleteJS
    autocmd FileType html set omnifunc=htmlcomplete#CompleteTags
    autocmd FileType css set omnifunc=csscomplete#CompleteCSS

    "--SuperTab Integration
    set completeopt-=previewtj
    let g:SuperTabDefaultCompletionType = ""
    let g:SuperTabDefaultCompletionType = "context"
```

First lines are activating the Omni Completion feature of Vim for those type of files and the last lines reference [Super Tab](https://github.com/ervandew/supertab) which installed as a plugin.

Now we will define a wrapper, paste this lines inside a file called djvim (DON'T FORGET TO MODIFY YOUR PROJECT PATH):

```bash
    PROJECT_PATH="/home/marin/Code"
    if [ $# -eq 2 ]
    then
            export PYTHONPATH="$PROJECT_PATH/$1"
            export DJANGO_SETTINGS_MODULE=$1.settings
            vim $2
    else
            echo "Usage: djvim [Project] [File]"
    fi
```

then make the file executable and move it to your /bin folder, that will do the trick. Test djvim with:


```bash
    user@machine:$ djvim myproject models.py
```

and inside Vim type:

```vim
:python from django import db
```

Then test the autocomplete with some functions, launch it with the Tab key.
