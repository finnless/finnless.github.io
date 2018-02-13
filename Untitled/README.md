# Overview
[TypeAI, Egotype, DebateType, Typerly, DebateIO, Wordial] is a online, multi-authoring, live editing, high performance, local storage, minimalistic text editor. Files are saved by default using the Markdown standard. It can be deployed locally, in a database, or on git. It has the ability to import and convert HTML, docx, pdf, txt, as well as other formats into the workspace.

The current options for word processing are too slow, expensive, and complex.


# Features
## Card Block Collapsibility



# Brainstorm

> HTML has a companion technology that does just the same thing – EPUB. EPUB is an ebook format which is also just a zip file. You can do the same trick to open an EPUB as you used to open a .docx file. So why not use EPUB as a local storage format for desktop word processing?
>
> ​	- [The Case for HTML Word Processors](https://www.adamhyde.net/html-word-processors/)

I can reference existing online word editors such as [Word Online](https://onedrive.live.com) and [Google Docs](https://docs.google.com).

There would be a UI layer that uses HTML and CSS to display to the user. There is a live js converter between the UI and the markdown data. The Markdown is stored in database.



> The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client. When you build cross-platform apps with our iOS, Android, and JavaScript SDKs, all of your clients share one Realtime Database instance and automatically receive updates with the newest data.
>
> ​	- [Firebase Docs](https://firebase.google.com/docs/database/)



This word processor is not intended to set formatting. It is designed to be a good place to record, share, collaborate, and manipulate ideas. Formatting is distracting from this intention. You can customize your view of content through themes and stuff, but the files you save are plain. This is inspired by other minimalistic customizable editor software like Atom and Typora.

I found out that other major word processor file formats are just zipped folders with different media types such as xml and png. Maybe I could do something like this where images and other media are included.

Should be really good at handling numbered and non numbered lists. Easily tab in and out of lists. Figure out how to go deeper than the supposed maximum of two spaces with markdown.

Quoted sections/ code blocks should be collapsable. The motivation of this is in debate rounds you read shortened or paraphrased quotes. Sometimes you must present the quote in its entireity. The ability to quickly be able to switch back and forth would be useful.



# HTML formating

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
