(function(document) {

    var PersonCard = Object.create(HTMLElement.prototype);

    PersonCard.attachedCallback = function() {
        var firstName = this.getAttribute('firstName');
        var lastName = this.getAttribute('lastName');
        var position = this.getAttribute('position');
        var company = this.getAttribute('company');
        var twitter = this.getAttribute('twitter');
        var gravatar = 'http://www.gravatar.com/avatar/' + CryptoJS.MD5(this.getAttribute('email'));

        this.innerHTML = '<div id="person-card"> \
          <img id="gravatar" src="' + gravatar + '" alt="Gravatar of ' + firstName + ' ' + lastName + '"> \
          <h2> \
            <span class="firstName">' + firstName + '</span> <span class="lastName">' + lastName + '</span> \
          </h2> \
          <h3>' + position + ' @ ' + company + '</h3> \
          <a href="http://twitter.com/' + twitter + '>@' + twitter + '</a> \
      </div>';
    };

    document.registerElement('person-card', {
        prototype: PersonCard
    });

})(document);