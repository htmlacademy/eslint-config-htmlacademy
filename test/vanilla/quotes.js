const template = 'Anything string';
const templateLiteralMultiline = `Anything
string`;
const templateLiteralInline = `This's a ${template}`;

throw new Error(template, templateLiteralMultiline, templateLiteralInline);
