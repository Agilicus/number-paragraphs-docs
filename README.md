## number-paragraphs-docs

Auto-number paragraphs in Google Docs, as required by US Patent Office.

Given a document of

```
Heading A

para 1 ...

para 2

Heading B
```

Will become:

```
Heading A

[0001] para 1 ...

[0002] para 2 ...

Heading B
```

## Install

1. Open your document > Tools > Script editor...
2. Start a blank project
3. Paste the code from the `code.gs` file and save
4. Select Run > onOpen and authorise the script for the first time
5. Select Run > onOpen
5. Change to your Document and try the functions on the Paragraph tools custom menu created.

