# UTF-8 file checker
Check if a file is valid UTF-8. If it's not, it will shown the line of the invalid character. Has a dependency on `iconv` so make sure you have it installed. Will only try to convert `*.txt` in the directory you specify

### Installation

`npm install -g utf8-check`

### Usage

Current directory:

```
utf8-check .
```

Somewhere else:

```
utf8-check ../directory
```

