# Overview
[TypeAI [typeai.org], Egotype, DebateType, Typerly, DebateIO, Wordial] is a online, multi-authoring, live editing, high performance, local storage, minimalistic text editor. Files are saved by default using the Markdown standard. It can be deployed locally, in a database, or on git. It has the ability to import and convert HTML, docx, pdf, txt, as well as other formats into the workspace.

The current options for word processing are too slow, expensive, and complex.

http://ricardo.ecn.wfu.edu/~cottrell/wp.html

[Ulysses](https://itunes.apple.com/us/story/id1440677467)

[iA Writer](https://itunes.apple.com/us/app/ia-writer/id775737590?mt=12)



Realtime collaborative Markdown Notes:

https://github.com/codimd/server / https://demo.codimd.org/



[List of HTML editors](https://en.wikipedia.org/wiki/List_of_HTML_editors)

[WYSIWYM](https://en.wikipedia.org/wiki/WYSIWYM)

[The Case for HTML Word Processors](https://www.adamhyde.net/html-word-processors/)

[Composer, a potential HTML based word processor](http://freesoftwaremagazine.com/articles/composer_potential_html_based_word_processor/)





[Is it possible to specify a starting number for an ordered list? - StackOverflow](https://stackoverflow.com/questions/779016/is-it-possible-to-specify-a-starting-number-for-an-ordered-list)



Micro Editor **GET IT NOW**

https://micro-editor.github.io/

https://www.reddit.com/r/linuxmemes/comments/foo2h2/linux_users_be_like/flhzguh/





Found this when looking for way to archive revision history. Way more helpful for this project:

http://features.jsomers.net/how-i-reverse-engineered-google-docs/

http://jsomers.net/blog/jimbopad

https://www.theatlantic.com/technology/archive/2010/12/the-simple-software-that-could-but-probably-wont-change-the-face-of-writing/68364/

https://www.theatlantic.com/science/archive/2018/04/the-scientific-paper-is-obsolete/556676/





Even simmilarer program. (Thanks Kevin for showing it to me)

(notion.so)[https://news.ycombinator.com/item?id=12796027]



use emacs? Maybe some hidden virtue. Lots of programers use it. emacs/org-mode

(Evernote Web Clipper)[https://chrome.google.com/webstore/detail/evernote-web-clipper/pioclpoplcdbaefihamjohnefbikjilc]



Wow. This is Epic. This might be the one boys. Sounds more simmilar than ever: https://stackedit.io

Very simmilar project: [https://github.com/ether/etherpad-lite](https://github.com/ether/etherpad-lite)

https://en.wikipedia.org/wiki/Etherpad

https://github.com/ether/ep_markdown

Ok they have officaly done everything. I should just modify this.

Use socket.io



Some one elses modification of Etherpad. Can use as reference. https://github.com/edy/SciFlowWriter



Etherpad Plugins: https://static.etherpad.org/plugins.html



Manual and Documentation:

http://etherpad.org/doc/v1.5.7/

http://etherpad.org/doc/v1.6.2/

Sample Wikipedia Pad: https://etherpad.wikimedia.org/p/K2TiFjtBPo



1/3/2021:

https://medium.com/usevim/collaborative-vim-f31f4d75d726

https://github.com/bwasti/vim-multiuser

https://github.com/Floobits/floobits-vim

https://github.com/FredKSchott/CoVim

https://github.com/guyzmo/vim-etherpad

https://github.com/LaKing/ep_codepad



2/2/2021:

[Visual Studio Live Share](https://visualstudio.microsoft.com/services/live-share/)





Alt Confluence Storage format: https://confluence.atlassian.com/doc/confluence-storage-format-790796544.html



https://colab.research.google.com

https://jupyter.org/



Github Has a markdown to html compiler in Readmes



https://docs.google.com/document/d/1BtXO-F2rGHQhmZ4knyGbmLV_-r5sUbXn2gQHQ9lE9yw/edit



How Git works:

https://stackoverflow.com/questions/8198105/how-does-git-store-files

https://try.github.io/

https://maryrosecook.com/blog/post/git-from-the-inside-out

https://medium.freecodecamp.org/understanding-git-for-real-by-exploring-the-git-directory-1e079c15b807




# Features
## Card Block Collapsibility



# Brainstorm

> HTML has a companion technology that does just the same thing – EPUB. EPUB is an ebook format which is also just a zip file. You can do the same trick to open an EPUB as you used to open a .docx file. So why not use EPUB as a local storage format for desktop word processing?
>
> ​	- [The Case for HTML Word Processors](https://www.adamhyde.net/html-word-processors/)

I can reference existing online word editors such as [Word Online](https://onedrive.live.com) and [Google Docs](https://docs.google.com). There is also a markdown formatting tool for websites that support rich editing like gmail called [Markdown Here](https://markdown-here.com). It's open source so it can be used as another reference.

Google Docs and Drive creators have a blog where they outline their approach: https://news.softpedia.com/news/Behind-the-Scenes-of-Google-Docs-Real-Time-Collaboration-Technology-157692.shtml

Look at the link they give. Change docs.googleblog.com to drive.googleblog.com and look around a bit to find a lot of stuff.

There would be a UI layer that uses HTML and CSS to display to the user. There is a live js converter between the UI and the markdown data. The Markdown is stored in database.



> The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client. When you build cross-platform apps with our iOS, Android, and JavaScript SDKs, all of your clients share one Realtime Database instance and automatically receive updates with the newest data.
>
> ​	- [Firebase Docs](https://firebase.google.com/docs/database/)



[Firebase PDF guide](https://www.tutorialspoint.com/firebase/firebase_tutorial.pdf)

This word processor is not intended to set formatting. It is designed to be a good place to record, share, collaborate, and manipulate ideas. Formatting is distracting from this intention. You can customize your view of content through themes and stuff, but the files you save are plain. This is inspired by other minimalistic customizable editor software like Atom and Typora.

https://abnerlee.github.io/typora/2015/03/11/why-typora/

I found out that other major word processor file formats are just zipped folders with different media types such as xml and png. Maybe I could do something like this where images and other media are included.

Should be really good at handling numbered and non numbered lists. Easily tab in and out of lists. Figure out how to go deeper than the supposed maximum of two spaces with markdown.

Quoted sections/ code blocks should be collapsable. The motivation of this is in debate rounds you read shortened or paraphrased quotes. Sometimes you must present the quote in its entireity. The ability to quickly be able to switch back and forth would be useful.



Combonation of best aspects of google docs edit history and git version control. Git is overarching system. Live editing and saving. Every edit is saved like google docs. Each edit gets a git version. Major changes can be saved through commits.



Google docs suggustions show up as usual. Identical github type issue is created tracking the suggustion. Github issue mechanics are applied.

Git has complete adabtability with issues permissions. Google docs only allows people with editing permission to make suggustions. The same people who can make suggustions can also accept them. This defeats the point of permissions.



Related Links to Git Google Docs:

https://community.rstudio.com/t/version-control-with-google-drive/4032/2

https://zapier.com/apps/github/integrations/google-docs

https://webapps.stackexchange.com/questions/25592/import-google-docs-document-revision-history-into-a-git-repository

https://github.com/max-barry/google-drive-cms



Drive API:

https://developers.google.com/drive/v2/reference/



This spooky boi made the exact thing I was thinking of using the exact same framework from aaron:

https://github.com/promptworks/gitdriver/commit/d246a76baf651df826df5f191d1e5afe05a5a695



https://stackoverflow.com/questions/25010369/wget-curl-large-file-from-google-drive

https://webapps.stackexchange.com/questions/91157/how-can-i-download-a-huge-folder-from-google-drive

DRIVE CLI THIS IS IT: https://github.com/odeke-em/drive





[GitHub Table of Contents markdown generator repo](https://github.com/ekalinin/github-markdown-toc)



Can save to .md (Standard markdown file. Media must be seperate.) or .mdx (MarkDownXtended). Custom flavored markdown. has media included. All content is zipped. .mdx is just a zip file like .docx.

# HTML formating



##Google Docs

This is copied from google docs, simplified, minimilized, then anotated.

All font is set in head. It is uniform.

```html
<div class="kix-paragraphrenderer"> <!--These are content blocks that have the same formatting; however there is no formating such as fontsize in markdown. The equivenent stylistic customization is code blocks, quotes, bold, link, etc. There would be a new content block with new styling whenever format changes occur. There are two levels of content blocks. One is by paragraph (general seperation of document. Could be returns or header changes or somthing else?) and the other by formatting such as bold, italisized, highlighted, etc. -->
	<div class="kix-lineview" style="height: 20px;">
		<div class="kix-lineview-content" style="">
            <span style="display: inline-block; height: 10000px"></span>
            <span style="display: inline-block; position:relative; top: -9985.92px;">
                <span class="goog-inline-block kix-lineview-text-block" style="width: 610px; ">
                    <span style="font-size:14.666666666666666px;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;" class="kix-wordhtmlgenerator-word-node">
                        Those born before 1938 have a normal retirement age of 65. Normal retirement age increases
                        <span class="goog-inline-block" style="width:4.0625px;height:17.599999999999998px">&nbsp;</span>
                    </span>
			</span>
			</span>
		</div>
	</div>
	<div class="kix-lineview" style="height: 20px; direction: ltr; text-align: left;">
		<div class="kix-lineview-content" style="user-select: none; margin-left: 0px; padding-top: 0px;"><span style="display: inline-block; height: 10000px"></span><span style="display: inline-block; position:relative; top: -9985.92px;"><span class="goog-inline-block kix-lineview-text-block" style="width: 622px; padding-left: 0px;"><span class="kix-wordhtmlgenerator-word-node" style="font-size:14.666666666666666px;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;">by two months for each ensuing year of birth until 1943, when it reaches 66 and stays at 66 until<span class="goog-inline-block" style="width:4.0625px;height:17.599999999999998px">&nbsp;</span></span>
			</span>
			</span>
		</div>
	</div>
	<div class="kix-lineview" style="height: 20px; direction: ltr; text-align: left;">
		<div class="kix-lineview-content" style="user-select: none; margin-left: 0px; padding-top: 0px;"><span style="display: inline-block; height: 10000px"></span><span style="display: inline-block; position:relative; top: -9985.92px;"><span class="goog-inline-block kix-lineview-text-block" style="width: 606px; padding-left: 0px;"><span class="kix-wordhtmlgenerator-word-node" style="font-size:14.666666666666666px;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;">1955. Thereafter the normal retirement age increases again by two months for each year until<span class="goog-inline-block" style="width:4.0625px;height:17.599999999999998px">&nbsp;</span></span>
			</span>
			</span>
		</div>
	</div>
	<div class="kix-lineview" style="height: 20px; direction: ltr; text-align: left;">
		<div class="kix-lineview-content" style="user-select: none; margin-left: 0px; padding-top: 0px;"><span style="display: inline-block; height: 10000px"></span><span style="display: inline-block; position:relative; top: -9985.92px;"><span class="goog-inline-block kix-lineview-text-block" style="width: 580px; padding-left: 0px;"><span class="kix-wordhtmlgenerator-word-node" style="font-size:14.666666666666666px;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;">1960, when normal retirement age is 67 and remains 67 for all individuals born thereafter.<span class="goog-inline-block" style="width:7.859375px;height:17.599999999999998px">&nbsp;</span></span>
			</span>
			</span>
		</div>
	</div>
</div>
```



Curser:

```html
<div class="kix-cursor docs-ui-unprintable" style="opacity: 0; left: 381px; top: 1551px;">
    <div class="kix-cursor-caret" style="border-color: rgb(0, 0, 0); height: 17.6px;"></div>
    <div class="kix-cursor-top" style="opacity: 0; display: none;"></div>
    <div class="kix-cursor-name" style="opacity: 0; display: none;"></div>
</div>
```



Look to gramarlys add-on editor for no-formatting word processor.



##Gmail Compose

This is copied from a sample message in gmail, simplified, minimilized, then anotated.

Gmail uses mixed [HTML Tables](https://www.w3schools.com/html/html_tables.asp) as the content area, likley because "They can contain all sorts of HTML elements; text, images, lists, other tables, etc.."

```html
<table cellpadding="0" class="cf An" id="undefined"> <!-- -->
    <tbody>
        <tr>
            <td class="Aq">&nbsp;</td>
            <td class="Ap">
                <div id="undefined" class="Ar As">
                    <div class="At">
                        <textarea id=":or" class="Ak aXjCH" style="" aria-label="Message Body" spellcheck="true" itacorner="6,7:1,1,0,0" tabindex="1" form="nosend">
                        </textarea>
                    </div>
                </div>
                <div id=":oq" class="Ar Au" style="display: block;">
                    <div id=":om" class="Am Al editable LW-avf" hidefocus="true" aria-label="Message Body" g_editable="true" role="textbox" aria-multiline="true" contenteditable="true" tabindex="1" itacorner="6,7:1,1,0,0" style="direction: ltr; min-height: 40px;" data-gramm_id=" <!-- Censored - Some kind of UUID --> " data-gramm="true" spellcheck="false" data-gramm_editor="true"> <!-- HAS CONTENT EDITABLE TAG -->
                        Hello <!-- Has space within content field indicating that it shares formatting-->
                        <b>bold</b> <!-- Does not have space within content field. Space character is default format indicated by &nbsp; -->
                        &nbsp;
                        <i>Ital </i> <!-- Has space within content field indicating that it shares formatting-->
                        <u>Under</u> <!-- Does not have space within content field. Space character is default format indicated by &nbsp; -->
                        &nbsp;
                        <font size="4">Large</font>
                        &nbsp;
                        <span style="background-color: rgb(255, 255, 0);">Yellow</span> <!-- Highlight uses span. Allows for multiple highlight colors. -->
                        <b class=""></b>
                    </div>
                </div>
            </td>
            <td class="Aq">&nbsp;</td>
        </tr>
    </tbody>
</table>
```



## Making content editable

<https://stackoverflow.com/questions/4457487/what-is-the-g-editable-attribute>
<https://www.w3schools.com/tags/att_global_contenteditable.asp>
<https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content>





[Mozilla web docs article on making content editable](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content)

[Spell Check tag for content editable w3 school](https://www.w3schools.com/tags/att_global_spellcheck.asp)

In above Gmail example contenteditable tag is present.

Google Docs has this in active elements but not page source. Maybe from JS?

```html
<html>
    <head>
        <style>
        </style>
    </head>
    <body spellcheck="false" role="textbox" aria-multiline="true" aria-label="Document content" contenteditable="true" style="background-color: transparent;"></body>
</html>
```



[Use EventListener as input for keys](https://stackoverflow.com/questions/4416505/how-to-take-keyboard-input-in-javascript)




I guess it can also do LaTaX:
$$
f^{-1}(x)=blah
$$
