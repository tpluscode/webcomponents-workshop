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
    template.content.querySelector('#person-card img').src = gravatar;
    template.content.querySelector('#person-card img').alt += firstName + ' ' + lastName;
    template.content.querySelector('#person-card .firstName').innerText = firstName;
    template.content.querySelector('#person-card .lastName').innerText = lastName;
    template.content.querySelector('#person-card .position').innerText = position;
    template.content.querySelector('#person-card .company').innerText = company;
    template.content.querySelector('#person-card a').innerText = '@' + twitter;
    template.content.querySelector('#person-card a').href = 'http://twitter.com/' + twitter;

    var shadowRoot = this.createShadowRoot();

    shadowRoot.appendChild(document.importNode(template.content, true));
};

document.registerElement('person-card', {
    prototype: PersonCard
});