import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('index.html', () => {
    it('should have Users table', function (done) {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, (err, window) => {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal('Users');
            done();
            window.close();
        });
    });
});
