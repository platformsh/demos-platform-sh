## General structure

* Each demo lives in the `demos` directory in a unique directory of its own.
* Each demo is a single index.html Reveal.js slideshow deck, plus an `assets` directory to hold images, videos, Asciinema scripts, etc.
* Start a new slide deck by copying an existing index.html file from another deck.
* Remember to update BOTH the <title> element in the header AND the <h1> tag on the first slide!


## Aciinema usage

To use Asciinema with this slide deck, please be aware of the following.

When recording:

* Your terminal window MUST be set to exactly 104 columns and 20 rows. It won't size properly otherwise.
* You MUST use the command `asciinema rec -i=2`.  That will automatically trim out any "dead time" longer than 2 seconds, and set the player to do the same by default.

Before using the cast script, the following changes MUST be made:

* At the very end of the file is a line (or multiple) for typing "exit".  It will look vaguely like `[19.479296, "o", "exit\r\n"]`.  Edit the last string (the value to enter) and change it to JUST `\r\n`, replacing whatever else is there.
* Use find/replace to change your shell prompt to whatever you want it to be for the script.  For example, Larry changes "crell@vulcan" to "mycomputer".  The same applies for paths.  (We should probably have some standard here.)
* Optionally, locate any long strings of stuff that you typed that are recorded as separate entries per character and change them to a single statement.  For example:

```
[4.694185, "o", "n"]
[4.815895, "o", "a"]
[4.875897, "o", "n"]
[4.974102, "o", "o"]
[5.19979, "o", " "]
[5.714635, "o", "m"]
[5.866537, "o", "o"]
[6.146299, "o", "ons/"]
[8.355977, "o", "v"]
[8.593624, "o", "iews.py "]
```

can be collapsed to:

```
[4.694185, "o", "nano moons/views.py"]
```

Which will cause the entire command to appear at once.  If so, give it the timestamp of the FIRST entry.  That way there will be at least a little delay (of no more than 2 seconds) after it's entered for the user to read it.

* Look for lines like `[19.531881, "o", "\b\u001b[K"]`.  That crazy string of characters is a backspace.  Remove those while folding commands together so you don't see mistakes in the final output.
* In most cases it will not be necessary to adjust timestamps (as any long delays will automatically be squished), but you can if you want to.

Place the file in the `assets` directory of the slideshow, named something appropriate.  In most cases it should be prefixed with a number to indicate its order in the slide deck, as should other assets.

When embedding the player into a slide:

* Use the following syntax: <asciinema-player src="images/size20x104.cast"></asciinema-player>
* Do NOT set a font size, preload, autoload, or anything else. It will be set automatically in Javascript.

