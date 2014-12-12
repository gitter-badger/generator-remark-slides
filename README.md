# generator-remark-slides [![Build Status](https://secure.travis-ci.org/rasjani/generator-remark-slides.png?branch=master)](https://travis-ci.org/rasjani/generator-remark-slides)

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/rasjani/generator-remark-slides?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Remark Slides generator creates a fully working skeleton of creating
slideshows that run in webbrowser by editing just a markdown formatted file.

## Installation

To install `generator-remark-slide` from npm, run:

```bash
npm install -g generator-remark-slides
```

Or to install it from github directly:

```bash
git clone https://github.com/rasjani/generator-remark-slides.git
cd generator-remark-slides
sudo npm link
```

Finally, initiate the generator:

```bash
yo remark-slides
```

And answer couple of questions.

## Usage:

* edit your markdown file
* (optional) edit css file
* (optional) edit template file
* and finally run following command and your slides should be found under
  dist/index.html

```bash
grunt
```
* your slides are now in dist/index.html


## More info about writing slides:

* https://github.com/gnab/remark
* https://github.com/gnab/remark/wiki

## License

MIT
