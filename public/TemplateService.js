import * as Handlebars from 'handlebars';

export default class TemplateService {
    constructor(template) {
        this._template = Handlebars.compile(template);
    }

    generateMessage(variables) {
        return this._template(variables);
    }
}