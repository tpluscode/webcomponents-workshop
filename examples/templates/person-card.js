var importDoc = document.currentScript.ownerDocument;
var PersonCard = Object.create(HTMLElement.prototype);

PersonCard.attachedCallback = function() {
    var firstName = this.getAttribute('firstName');
    var lastName = this.getAttribute('lastName');
    var position = this.getAttribute('position');
    var company = this.getAttribute('company');
    var twitter = this.getAttribute('twitter');
    var gravatar = 'http://www.gravatar.com/avatar/' + CryptoJS.MD5(this.getAttribute('email'));

    var template = importDoc.querySelector('#person-card-template');
    var content = document.importNode(template.content, true);
    content.querySelector('#person-card img').src = gravatar;
    content.querySelector('#person-card img').alt += firstName + ' ' + lastName;
    content.querySelector('#person-card .firstName').innerText = firstName;
    content.querySelector('#person-card .lastName').innerText = lastName;
    content.querySelector('#person-card .position').innerText = position;
    content.querySelector('#person-card .company').innerText = company;
    content.querySelector('#person-card a').innerText = '@' + twitter;
    content.querySelector('#person-card a').href = 'http://twitter.com/' + twitter;

    this.appendChild(content);
};

document.registerElement('person-card', {
    prototype: PersonCard
});